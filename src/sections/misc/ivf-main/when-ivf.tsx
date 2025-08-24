import Link from 'next/link';
import Image from 'next/image';

const WhenIvf = () => {
  return (
    <div className='container mx-auto px-3 py-10 lg:py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='mx-auto flex max-w-lg items-center justify-center p-3 lg:p-10'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722506430/Misc/avn-min_jo63l5_1_q4uv3u.webp'
            alt='When is IVF Treatment Recommended?'
            className='relative w-full dark:bg-white/10 dark:brightness-75 dark:invert'
            width={320}
            height={320}
            loading='lazy'
          />
        </div>
        <div className='text-gray-800 dark:text-gray-200'>
          <div className='mt-6 max-w-2xl'>
            <h2 className='font-heading text-3xl font-extrabold tracking-tight'>
              IVF எப்போது பரிந்துரைக்கப்படுகிறது?
            </h2>
            <div className='mt-4 font-content text-lg'>
              <ul className='space-y-3 text-base'>
                <li>Fallopian குழாய்கள் அடைப்பு/சேதம் ஏற்பட்டால்</li>
                <li>ஆண் கருத்தரிப்பு சிக்கல்கள் (குறைந்த விந்தணு எண்ணிக்கை, தரம் குறைவு)</li>
                <li>விளக்கம் தர முடியாத கருத்தரிப்பு பிரச்சனை (Unexplained Infertility)</li>
                <li>ஒழுங்கற்ற மாதவிடாய் / முட்டை வெளிவராத நிலை (Ovulation disorders)</li>
                <li>என்டோமெட்ரியோசிஸ் (Endometriosis)</li>
                <li>35 வயதுக்கு மேற்பட்ட பெண்கள் கர்ப்பம் தரிக்க முயற்சிக்கும் போது</li>
              </ul>
            </div>
            <div className='mt-6 text-center lg:text-left'>
              <Link
                href='/blogs/when-and-what-should-you-consider-to-evaluate-for-pregnancy'
                className='inline-flex rounded bg-gg-500 px-3 py-2 font-content font-bold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-500'
              >
                மேலும் அறியவும்
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenIvf;
