import { Phone } from 'lucide-react';
// import { PHONE_HREF } from './constants';

export default function HeroSection() {
  return (
    <section className='relative grid place-items-center overflow-hidden bg-white px-6 py-20 pb-16 text-center'>
      <span className='bg-saffron-light font-ui text-saffron-dark relative mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-semibold'>
        <span className='bg-saffron h-1.5 w-1.5 rounded-full' />
        கர்பகுடி கருத்தரித்தல் மையம் – ஓசூர்
      </span>

      <h1 className='font-serif-tamil text-charcoal relative mx-auto mb-4 max-w-[700px] text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.35]'>
        உங்கள் வீட்டிலும்
        <br />
        <em className='text-rose not-italic'>குட்டி காலடிச் சத்தம்</em>
        <br />
        கேட்கட்டும்
      </h1>

      <p className='font-serif-tamil text-muted relative mx-auto mb-2 max-w-[560px] text-[clamp(1.1rem,2.5vw,1.4rem)] leading-[1.6]'>
        உங்கள் பெற்றோராகும் கனவு…
      </p>
      <p className='font-serif-tamil text-teal relative mb-10 text-[clamp(1.2rem,2.5vw,1.5rem)] font-semibold'>
        நினைவாகலாம் ✦
      </p>

      <div className='relative flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:items-center'>
        <a
          href='#form'
          className='bg-saffron font-sans-tamil hover:bg-saffron-dark rounded-[10px] px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:-translate-y-0.5'
        >
          இலவச ஆலோசனை பெறுங்கள்
        </a>
        <a className='border-hairline font-sans-tamil text-charcoal hover:border-saffron hover:bg-saffron-light inline-flex items-center gap-2 rounded-[10px] border-[1.5px] px-7 py-3.5 text-[15px] font-medium transition-colors'>
          <Phone className='h-4 w-4' />
          இப்போதே அழைக்கவும்
        </a>
      </div>
    </section>
  );
}
