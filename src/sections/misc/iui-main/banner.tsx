import Link from 'next/link';
import Image from 'next/image';
import Form from 'sections/LandingPages/Performant/form';

const Banner = () => {
  return (
    <div>
      <div className='relative grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1744978945/April_Month_Landing_Page_Latest-02_zle4xm.webp'
            width={720}
            height={360}
            alt='Start IVF from as low as 90K'
            priority={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='hidden h-full w-full md:block'
          />
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1745217384/April_Month_Landing_Page_Latest--02_sa0uzt.webp'
            width={420}
            height={360}
            alt='Start IVF from as low as 90K'
            priority={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='h-full w-full md:hidden'
          />
        </div>
        <div className='flex flex-col items-center justify-center bg-[#005e7e]' id='leadForm'>
          <div className='pb-4 pt-4 text-center font-[B612] text-xl font-bold text-white lg:text-2xl'>
            Book Your Appointment
          </div>
          <div className='flex h-fit w-full items-center justify-center'>
            <Form />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-5 text-gray-800 dark:text-gray-200'>
        <div className='w-full text-center md:w-11/12 lg:w-3/4'>
          <div className='font-heading text-xl font-bold xl:text-2xl'>
            ஓசூரில் IUI சிகிச்சையுடன் உங்கள் அன்பின் மழலைக்குழந்தையை அணைப்பதன் மகிழ்ச்சியை
            அனுபவியுங்கள்.
          </div>
          <div className='mt-4 font-content text-base font-semibold'>
            முன்னணி கருத்தரிப்பு நிபுணர்கள் + நவீன தொழில்நுட்பம் – உங்கள் பெற்றோராகும் கனவை நனவாக்க
          </div>
          <div className='pt-5 font-content text-base'>
            ஓசூரில் அமைந்துள்ள எங்கள் நவீன கருத்தரிப்பு மையம், குடும்பம் அமைக்க விரும்பும்
            தம்பதிகளுக்கு நம்பிக்கையும், புதிய ஒளியும் அளிக்கிறது. அனுபவமிக்க கருத்தரிப்பு
            நிபுணர்கள் மற்றும் முன்னேற்றமான தொழில்நுட்பத்துடன், பெற்றோராகும் உங்கள் பயணத்தின்
            ஒவ்வொரு கட்டத்திலும் நாங்கள் உங்களுடன் இருக்கிறோம்.
          </div>
        </div>
        <Link
          href={'#leadForm'}
          className='mt-5 rounded-lg bg-gg-500 px-3 py-2 font-content text-lg font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-500'
        >
          இப்போதே ஆலோசனை செய்யுங்கள்
        </Link>
      </div>
    </div>
  );
};

export default Banner;
