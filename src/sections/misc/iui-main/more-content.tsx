import Image from 'next/image';

const ContentXtra = () => {
  return (
    <div
      className='mx-auto max-w-7xl scroll-m-10 py-10 text-gray-800 dark:text-gray-200 lg:py-16'
      id='procedure-of-iui'
    >
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
        <div className='px-3'>
          <h3 className='py-4 font-heading text-2xl font-bold lg:text-3xl'>
            IUI சிகிச்சையின் செயல்முறை
          </h3>
          <div className='mt-4 font-content'>
            IUI என்பது பெண்களின் கருப்பைக்குள் விந்தணுக்களை செலுத்துவதன் மூலம் கர்ப்பம் அடைய உதவும்
            சிகிச்சை.
            <h4 className='py-4 font-heading text-xl font-bold lg:text-2xl'>செயல்முறை:</h4>
            <ul className='ml-4 max-w-lg list-outside list-disc space-y-3 pt-4'>
              <li>
                முதலில், பெண்களின் கருப்பையை தூண்டும் மருந்துகள் கொடுத்து, பல முட்டைகள் உற்பத்தி
                செய்ய வைக்கப்படுகிறது.
              </li>
              <li>
                பிறகு, ஆண் துணையிடமிருந்து (அல்லது விந்து தானம் கொடுத்தவரிடமிருந்து) விந்து
                சேகரிக்கப்படுகிறது.
              </li>
              <li>
                அந்த விந்து சுத்திகரிக்கப்பட்டு (washed & prepared), கர்ப்பத்திற்கு உகந்த வகையில்
                தயாராக்கப்படுகிறது.
              </li>
              <li>
                ஒரு மெல்லிய குழாய் (Catheter) மூலம் கருப்பை வழியாக, விந்து கருப்பைக்குள்
                செலுத்தப்படுகிறது.
              </li>
              <li>சிகிச்சைக்கு பின், பெண் சில நேரம் ஓய்வெடுத்து, பின்னர் வீட்டிற்கு செல்லலாம்.</li>
            </ul>
          </div>
        </div>
        <div className='px-3'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722504481/IUI-Process_01_lo7z7w_1_ggwdwi.webp'
            alt='IUI treatment Process'
            className='w-full rounded-lg'
            width={320}
            height={320}
            loading='lazy'
          />
        </div>
      </div>
      <div className='mt-4 px-3 font-content'>
        பொதுவாக, IUI சிகிச்சை முட்டை உற்பத்தி மருந்துகளுடன் சேர்த்து செய்யப்படுகிறது.
      </div>
      <div>
        <h3 className='px-3 pt-6 font-heading text-lg font-bold'>
          IUI கர்ப்பத்திற்கு எப்படி உதவுகிறது?
        </h3>
        <div className='mt-4 px-3 font-content'>
          <ul className='ml-4 max-w-lg list-outside list-disc space-y-3 pt-4'>
            <li>
              IUI மூலம், விந்தணுக்கள் நேரடியாக கருப்பைக்குள் செலுத்தப்படுவதால், அவை Fallopian குழாயை
              எளிதில் அடைய முடிகிறது.
            </li>
            <li>
              இவ்வாறு செய்வதால் கருப்பை கழிவு (cervical mucus) சிக்கல்கள் தவிர்க்கப்படுகின்றன.
            </li>
            <li>
              மேலும், சிகிச்சை முட்டை வெளியேறும் (Ovulation) நேரத்துடன் இணைக்கப்பட்டு
              செய்யப்படுவதால், விந்தணுக்கள் மற்றும் முட்டைகள் சந்திக்கும் வாய்ப்பு அதிகரிக்கிறது.
            </li>
            <li>இதனால் உரம் சேர்க்கை (fertilization) சாத்தியம் உயரும்.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentXtra;
