import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsWhatsapp } from 'react-icons/bs';
const Cta = () => {
  const path = usePathname();
  return (
    <div className='bg-gray-50 dark:bg-gray-700'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16'>
        <h2 className='font-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block text-gg-400'>துவங்க தயாரா?</span>
          <span className='block text-xl text-gray-800 dark:text-gray-200 md:text-2xl'>
            நாங்கள் உங்களுக்கு தேவையான தகவல், ஆலோசனை, ஆதரவு மற்றும் புரிதலை வழங்க தயாராக உள்ளோம்.
          </span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <Link
            href={`/contact/enquiry?pageVisit=${path}`}
            className='inline-flex rounded-md shadow'
          >
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-gg-500 px-5 py-3 font-content text-base font-medium text-gray-200 hover:bg-brandPink3 dark:bg-gg-500 dark:hover:bg-gg-600'
            >
              எங்களை தொடர்பு கொள்ளுங்கள்
            </button>
          </Link>
          <div className='ml-3 inline-flex rounded-md shadow'>
            <a
              href='https://wa.me/919108910832?text=Hi.'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-gg-500 px-5 py-3 font-content text-base font-medium text-gray-200 hover:bg-brandPink3 dark:bg-gg-500 dark:hover:bg-gg-600'
            >
              <BsWhatsapp /> <span className='ml-2'> வாட்ஸ்அப்</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
