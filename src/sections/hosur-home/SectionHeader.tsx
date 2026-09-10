import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, body }: Props) {
  return (
    <div>
      <p className='font-ui text-saffron mb-2 text-[11px] font-semibold uppercase tracking-[0.12em]'>
        {eyebrow}
      </p>
      <h2 className='font-serif-tamil text-charcoal mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.35]'>
        {title}
      </h2>
      {body && (
        <p className='font-sans-tamil text-muted max-w-[600px] text-[15px] leading-[1.75]'>
          {body}
        </p>
      )}
    </div>
  );
}
