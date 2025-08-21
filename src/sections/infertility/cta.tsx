import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Form = dynamic(() => import('sections/LandingPages/eggFreezing/form'), { ssr: false });

const CTA: React.FC = () => {
  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleBookAppointmentBtn = () => {
    if (path.includes('/lp/egg-freezing')) {
      setIsOpen(true);
    } else {
      router.push(`
        /contact/enquiry?pageVisit=${path}`);
    }
  };
  return (
    <div
      className='relative flex h-screen max-h-64 items-center justify-center bg-cover bg-center shadow-xl'
      style={{
        backgroundImage: `url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1691232590/Misc/happy-smiling-mother-playing-with-newborn-child-comfy-light-bedroom-front-window-moments-motherhood-happiness-with-kids-family-concept-min_txfdml.webp')`,
      }}
    >
      <div className='absolute h-full w-full bg-gray-800 opacity-30 dark:opacity-60'></div>
      <div className='z-10 max-w-lg rounded-lg bg-white bg-opacity-75 p-8 shadow-md dark:bg-gray-800'>
        <h2 className='mb-2 font-heading text-2xl font-bold'>Get Started Today!</h2>
        <p className='mb-4 font-content font-medium text-gray-800 dark:text-gray-200'>
          Contact us now to start your journey with us and experience the joy of parenthood.
        </p>
        <button
          onClick={handleBookAppointmentBtn}
          className='rounded-lg bg-gg-500 px-4 py-2 font-semibold text-white hover:bg-gg-400 focus:outline-none dark:bg-gray-600 dark:hover:bg-gg-400'
        >
          Book an Appointment
        </button>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleClose}
        >
          <Form />
        </div>
      )}
    </div>
  );
};

export default CTA;
