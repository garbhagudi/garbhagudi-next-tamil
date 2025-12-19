import Link from 'next/link';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';

interface Article {
  articles: {
    articleType: string;
    icon: {
      url: string;
    };
    image: {
      url: string;
    };
    slug: string;
    id: string;
    title: string;
  }[];
}

const IndexPage = ({ articles }: Article) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>கருவுறுதல் ஆலோசகர்கள்</title>
        <meta name='title' content='கருவுறுதல் ஆலோசகர்கள்' />
        <meta
          name='description'
          content='கர்பகுடி IVF இல் சிறந்த கருத்தரிப்பு நிபுணர்களிடமிருந்து நிபுணத்துவ ஆலோசனையைப் பெறுங்கள். உங்கள் பெற்றோர் பயணத்திற்கான தனிப்பட்ட பராமரிப்பு – இன்றே ஆலோசனையை முன்பதிவு செய்யுங்கள்!.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='கருவுறுதல் ஆலோசகர்கள் ' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://tamil.garbhagudi.com' />
        <meta
          property='og:description'
          content='கர்பகுடி IVF இல் சிறந்த கருத்தரிப்பு நிபுணர்களிடமிருந்து நிபுணத்துவ ஆலோசனையைப் பெறுங்கள். உங்கள் பெற்றோர் பயணத்திற்கான தனிப்பட்ட பராமரிப்பு – இன்றே ஆலோசனையை முன்பதிவு செய்யுங்கள்!.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='கருவுறுதல் ஆலோசகர்கள் ' />
        <meta
          name='twitter:description'
          content='கர்பகுடி IVF இல் சிறந்த கருத்தரிப்பு நிபுணர்களிடமிருந்து நிபுணத்துவ ஆலோசனையைப் பெறுங்கள். உங்கள் பெற்றோர் பயணத்திற்கான தனிப்பட்ட பராமரிப்பு – இன்றே ஆலோசனையை முன்பதிவு செய்யுங்கள்!.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <h1 className='mx-auto max-w-7xl pt-12 text-center font-heading text-4xl font-semibold'>
        கருவுறுதல் ஆலோசகர்கள்
      </h1>
      <p className='mx-auto max-w-7xl px-1 pt-6 text-center font-content font-semibold'>
        கர்பகுடி என்பது கனவுகள் நனவாகும் இடம், நம்பிக்கைகள் ஒருபோதும் மங்காத இடம், முடிவில்லா
        வாய்ப்புகள் நிறைந்த இடம். உங்கள் மகிழ்ச்சியின் குட்டி பொக்கிஷத்தை (குழந்தையை) தழுவும் அந்த
        பொற்கணத்தை நீங்கள் அனுபவிக்க நாங்கள் உழைக்கிறோம்.
      </p>
      <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
        <div className='mx-auto grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {articles?.map((item) => (
            <Link href={`fertility-center/${item.slug}`} passHref key={item.id} className='group'>
              <div className='mx-auto flex h-full w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-600 dark:hover:bg-gray-600 md:w-96'>
                <div className='w-1/3'>
                  <Image
                    className='h-24 w-24 rounded-lg object-cover transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                    src={item?.icon?.url || item?.image?.url}
                    alt={item?.title}
                    width={100}
                    height={100}
                    loading='lazy'
                  />
                </div>
                <div className='flex w-2/3 flex-col justify-center text-center text-gray-800 dark:text-gray-200'>
                  <p className='font-lexend text-xl font-medium'>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        articles(where: { articleType: fertilityConsultants }) {
          icon {
            url
          }
          image {
            url
          }
          slug
          id
          title
        }
      }
    `,
  });

  return {
    props: {
      articles: data.articles,
    },
    revalidate: 180,
  };
};
