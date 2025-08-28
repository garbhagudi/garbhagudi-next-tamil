import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <section className='relative bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right bg-no-repeat sm:bg-center'>
        <div className='to-white/15 absolute inset-0 bg-gradient-to-r from-white/90 dark:from-gray-800/90 dark:to-gray-800/30 sm:bg-transparent'></div>
        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl text-center sm:text-left'>
            <h1 className='flex flex-col'>
              <span className='break-words py-2 font-heading text-xl font-extrabold text-gray-800 dark:text-gray-200 sm:text-3xl'>
                பெற்றோராகும் பயணத்தில் தம்பதிகளுக்கு துணையாக ஓசூரில் அமைந்துள்ள எங்கள் நவீன
                கருத்தரிப்பு மையம், புதிய ஒளியும் அளிக்கிறது.
              </span>
              <span className='font-content text-xs font-semibold'>
                IUI (Intrauterine Insemination) என்பது கருத்தரிப்பு சிகிச்சை முறையாகும். இதில்,
                விந்தணுக்கள் நேரடியாக பெண்களின் கருப்பைக்குள் செலுத்தப்படுகின்றன.
              </span>
            </h1>
            <h3 className='mt-4 max-w-lg font-content text-gray-800 dark:text-gray-200 sm:text-xl sm:leading-relaxed'>
              கற்பககுடி ஆயிரக்கணக்கான குடும்பங்களுக்கு அவர்கள் பயணத்தைத் தொடங்க உதவியுள்ளது,
              இலட்சக்கணக்கான இனிய நினைவுகளை உருவாக்கியுள்ளது.
            </h3>
            <h3 className='mt-4 max-w-lg font-content text-gray-800 dark:text-gray-200 sm:text-xl sm:leading-relaxed'>
              2011 முதல் குடும்பங்களில் சிரிப்பை பரப்பி வருகின்றோம்.
            </h3>

            <div className='mt-8 flex flex-wrap gap-4 text-center'>
              <Link
                href='/gg-care'
                className='block w-full rounded bg-gg-500 px-12 py-3 font-content text-sm font-bold text-white shadow hover:bg-gg-400 focus:outline-none focus:ring active:bg-brandPink3 dark:bg-gray-500 dark:hover:bg-gg-400 sm:w-auto'
              >
                Get Started
              </Link>

              <Link
                href='#know-more'
                className='block w-full scroll-smooth rounded bg-white px-12 py-3 font-content text-sm font-bold text-brandPink shadow hover:text-gg-400 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
