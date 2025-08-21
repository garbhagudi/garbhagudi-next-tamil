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
    name: 'Anjali Shivarkar',
    review:
      'GarbhaGudi is a hope to any couple. They provide the best service. Doctors are very well-experienced and truly amazing in their work. Very well-maintained center. Staffs are well trained and they are very supportive throughout the treatment journey with constant follow-up calls. highly recommended. Keep up the same spirit.',
  },
  {
    id: 2,
    name: 'Kavitha G',
    review:
      'I am very happy that I visited garbhagudi hospital, they provided the best treatment.. Doctors are very supportive in my treatment she explained all medical details, she is to friendly and took at most care and responsibility towards my pregnancy, all sister and staff took good responsibility and supported us very well we got positive results from IVF treatment and waiting for a lifetime gift that we received from GarbhaGudi team .... We wholeheartedly are very thankful to Dr Asha mam, Dr. Anitha mam and the entire team of GARBHAGUDI 🙏❤️',
  },
  {
    id: 3,
    name: 'Anjali Khadtare',
    review:
      'The service at garbhagudi IVF Centre was very good. All staffs and Doctor were ready to assist at anytime. We are very pleased and thankful for the help, assistance and support provided by the Doctor and their staff. Wonderful efforts of them resulted in us for a joyful and successful life. Thanks to all.',
  },
  {
    id: 4,
    name: 'Afreen Khan',
    review:
      "When I googled about the best Hospital, I got to see many and later reading the reviews and many comments, I chose the best one of all. I have no words to feel how good and talented the Doctor is. And you also the staff, all are very friendly and yes they also help you to understand all the problems you are going through. Overall I'm happy that I selected this place for our treatment and yes I'm happy with the result.",
  },
  {
    id: 5,
    name: 'Sharifa Begum',
    review:
      'Received great response from all the staff members, Doctor give us sufficient time to listen and explain in details of what had happened and what need to do... Overall it was a good experience to visit GarbaGudi.. You people are doing a very good job by creating happiness and igniting light in the dark life... of a couple.. I wish u all the best .. Thank you ...',
  },
  {
    id: 6,
    name: 'Sonal Thorat',
    review:
      'I cannot express how much thankful I am to the entire team of GarbhaGudi hospital. We got positive results in the first visit itself. Front desk staff nurses and doctors all are very cooperative. I request to visit this branch once if you are struggling with infertility issues. And one of the best things is the front desk team will follow up with you give reminders for all visits and scans.. overall 10/10 !!!',
  },
  {
    id: 7,
    name: 'Padmapriya Ganapathy Raman',
    review:
      'Thanks to GarbhaGudi for their constant support for the past 6-7 months. The moment we reached the place to get treated, we felt positive vibes. The staff were welcoming with their warm wishes and smile, nurses explained each and every detail post every consultation. I used to receive calls before every appointment which was very much helpful in remembering the visits. I would strongly recommend GarbhaGudi Electronic City for experiencing fertility treatment in a very positive and convincing way. Continue this great job.',
  },
  {
    id: 8,
    name: 'Sameekshya Pattnaik',
    review:
      'I am very happy to visit GarbhaGudi. I would say that they do miracles here. After trying for more than a year and tired of visiting doctors and clinics, I got to know about this place. The doctors and staff are really good, they understand the mental trauma of a couple and they give real mental support to go through all of these. I got my positive pregnancy with their treatment. They have transparency of what treatment they are giving and why. I am forever grateful to GarbhaGudi and the staff. I would suggest all the couples who are trying to conceive must visit here once. Thank you GarbhaGudi for giving me the gift of life.',
  },
  {
    id: 9,
    name: 'Manikandan Hariharan',
    review:
      "Extremely happy today. My wife is 90 days pregnant. The timely follow-ups with the treatment made by the doctor and her team is highly appreciated, without which the end result might not have been possible. Also, the hospital won't levy unnecessary treatment costs or treatments. Every procedure had its own cause and a good outcome. I strongly recommend this GarbhaGudi Marathahalli branch for those who are dealing with infertility issues.",
  },
  {
    id: 10,
    name: 'Prathap Kumar',
    review:
      'I would really recommend GarbhaGudi IVF for people who want to have a baby. It was really an amazing experience having babies. Yes, it was hard initially but it brought so much happiness after we had our babies. Thank you very much GarbhaGudi IVF and thanks to the team & staff. Brilliant guidance. Amazing team. No words to describe... Thank you so much Team GarbhaGudi IVF.',
  },
];
