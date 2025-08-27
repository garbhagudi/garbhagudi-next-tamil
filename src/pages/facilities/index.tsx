import Link from 'next/link';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
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
        <link rel='dns-prefetch' href='https://media.graphassets.com' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>வசதிகள் - கர்பகுடி IVF மையம்</title>
        <meta name='title' content='வசதிகள் - கர்பகுடி IVF மையம்' />
        <meta
          name='description'
          content='உங்கள் வசதிக்கும், சுகத்திற்கும் ஏற்றவாறு வடிவமைக்கப்பட்ட உயர்தர வசதிகளை ஆராயுங்கள். நவீன அம்சங்களிலிருந்து சிறப்பான சேவைகள் வரை, அனைத்தையும் ஒரே இடத்தில் வழங்குகிறோம்! இன்றே  எங்களைச் சந்திக்கவும்!'
        />
        {/* Open Graph / Facebook */}

        <meta property='og:title' content='வசதிகள் - கர்பகுடி IVF மையம்' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='உங்கள் வசதிக்கும், சுகத்திற்கும் ஏற்றவாறு வடிவமைக்கப்பட்ட உயர்தர வசதிகளை ஆராயுங்கள். நவீன அம்சங்களிலிருந்து சிறப்பான சேவைகள் வரை, அனைத்தையும் ஒரே இடத்தில் வழங்குகிறோம்! இன்றே  எங்களைச் சந்திக்கவும்!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='வசதிகள் - கர்பகுடி IVF மையம்' />
        <meta
          name='twitter:description'
          content='உங்கள் வசதிக்கும், சுகத்திற்கும் ஏற்றவாறு வடிவமைக்கப்பட்ட உயர்தர வசதிகளை ஆராயுங்கள். நவீன அம்சங்களிலிருந்து சிறப்பான சேவைகள் வரை, அனைத்தையும் ஒரே இடத்தில் வழங்குகிறோம்! இன்றே  எங்களைச் சந்திக்கவும்!'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <BreadCrumbs
        link1='/facilities/'
        text1='வசதிகள்'
        text2=''
        link2=''
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <h1 className='mx-auto max-w-7xl pt-12 text-center font-heading text-4xl font-semibold'>
        வசதிகள்
      </h1>
      <p className='mx-auto max-w-7xl px-1 pt-6 text-center font-content font-semibold'>
        கர்ப்பகுடி என்பது கனவுகள் உயிர்பெறும், நம்பிக்கைகள் ஒருபோதும் மங்காது, சாத்தியக்கூறுகள்
        ஒருபோதும் முடிவடையாத இடம். உங்கள் மகிழ்ச்சியின் மூட்டையை வைத்திருக்கும் பொன்னான தருணத்தைப்
        போற்றுவதற்கு நாங்கள் உங்களுக்கு உதவுகிறோம்.
      </p>
      <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
        <div className='mx-auto grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {articles?.map((item) => (
            <Link href={`facilities/${item?.slug}`} passHref key={item.id} className='group'>
              <div className='mx-auto flex h-full w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-600 dark:hover:bg-gray-600 md:w-96'>
                <div className='w-1/3'>
                  <Image
                    className='h-24 w-24 rounded-lg object-cover transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                    src={item?.icon?.url || item?.image?.url}
                    alt={item?.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className='flex w-2/3 flex-col justify-center text-center text-gray-800 dark:text-gray-200'>
                  <p className='font-lexend text-xl font-medium'>{item?.title}</p>
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
        articles(where: { articleType: facilities }) {
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
