import dynamic from 'next/dynamic';
import Head from 'next/head';
import Hero from 'sections/gg-care/hero';
const Contact = dynamic(() => import('sections/gg-care/content'), { ssr: false });
const Stats = dynamic(() => import('sections/gg-care/stats'), { ssr: false });
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Video = dynamic(() => import('sections/gg-care/workflow'), { ssr: false });
const FindBranch = dynamic(() => import('sections/gg-care/find-branch'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1644049097/Banner/GG_Care_Web_Banner-6_iyxanu.webp'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>ஜிஜி கேர் - தம்பதிகளின் மகிழ்ச்சிக்கு உறுதியளிக்கிறது.</title>
        <meta
          name='title'
          content='ஜிஜி கேர் - தம்பதிகளின் மகிழ்ச்சிக்கு உறுதியளிக்கிறது. | GarbhaGudi IVF Centre'
        />
        <meta
          name='description'
          content='உங்கள் கருத்தரிப்பு மற்றும் IVF சிகிச்சைக்காக கர்பகுடியில் நேர்முகப் பரிசோதனைக்கு முன்பதிவு செய்ய, 9108910832 என்ற எண்ணிற்கு தொடர்பு கொள்ளலாம் அல்லது dreams@garbhagudi.com என்ற மின்னஞ்சலுக்கு எழுதலாம்.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='ஜிஜி கேர் - தம்பதிகளின் மகிழ்ச்சிக்கு உறுதியளிக்கிறது. | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://tamil.garbhagudi.com' />
        <meta
          property='og:description'
          content='உங்கள் கருத்தரிப்பு மற்றும் IVF சிகிச்சைக்காக கர்பகுடியில் நேர்முகப் பரிசோதனைக்கு முன்பதிவு செய்ய, 9108910832 என்ற எண்ணிற்கு தொடர்பு கொள்ளலாம் அல்லது dreams@garbhagudi.com என்ற மின்னஞ்சலுக்கு எழுதலாம்.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='ஜிஜி கேர் - தம்பதிகளின் மகிழ்ச்சிக்கு உறுதியளிக்கிறது. | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='உங்கள் கருத்தரிப்பு மற்றும் IVF சிகிச்சைக்காக கர்பகுடியில் நேர்முகப் பரிசோதனைக்கு முன்பதிவு செய்ய, 9108910832 என்ற எண்ணிற்கு தொடர்பு கொள்ளலாம் அல்லது dreams@garbhagudi.com என்ற மின்னஞ்சலுக்கு எழுதலாம்.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.webp'
        />
      </Head>
      <Hero />
      <Video />
      <Stats />
      <Contact />
      <FindBranch />
      <div className='mb-5'>
        <Share pinmedia='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.webp' />
      </div>
      <Cta />
    </div>
  );
};

export default IndexPage;
