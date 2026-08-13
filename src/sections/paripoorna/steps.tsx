import Image from 'next/image';

const Steps = () => {
  return (
    <div
      className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:py-20'
      id='how-to'
    >
      <h3 className='mb-14 text-center font-lexend text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl'>
        பரிபூர்ணா பலனைப் பெறுவது எப்படி
      </h3>
      <div className='flex flex-col items-center justify-center gap-3 text-justify lg:flex-row'>
        <div className='grid w-full gap-2 font-lexend md:w-7/12 lg:grid-cols-2'>
          <div className='group rounded p-3 hover:bg-green-50 md:p-2 lg:p-5 lg:transition lg:duration-300'>
            <div className='mb-1 flex items-center'>
              <span className='mr-2 flex h-4 w-4 items-center justify-center rounded bg-green-500 text-xs font-medium text-white'>
                1
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                உங்கள் அருகிலுள்ள கர்பகுடி IVF மையத்தைப் பார்வையிடவும் 📍
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              எங்கள் அன்பான மற்றும் வரவேற்கும் கர்பகுடி IVF மையக் கிளைக்குள் நுழைந்து உங்கள்
              கருத்தரிப்புப் பயணத்தைத் தொடங்குங்கள். நீங்கள் எங்கள் கதவுகளுக்குள் நுழைந்த
              தருணத்திலிருந்து உங்களுக்கு மிகுந்த கவனிப்பையும் வசதியையும் வழங்க எங்கள் அதிநவீன
              வசதிகள் சிந்தனையுடன் வடிவமைக்கப்பட்டுள்ளன.
            </p>
          </div>
          <div className='group rounded p-5 hover:bg-purple-50 md:p-2 lg:p-5 lg:transition lg:duration-300'>
            <div className='mb-1 flex items-center'>
              <span className='mr-2 flex h-4 w-4 items-center justify-center rounded bg-purple-500 text-xs font-medium text-white'>
                2
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                கருத்தரிப்புச் சிறப்பு மருத்துவருடன் ஆலோசனைக்கு திட்டமிடவும் 👩‍⚕️
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              உங்களின் தனிப்பட்ட தேவைகளைப் புரிந்துகொள்ள எங்கள் அனுபவம் வாய்ந்த மற்றும் இரக்கமுள்ள
              கருத்தரிப்புச் சிறப்பு மருத்துவர்களைச் சந்திக்கவும். எங்கள் கருத்தரிப்புச் சிறப்பு
              மருத்துவர்கள் உங்களின் பெற்றோர் ஆவதற்கான தனிப்பட்ட பாதையைக் கேட்க, புரிந்துகொள்ள
              மற்றும் ஆதரிக்கக் இருக்கிறார்கள்.
            </p>
          </div>
          <div className='group rounded p-5 hover:bg-pink-50 md:p-2 lg:p-5 lg:transition lg:duration-300'>
            <div className='mb-1 flex items-center'>
              <span className='mr-2 flex h-4 w-4 items-center justify-center rounded bg-brandPink text-xs font-medium text-white'>
                3
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                நிதி ஆலோசகருடன் பேசவும் 🧑‍💼
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              கருத்தரிப்பு சிகிச்சையின் நிதி அம்சங்களை எதிர்கொள்வது கர்பகுடி IVF மையத்தில் மன
              அழுத்தமில்லாமல் இருக்கும். உங்களின் பெற்றோர் ஆகும் பயணத்தை முடிந்தவரை சீராக மாற்ற,
              வெளிப்படையான மற்றும் தனிப்பயனாக்கப்பட்ட தீர்வுகளை வழங்க எங்கள் அர்ப்பணிப்புள்ள நிதி
              ஆலோசகர்கள் உங்களுக்கு உதவ இங்கே இருக்கிறார்கள்.
            </p>
          </div>
          <div className='group rounded p-5 hover:bg-yellow-50 md:p-2 lg:p-5 lg:transition lg:duration-300'>
            <div className='mb-1 flex items-center'>
              <span className='mr-2 flex h-4 w-4 items-center justify-center rounded bg-yellow-500 text-xs font-medium text-white'>
                4
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                சாய்ந்து ஓய்வெடுக்கவும் 😌
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              நீங்கள் ஆரம்ப அடியை எடுத்து வைத்தவுடன், சாய்ந்து ஓய்வெடுக்க வேண்டிய நேரம் இது.
              மீதமுள்ளவற்றைக் கையாள கர்பகுடி IVF மையக் குழுவின் நிபுணத்துவத்தை நம்புங்கள். உங்கள்
              குடும்பத்தை உருவாக்குவதற்கான உற்சாகத்தில் நீங்கள் கவனம் செலுத்த அனுமதிக்க,
              ஒப்பிடமுடியாத ஆதரவை உங்களுக்கு வழங்க நாங்கள் கடமைப்பட்டுள்ளோம்.
            </p>
          </div>
        </div>
        <div className='flex w-full items-center justify-center md:w-5/12'>
          <Image
            className='inset-0 w-full rounded object-cover object-bottom shadow-lg'
            width={1024}
            height={1024}
            src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8ne585h07pl2ajrkjsk'
            alt='couple with baby picture'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
