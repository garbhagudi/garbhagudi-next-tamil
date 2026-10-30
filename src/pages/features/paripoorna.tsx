import Head from 'next/head';
import { useState } from 'react';
import BookingDialog from 'sections/paripoorna/booking-dialog';
import Cta from 'sections/paripoorna/cta';
import { HERO_IMAGE } from 'sections/paripoorna/data';
import Faq from 'sections/paripoorna/faq';
import Hero from 'sections/paripoorna/hero';
import Inclusions from 'sections/paripoorna/inclusions';
import Institution from 'sections/paripoorna/institution';
import Offer from 'sections/paripoorna/offer';
import Understanding from 'sections/paripoorna/understanding';

const TITLE = 'பரிபூர்ணா 2026 | IVF சுழற்சிக்கு ₹1,75,000*';
const DESCRIPTION =
  'கர்பகுடி IVF மையத்தின் பரிபூர்ணா 2026 — உங்கள் கருவுறுதல் பயணத்தைப் புரிந்துகொள்ளுங்கள்; IVF பரிந்துரைக்கப்பட்டால், மருந்துகள் உட்பட வரையறுக்கப்பட்ட IVF பராமரிப்பு. அழைக்கவும்: 9108 9108 32.';
const OG_IMAGE =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vp44h5aq707pl7oyfbuqd';
const PAGE_URL = 'https://tamil.garbhagudi.com/features/paripoorna';

const breadcrumbSchema = JSON.stringify({
  '@context': 'https://schema.org/',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tamil.garbhagudi.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Features',
      item: 'https://tamil.garbhagudi.com/features',
    },
    { '@type': 'ListItem', position: 3, name: 'Paripoorna', item: PAGE_URL },
  ],
});

const Paripoorna = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <title>{TITLE}</title>
        <meta name='title' content={TITLE} />
        <meta name='description' content={DESCRIPTION} />
        <meta name='theme-color' content='#ef4266' />
        <meta property='og:title' content={TITLE} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content={PAGE_URL} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={OG_IMAGE} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta name='twitter:image' content={OG_IMAGE} />
        <link rel='preload' as='image' href={HERO_IMAGE} />
        <style>{`html{scroll-behavior:smooth;scroll-padding-top:90px}@media (max-width:640px){html{scroll-padding-top:74px}}`}</style>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
      </Head>
      <div className='overflow-x-clip bg-pp-bg font-pp-body text-[17px] leading-[1.75] text-pp-grey antialiased max-[767px]:bg-[#efe7e0] max-[767px]:pt-[66px] max-[640px]:text-[16px]'>
        <Hero />
        <Understanding />
        <Offer />
        <Inclusions />
        <Cta onBook={() => setIsOpen(true)} />
        <Institution />
        <Faq />
      </div>
      <BookingDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Paripoorna;
