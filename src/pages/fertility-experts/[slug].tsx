import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });
export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        doctor(where: { slug: $slug }) {
          id
          name
          metaTitle
          location {
            title
          }
          bio {
            raw
            text
          }
          slug
          languages
          image {
            url
          }
          qualification
          designation
          medicalRegNo
          bookAnAppointment
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  if (data?.error || !data.doctor) {
    return {
      redirect: {
        destination: '/fertility-experts',
        permanent: true,
      },
    };
  }
  return {
    props: {
      doctor: data.doctor,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors {
          slug
          name
        }
      }
    `,
  });

  return {
    paths: data.doctors.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

const Doctor = ({ doctor }) => {
  const router = useRouter();
  const defaultMetaTile = `${doctor?.name} | ${doctor?.designation} | ${doctor?.location} | GarbhaGudi `;
  function addDocJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "${doctor?.name}",
        "url": "https://garbhagudi.com/fertility-experts/${doctor?.slug}",
        "image": "${doctor?.image?.url}",
        "jobTitle": "${doctor?.designation}",
        "worksFor": {
          "@type": "Organization",
          "name": "GarbhaGudi IVF Centre"
        }
      }`,
    };
  }

  if (router.isFallback) {
    return (
      <div className='text-content flex h-screen animate-ping items-center justify-center text-brandPink'>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='preload' href={doctor?.image?.url} as='image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{doctor?.metaTitle || defaultMetaTile}</title>
        <meta name='title' content={doctor?.metaTitle || defaultMetaTile} />
        <meta name='description' content={doctor?.bio?.text.slice(0, 160)} />

        {/* Ld+JSON Data */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addDocJsonLd()}
          key='org-jsonld'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={doctor?.metaTitle || defaultMetaTile} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={doctor?.bio?.text.slice(0, 160)} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={doctor?.image.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={doctor?.metaTitle || defaultMetaTile} />
        <meta name='twitter:description' content={doctor?.bio?.text.slice(0, 160)} />
        <meta name='twitter:image' content={doctor?.image.url} />
      </Head>
      <BreadCrumbs
        text1={'Our Fertility Experts'}
        link1='/fertility-experts'
        text2={doctor?.name}
        link2='#'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <main className='profile-page'>
        <section className='relative block' style={{ height: '500px' }}>
          <div
            className='absolute top-0 h-full w-full bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1643286880/Banner/Behind_Doctors_fssazq.webp')",
            }}
          >
            <span
              id='blackOverlay'
              className='absolute h-full w-full bg-black opacity-30 dark:opacity-70'
            ></span>
          </div>
          <div
            className='pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden'
            style={{ height: '70px' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='fill-current text-gray-300 dark:text-gray-700'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </section>
        <section className='relative bg-gray-300 py-16 dark:bg-gray-700'>
          <div className='container mx-auto md:px-4'>
            <div className='relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl dark:bg-gray-800'>
              <div className='px-2 md:px-6' key={doctor.id}>
                <div className='flex flex-wrap justify-center'>
                  <div className='flex w-full justify-center px-4 lg:order-2 lg:w-3/12'>
                    <div className='relative'>
                      <Image
                        width={340}
                        height={340}
                        alt={doctor.name}
                        src={doctor.image.url}
                        className='-m-16 -ml-20 -mt-44 mb-4 h-auto max-w-xs rounded-full border-none bg-gray-300/30 align-middle shadow-xl dark:bg-gray-600 lg:-ml-16'
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-12 text-center font-content'>
                  <h1 className='mb-2 text-4xl font-semibold leading-normal text-gray-800 dark:text-gray-200'>
                    {doctor.name}
                  </h1>
                  <div className='textbrantext-brandPink2 mb-2 mt-0 text-xl font-bold leading-normal'>
                    {doctor.qualification}
                  </div>
                  <div className='mb-2 text-gray-800 dark:text-gray-200'>{doctor.designation}</div>
                  {doctor?.medicalRegNo && (
                    <div className='mb-2 text-gray-800 dark:text-gray-200'>
                      Medical Registration Number (KMC) :{' '}
                      <span className='font-bold underline'>{doctor?.medicalRegNo}</span>
                    </div>
                  )}
                  {doctor?.languages && (
                    <div className='mb-2 text-gray-800 dark:text-gray-200'>
                      Languages Known :{' '}
                      <span className='font-bold underline'>{doctor?.languages}</span>
                    </div>
                  )}
                  <div>
                    <button className='mt-6 rounded-md bg-brandPink px-4 py-2 font-content font-bold text-white hover:bg-brandPink3'>
                      <a href='tel:+919108910832' hrefLang='en-us'>
                        Give us a Call
                      </a>
                    </button>
                  </div>
                </div>
                <div className='mt-10 border-t border-gray-300 py-10'>
                  <div className='flex flex-col items-center justify-center gap-y-2'>
                    <div className='w-full px-4 lg:w-9/12'>
                      <h2 className='text-2xl font-bold'>{`About ${doctor?.name}`}</h2>
                      <div className='prose mb-4 text-justify text-gray-800 dark:text-gray-200'>
                        <RichText
                          content={doctor?.bio?.raw?.children}
                          renderers={{
                            p: ({ children }) => <p className='text-justify'>{children}</p>,
                            a: ({ children, href }) => (
                              <a href={href} className='text-gg-500 underline'>
                                {children}
                              </a>
                            ),
                          }}
                        />
                      </div>
                    </div>
                    <Share pinmedia={doctor?.image?.url} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Cta />
    </div>
  );
};

export default Doctor;
