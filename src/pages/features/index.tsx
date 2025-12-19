import Features2 from 'sections/home/features2';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>எங்கள் பல்துறை அணுகுமுறை - கர்பகுடி IVF மையம்</title>
        <meta name='title' content='எங்கள் பல்துறை அணுகுமுறை - கர்பகுடி IVF மையம்' />
        <meta
          name='description'
          content='கர்பகுடியில், கருத்தரிக்க முயலும் பலருக்கும் புதிய நம்பிக்கையின் ஒளியை கொண்டு வந்து, விருப்பங்களின் உலகை வழங்குவதற்கு எப்போதும் நாங்கள் அர்ப்பணித்துள்ளோம். எனவே, நீங்கள் எதிர்பார்க்கக்கூடியவை:'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='எங்கள் பல்துறை அணுகுமுறை - கர்பகுடி IVF மையம்' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://tamil.garbhagudi.com' />
        <meta
          property='og:description'
          content='கர்பகுடியில், கருத்தரிக்க முயலும் பலருக்கும் புதிய நம்பிக்கையின் ஒளியை கொண்டு வந்து, விருப்பங்களின் உலகை வழங்குவதற்கு எப்போதும் நாங்கள் அர்ப்பணித்துள்ளோம். எனவே, நீங்கள் எதிர்பார்க்கக்கூடியவை:'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='எங்கள் பல்துறை அணுகுமுறை - கர்பகுடி IVF மையம்' />
        <meta
          name='twitter:description'
          content='கர்பகுடியில், கருத்தரிக்க முயலும் பலருக்கும் புதிய நம்பிக்கையின் ஒளியை கொண்டு வந்து, விருப்பங்களின் உலகை வழங்குவதற்கு எப்போதும் நாங்கள் அர்ப்பணித்துள்ளோம். எனவே, நீங்கள் எதிர்பார்க்கக்கூடியவை:'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <BreadCrumbs
        link1='/features'
        text1='அம்சங்கள்'
        link2=''
        text2=''
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <Features2 />
    </div>
  );
};

export default IndexPage;
