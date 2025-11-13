import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const FAQ = dynamic(() => import('sections/paripoorna/faq'), { ssr: false });
const Home = dynamic(() => import('sections/paripoorna/home'), { ssr: true });
const Steps = dynamic(() => import('sections/paripoorna/steps'), { ssr: false });
const TermsConditions = dynamic(() => import('sections/paripoorna/tandc'), { ssr: false });
const Paripoorna = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1669643962/Banner/Bunting_kgdona.webp'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>பரிபூர்ணா | உங்கள் IVF சிகிச்சைகளில் ₹1,11,111* தள்ளுபடி பெறுங்கள்</title>
        <meta
          name='title'
          content='பரிபூர்ணா | உங்கள் IVF சிகிச்சைகளில் ₹1,11,111* தள்ளுபடி பெறுங்கள்'
        />
        <meta
          name='description'
          content='கர்பகுடி என்பது கனவுகள் உயிர்பெறும், நம்பிக்கைகள் ஒருபோதும் மங்காது, சாத்தியக்கூறுகள் ஒருபோதும் முடிவடையாத இடம். உங்கள் மகிழ்ச்சியின் உச்சத்தை வைத்திருக்கும் பொன்னான தருணத்தை அனுபவப்பதிற்கு நாங்கள் உங்களுக்கு உதவுகிறோம்'
        />
        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='பரிபூர்ணா | உங்கள் IVF சிகிச்சைகளில் ₹1,11,111* தள்ளுபடி பெறுங்கள்'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='கர்பகுடி என்பது கனவுகள் உயிர்பெறும், நம்பிக்கைகள் ஒருபோதும் மங்காது, சாத்தியக்கூறுகள் ஒருபோதும் முடிவடையாத இடம். உங்கள் மகிழ்ச்சியின் உச்சத்தை வைத்திருக்கும் பொன்னான தருணத்தை அனுபவப்பதிற்கு நாங்கள் உங்களுக்கு உதவுகிறோம்'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='பரிபூர்ணா | உங்கள் IVF சிகிச்சைகளில் ₹1,11,111* தள்ளுபடி பெறுங்கள்'
        />
        <meta
          name='twitter:description'
          content='கர்பகுடி என்பது கனவுகள் உயிர்பெறும், நம்பிக்கைகள் ஒருபோதும் மங்காது, சாத்தியக்கூறுகள் ஒருபோதும் முடிவடையாத இடம். உங்கள் மகிழ்ச்சியின் உச்சத்தை வைத்திருக்கும் பொன்னான தருணத்தை அனுபவப்பதிற்கு நாங்கள் உங்களுக்கு உதவுகிறோம்'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp'
        />
      </Head>

      <div className="overflow-x-hidden bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1669643962/Banner/Bunting_kgdona.webp')] bg-contain bg-no-repeat">
        <Home />
        <Steps />
        <FAQ />
        <TermsConditions />
        <Cta />
      </div>
    </div>
  );
};
export default Paripoorna;
