import { PHONE_HREF, PHONE_DISPLAY } from './constants';

export default function Footer() {
  return (
    <footer className='bg-charcoal flex flex-col items-center gap-3 px-6 py-10 text-center text-white/70'>
      <div className='font-serif-tamil mb-1 text-[1.2rem] font-bold text-white'>
        கர்பகுடி கருத்தரித்தல் மையம் – ஓசூர்
      </div>
      <div className='font-serif-tamil mt-1 text-[13px] text-white/75'>
        ஓசூரின் நம்பிக்கைக்குரிய கருத்தரிப்பு மையம் · 15,000+ குடும்பங்களின் நம்பிக்கை
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2 text-[14px]'>
        <a href={PHONE_HREF} className='text-saffron no-underline hover:underline'>
          {PHONE_DISPLAY}
        </a>
        <span className='opacity-60'>·</span>
        <a
          href='https://www.garbhagudi.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-saffron no-underline hover:underline'
        >
          garbhagudi.com
        </a>
      </div>
      <div className='mt-1 text-[13px] opacity-60'>
        © 2025 GarbhaGudi IVF Centre. All rights reserved.
      </div>
    </footer>
  );
}
