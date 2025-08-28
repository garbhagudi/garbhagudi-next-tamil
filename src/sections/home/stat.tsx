import Image from 'next/image';

const metrics = [
  {
    id: 1,
    stat: '15,000+',
    emphasis: 'மகிழ்ச்சியான குடும்பங்கள்',
  },
  {
    id: 2,
    stat: '500+',
    emphasis: 'இலவச கருத்தரிப்பு விழிப்புணர்வு முகாம்கள்',
  },
  {
    id: 3,
    stat: '9',
    emphasis: 'கருத்தரிப்பு மையங்கள் – கர்நாடகாவில்',
  },
  {
    id: 4,
    stat: '',
    emphasis: 'சிறந்த ஐவிஎப் வெற்றிவிகிதம்',
  },
];

const Stat = () => {
  return (
    <div className='relative mx-auto bg-white dark:bg-gray-800'>
      <div className='absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full'>
        <div className='h-full w-full xl:grid xl:grid-cols-2'>
          <div className='h-full xl:relative xl:col-start-2'>
            <Image
              className='h-full w-full object-cover opacity-70 xl:absolute xl:inset-0'
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722501966/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0_1_i7oozx.webp'
              alt='Successful IVF Treatment In Banglore'
              height={1024}
              width={1024}
              loading='lazy'
            />
            <div
              aria-hidden='true'
              className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
            />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8'>
        <div className='relative pb-64 pt-12 sm:pb-64 sm:pt-24 xl:col-start-1 xl:pb-24'>
          <p className='mt-3 font-heading text-3xl font-extrabold text-gray-800 dark:text-gray-200'>
            எங்கள் இடையறாத வெற்றி பயணம்
          </p>
          <p className='mt-5 font-content text-lg text-gray-800 dark:text-gray-200'>
            கர்பகுடி என்பது கனவுகள் நினைவாகும் இடம், நம்பிக்கைகள் ஒருபோதும் குறையாத இடம்,
            வாய்ப்புகள் முடிவில்லாமல் இருக்கும் இடம். கர்பகுடி சிறந்த ஐவிஎப் மையங்களில் ஒன்றாக,
            உங்கள் குழந்தையை கையில் தாங்கும் அந்த பொற்கணத்தை நீங்கள் அனுபவிக்க நாங்கள் இடையறாது
            உழைக்கிறோம்.
            <br />
            எங்கள் சிகிச்சை மற்றும் பராமரிப்பு தரத்துடன் சேர்த்து, அதிக வெற்றிவிகிதத்தை அடைய உதவும்
            சில முக்கிய காரணங்கள்:
          </p>
          <div className='mt-12 flex flex-col gap-x-6 gap-y-8'>
            {metrics.map((item) => (
              <p key={item.id}>
                {item?.stat && (
                  <span className='block font-heading text-2xl font-bold text-gray-800 dark:text-gray-200'>
                    {item.stat}
                  </span>
                )}
                <span className='mt-1 block text-base text-gray-800 dark:text-gray-200'>
                  <span className='font-content font-medium text-gray-800 dark:text-gray-200'>
                    {item.emphasis}
                  </span>{' '}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stat;
