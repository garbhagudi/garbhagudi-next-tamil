import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, body }: Props) {
  return (
    <div>
      <p className='mb-2 font-ui text-[11px] font-semibold uppercase tracking-[0.12em] text-saffron'>
        {eyebrow}
      </p>
      <h2 className='mb-4 font-serif-tamil text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.35] text-charcoal'>
        {title}
      </h2>
      {body && (
        <p className='max-w-[600px] font-sans-tamil text-[15px] leading-[1.75] text-muted'>
          {body}
        </p>
      )}
    </div>
  );
}
