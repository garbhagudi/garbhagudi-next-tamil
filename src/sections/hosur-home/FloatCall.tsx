import { Phone } from 'lucide-react';
import { PHONE_HREF } from './constants';

export default function FloatCall() {
  return (
    <a
      href={PHONE_HREF}
      aria-label='Call GarbhaGudi Hosur'
      className='bg-rose font-sans-tamil fixed bottom-6 right-6 z-[200] flex items-center gap-2 rounded-full px-[22px] py-3.5 text-[14px] font-semibold text-white no-underline shadow-[0_4px_20px_rgba(192,57,94,0.40)]'
      style={{ animation: 'float-call-pulse 2.5s infinite' }}
    >
      <Phone className='h-[18px] w-[18px]' />
      <span>இப்போதே அழைக்கவும்</span>
    </a>
  );
}
