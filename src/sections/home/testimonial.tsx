import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineSwipeLeft, MdOutlineRateReview } from 'react-icons/md';
import { BsFillChatSquareQuoteFill } from 'react-icons/bs';
import Carousel from 'nuka-carousel';

const Testimonial = () => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <section className='overflow-hidden bg-gradient-to-tr from-brandPink3/70 via-brandPurple/50 to-purple-100 py-8 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'>
      <FcGoogle className='mx-auto h-14 w-14 text-center' />
      <div className='text-center font-sans font-semibold dark:text-gray-200'>
        <MdOutlineRateReview className='mr-2 inline-block' />
        Reviews
      </div>

      <div className='flex items-center justify-center'>
        <div className='relative mx-auto flex max-w-7xl flex-row items-center justify-center'>
          <Carousel
            autoplay
            defaultControlsConfig={defaultControlsConfig}
            autoplayInterval={5000}
            className='mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-7xl'
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple lg:flex'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple lg:flex'
              >
                <HiChevronRight className='ml-1' />
              </button>
            )}
          >
            {data.map((item) => (
              <div className='flex flex-col justify-center' key={item.id}>
                <blockquote className='mt-8'>
                  <div className='mx-auto h-80 max-w-sm px-1.5 text-center font-content text-base font-medium tracking-tight text-gray-800 dark:text-gray-200 sm:max-w-md md:max-w-3xl md:text-lg lg:h-52 lg:leading-[1.8rem]'>
                    <div className='flex items-center justify-center'>
                      &quot;{item.review}&quot;
                    </div>
                  </div>
                </blockquote>
                <div className='mt-8'>
                  <div className='h-[2px] w-full rounded-lg bg-gradient-to-r from-gg-500 via-brandPurple to-purple-800 dark:from-gg-300 dark:via-purple-400 dark:to-gg-300'></div>
                  <div className='flex items-center justify-center space-x-3 pt-4'>
                    <div className='md:flex-shrink-0'>
                      <BsFillChatSquareQuoteFill className='text-xl text-gray-800 dark:text-white' />
                    </div>
                    <div className='flex items-center text-center'>
                      <div className='font-lexend text-xl font-semibold text-gray-800 dark:text-white'>
                        {item.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='mx-auto max-w-6xl py-1 pt-4 text-center font-content text-sm underline lg:text-right'>
        Swipe for more reviews <MdOutlineSwipeLeft className='inline-block' />
      </div>
    </section>
  );
};

export default Testimonial;

const data = [
  {
    id: 1,
    name: 'கவிதா ஜி',
    review:
      'நான் கர்பகுடி மருத்துவமனை வந்ததில் மிகவும் மகிழ்ச்சி அடைகிறேன். அவர்கள் சிறந்த சிகிச்சையை வழங்கினர். டாக்டர்கள் எனது சிகிச்சையில் மிகவும் ஆதரவு அளித்தார்கள். டாக்டர் அனைத்து மருத்துவ விவரங்களையும் விளக்கினார். மிகவும் நட்பாக இருந்து, என் கர்ப்பத்திற்கான பொறுப்புடன் கவனித்துக் கொண்டார். அனைத்து நர்ஸுகளும் மற்றும் பணியாளர்கள் நல்ல பராமரிப்பு செய்தார்கள். அவர்கள் சிறப்பாக ஆதரவு அளித்தார்கள். IVF சிகிச்சையில் நாங்கள் நேர்மறையான முடிவைப் பெற்றோம். கர்பகுடி குழுவிடமிருந்து கிடைத்த இந்த வாழ்நாள் பரிசை எதிர்பார்த்து காத்திருந்தோம் . டாக்டர் ஆஷா மேடம், டாக்டர் அனிதா மேடம் மற்றும் கர்பகுடி முழு குழுவிற்கும் எங்களின் இதயம் கனிந்த நன்றி.',
  },
  {
    id: 2,
    name: 'பத்மப்ரியா கணபதி ராமன்',
    review:
      'கடந்த 6-7 மாதங்களாக தொடர்ந்து வழங்கிய ஆதரவுக்கு கர்பகுடிக்கு மனமார்ந்த நன்றி. சிகிச்சைக்காக இங்கு வந்த அந்த தருணத்திலேயே நல்ல உணர்வு ஏற்பட்டது. பணியாளர்கள் அன்பான வாழ்த்துகளும் சிரிப்பும் கொண்டு வரவேற்றார்கள். ஒவ்வொரு ஆலோசனைக்கும் பிறகு, செவிலியர்கள் ஒவ்வொரு விவரத்தையும் விளக்கினார்கள். ஒவ்வொரு நேர்முகப்புக்கும் முன்பாக அழைப்புகள் வந்தது, அது வருகையை நினைவுபடுத்த மிகவும் உதவியாக இருந்தது. மகப்பேறு சிகிச்சையை மிகவும் நேர்மறையான மற்றும் நம்பிக்கையூட்டும் முறையில் அனுபவிக்க, கர்பகுடியை நான் உறுதியாக பரிந்துரைக்கிறேன். இந்த சிறந்த பணியை தொடர்ந்து செய்யுங்கள்.',
  },
];
