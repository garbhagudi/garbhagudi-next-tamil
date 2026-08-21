const ASSETS = 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f';

// Hygraph resizes from the URL. next.config.mjs sets `images.unoptimized: true`, so nothing
// resizes these for us — without the transform the 2.2 MB mobile original ships as-is.
const webp = (handle: string, width: number) =>
  `${ASSETS}/output=format:webp/resize=width:${width}/${handle}`;

const DESKTOP = 'cmt1ii3990zbu06odn5ov931h'; // Web B Desktop.jpg, 4816x1586
const MOBILE = 'cmt2ql32y4bh006o330nl4gm7'; // Web B Mobile.jpg, 3113x4357

// Creatives are hardcoded here, unlike the CMS-driven homepage banner, so changing them
// needs a deploy. Keep the 768px breakpoint in step with sections/home/bannerComponent.tsx.
const Banner = () => {
  return (
    <div className='w-full'>
      <picture>
        {/* Plain <picture>, not next/image: under `unoptimized` getImageProps returns
            `srcSet: undefined`, and a <source> without srcSet is skipped — desktop would
            fall through and render the portrait creative. width/height on both nodes stop
            the differing aspect ratios causing a layout shift. */}
        <source
          media='(min-width: 768px)'
          srcSet={webp(DESKTOP, 1920)}
          width={4816}
          height={1586}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={webp(MOBILE, 1080)}
          alt='Garbhagudi IVF Banner'
          width={3113}
          height={4357}
          className='h-auto w-full'
        />
      </picture>
    </div>
  );
};

export default Banner;
