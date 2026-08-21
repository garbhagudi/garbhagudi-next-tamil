import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
  from,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';

/**
 * Hygraph rejects requests beyond ~5 simultaneous in-flight uncached queries with a 429.
 * Sustained throughput is fine — measured 30 distinct cache-miss queries serially at
 * ~4 req/s with zero failures, while 20 fired concurrently returned 11x 429. So the limit
 * to respect is concurrency, not rate.
 *
 * Scope of this gate — narrower than it looks. Next's server build bundles this module
 * into each page bundle rather than a shared chunk (verified: `jitter` and
 * `InMemoryCache` appear once per file across .next/server/pages/*), so `inFlight` below
 * is per-page, not global. Since every page currently issues exactly one query, this gate
 * does NOT meaningfully bound build concurrency today — `staticGenerationMaxConcurrency`
 * in next.config.mjs is what does that, and it is the setting to change.
 *
 * What the gate is still good for: a single page that fans out several queries at once
 * (e.g. Promise.all in getStaticProps) stays bounded. Do not rely on it to backstop a
 * raised `staticGenerationMaxConcurrency` — it won't.
 *
 * It also does nothing for ISR revalidation on Vercel, where each serverless instance is
 * its own process. The retry link below is the only thing protecting that path.
 */
const MAX_IN_FLIGHT = 4;

const createConcurrencyLink = (limit: number) => {
  let inFlight = 0;
  const queue: (() => void)[] = [];

  const pump = () => {
    if (inFlight >= limit) return;
    const task = queue.shift();
    if (!task) return;
    inFlight += 1;
    task();
  };

  return new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let subscription: ReturnType<ReturnType<typeof forward>['subscribe']>;
        let started = false;
        let settled = false;

        const settle = () => {
          if (settled) return;
          settled = true;
          inFlight -= 1;
          pump();
        };

        const task = () => {
          started = true;
          subscription = forward(operation).subscribe({
            next: (result) => observer.next(result),
            error: (error) => {
              settle();
              observer.error(error);
            },
            complete: () => {
              settle();
              observer.complete();
            },
          });
        };

        queue.push(task);
        pump();

        return () => {
          if (subscription) subscription.unsubscribe();
          if (started) {
            settle();
            return;
          }
          // Cancelled while still queued: it never took a slot, so don't release one.
          const queued = queue.indexOf(task);
          if (queued !== -1) queue.splice(queued, 1);
        };
      })
  );
};

/**
 * Makes a 429 non-fatal. Without this, a single rate-limited query throws out of
 * getStaticProps and fails the whole build with a prerender error.
 *
 * Hygraph sends no `retry-after` and no `x-ratelimit-*` headers on a 429, so the backoff
 * schedule is ours to pick. The limit is concurrency-based and clears in well under a
 * second, so 500ms exponential with jitter is ample.
 *
 * `max` counts the initial attempt, so 5 means 1 try + 4 retries (~7.5s worst case).
 * Only network-level errors reach retryIf — GraphQL errors in a 200 response arrive via
 * `next`, not `error`, so they are never retried.
 */
const retryLink = new RetryLink({
  delay: { initial: 500, max: 10000, jitter: true },
  attempts: {
    max: 5,
    retryIf: (error) => {
      const status = error?.statusCode ?? error?.response?.status;
      if (status === 429) return true;
      if (status >= 500 && status < 600) return true;
      // No status at all means a transport failure (ECONNRESET, socket hang up, DNS).
      return status === undefined;
    },
  },
});

const httpLink = new HttpLink({
  uri: process.env.ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
  },
});

// Order matters: retry must sit OUTSIDE the concurrency gate. Reversed, a backing-off
// request would hold its slot for the whole delay and stall throughput to zero.
const apolloClient = new ApolloClient({
  link: from([retryLink, createConcurrencyLink(MAX_IN_FLIGHT), httpLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
