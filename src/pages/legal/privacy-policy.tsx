import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Policy = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Privacy Policy | GarbhaGudi IVF Centre</title>
        <meta name='title' content='Privacy Policy | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content="Explore GarbhaGudi's Privacy Policy to understand how we safeguard your personal information and maintain transparency in our data practices."
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Privacy Policy | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content="Explore GarbhaGudi's Privacy Policy to understand how we safeguard your personal information and maintain transparency in our data practices."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Home | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content="Explore GarbhaGudi's Privacy Policy to understand how we safeguard your personal information and maintain transparency in our data practices."
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <BreadCrumbs
        text1='Legal'
        link1='/#footer'
        text2='Privacy Policy'
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
                Privacy Policy
              </span>
            </h1>
            <p className='text-gray-00 mt-8 font-content text-xl leading-8'>
              This privacy policy sets out how we use and protect any information that you give us
              when you use this website. We are committed to ensuring that your privacy is
              protected. Should we ask you to provide certain information by which you can be
              identified when using this website, then you can be assured that it will only be used
              in accordance with this privacy statement. We may change this policy from time to time
              by updating this page. You should check this page from time to time to ensure that you
              are happy with any changes. This policy is effective from 3rd Dec 2019
            </p>

            <div className='mx-auto mt-6 max-w-7xl text-gray-800'>
              <span className='mt-2 block text-left font-heading text-3xl font-extrabold leading-8 tracking-tight text-gray-900 underline underline-offset-4 sm:text-2xl'>
                Security
              </span>
              <p className='mt-4 font-content text-lg'>
                We are committed to ensuring that your information is secure. In order to prevent
                unauthorised access or disclosure, we have put in place suitable physical,
                electronic and managerial procedures to safeguard and secure the information we
                collect online.
              </p>
              <span className='mt-4 block text-left font-heading text-3xl font-extrabold leading-8 tracking-tight text-gray-900 underline underline-offset-4 sm:text-2xl'>
                Links to other websites
              </span>
              <p className='mt-4 font-content text-lg'>
                Our website may contain links to other websites of interest. However, once you have
                used these links to leave our site, you should note that we do not have any control
                over that other website. Therefore, we cannot be responsible for the protection and
                privacy of any information which you provide whilst visiting such sites and such
                sites are not governed by this privacy statement. You should exercise caution and
                look at the privacy statement applicable to the website in question.
              </p>
              <span className='mt-4 block text-left font-heading text-3xl font-extrabold leading-8 tracking-tight text-gray-900 underline underline-offset-4 sm:text-2xl'>
                Controlling your personal information
              </span>
              <p className='mt-4 font-content text-lg'>
                If you have previously agreed to us using your personal information for direct
                marketing purposes, you may change your mind at any time by writing to or emailing
                us at{' '}
                <a href='mailto:info@garbhagudi.com' className='text-purple-600 underline'>
                  info@garbhagudi.com
                </a>
              </p>
              <span className='mt-4 block text-left font-heading text-3xl font-extrabold leading-8 tracking-tight text-gray-900 underline underline-offset-4 sm:text-2xl'>
                Taking care of your Password/s (Password security)
              </span>
              <p className='mt-4 font-content text-lg'>
                We firmly believe in protecting the personal information of the customer. We or any
                of its staff or official will never ask for any password or related information from
                its customers and the customers are also advised, in order to protect access to
                their accounts and to other channels, do not disclose the passwords to anyone.We
                will not sell, distribute or lease your personal information to third parties unless
                we have your permission or are required by law to do so. We may use your personal
                information to send you promotional information about third parties which we think
                you may find interesting if you tell us that you wish this to happen. We undertake
                not to disclose the information provided by the customer to any person unless such
                action is necessary to the extent required by law and for regulatory purposes. If
                you believe that any information we are holding on you is incorrect or incomplete,
                please write to or email us as soon as possible, at the above address. We will
                promptly correct any information found to be incorrect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default Policy;
