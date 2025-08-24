import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const Video = () => {
  return (
    <div>
      <main className='mx-auto mb-16 max-w-7xl px-4 sm:px-6'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='flex flex-col items-start justify-center sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left'>
            <div>
              <div className='mt-1 block font-heading text-4xl font-extrabold tracking-tight sm:text-4xl xl:text-5xl'>
                <h1 className='space-x-3'>
                  <span className='text-gray-800 dark:text-gray-200'>கர்பகுடியின் </span>
                  <span className='text-gg-400'></span>
                </h1>
              </div>
            </div>
            <p className='mt-3 font-content text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
              &quot;ஒவ்வொரு தம்பதியருக்கும் எட்டக்கூடிய விலையில், உயர்தர இனப்பெருக்க சுகாதார சேவைகளை
              வழங்குவது எங்கள் பணி. மனிதகுல நலனுக்காக கல்வி, ஆராய்ச்சி மற்றும் சுகாதாரத்தில்
              சிறப்பையும் வெற்றியையும் அடைவதில் நாம் உறுதியுடன் செயல்படுகிறோம்.&quot;
            </p>
          </div>
          <div className='relative mt-12 sm:mx-auto sm:max-w-xl lg:col-span-6 lg:mx-0 lg:mt-0 lg:max-w-xl'>
            <div className='relative mx-auto aspect-video w-full overflow-hidden rounded-lg shadow-lg'>
              <LiteYouTubeEmbed
                id='3l4gWsVlhE4'
                title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                poster='maxresdefault'
                webp={true}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
