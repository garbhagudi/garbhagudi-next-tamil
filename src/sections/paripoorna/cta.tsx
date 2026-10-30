import Link from 'next/link';
import type { MouseEvent } from 'react';
import { ENQUIRY_URL, PHONE_HREF, PHONE_LABEL } from './data';
import Reveal from './reveal';
import { WRAP, button } from './ui';

const MOBILE_BTN =
  'max-[640px]:flex-[1_1_100%] max-[640px]:flex-wrap max-[640px]:gap-x-1.5 max-[640px]:gap-y-0 max-[640px]:whitespace-normal max-[640px]:text-center';

const Cta = ({ onBook }: { onBook: () => void }) => {
  const handleBook = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBook();
  };

  return (
    <section id='cta' className='relative bg-pp-bg pb-12 pt-6'>
      <div className={WRAP}>
        <Reveal className="relative overflow-hidden rounded-[18px] bg-pp-char px-10 py-[60px] text-center text-[#e9e7e7] before:pointer-events-none before:absolute before:right-[-120px] before:top-[-200px] before:h-[420px] before:w-[420px] before:rounded-full before:bg-[radial-gradient(circle,rgba(239,66,102,0.5),transparent_65%)] before:opacity-[0.55] before:content-[''] after:pointer-events-none after:absolute after:bottom-[-200px] after:left-[-120px] after:h-[360px] after:w-[360px] after:rounded-full after:bg-[radial-gradient(circle,rgba(180,121,164,0.45),transparent_65%)] after:opacity-[0.55] after:content-[''] max-[640px]:rounded-[22px] max-[640px]:px-5 max-[640px]:py-10">
          <h3 className='relative z-[1] font-pp-head text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.1] text-white max-[640px]:text-[1.65rem]'>
            <em className='not-italic text-[#ff8aa3]'>புரிதலை</em> நோக்கிய முதல் அடியை எடுத்து
            வையுங்கள்.
          </h3>
          <p className='relative z-[1] mt-2.5 text-[#cfcccd]'>
            மேலும் தகவல்களுக்கு அருகிலுள்ள கர்பகுடி கிளைக்கு செல்லவும்.
          </p>
          <div className='relative z-[1] mt-[30px] flex flex-wrap justify-center gap-3'>
            <Link href={ENQUIRY_URL} onClick={handleBook} className={button('ink', MOBILE_BTN)}>
              ஆலோசனை முன்பதிவு செய்யவும்
            </Link>
            <a href={PHONE_HREF} className={button('light', MOBILE_BTN)}>
              மேலும் விவரங்களுக்கு: <span className='whitespace-nowrap'>{PHONE_LABEL}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Cta;
