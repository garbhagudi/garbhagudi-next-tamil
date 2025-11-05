import { contactData } from 'sections/gg-care/content';
import Link from 'next/link';

const Faq = ({ branch }) => {
  return (
    <div>
      <section className='mx-auto max-w-7xl pt-8 font-content'>
        <div className='container mx-auto flex flex-col justify-center px-4 py-8 text-gray-800 dark:text-gray-200 md:p-8'>
          <h2 className='mb-8 text-center font-heading text-3xl font-bold leading-none sm:text-4xl'>
            அடிக்கடி கேட்கப்படும் கேள்விகள்
          </h2>
          <div className='divide-y divide-gray-700 dark:divide-gray-600'>
            <div className='space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                ஓசூரில் உள்ள கர்பகுடி IVF மையத்தை எவ்வாறு தொடர்பு கொள்வது?
              </h3>
              <div className='md:col-span-8 md:pl-0'>
                <strong>ஓசூர் கிளை IVF நிபுணரை தொடர்புகொள்ள :</strong>
                <br />
                <br />
                எங்கள்
                <Link href={'/gg-care'} className='text-gg-500 dark:text-gg-400'>
                  GG Care (Support) பக்கம்
                </Link>{' '}
                சென்று ஓசூர் கிளையைச் சார்ந்த அனைத்து தகவல்களையும் பெறலாம். மாற்றாக, பக்கத்தின் கீழே
                வலது மூலையில் உள்ள. <strong>அரட்டை வசதி (Chat Feature)</strong> மூலம் உங்கள்
                கேள்விகளை எங்களிடம் கேட்கலாம்.
                <div className='mt-4'>
                  {contactData.locations.map(
                    (items) =>
                      items.name === branch && (
                        <div key={items.id}>
                          <div className='font-semibold'>{items.name} branch</div>
                          <div>
                            <Link
                              href={`tel:${items.phone}`}
                              className='text-gg-500 hover:underline dark:text-gg-400'
                            >
                              {items.phone}
                            </Link>
                          </div>
                        </div>
                      )
                  )}
                </div>
                <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
                  {contactData.getInTouch.map((items) => (
                    <div key={items.id}>
                      <div>
                        <div className='font-bold'>{items.name}</div>
                        <div>
                          <Link
                            href={`mailto:${items.email}`}
                            className='font-semibold text-brandPurpleDark hover:underline dark:text-purple-400'
                          >
                            {items.email}
                          </Link>
                        </div>
                        <Link
                          href={`tel:${items.phone}`}
                          className='text-gg-500 hover:underline dark:text-gg-400'
                        >
                          {items.phone}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                ஓசூரில் IVF சிகிச்சைகளுக்கான எங்கள் வெற்றி விகிதங்கள் என்ன?
              </h3>
              <div className='md:col-span-8 md:pl-0'>
                <strong> ஓசூர் கர்பகுடி IVF மையத்தின் வெற்றி விகிதம்</strong> <br /> <br />
                IVF சிகிச்சையின் வெற்றி விகிதம் பல காரணிகளின் அடிப்படையில் மாறுபடும். பெண் வயது,
                ஆரோக்கிய நிலை, கருத்தரிப்பு பிரச்சினையின் தன்மை, எம்ப்ரியோ தரம் போன்றவை வெற்றிக்கு
                முக்கிய பங்கு வகிக்கின்றன.
                <br />
                மேலும், ஒவ்வொரு கருத்தரிப்பு மையத்திலும் வெற்றி விகிதங்கள் மாறுபடக்கூடும். எனவே,
                நம்பகமான மற்றும் சிறந்த அனுபவம் கொண்ட மருத்துவ மையத்தைத் தேர்வு செய்வது மிக
                முக்கியம். சில மையங்கள் குறிப்பிட்ட வகை நோயாளிகளுக்கோ அல்லது குறிப்பிட்ட IVF
                முறைகளுக்கோ அதிக வெற்றியை அளிக்கக்கூடும்.
              </div>
            </div>

            <div className='space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0'>
              <h3 className='font-semibold md:col-span-4'>
                ஓசூரில் IVF சிகிச்சைக்கான மொத்த செலவு எவ்வளவு?
              </h3>
              <div className='md:col-span-8 md:pl-0'>
                <strong>ஓசூரில் IVF சிகிச்சையின் மொத்த செலவு</strong>
                <br />
                <br />
                ஓசூரில் IVF சிகிச்சை செலவு, ஒவ்வொரு நோயாளியின் தேவைகளின் அடிப்படையில் மாறுபடும்.
                சராசரியாக, ஒரு IVF சுழற்சியின் (cycle) ஆரம்ப செலவு <strong>₹1,50,000</strong> முதல்
                துவங்குகிறது.
                <br />
                மொத்தச் செலவு மற்றும் கூடுதல் கட்டணங்கள் குறித்த விவரங்களை அறிய, IVF நிபுணருடன்
                ஆலோசனை செய்வது அவசியம்.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
