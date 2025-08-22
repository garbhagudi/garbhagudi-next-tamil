import Image from 'next/image';

const WhyGG = () => {
  return (
    <div className='bg-gradient-to-br from-brandPink5 via-gray-100 to-brandPink5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'>
      <div className='container mx-auto px-6 pb-1 pt-10 lg:pb-10 lg:pt-16'>
        <section className='mb-16 text-gray-800'>
          <div className='shadow-3xl block rounded-lg bg-white drop-shadow-2xl dark:bg-gray-800'>
            <div className='flex flex-wrap items-center'>
              <div className='flex lg:w-6/12 xl:w-4/12'>
                <Image
                  width={100}
                  height={100}
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1677492148/Misc/coup-min_g3kq4k.webp'
                  alt='Why choose garbhagudi as the Best IVF Centre in Bangalore'
                  className='w-full rounded-t-lg lg:rounded-bl-lg lg:rounded-tr-none'
                />
              </div>
              <div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12'>
                <div className='px-6 py-12 md:px-12'>
                  <h2 className='mb-4 text-left font-heading text-2xl font-bold text-gray-800 dark:text-gray-200 lg:text-center'>
                    ஏன் உங்கள் குடும்பத்தை முழுமையாக்கும் அடுத்த அடிக்கல்லாக கர்பகுடியைத்
                    தேர்ந்தெடுக்க வேண்டும்?
                  </h2>
                  <p className='mb-6 font-content text-gray-800 dark:text-gray-200'>
                    கர்பகுடி 14 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன் முழுமையான கருத்தரிப்பு தீர்வுகளை
                    வழங்கும் முன்னணி ஐவிஎப் மையமும் மருத்துவமனையும் ஆகும். உலகப்புகழ் பெற்ற
                    நிபுணர்கள் குழு, நவீன தொழில்நுட்ப வசதிகள், வெளிப்படையான கட்டண முறைகள் மற்றும்
                    எப்போதும் உயர்ந்த வெற்றிவிகிதங்களைப் பெற்றுள்ளோம்.
                    <br />
                    கருத்தரிப்பு சிகிச்சையில் கர்பகுடியின் முழுமையான அணுகுமுறை, உடல், மனம், உணர்ச்சி
                    ஆகிய அனைத்தையும் கவனத்தில் கொண்டு, உணவுப் பரிந்துரைகள் மற்றும் மனஅழுத்த மேலாண்மை
                    உள்ளிட்ட சேவைகளை வழங்குகிறது.
                    <br />
                    ஐவிஎப் மையம் மற்றும் மருத்துவமனையில், உங்களுக்கு ஏற்ற தனிப்பட்ட மற்றும் அன்பான
                    பராமரிப்பிற்காக கர்பகுடியைத் தேர்ந்தெடுங்கள்.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyGG;
