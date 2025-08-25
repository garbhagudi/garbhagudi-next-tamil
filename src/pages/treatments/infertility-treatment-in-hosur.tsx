import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';

const Carousel = dynamic(() => import('nuka-carousel'), {
  ssr: false,
});

// Dynamically import components with SSR disabled
const AshaSection = dynamic(() => import('sections/LandingPages/Neutral/AshaSection'), {
  ssr: false,
});
const Banner = dynamic(() => import('sections/infertility/banner'), { ssr: true });
const InfertilityTreatmentOptions = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.InfertilityTreatmentOptions),
  { ssr: false }
);
const WhatIsInfertilityTreatment = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.WhatIsInfertilityTreatment),
  { ssr: true }
);
const InfertilityTreatmentProcess = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.InfertilityTreatmentProcess),
  { ssr: false }
);
const WhyGarbhaGudi = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.WhyGarbhaGudi),
  { ssr: false }
);
const WhenDiagnose = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.WhenDiagnose),
  { ssr: false }
);
const Causes = dynamic(() => import('sections/infertility/content').then((mod) => mod.Causes), {
  ssr: false,
});
const CTA = dynamic(() => import('sections/infertility/cta'), { ssr: false });
const Faq = dynamic(() => import('sections/infertility/faq'), { ssr: false });
const DoctorLayout = dynamic(() => import('components/doctorsLayout'), { ssr: false });

const InfertilityPage = ({ doctors }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1691229236/Misc/pregnant-woman-min_wvchfc.webp'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>ஹோசூரில் சிறந்த மகப்பேறு சிகிச்சை</title>
        <meta name='title' content='ஹோசூரில் சிறந்த மகப்பேறு சிகிச்சை' />
        <meta
          name='description'
          content='ஹோசூரில் உள்ள கர்பகுடி IVF மையத்தில் சிறந்த கருத்தரிக்கையின்மை சிகிச்சையை அனுபவிக்குங்கள். நிபுணர்களின் பராமரிப்பு, மேம்பட்ட சிகிச்சை முறைகள் மற்றும் உயர்ந்த வெற்றிவிகிதம் – அனைத்தும் ஒரே இடத்தில். இன்றே ஆலோசனையை முன்பதிவு செய்யுங்கள்!'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='ஹோசூரில் சிறந்த மகப்பேறு சிகிச்சை' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='ஹோசூரில் உள்ள கர்பகுடி IVF மையத்தில் சிறந்த கருத்தரிக்கையின்மை சிகிச்சையை அனுபவிக்குங்கள். நிபுணர்களின் பராமரிப்பு, மேம்பட்ட சிகிச்சை முறைகள் மற்றும் உயர்ந்த வெற்றிவிகிதம் – அனைத்தும் ஒரே இடத்தில். இன்றே ஆலோசனையை முன்பதிவு செய்யுங்கள்!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='ஹோசூரில் சிறந்த மகப்பேறு சிகிச்சை' />
        <meta
          name='twitter:description'
          content='ஹோசூரில் உள்ள கர்பகுடி IVF மையத்தில் சிறந்த கருத்தரிக்கையின்மை சிகிச்சையை அனுபவிக்குங்கள். நிபுணர்களின் பராமரிப்பு, மேம்பட்ட சிகிச்சை முறைகள் மற்றும் உயர்ந்த வெற்றிவிகிதம் – அனைத்தும் ஒரே இடத்தில். இன்றே ஆலோசனையை முன்பதிவு செய்யுங்கள்!'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <Banner />
      <WhatIsInfertilityTreatment />
      <InfertilityTreatmentOptions />
      <CTA />
      <InfertilityTreatmentProcess />
      <Causes />
      <WhyGarbhaGudi />
      <WhenDiagnose />
      <AshaSection />
      <div className=''>
        <div className='mx-auto bg-transparent py-10 lg:py-16'>
          <h2 className='pb-10 text-center font-heading text-2xl font-bold lg:pb-16 lg:text-3xl'>
            எங்கள் கருத்தரிப்பு நிபுணர்கள்
          </h2>
          <div className='relative mx-auto flex max-w-lg items-center justify-center'>
            <Carousel
              autoplay
              defaultControlsConfig={defaultControlsConfig}
              autoplayInterval={5000}
              className='max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl'
              wrapAround
              dragging
              enableKeyboardControls
              pauseOnHover
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  onClick={previousSlide}
                  className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
                >
                  <HiChevronLeft className='mr-1' />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  onClick={nextSlide}
                  className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
                >
                  <HiChevronRight className='ml-1' />
                </button>
              )}
            >
              {doctors.map((items) => (
                <DoctorLayout
                  index={items.id}
                  key={items.id}
                  imageComponent={
                    <ImageComponent
                      name={items.name}
                      image={items.image.url}
                      designation={items.designation}
                      imageAlt={items.imageAlt}
                    />
                  }
                  activeIndex={activeIndex}
                  docpic={items.image.url}
                  name={items.name}
                  bio={items.bio.raw.children}
                  setActiveIndex={setActiveIndex}
                ></DoctorLayout>
              ))}
            </Carousel>
          </div>
          <div className='mx-auto max-w-5xl pt-6 font-content'>
            கருத்தரிப்புக்கான சிறந்த சிகிச்சையைத் தேடுகிறீர்களா? அப்படியானால் கர்பகுடி ஐவிஎஃப்
            மையம், ஹோசூர் தான் சரியான இடம். எங்களிடம் திறமையான மற்றும் அனுபவமிக்க கருத்தரிப்பு
            நிபுணர்கள் உள்ளனர். அவர்கள் உங்களுக்கு உயர்தர சிகிச்சை மற்றும் சிறந்த தீர்வுகளை வழங்க
            அர்ப்பணிப்புடன் செயல்படுகிறார்கள்.
            <br />
            ஹோசூரில் முன்னணி கருத்தரிப்பு மருத்துவமாக பெயர் பெற்ற கர்பகுடி இன்று பல தம்பதிகள்
            நம்பிக்கையுடன் அணையும் மையமாக திகழ்கிறது. சிறந்த கருத்தரிப்பு மருத்துவர் என்ற பெயருக்கு
            ஏற்ப, எங்கள் நிபுணர்கள் உங்கள் பெற்றோராகும் பயணத்தை நிபுணத்துவத்துடனும் அன்பான
            ஆதரவுடனும் வழிநடத்துகிறார்கள்.
          </div>
        </div>
      </div>
      <Faq />
      <CTA />
    </div>
  );
};

export default InfertilityPage;

const ImageComponent = ({ name, image, designation, imageAlt }) => {
  return (
    <div className='flex flex-col items-center justify-center md:h-[21rem]'>
      <div className='relative h-44 w-44'>
        <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
        <Image
          className='rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
          src={image}
          alt={imageAlt || name}
          width={500}
          height={500}
          loading='lazy'
        />
      </div>
      <div className='text-center'>
        <div className='mt-4 font-heading text-xl font-bold'>{name}</div>
        <div className='text- mb-4 mt-2 font-content'>{designation}</div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors {
          id
          name
          designation
          qualification
          image {
            url
          }
          imageAlt
          bio {
            raw
          }
        }
      }
    `,
  });

  return {
    props: {
      doctors: data.doctors,
      fallback: true,
    },
    revalidate: 180,
  };
};
