import Image from 'next/image';

const Hero = () => {
  return (
    <main className='mt-8 bg-white dark:bg-gray-800 sm:mt-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left'>
            <div>
              <div className='mt-4 font-heading text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 max-sm:text-3xl sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl'>
                முழுமையின் மகிழ்ச்சியை அனுபவிக்கவும்
              </div>
              <div className='text-md text-right font-content font-bold text-gray-800 dark:text-gray-200'>
                சிறந்த IVF மையம் – கர்பகுடி
              </div>
              <p className='mt-3 font-content text-base text-gray-800 dark:text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-base'>
                கர்பகுடி என்பது நவீன வசதிகளுடன், உலகத்தரத்திலான மருத்துவ தொழில்நுட்பத்துடன் கூடிய
                ஒரு முன்னோடியான கருவுறாமை சிகிச்சை மையம். இங்கு, அனுபவம் வாய்ந்த மருத்தவர்கள்,
                அன்பும் பரிவும் கலந்த சேவையுடன், உங்களின் பெற்றோராகும் பயணத்தில் துணையாக
                இருப்பார்கள்.
                <br />
                புகழ்பெற்ற மகப்பேறு மற்றும் கருத்தரிப்பு நிபுணர் டாக்டர் ஆஷா எஸ் விஜய் அவர்களின்
                வழிகாட்டுதலில், ஆயிரக்கணக்கான குடும்பங்கள் இன்று தங்கள் குழந்தையின் சிரிப்பால்
                வீட்டை நிறைத்துள்ளனர்.
              </p>
            </div>
          </div>
          <div className='hidden sm:mt-16 md:block lg:col-span-6 lg:mt-0'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg'>
              <div className='my-6'>
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1691232590/Misc/happy-smiling-mother-playing-with-newborn-child-comfy-light-bedroom-front-window-moments-motherhood-happiness-with-kids-family-concept-min_txfdml.webp'
                  alt='Experience the joy of being complete with the Best IVF Centre in Bangalore'
                  className='rounded-2xl object-cover shadow-xl'
                  width={1024}
                  height={768}
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
