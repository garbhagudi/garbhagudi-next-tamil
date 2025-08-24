import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className='mx-auto mt-10 max-w-7xl rounded-lg bg-gray-100 dark:bg-gray-700'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:py-16 lg:text-left'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block font-content text-gray-800 dark:text-gray-200'>துவங்க தயாரா?</span>
          <span className='block font-content text-brandPink'>
            உங்கள் கனவுகளை நனவாக்க நாங்கள் உங்களுடன்…
          </span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <Link
              href={'#leadForm'}
              className='rounded-lg bg-gg-500 px-4 py-3 font-content text-xl font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-500'
            >
              அப்பாயிண்ட்மெண்ட் பதிவு செய்யுங்கள்
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
