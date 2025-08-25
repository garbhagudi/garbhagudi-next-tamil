import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Banner = ({ branchTitle }) => {
  const path = usePathname();
  return (
    <div>
      <div className='bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right bg-no-repeat shadow-2xl sm:bg-center'>
        <div className='h-full w-full bg-gradient-to-r from-white to-transparent py-6 dark:from-gray-800 dark:to-gray-800/10'>
          <div className='mx-auto flex h-[50vh] max-w-5xl items-center'>
            <div className='absolute z-10'>
              <div className='mx-auto w-full px-3 text-center text-base text-gray-800 dark:text-gray-200 md:max-w-lg md:text-left'>
                <h1 className='font-heading text-3xl font-bold leading-tight lg:text-4xl'>
                  கர்பகுடி IVF மையம் –
                  {branchTitle && <span className='text-brandPink'> {branchTitle}</span>}
                </h1>
                <h3 className='mt-4 font-content font-semibold leading-7 text-gray-800 dark:text-gray-200'>
                  கர்பகுடி IVF மையம் தனது புதிய கிளையை <strong>ஓசூர், தமிழ்நாடு</strong>வில்
                  துவங்கியதை மகிழ்ச்சியுடன் அறிவிக்கிறது!
                  <strong>கர்நாடகாவிற்கு வெளியே எங்களின் முதல் கிளை.</strong>
                  <br />
                  இன்று தொடர்பு கொண்டு எங்களின் சேவைகள் குறித்து மேலும் அறிந்து கொள்ளுங்கள் மற்றும்
                  உங்களுக்கு அருகிலுள்ள இடத்தை கண்டறியுங்கள்.
                </h3>
              </div>
              <div className='text-center lg:px-3 lg:text-left'>
                <button className='mt-4 rounded-lg bg-gg-500 px-4 py-2 font-content font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-400'>
                  <Link href={`/contact/enquiry?pageVisit=${path}`}>எங்களை தொடர்பு கொள்ளவும்</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
