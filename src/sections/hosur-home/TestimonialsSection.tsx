import SectionHeader from './SectionHeader';

const testimonials = [
  {
    text: '5 ஆண்டுகளுக்கும் மேல் கனவு கண்டோம். கர்பகுடி ஓசூரில் நாங்கள் கண்ட அன்பும் அறிவும் எங்களை பெற்றோராக மாற்றியது. இப்போது எங்கள் வீட்டில் குட்டி சிரிக்கிறது.',
    initial: 'ம',
    name: 'மாலதி & கணேஷ்',
    loc: 'ஓசூர்',
    avatarBg: 'bg-rose',
  },
  {
    text: 'வெளியூர் போக வேண்டியதில்லை என்று நினைத்தோம். ஓசூரிலேயே இந்த அளவு சிறந்த சிகிச்சை கிடைக்கும் என்று நம்பவில்லை. டாக்டர் குழு மிகவும் அன்பாக இருந்தனர்.',
    initial: 'ர',
    name: 'ரேணுகா & சுரேஷ்',
    loc: 'ஓசூர்',
    avatarBg: 'bg-teal',
  },
  {
    text: 'IVF சிகிச்சை பற்றி பயமாக இருந்தது. ஆனால் கர்பகுடியில் ஒவ்வொரு படியும் புரிந்துகொண்டு தைரியமாக நடந்தோம். இன்று எங்கள் குழந்தை ஒரு வயதாகிவிட்டது!',
    initial: 'ப',
    name: 'பவித்ரா & அர்ஜுன்',
    loc: 'கிருஷ்ணகிரி',
    avatarBg: 'bg-saffron',
  },
];

export default function TestimonialsSection() {
  return (
    <section className='bg-white px-6 py-[4.5rem]'>
      <div className='mx-auto max-w-[960px]'>
        <SectionHeader
          eyebrow='நன்றி சொல்கிறார்கள்'
          title={
            <>
              அவர்கள் கண்ணீரில் தொடங்கி
              <br />
              <span className='text-teal'>சிரிப்பில் முடித்தனர்</span>
            </>
          }
        />
        <div className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5'>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className='relative rounded-[14px] border border-hairline bg-white p-6'
            >
              <span
                className='absolute right-4 top-2.5 select-none font-serif-tamil text-[4rem] leading-none text-saffron-light'
                aria-hidden='true'
              >
                &ldquo;
              </span>
              <p className='mb-5 font-serif-tamil text-[14px] leading-[1.7] text-charcoal'>
                {t.text}
              </p>
              <div className='flex items-center gap-2.5'>
                <div
                  className={`flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full font-serif-tamil text-[14px] font-semibold text-white ${t.avatarBg}`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className='text-[13px] font-semibold text-charcoal'>{t.name}</div>
                  <div className='text-[12px] text-muted'>{t.loc}</div>
                  <div className='text-[12px] tracking-[1px] text-saffron'>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
