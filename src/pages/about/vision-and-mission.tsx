import React from 'react';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

const VisionMission = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>பணி மற்றும் பார்வை </title>
        <meta name='title' content='பணி மற்றும் பார்வை ' />
        <meta
          name='description'
          content='கர்பகுடி, ஆயிரக்கணக்கான கருத்தரிக்கையின்மை பிரச்சினை கொண்ட தம்பதிகளுக்கு நம்பிக்கையின் ஒளியாக இருந்து வருகிறது. எங்கள் அனுபவமிக்க நிபுணர்கள், செவிலியர்கள் மற்றும் கருவுறுப்பு நிபுணர்கள் (Embryologists) உங்கள் தேவைகளுக்கேற்ப அர்ப்பணிப்புடன் சேவை செய்கிறார்கள்.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='பணி மற்றும் பார்வை ' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='கர்பகுடி, ஆயிரக்கணக்கான கருத்தரிக்கையின்மை பிரச்சினை கொண்ட தம்பதிகளுக்கு நம்பிக்கையின் ஒளியாக இருந்து வருகிறது. எங்கள் அனுபவமிக்க நிபுணர்கள், செவிலியர்கள் மற்றும் கருவுறுப்பு நிபுணர்கள் (Embryologists) உங்கள் தேவைகளுக்கேற்ப அர்ப்பணிப்புடன் சேவை செய்கிறார்கள்.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='பணி மற்றும் பார்வை ' />
        <meta
          name='twitter:description'
          content='கர்பகுடி, ஆயிரக்கணக்கான கருத்தரிக்கையின்மை பிரச்சினை கொண்ட தம்பதிகளுக்கு நம்பிக்கையின் ஒளியாக இருந்து வருகிறது. எங்கள் அனுபவமிக்க நிபுணர்கள், செவிலியர்கள் மற்றும் கருவுறுப்பு நிபுணர்கள் (Embryologists) உங்கள் தேவைகளுக்கேற்ப அர்ப்பணிப்புடன் சேவை செய்கிறார்கள்.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <BreadCrumbs
        text1='பற்றி'
        link1='/about/overview'
        text2='பணி & பார்வை'
        link2='#'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <section className='body-font text-gray-800 dark:text-gray-200'>
        <div className='container mx-auto px-5 py-24'>
          <h1 className='pb-16 text-center font-heading text-4xl font-bold underline lg:text-5xl'>
            கர்ப்பகுடியின் நோக்கம் மற்றும் தொலைநோக்குப் பார்வை
          </h1>
          <div className='-mx-4 -mb-10 flex flex-wrap text-center'>
            <div className='mb-10 px-4 sm:w-1/2'>
              <h2 className='title-font mb-3 mt-6 font-heading text-3xl font-semibold text-gray-800 dark:text-gray-200'>
                பார்வை
              </h2>
              <div className='h-64 overflow-hidden rounded-lg'>
                <Image
                  alt='content'
                  className='mb-2 h-full w-full object-cover object-center'
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643278927/About/1201x501_Vision_c6ds1h.webp'
                  width={500}
                  height={500}
                />
              </div>
              <h3 className='title-font my-3 text-justify font-content text-xl font-medium text-gray-800 dark:text-gray-200'>
                ஒரு பணி, அதனைத் தொடர்ந்து அர்ப்பணிப்பு மற்றும் கடின உழைப்பு – இதுவே ஒரு பார்வையாக
                மாறுகிறது.
              </h3>
              <p className='text-brandDark mt-2 text-left font-content text-lg leading-relaxed'>
                கருத்தரிப்பு மற்றும் அதற்கான சிகிச்சைகள் குறித்து மக்களிடையே விழிப்புணர்வை
                ஏற்படுத்தி, அதிகமானவர்களை அணுகுவதற்கு பேரளவு உழைப்பும் அர்ப்பணிப்பும் செய்கின்றன.
                <br />
                <strong>
                  வாழ்க்கையின் மகிழ்ச்சியான தருணங்களை பராமரித்து வளர்க்கும் நோக்குடன்,
                </strong>{' '}
                எங்கள் பார்வை – கர்பகுடியை உலகப் புகழ்பெற்ற{' '}
                <strong>சுகாதாரப் பல்கலைக்கழகமாக</strong> உருவாக்குவது.
              </p>
              <div>
                <p className='text-brandDark mt-2 text-left font-content text-lg leading-relaxed'>
                  இதில்:
                </p>
                <div className='prose prose-indigo prose-lg text-brandDark mx-5 lg:max-w-none'>
                  <ul className='list-disc space-y-2 text-justify font-content text-gray-800 dark:text-gray-200'>
                    <li>மிகச் சிறந்த வெற்றிவிகிதங்கள்,</li>
                    <li>வலுவான அறிவியல் அணுகுமுறை,</li>
                    <li>ஒழுக்கமான மதிப்புகள்,</li>
                    <li>மனித நேயத்துடன் கூடிய தொட்டு பராமரிப்பு</li>
                  </ul>
                </div>
                <p className='text-brandDark mt-2 text-left font-content text-lg leading-relaxed'>
                  இவற்றின் அடிப்படையில் செயல்படுவதே எங்கள் குறிக்கோள் <br />
                  கர்பகுடி – மனித நேயம், அறிவியல், வெற்றி
                </p>
              </div>
            </div>
            <div className='mb-10 px-4 sm:w-1/2'>
              <h2 className='title-font mb-3 mt-6 font-heading text-3xl font-semibold text-gray-800 dark:text-gray-200'>
                பணி
              </h2>
              <div className='h-64 overflow-hidden rounded-lg'>
                <Image
                  alt='content'
                  className='mb-2 h-full w-full object-cover object-center'
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643278945/About/1201x501_Mission_wcctgt.webp'
                  width={500}
                  height={500}
                />
              </div>

              <p className='text-brandDark mt-2 text-left font-content text-lg leading-relaxed'>
                <Link href='/fertility-experts/dr-asha-s-vijay' className='text-gg-500 underline'>
                  டாக்டர் ஆஷா எஸ் விஜய்
                </Link>
                பிரபலமான பெங்களூரு மெடிக்கல் கல்லூரியில் பிரசவவியல் மற்றும் மகப்பேறு துறையில்
                முதுநிலை பட்டம் பெற்ற டாக்டர் ஆஷா எஸ் விஜய், தனது மருத்துவ வாழ்க்கையை Kidwai
                Institute of Oncology, பெங்களூரு-வில் தொடங்கினார். பின்னர், தனது சொந்த மருத்துவ
                சேவையை Sannidhi Multi-Specialty Hospital மூலமாக நிறுவினார்.
                <br />
                அவரது மருத்துவப் பயணத்தில், அவர் பல கருத்தரிப்பு நோயாளிகள் சந்திக்கும் பாடுகளை
                அருகில் கண்டார். கருத்தரிப்பு மற்றும் அதன் சிகிச்சைகள் குறித்து மக்களிடம் நிலவும்
                தவறான எண்ணங்கள் – செலவு, நடைமுறை, மற்றும் சிகிச்சை முறைகள் குறித்த குழப்பங்கள்
                ஆகியவற்றை அவர் கவனித்தார்.
                <br />
                இவ்வாறான நிலையில், சரியான வழிகாட்டுதலை பெற முடியாமல் தவித்தவர்களுக்கு உதவ வேண்டும்
                என்ற ஆவல் அவருக்குள் உருவானது. அந்த மனப்பூர்வமான பணி மற்றும் நோக்கத்தின் விளைவாக
                இன்று கர்பகுடி உருவாகியுள்ளது.
                <br />
                கர்பகுடி – டாக்டர் ஆஷா எஸ். விஜயின் அர்ப்பணிப்பும் பார்வையும்
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
