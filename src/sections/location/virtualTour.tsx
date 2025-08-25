const VirtualTour = ({ link1, link2, link3 }) => {
  return (
    <div className='mx-auto max-w-7xl'>
      {link1 && (
        <h3 className='mx-auto py-3 text-center font-heading text-2xl font-bold text-gray-800 dark:text-gray-200 md:text-4xl'>
          மெய்நிகர் சுற்றுப்பயணம்
        </h3>
      )}
      <ul className='mx-auto grid max-w-7xl grid-cols-1 px-2 py-8 sm:gap-x-0 lg:grid-cols-3'>
        {link1 && (
          <li>
            <div className='space-y-4'>
              <div className='relative mx-auto mt-4 h-[24rem] overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10'>
                <iframe
                  width='100%'
                  height='100%'
                  className='absolute inset-0'
                  loading='lazy'
                  title='map'
                  src={link1}
                ></iframe>
              </div>
            </div>
          </li>
        )}
        {link2 && (
          <li>
            <div className='space-y-4'>
              <div className='relative mx-auto mt-4 h-[24rem] overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10'>
                <iframe
                  width='100%'
                  height='100%'
                  className='absolute inset-0'
                  loading='lazy'
                  title='map'
                  src={link2}
                ></iframe>
              </div>
            </div>
          </li>
        )}
        {link3 && (
          <li>
            <div className='space-y-4'>
              <div className='relative mx-auto mt-4 h-[24rem] overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10'>
                <iframe
                  width='100%'
                  height='100%'
                  className='absolute inset-0'
                  loading='lazy'
                  title='map'
                  src={link3}
                ></iframe>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default VirtualTour;
