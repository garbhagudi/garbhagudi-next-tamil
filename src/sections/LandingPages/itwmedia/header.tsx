import Logo from 'components/assets/logo';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-3'>
        <div className='flex items-center justify-between py-3'>
          <Link href={'/'}>
            <Logo />
          </Link>
          <Link
            href='tel:+919108910832'
            className='rounded-md bg-gg-500 px-3 py-2 font-lexend text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-gg-600'
          >
            +91 9108 9108 32
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
