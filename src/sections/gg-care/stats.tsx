const Stats = () => {
  return (
    <div className='bg-gg-400 dark:bg-gray-700'>
      <div className='mx-auto max-w-7xl px-4 py-12 text-white dark:text-gray-200 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='font-heading text-3xl font-extrabold sm:text-4xl'>
            உங்களுக்கு உதவ எப்போதும் தயாராக உள்ளோம்
          </h2>
          <p className='mt-3 font-content text-xl sm:mt-4'>எங்கிருந்தாலும்! எந்நேரமும்!</p>
        </div>
        <dl className='mt-10 text-center sm:mx-auto sm:grid sm:max-w-7xl sm:grid-cols-4 sm:gap-8'>
          <div className='flex flex-col'>
            <dd className='order-2 mt-2 font-heading text-5xl font-extrabold'>200,000+</dd>
            <dt className='order-1 font-content text-lg font-semibold leading-6'>தம்பதியருக்கு</dt>
            <dd className='order-3 font-content text-lg font-medium leading-6'>உதவியிருக்கிறோம்</dd>
          </div>
          <div className='mt-10 flex flex-col sm:mt-0'>
            <dd className='order-2 mt-2 font-heading text-5xl font-extrabold'>20+</dd>
            <dt className='order-1 font-content text-lg font-semibold leading-6'>மொழிகளில்</dt>
            <dd className='order-3 font-content text-lg font-medium leading-6'>சேவை கிடைக்கும்</dd>
          </div>
          <div className='mt-10 flex flex-col sm:mt-0'>
            <dd className='order-2 mt-2 font-heading text-5xl font-extrabold'> 10,00,000+</dd>
            <dt className='order-1 font-content text-lg font-semibold leading-6'>கேள்விகளுக்கு</dt>
            <dd className='order-3 font-content text-lg font-medium leading-6'>
              பதில் அளிக்கப்பட்டது
            </dd>
          </div>
          <div className='mt-10 flex flex-col sm:mt-0'>
            <dd className='order-2 mt-2 font-heading text-5xl font-extrabold'>24/7</dd>
            <dt className='order-1 font-content text-lg font-medium leading-6'>எப்போதும் கிடை</dt>
            <dd className='order-3 font-content text-lg font-medium leading-6'>க்கின்றோம்</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
