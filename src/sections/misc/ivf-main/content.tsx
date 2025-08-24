import Image from 'next/image';

const Content = () => {
  return (
    <div className='scroll-m-16 scroll-smooth' id='know-more'>
      <div className='relative bg-white pt-10 dark:bg-gray-800 lg:pt-24'>
        <div className='container relative m-auto px-3 md:px-12 lg:px-6'>
          <h2 className='mx-auto text-left font-heading text-4xl font-black lg:text-5xl'>
            IVF என்றால் என்ன? அது எவ்வாறு செயல்படுகிறது?
          </h2>{' '}
          <div className='mx-auto flex-wrap text-gray-800 dark:text-gray-200 md:flex'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='relative mx-auto ml-0 mt-8 space-y-8 text-left font-content md:mt-16 md:max-w-lg lg:max-w-2xl'>
                <p className=''>
                  கர்ப்பகுடி IVF மையம், முன்னணி கருத்தரிப்பு (fertility) மருத்துவமையங்களில்
                  ஒன்றாகும். இங்கு IVF சிகிச்சை உள்ளிட்ட பல்வேறு கருத்தரிப்பு சிகிச்சைகள்
                  வழங்கப்படுகின்றன.
                  <br />
                  <br />
                  IVF (In Vitro Fertilization) என்பது கருத்தரிக்க முடியாமல் தவிக்கும் தம்பதிகளுக்கு
                  குழந்தை பெற உதவும், மிகவும் பரவலாக பயன்படுத்தப்படும் செயற்கை இனப்பெருக்க நுட்பம்
                  (Assisted Reproductive Technology – ART) ஆகும். இதில், பெண்ணின் கருப்பையில்
                  இருந்து முட்டைகள் (eggs) எடுக்கப்பட்டு, ஆண் விந்தணுக்களுடன் (sperm) ஆய்வகத்தில்
                  சேர்க்கப்படுகின்றன. பின்னர் உருவாகும் கருவினங்கள் (embryos) பெண்ணின் கருப்பையில்
                  (uterus) மாற்றி வைக்கப்படுகின்றன, இதன் மூலம் கர்ப்பம் அடைய வாய்ப்பு அதிகரிக்கிறது.
                </p>
                <p>
                  கர்ப்பகுடி IVF மையத்தில் நவீன உபகரணங்களுடன் கூடிய ஆய்வகம், அனுபவமிக்க மருத்துவர்
                  குழு, திறமையான எம்ப்ரியாலஜிஸ்ட் குழு ஆகியோர் இணைந்து, ஒவ்வொரு தம்பதிக்கும்
                  தனிப்பட்ட சிகிச்சை அளித்து, கர்ப்பம் அடையும் வாய்ப்பை அதிகப்படுத்துகின்றனர்.
                </p>
                <h2 className='font-heading text-lg font-bold'>
                  IVF சிகிச்சையின் படிப்படையான செயல்முறை
                </h2>
              </div>
              <div className='-right-0 mx-auto mt-4 max-w-[50rem] lg:p-4'>
                <div className='relative w-full'>
                  <Image
                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722510346/Misc/PNG_25_yoa08y_1_cr2fpg.webp'
                    className='relative w-full bg-white/10 dark:brightness-75 dark:invert'
                    alt='Process of IVF Treatment in Bangalore'
                    loading='lazy'
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div>
              <ul className='space-y-3 pt-3 font-content'>
                <li>
                  <strong>முதல் ஆலோசனை (Initial Consultation):</strong> முதலில், கருத்தரிப்பு
                  நிபுணருடன் ஆலோசனை நடத்தப்படுகிறது. இதில் மருத்துவ வரலாறு, உடல் பரிசோதனை மற்றும்
                  தேவையான சோதனைகள் மேற்கொள்ளப்படுகின்றன.
                </li>
                <li>
                  <strong>கருவுறும் ஹார்மோன் தூண்டுதல் (Ovarian Stimulation):</strong> பெண்ணின்
                  கருப்பை முட்டை உற்பத்தியை அதிகரிக்க மருந்துகள் செலுத்தப்படுகின்றன. இதன் மூலம் பல
                  முட்டைகள் (eggs) ஒரே நேரத்தில் வளர்ச்சியடையும்.
                </li>
                <li>
                  <strong>முட்டை எடுப்பு (Egg Retrieval):</strong> முட்டைகள் வளர்ந்த பிறகு,
                  சுண்டையுடன் (ultrasound guided needle) கருப்பையிலிருந்து எடுக்கப்படுகின்றன. இது
                  சிறிய மயக்க மருந்துடன் (sedation/anesthesia) செய்யப்படும்.
                </li>
                <li>
                  <strong>உரச்சேர்க்கை (Fertilization):</strong> எடுக்கப்பட்ட முட்டைகள், ஆண்
                  விந்தணுக்களுடன் ஆய்வகத்தில் சேர்க்கப்படுகின்றன. உரம் சேர்ந்த முட்டைகள் சில நாட்கள்
                  வளர்த்துப் பார்க்கப்படுகின்றன.
                </li>
                <li>
                  <strong>கருவின மாற்று (Embryo Transfer):</strong> நல்ல முறையில் வளர்ந்த
                  கருவினங்கள், பெண்ணின் கருப்பையில் (uterus) ஒரு மெல்லிய குழாயின் (catheter) மூலம்
                  மாற்றப்படுகின்றன.
                </li>
                <li>
                  <strong>கர்ப்ப சோதனை (Pregnancy Test):</strong> கருவின மாற்றிய 2 வாரங்கள் கழித்து
                  கர்ப்ப சோதனை (blood test) மேற்கொள்ளப்படுகிறது.
                </li>
              </ul>
            </div>
            <div className='mt-8 font-content'>
              ஒரு முழு IVF சுழற்சி (cycle) சுமார் 3 வாரங்கள் ஆகும். சில நேரங்களில், சிகிச்சை
              பிரிக்கப்பட்டு செய்யப்படலாம்.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
