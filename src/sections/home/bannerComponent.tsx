import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';

interface bannerAsset {
  url: string;
  width?: number;
  height?: number;
}

interface bannerRecord {
  id: string;
  title: string;
  url: string;
  image: bannerAsset;
  mobileImage?: bannerAsset | null;
}

// Hygraph resizes from the URL. next.config.mjs sets `images.unoptimized: true`, so nothing
// resizes these for us — without the transform the 2.2 MB mobile original ships as-is.
const webp = (url: string, width: number) =>
  url?.replace(/\/([^/]+)$/, `/output=format:webp/resize=width:${width}/$1`);

const BannerComponent = ({ banners = [] }: { banners: bannerRecord[] }) => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  if (!banners.length) return null;

  return (
    <div>
      <Carousel
        autoplay
        autoplayInterval={5000}
        className='border-0 shadow-2xl drop-shadow-2xl'
        defaultControlsConfig={defaultControlsConfig}
        wrapAround
        dragging
        enableKeyboardControls
        pauseOnHover
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            aria-label='Previous banner'
            className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
          >
            <HiChevronLeft className='mr-1' />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            aria-label='Next banner'
            className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
          >
            <HiChevronRight className='ml-1' />
          </button>
        )}
      >
        {banners.map((banner, index) => {
          const mobile = banner?.mobileImage ?? banner?.image;
          return (
            <Link
              href={banner?.url || '#'}
              target='_blank'
              rel='noreferrer'
              key={banner?.id ?? index}
            >
              <picture>
                {/* Plain <picture>, not next/image: under `unoptimized` getImageProps returns
                    `srcSet: undefined`, and a <source> without srcSet is skipped — desktop
                    would fall through and render the portrait creative. width/height on both
                    nodes stop the differing aspect ratios causing a layout shift. */}
                <source
                  media='(min-width: 768px)'
                  srcSet={webp(banner?.image?.url, 1920)}
                  width={banner?.image?.width}
                  height={banner?.image?.height}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={webp(mobile?.url, 1080)}
                  alt={banner?.title}
                  width={mobile?.width}
                  height={mobile?.height}
                  className='h-full w-full object-cover'
                />
              </picture>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BannerComponent;
