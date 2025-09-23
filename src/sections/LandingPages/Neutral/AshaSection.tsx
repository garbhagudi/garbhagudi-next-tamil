import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AshaSection = () => {
  const path = usePathname();
  return (
    <section className='bg-gray-50 pb-10 pt-16 dark:bg-gray-700'>
      <h3 className='pb-16 text-center font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl'>
        டாக்டர் ஆஷா எஸ் விஜயை அணுகுங்கள்
      </h3>
      <div className='mx-auto w-full px-4 lg:max-w-2xl'>
        <div className='relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-2xl dark:bg-gray-800'>
          <div className='px-6'>
            <div className='mt-3 flex flex-wrap justify-center'>
              <div className='flex w-full justify-center px-4'>
                <div className='relative -mt-32'>
                  <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3 to-purple-500'></div>
                  <Image
                    className='h-56 w-56 rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
                    alt='Dr Asha'
                    src='https://media.graphassets.com/tEF3ZeEhSoeekeSEh47v'
                    width={500}
                    height={500}
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
            <div className='mt-10 text-center text-gray-800 dark:text-gray-200'>
              <h3 className='text-blueGray-700 mb-2 font-content text-xl font-semibold leading-normal'>
                டாக்டர் ஆஷா எஸ் விஜய்
              </h3>
              <div className='text-blueGray-400 mb-2 mt-0 font-content text-sm font-bold uppercase leading-normal'>
                MBBS, DNB(OBG), DGO, PGD-RM&E
              </div>
              <div className='text-blueGray-600 mb-2 mt-6 font-content font-semibold'>
                Founder & Medical Director – கர்பகுடி ஐவிஎஃப் மையம்
              </div>
            </div>
            <div className='border-blueGray-200 mt-4 border-t py-4 text-center'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full px-4 lg:w-11/12'>
                  <p className='text-blueGray-700 mb-6 font-content text-base'>
                    டாக்டர் ஆஷா அவர்களுக்கு பிரசவவியல், மகப்பேறு மற்றும் கருத்தரிப்பு துறைகளில் 20
                    வருடங்களுக்கு மேற்பட்ட அனுபவம் உள்ளது. கருத்தரிப்புத் துறையில் நோயாளிகளை
                    சிகிச்சையளிப்பதிலும், கல்வி அளிப்பதிலும் அவர் மிகவும் புகழ்பெற்றவர். பலர் அவரை
                    கருத்தரிப்பை முற்றிலும் ஒழிக்க வேண்டும் என்ற பார்வையுடன் செயல்படும் ஒரு மருத்துவ
                    மேதை எனக் கருதுகின்றனர்.
                  </p>
                  <p className='text-blueGray-700 mb-6 font-content text-base'>
                    அவரது திறமையும் அர்ப்பணிப்பும் காரணமாக, 11,000-க்கும் மேற்பட்ட தம்பதிகள்
                    பெற்றோராகும் மகிழ்ச்சியை அனுபவித்துள்ளனர்.
                  </p>
                  <Link href={`/contact/enquiry?pageVisit=${path}`}>
                    <button
                      type='button'
                      className='rounded-md bg-brandPink px-3 py-2 font-lexend font-medium uppercase text-white dark:bg-gray-500 dark:hover:bg-gg-400'
                    >
                      டாக்டர் ஆஷா எஸ் விஜயை அணுகுங்கள்
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AshaSection;
