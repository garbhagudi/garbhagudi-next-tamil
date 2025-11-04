import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), { ssr: false });
interface PriceSlashProps {
  originalPrice: number;
  slashedPrice: number;
}

const PriceSlash: React.FC<PriceSlashProps> = ({ originalPrice, slashedPrice }) => {
  const calculateDiscountPercentage = () => {
    const discount = ((originalPrice - slashedPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  const formatNumberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className='flex flex-col items-start py-8'>
      <div className='flex items-center space-x-4'>
        <div className='font-lexend text-3xl text-gray-600 dark:text-gray-300'>
          <span className='font-heading font-bold line-through'>
            ₹{formatNumberWithCommas(originalPrice)}
          </span>{' '}
          IVF தொகுப்பு
        </div>
      </div>
      <div className='mt-5 flex items-center font-lexend text-3xl text-gg-500 dark:text-gg-400'>
        இப்போது &nbsp;
        <span className='font-heading font-bold'>₹{formatNumberWithCommas(slashedPrice)}</span>
        <div className='ml-2 text-sm text-green-600 dark:text-green-500'>
          ({calculateDiscountPercentage()}% தள்ளுபடி)
        </div>
      </div>
      <div className='mt-5 text-sm'>
        இதில் என்னென்ன அடங்கும்:
        <ul className='list-inside list-disc'>
          <li>தூண்டுதலின் போது (during stimulation) கருவுறுதல் நிபுணர் ஆலோசனை மற்றும் ஸ்கேன்</li>
          <li>கருப்பைத் தூண்டுதல் ஊசிகள் (Ovarian stimulation injections)</li>
          <li>
            ஆய்வக சோதனைகள் (இரண்டு முறை ஈஸ்ட்ராடியோல் சோதனைகள், லூட்டினைசிங் ஹார்மோன் சோதனைகள்
            மற்றும் ஒரு முறை புரோஜெஸ்ட்டிரோன் சோதனை)
          </li>
          <li>முட்டை எடுக்கும் செயல்முறை (OPU) மற்றும் OT உபயோகப் பொருட்கள்</li>
          <li>இன்ட்ராசைட்டோபிளாஸ்மிக் விந்து ஊசி (ICSI) செயல்முறை</li>
          <li>உறைந்த கரு பரிமாற்றம் (FET) மற்றும் அறுவை சிகிச்சை அறை (OT) உபயோகப் பொருட்கள்</li>
          <li>பிளாஸ்டோசிஸ்ட் வளர்ப்பு (Blastocyst Culture)</li>
          <li>3 மாதங்களுக்கு கரு முடக்கம் (Embryo Freezing)</li>
          <li>புதிய கரு பரிமாற்றம் (ET) / உறைந்த கரு பரிமாற்றம் (FET)</li>
          <li>
            ஆலோசனை, தியானம், பிராணாயாமம், சுவாசப் பயிற்சிகள் மற்றும் யோகாசனங்கள் உள்ளிட்ட முழுமையான
            சிகிச்சை; தகுதியான தம்பதிகளுக்கு ஆதரவாக கவனமாக வடிவமைக்கப்பட்டது.
          </li>
          <li>மறைமுக செலவுகள் இல்லை (No hidden cost)</li>
        </ul>
        <div className='mt-8 text-xs'>
          * உள்ளடக்கப்பட்ட விவரங்கள் ஒற்றை சுய-சுழற்சிக்கு (single self-cycle) மட்டுமே பொருந்தும்.
          *நிபந்தனைகள் பொருந்தும்.
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <div className='py-12 text-center font-heading text-4xl font-bold text-gg-600 lg:py-24 lg:text-5xl'>
          <h1 className='mx-auto max-w-lg rounded-md py-2 dark:bg-gray-200 dark:bg-opacity-80'>
            பரிபூர்ணா
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-start justify-center px-3'>
            <div className='py-8 font-heading text-2xl font-bold text-gg-500 dark:text-gg-400'>
              &quot;பெரும் சேமிப்பு, உங்கள் IVF சிகிச்சைகளுக்கு{' '}
              <span className='text-purple-900 dark:text-purple-200'>தள்ளுபடி ₹1,11,111*</span>{' '}
              பெறுங்கள் &quot;
              {/* <div className='block text-right text-xs text-gray-800 dark:text-gray-200'>
                *Terms and conditions apply
              </div> */}
            </div>

            <div className='font-lexend text-lg text-gray-800 dark:text-gray-200'>
              பெற்றோர் ஆனந்தத்தை அனுபவிக்க முடியாமல் இருக்கும் அதிகபட்ச தம்பதிகளுக்கு சேவை செய்வதே
              எங்கள் நோக்கம். பல தம்பதிகளால் IVF சிகிச்சையை மேற்கொள்ள முடியவில்லை என்பதை நாங்கள்
              புரிந்துகொள்கிறோம். இதை மனதில் வைத்து, கர்பகுடி IVF மையம், கர்பக்ஞான் அறக்கட்டளையுடன்
              இணைந்து, <span className='font-bold underline'>பரிபூர்ணா. </span> என்ற இந்தத்
              திட்டத்தைத் தொடங்கியுள்ளது.
              <PriceSlash originalPrice={260000} slashedPrice={160000} />
              இந்த நவம்பர் மற்றும் டிசம்பர் 2025ல், பெற்றோர் ஆகும் பருவத்தை
              <strong>பரிபூர்ணாவுடன்</strong> கொண்டாடுங்கள். கர்பகுடி IVF மையம் உங்கள் IVF சுழற்சிச்
              செலவில் தள்ளுபடி ₹1,11,111 வழங்குகிறது. இந்த வாய்ப்பைப் பெற, அருகில் உள்ள கர்பகுடி IVF
              மையத்தைப் பார்வையிட்டு, உங்கள் முழுமைக்கான பயணத்தில் முதல் அடியை எடுத்து வைக்கவும்.
              <div className='mt-10 flex flex-col items-start space-x-5 space-y-3 md:items-center lg:flex-row lg:space-y-0'>
                <div className='rounded-xl bg-gg-500 px-3 py-2 font-lexend text-white dark:bg-gg-600'>
                  <WatchVideo />
                </div>
                <div className='rounded-xl bg-purple-700 px-3 py-2 font-lexend text-white dark:bg-purple-800'>
                  <Link href='/contact/enquiry?pageVisit=/features/paripoorna'>
                    <div>சந்திப்பை பதிவு செய்யுங்கள்</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center lg:ml-10'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp'
              alt='pp logo'
              width={500}
              height={500}
              className='mx-auto aspect-square scale-90 lg:scale-105'
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const WatchVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type='button' onClick={openModal}>
          வீடியோ பார்க்க
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <DialogTitle
                    as='h3'
                    className='text-center font-heading text-2xl font-bold leading-6 text-gray-900'
                  >
                    Paripoorna Launch
                  </DialogTitle>

                  <div>
                    <div className='mt-8 overflow-hidden rounded-xl border-2 border-brandPink'>
                      <LiteYouTubeEmbed
                        id={'NyQyAcUrrOY'}
                        title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                        poster='maxresdefault'
                        webp={true}
                      />
                    </div>
                  </div>

                  <div className='mt-4 text-center'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-lexend text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
