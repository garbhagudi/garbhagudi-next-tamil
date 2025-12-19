import Head from 'next/head';
import Form from 'sections/LandingPages/Performant/form';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330475/GG_Popup_Image-02_xtezjv.webp'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>விசாரணை படிவம் | கர்பகுடி</title>
        <meta name='title' content='விசாரணை படிவம் | கர்பகுடி' />
        <meta
          name='description'
          content='கர்பகுடி என்பது கருத்தரிக்கையின்மை சிகிச்சைக்கான புதிய தலைமுறை மருத்துவமனைகளின் சங்கிலியாகும். இது அதிநவீன, முன்னோடியான தொழில்நுட்ப வசதிகளுடன் கருத்தரிக்கையின்மை சிக்கல்களை திறம்பட சமாளிக்க வடிவமைக்கப்பட்டுள்ளது..'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='விசாரணை படிவம்' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://tamil.garbhagudi.com' />
        <meta
          property='og:description'
          content='கர்பகுடி என்பது கருத்தரிக்கையின்மை சிகிச்சைக்கான புதிய தலைமுறை மருத்துவமனைகளின் சங்கிலியாகும். இது அதிநவீன, முன்னோடியான தொழில்நுட்ப வசதிகளுடன் கருத்தரிக்கையின்மை சிக்கல்களை திறம்பட சமாளிக்க வடிவமைக்கப்பட்டுள்ளது..'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330475/GG_Popup_Image-02_xtezjv.webp'
        />
        <link rel='alternate' hrefLang='tm' href='https://tamil.garbhagudi.com/contact/enquiry' />
        <link
          rel='alternate'
          hrefLang='x-default'
          href='https://tamil.garbhagudi.com/contact/enquiry'
        />
        <link rel='canonical' href='https://tamil.garbhagudi.com/contact/enquiry' />
        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='விசாரணை படிவம்' />
        <meta
          name='twitter:description'
          content='கர்பகுடி என்பது கருத்தரிக்கையின்மை சிகிச்சைக்கான புதிய தலைமுறை மருத்துவமனைகளின் சங்கிலியாகும். இது அதிநவீன, முன்னோடியான தொழில்நுட்ப வசதிகளுடன் கருத்தரிக்கையின்மை சிக்கல்களை திறம்பட சமாளிக்க வடிவமைக்கப்பட்டுள்ளது..'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330475/GG_Popup_Image-02_xtezjv.webp'
        />
      </Head>
      <div className='flex w-full items-center justify-center px-3 py-8'>
        <div className='w-fit'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330475/GG_Popup_Image-02_xtezjv.webp'
            alt='formBanner'
            className='mx-auto mt-4 rounded-t-md md:max-w-2xl'
            width={1024}
            height={400}
            priority={true}
          />
          <div className='mx-auto rounded-b-md bg-gray-800'>
            <h1 className='pt-4 text-center font-lexend text-3xl text-white'>விசாரணை படிவம்</h1>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
