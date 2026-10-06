import Link from 'next/link';
import { HiPhone } from 'react-icons/hi';

/* Desktop only — sits at the bottom of the right-side float stack; the SalesIQ chat bubble
 * (.zsiq_floatmain, forced above it in globals.css under `gg-phone-round-floats`, bottom: 90px)
 * sits directly above it, same right edge. Hidden on mobile, where SalesIQ is left at its
 * default position (the full-width FloatPhone bar covers the phone CTA there). */
const FloatPhoneRound = () => {
  return (
    <div className='fixed bottom-5 right-5 z-50 hidden h-14 w-14 rounded-full bg-[#25D366] md:block'>
      <Link
        href='tel:+919108910832'
        aria-label='Call GarbhaGudi'
        className='flex h-full w-full items-center justify-center'
      >
        <HiPhone className='h-7 w-7 text-white' />
      </Link>
    </div>
  );
};

export default FloatPhoneRound;
