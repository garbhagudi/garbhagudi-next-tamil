import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <div className='fixed bottom-24 left-2 z-10 flex cursor-pointer items-center justify-center rounded-full bg-green-600 px-2 py-2 font-content font-bold text-white md:bottom-5 md:left-4'>
      <Link href='https://wa.me/919108910832?text=Hi'>
        <FaWhatsapp className='h-10 w-10 text-white md:h-8 md:w-8' />
      </Link>
    </div>
  );
};

export default FloatWhatsApp;
