import Link from 'next/link';

const Content = () => {
  return (
    <div className='mx-auto max-w-7xl text-gray-800 dark:text-gray-200' id='know-more'>
      <h2 className='py-10 text-center font-heading text-2xl font-bold lg:py-16 lg:text-3xl'>
        IUI சிகிச்சை என்றால் என்ன?
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <div className='col-span-3 max-w-4xl px-3 font-content'>
          <h3 className='pb-6 font-heading text-lg font-bold'>IUI அறிமுகம்</h3>
          <div>
            IUI (Intrauterine Insemination) என்பது கருத்தரிப்பு சிகிச்சை முறையாகும். இதில்,
            விந்தணுக்கள் நேரடியாக பெண்களின் கருப்பைக்குள் செலுத்தப்படுகின்றன. இது கர்ப்பம் அடையும்
            வாய்ப்பை அதிகரிக்கிறது.
            <br />
            இந்த சிகிச்சை, பெரும்பாலும் முட்டை உற்பத்தி (ovulation) சிக்கல்கள், குறைந்த விந்தணு
            எண்ணிக்கை, அல்லது கருப்பை கழிவு (cervical mucus) பிரச்சனைகள் காரணமாக ஏற்படும்
            கருத்தரிப்பு சிக்கல்களுக்கு பரிந்துரைக்கப்படுகிறது.
            <br />
            IUI சிகிச்சை எளிமையானது, அதிகமான அறுவை சிகிச்சை சிக்கல்கள் இல்லாதது (low-invasive),
            மேலும் இது தனித்த சிகிச்சையாகவும் அல்லது முட்டை உற்பத்தியை தூண்டும் மருந்துகளுடன்
            (Ovulation Induction Medications) சேர்த்து பயன்படுத்தப்படலாம்.
            <br />
            IUI வெற்றி விகிதம் – பெண்களின் வயது, கருத்தரிப்பு காரணம் போன்றவற்றைப் பொறுத்து
            மாறுபடும்.
          </div>
        </div>
        <div className='col-span-1 mt-16 rounded-lg bg-gray-300 px-3 pb-5 dark:bg-gray-700 lg:mt-0 lg:pt-7'>
          <h3 className='pb-6 pt-5 font-heading text-lg font-bold lg:pt-0'>துரித இணைப்புகள்</h3>
          <div className='font-content'>
            <ul className='list-outside list-disc space-y-3'>
              <li className='ml-4 hover:text-brandPink hover:underline'>
                <Link href='#iui-centres-in-bangalore'> ஓசூரில் IUI மையம்</Link>
              </li>
              <li className='ml-4 hover:text-brandPink hover:underline'>
                <Link href='#cost-of-iui-in-bangalore'>ஓசூரில் IUI சிகிச்சை செலவு</Link>
              </li>
              <li className='ml-4 hover:text-brandPink hover:underline'>
                <Link href='#procedure-of-iui'>IUI செயல்முறை</Link>
              </li>
              <li className='ml-4 hover:text-brandPink hover:underline'>
                <Link href='#faq'>அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
