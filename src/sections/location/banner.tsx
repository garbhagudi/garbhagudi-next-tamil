const ASSETS = 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f';

const webp = (handle: string, width: number) =>
  `${ASSETS}/output=format:webp/resize=width:${width}/${handle}`;

const DESKTOP = 'cmv0ldlnp71zz06ph6fapolya';
const MOBILE = 'cmv0le1au723006phpdi3zylh';

const Banner = () => {
  return (
    <div className='w-full'>
      <picture>
        <source
          media='(min-width: 768px)'
          srcSet={webp(DESKTOP, 1920)}
          width={4816}
          height={1586}
        />
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
