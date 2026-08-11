import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='sticky top-0 z-50 flex h-16 items-center justify-between border-b border-hairline bg-white px-6'>
      <Link href='/' className='flex items-center gap-2.5 no-underline'>
        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-saffron to-rose font-serif-tamil text-[18px] font-bold text-white'>
          க
        </span>
        <span className='flex flex-col font-ui leading-tight'>
          <span className='text-[15px] font-semibold text-charcoal'>கர்பகுடி IVF</span>
          <span className='text-[11px] font-normal text-muted'>Hosur Branch</span>
        </span>
      </Link>
      <a
        href='#form'
        className='rounded-lg bg-saffron px-5 py-2.5 font-sans-tamil text-[14px] font-semibold text-white transition-colors hover:bg-saffron-dark'
      >
        இலவச ஆலோசனை
      </a>
    </nav>
  );
}
