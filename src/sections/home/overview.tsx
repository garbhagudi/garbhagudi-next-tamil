import Image from 'next/image';

const Overview = () => {
  return (
    <div className='relative bg-white dark:bg-gray-800'>
      <div className='mt-10 md:mt-0 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8'>
        <div className='relative sm:py-16 lg:py-0'>
          <div
            aria-hidden='true'
            className='hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-screen'
          >
            <div className='absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 dark:bg-gray-700 lg:right-72' />
            <svg
              className='absolute left-1/2 top-8 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
              width={404}
              height={392}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200 dark:text-gray-500'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={392} fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)' />
            </svg>
          </div>
          <div className='relative mx-auto max-w-md px-4 pb-6 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20'>
            <div className='relative overflow-hidden rounded-2xl pb-10 pt-64 shadow-xl'>
              <Image
                className='absolute inset-0 h-full w-full object-cover'
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1670926732/Home/Why_GarbhaGudi_oa1nv7-min_z7p9jv.webp'
                alt='Dr Asha S Vijay - IVF Specialist in Bangalore'
                width={360}
                height={640}
              />
              <div className='absolute inset-0 bg-gray-200 mix-blend-multiply' />
              <div className='absolute inset-0 bg-gradient-to-t from-brandPink via-gray-400 mix-blend-multiply dark:from-gray-700' />
              <div className='relative px-8'>
                <blockquote className='mt-8'>
                  <div className='relative text-lg font-medium text-white md:flex-grow'>
                    <svg
                      className='absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-brandPink'
                      fill='currentColor'
                      viewBox='0 0 32 32'
                      aria-hidden='true'
                    >
                      <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                    </svg>
                    <p className='relative font-content text-sm font-semibold italic'>
                      கர்பகுடி என்பது உறுதியான மதிப்புகள், நல்ல திட்டமிடல், தொலைநோக்கு கொண்ட
                      தலைவர்கள் மற்றும் நவீன தொழில்நுட்பங்கள் ஆகியவற்றின் அடிப்படையில் உருவான ஒரு
                      உலகத் தரமான மையம். அதிலும் முக்கியமாக, அன்பும் அர்ப்பணிப்பும் கொண்ட
                      மருத்துவர்கள், எம்ப்ரியாலஜிஸ்ட்கள் மற்றும் பணியாளர்கள் கொண்ட சிறந்த குழுவால்
                      இயங்குகிறது. <br />
                      <br /> இங்கு, இதுவரை 15,000க்கும் மேற்பட்ட தம்பதிகள் தங்களுடைய சொந்த
                      குழந்தையைப் பெற உதவியுள்ளோம். திறமையான நிபுணர்கள் மற்றும் நவீன மருத்துவ
                      சாதனங்களின் மூலம், கருத்தரிக்காத பிரச்சினைகளில் மிகுந்த வெற்றிகளை
                      பெற்றுள்ளோம். எங்களின் இலக்கு ஒரே ஒன்று – ஒவ்வொரு தம்பதியும் ஒரு ஆரோக்கியமான
                      குழந்தையை வீட்டிற்கு அழைத்துச் சென்று பெற்றோராகும் மகிழ்ச்சியை அனுபவிப்பது.
                    </p>
                  </div>

                  <footer className='mt-4'>
                    <p className='font-content text-base font-semibold text-purple-300'>
                      டாக்டர் ஆஷா எஸ் விஜய் நிறுவனர் மற்றும் மருத்துவ இயக்குனர் – கர்பகுடி
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
          <div className='pt-12 sm:pt-16 lg:pt-20'>
            <h2 className='font-heading text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl lg:mt-10'>
              ஓசூர் கர்பகுடி IVF மையம் உங்களை வரவேற்கிறது
            </h2>
            <div className='mt-3 font-content text-base text-gray-800 dark:text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-base'>
              <p className='text-md lg:text-lg'>
                கர்பகுடி தம்பதிகளுக்கு நம்பிக்கையின் ஒளிக்கோபுரமாக இருந்து வருகிறது. அனுபவமிக்க
                மற்றும் அர்ப்பணிப்புடன் செயல்படும் எங்கள் நிபுணர்கள், செவிலியர்கள்,
                எம்ப்ரியாலஜிஸ்ட்கள் ஆகியோர், உங்கள் தேவைகளுக்கு விரைவாக, தொழில்முறை முறையில் மற்றும்
                அன்புடன் பதிலளிக்கின்றனர்.
                <br />
                <br />
                2011-ஆம் ஆண்டு தொடங்கப்பட்ட கர்பகுடி ஐவிஎப் மருத்துவமனை, பெண்கள் மற்றும் ஆண்களின்
                கருத்தரிக்காத பிரச்சினைகளைத் தீர்க்க, புதிய மருத்துவ தொழில்நுட்பங்களையும்
                முறைகளையும் முன்னோடியாக அறிமுகப்படுத்தி, செயல்படுத்தி வருகிறது. உலகின் அனைத்து
                மூலைகளிலிருந்தும் தம்பதிகள், தங்கள் கனவான குழந்தையைப் பெற எங்கள் மையத்தை நாடி
                வருகிறார்கள். நீங்கள் எங்களின் அடுத்த வெற்றிக் கதையாக இருப்பீர்கள் என்பதே எங்கள்
                மனமார்ந்த விருப்பமாகும்.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
