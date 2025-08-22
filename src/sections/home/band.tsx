import React from 'react';
import Link from 'next/link';

const Band = () => {
  return (
    <div className='mx-auto mt-2 max-w-7xl bg-white px-3 dark:bg-gray-800 sm:px-6 lg:px-4'>
      <div className='mx-auto block border-b border-gray-300 text-center font-benne text-xl font-bold dark:border-gray-600 md:text-2xl'>
        <div className='block md:inline-block'>
          <span className='text-brandPink dark:text-gg-400'>ಬಾಳಿಗೊಂದು ಬೇಕು </span>{' '}
          <span className='text-brandPurpleDark dark:text-brandPurple2'> ಕರುಳಿನಾ ಕುಡಿ </span>{' '}
        </div>{' '}
        <div className='block md:inline-block'>
          <span className='text-brandPink dark:text-gg-400'>ನಿಮ್ಮ ಕನಸನ್ನು ನನಸಾಗಿಸುತ್ತದೆ</span>{' '}
          <span className='text-brandPurpleDark dark:text-brandPurple2'> ಗರ್ಭಗುಡಿ </span>
        </div>
      </div>
      <div className='pt-4 text-center'>
        <div className='mx-auto rounded-xl bg-gray-300 px-4 py-2 font-content text-lg font-semibold dark:bg-gray-700 lg:w-96'>
          நியமனங்களுக்கு 📞(கால்) செய்யவும்:{' '}
          <Link
            href={'tel:+919108910832'}
            className='block text-gg-500 hover:underline dark:text-gg-400 md:inline-flex'
          >
            +91 9108 9108 32
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Band;
