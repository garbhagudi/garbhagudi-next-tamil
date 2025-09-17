import { HiPhone, HiCalendar } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const supportLinks = [
  {
    name: 'எங்களை தொடர்பு கொள்ளுங்கள்',
    description:
      'உங்களிடம் உள்ள கேள்விகள், சந்தேகங்கள் அல்லது சவால்கள் எதுவாக இருந்தாலும் எங்களை தொடர்பு கொள்ளுங்கள்.எந்த நேரத்திலும் உங்களுக்கு உதவுவதில் எங்களுக்கு மகிழ்ச்சி. உங்களுக்கு எளிதாக இருக்க நாங்கள் எப்போதும் முயற்சி செய்து வருகிறோம்!',
    icon: HiPhone,
    ctaAction: 'எங்களை தொடர்பு கொள்ளுங்கள்',
    ctaLink: 'tel:+919108910832',
  },
  {
    name: 'இப்போது நேர்முகம் பதிவு செய்யுங்கள்',
    description:
      'உங்களுக்கு அருகிலுள்ள கர்பகுடி IVF மையத்தில் உடனே ஒரு நேர்முகத்தை (Appointment) பதிவு செய்யுங்கள். எங்கள் நிபுணர்களிடமிருந்து சிறந்த சிகிச்சைகளை (Fertility Treatments) பெறுங்கள்!',
    icon: HiCalendar,
    ctaAction: 'இப்போது நேர்முகம் பதிவு செய்யுங்கள்',
    ctaLink:
      '/contact/enquiry?utm_source=ggcare&utm_medium=chat&utm_campaign=ggcare_chat&pageVisit=/gg-care',
  },
];

const Hero = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      {/* Header */}
      <div className='relative pb-32'>
        <div className='absolute inset-0'>
          <Image
            className='h-full w-full object-cover'
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1644049097/Banner/GG_Care_Web_Banner-6_iyxanu.webp'
            alt='gg care'
            width={500}
            height={500}
            priority={true}
          />
          <div
            className='absolute inset-0 bg-gray-400 mix-blend-multiply dark:bg-gray-600'
            aria-hidden='true'
          />
        </div>
        <div className='relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 xl:py-56'></div>
      </div>

      {/* Overlapping cards */}
      <section
        className='relative z-10 mx-auto -mt-8 max-w-7xl px-4 pb-32 sm:px-6 md:-mt-12 lg:-mt-44 lg:px-8'
        aria-labelledby='contact-heading'
      >
        <h2 className='sr-only' id='contact-heading'>
          எங்களை தொடர்பு கொள்ளுங்கள்
        </h2>
        <div className='grid grid-cols-1 justify-center gap-y-20 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0'>
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className='group flex flex-col rounded-2xl bg-white shadow-xl dark:border-2 dark:border-gray-600 dark:bg-gray-800'
            >
              <div className='relative flex-1 px-6 pb-8 pt-16 md:px-8'>
                <div className='absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-gg-400 p-5 shadow-lg transition-all duration-150 dark:bg-gray-600 group-hover:dark:bg-gg-400'>
                  <link.icon className='h-6 w-6 text-white' aria-hidden='true' />
                </div>
                <h3 className='font-heading text-xl font-medium text-gray-800 dark:text-gray-200'>
                  {link.name}
                </h3>
                <p className='mt-4 font-content text-sm text-gray-700 dark:text-gray-300'>
                  {link.description}
                </p>
              </div>
              <button className='rounded-b-xl bg-gg-400 px-4 py-2 font-content font-semibold text-white transition-all duration-150 dark:bg-gray-600 dark:group-hover:bg-gg-400'>
                <Link href={link.ctaLink} target='_blank' rel='noreferrer'>
                  {link.ctaAction}
                </Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
