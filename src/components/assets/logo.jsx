import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1756452288/GG_Logo_Tamil_Hor_qh47bj.webp'
      id='svg'
      width='400'
      height='84'
      className='h-full w-44 dark:fill-white dark:brightness-0 dark:grayscale dark:invert xl:w-56'
      alt='logo'
      priority={false}
      loading='lazy'
    />
  );
};

export default Logo;
