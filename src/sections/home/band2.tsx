import Link from 'next/link';

const Band2 = () => {
  return (
    <div className='mx-auto my-4 max-w-7xl bg-white px-3 dark:bg-gray-800 sm:px-6 lg:px-4'>
      <span className='text-md mx-auto block py-2 text-center font-content font-semibold'>
        <div className='block md:inline-block'>
          <h3 className='text-gray-800 dark:text-gray-200'>
            கர்பகுடி{' '}
            <Link href={'/'} className='text-gg-500 hover:underline dark:text-gg-400'>
              IVF மையம்
            </Link>{' '}
            அதிக வெற்றி விகிதங்கள் மற்றும் முழுமையான கருத்தரிப்பு சிகிச்சை முறைக்காக சிறந்த
            கருத்தரிப்பு மற்றும் IVF மருத்துவமனை என்ற விருதைப் பெற்றுள்ளது
          </h3>
          <div className='space-x-3'>
            <button className='mx-auto mt-4 rounded-md bg-gg-500 px-3 py-2 text-sm font-bold text-white hover:bg-gg-600 dark:bg-gg-400 dark:text-gray-800 dark:hover:bg-gg-500'>
              <Link href={'/about/awards-and-accolades'}>
                விருதுகள் மற்றும் பாராட்டுகளை பார்க்க
              </Link>
            </button>
            <button className='mx-auto mt-4 rounded-md bg-gg-500 px-3 py-2 text-sm font-bold text-white hover:bg-gg-600 dark:bg-gg-400 dark:text-gray-800 dark:hover:bg-gg-500'>
              <Link href={'/gg-care'}>இப்போதே தொடர்பு கொள்ளுங்கள்</Link>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Band2;
