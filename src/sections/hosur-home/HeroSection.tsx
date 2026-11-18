import { Phone } from 'lucide-react';
import { PHONE_HREF } from './constants';

export default function HeroSection() {
  return (
    <section className='relative grid place-items-center overflow-hidden bg-white px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
      <span className='relative mb-6 inline-flex items-center gap-2 rounded-full bg-pp-pink-t px-4 py-1.5 font-ui text-[13px] font-semibold text-pp-pink-d'>
        <span className='h-1.5 w-1.5 rounded-full bg-pp-pink' />
        கர்பகுடி கருத்தரித்தல் மையம் – ஓசூர்
      </span>

      <h1 className='relative mx-auto mb-4 max-w-[700px] font-serif-tamil text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.35] text-pp-char'>
        உங்கள் வீட்டிலும்
        <br />
        <em className='not-italic text-pp-pink'>குட்டி காலடிச் சத்தம்</em>
        <br />
        கேட்கட்டும்
      </h1>

      <p className='relative mx-auto mb-2 max-w-[560px] font-serif-tamil text-[clamp(1.1rem,2.5vw,1.4rem)] leading-[1.6] text-pp-grey'>
        உங்கள் பெற்றோராகும் கனவு…
      </p>
      <p className='relative mb-10 font-serif-tamil text-[clamp(1.2rem,2.5vw,1.5rem)] font-semibold text-pp-mauve-d'>
        நினைவாகலாம் ✦
      </p>

      <div className='relative flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:items-center'>
        <a
          href='#form'
          className='rounded-[10px] bg-pp-pink px-7 py-3.5 font-sans-tamil text-[15px] font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-pp-pink-d'
        >
          இலவச ஆலோசனை பெறுங்கள்
        </a>
        <a
          href={PHONE_HREF}
          className='inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-pp-line px-7 py-3.5 font-sans-tamil text-[15px] font-medium text-pp-char transition-colors hover:border-pp-pink hover:bg-pp-pink-t'
        >
          <Phone className='h-4 w-4' />
          இப்போதே அழைக்கவும்
        </a>
      </div>
    </section>
  );
}
