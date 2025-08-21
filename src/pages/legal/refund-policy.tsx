import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Refund = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Cancellation &amp; Refund Policy | GarbhaGudi IVF Centre</title>
        <meta name='title' content='Cancellation &amp; Refund Policy | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content="Learn about GarbhaGudi IVF Centre's refund policy for treatments & services. Clear, transparent guidelines to ensure your peace of mind. Read now!"
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Privacy Policy | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content="Learn about GarbhaGudi IVF Centre's refund policy for treatments & services. Clear, transparent guidelines to ensure your peace of mind. Read now!"
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Cancellation &amp; Refund Policy | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content="Learn about GarbhaGudi IVF Centre's refund policy for treatments & services. Clear, transparent guidelines to ensure your peace of mind. Read now!"
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <BreadCrumbs
        text1='Legal'
        link1='/#footer'
        text2='Cancellation & Refund Policy'
        link2='#'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className='relative overflow-hidden bg-white py-8'>
        <div className='hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full'>
          <div className='relative mx-auto h-full max-w-prose text-lg' aria-hidden='true'>
            <svg
              className='absolute left-full top-12 translate-x-32 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
            </svg>
            <svg
              className='absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
            </svg>
            <svg
              className='absolute bottom-12 left-full translate-x-32 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='d3eb07ae-5182-43e6-857d-35c643af9034'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)' />
            </svg>
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl text-lg'>
            <h1>
              <span className='mt-2 block text-center font-heading text-3xl font-extrabold leading-8 tracking-tight text-gray-800 underline underline-offset-4 sm:text-4xl'>
                Cancellation &amp; Refund Policy
              </span>
            </h1>
            <p className='text-gray-00 mt-8 font-content text-xl leading-8'>
              GarbhaGudi IVF believes in helping its patients as far as possible and has a liberal
              cancellation policy for consultation booked online.
            </p>

            <div className='mx-auto mt-6 max-w-7xl text-gray-800'>
              <span className='mt-2 block text-center font-heading text-3xl font-extrabold leading-8 tracking-tight text-gray-900 underline underline-offset-4 sm:text-4xl'>
                Under this policy
              </span>
              <p className='mt-4 font-content text-lg'>
                Cancellations are into consideration only if our doctors have cancelled the
                consultation. There will be no refund for cancellation if it comes from the other
                end (patients). Refund for Cancellations is not applicable for the consultation
                services obtained on special occasions like Holi, Diwali, Valentine’s Day etc.
                Cancellations are not possible for these appointments however, you can reschedule
                the appointments to a desired future date and avail the benefit for payment done.
              </p>
              <p className='mt-4 font-content text-lg'>
                In case one feels that the consultation services received is not as shown on the
                website, one must bring it to the notice of our customer service within 24 hours
                after making the appointment and payment online. The concerned team will look into
                your complaint and will take an appropriate decision after validating the case;
                however, no refund will be provided in case of dissatisfactory consultation
                experience.
              </p>
              <p className='mt-4 font-content text-lg'>
                Auto-refunds to your account are not there. You will have to request (within seven
                days of cancellation) a Refund using our Contact Page. The Refund shall be processed
                within 7 working days as it involves bank transactions. Refund amounts to deduction
                of bank charges any.
              </p>
              <p className='mt-4 font-content text-lg'>
                It will be our earnest attempt to respond to your online query or online
                consultation request within the stipulated time frame of three Working days. But in
                case you do not receive any communication (auto-generated email is not a form of
                communication) from the Clinic, one is eligible for a Refund OR Cancel the Request,
                whichever is applicable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default Refund;
