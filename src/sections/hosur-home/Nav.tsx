import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='border-hairline sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-6'>
      <Link href='/' className='flex items-center gap-2.5 no-underline'>
        <span className='from-saffron to-rose font-serif-tamil flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-[18px] font-bold text-white'>
          க
        </span>
        <span className='font-ui flex flex-col leading-tight'>
          <span className='text-charcoal text-[15px] font-semibold'>கர்பகுடி IVF</span>
          <span className='text-muted text-[11px] font-normal'>Hosur Branch</span>
        </span>
      </Link>
      <a
        href='#form'
        className='bg-saffron font-sans-tamil hover:bg-saffron-dark rounded-lg px-5 py-2.5 text-[14px] font-semibold text-white transition-colors'
      >
        இலவச ஆலோசனை
      </a>
    </nav>
  );
}
