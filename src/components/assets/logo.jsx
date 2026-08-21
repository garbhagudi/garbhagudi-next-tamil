import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src='https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmt2illy438ya06phso2ktvyr'
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
