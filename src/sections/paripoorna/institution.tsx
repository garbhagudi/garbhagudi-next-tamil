import Reveal from './reveal';
import { EM, H2, SEC_HEAD, WRAP } from './ui';

const stats = [
  { value: '15+', label: 'ஆண்டுகளுக்கும் மேலாக தம்பதியரின் பெற்றோராகும் பயணத்தில் கவனித்தல்.' },
  { value: '10', label: 'பெங்களூரு, தாவணகெரே மற்றும் ஓசூரில் மையங்கள்.' },
];

const Institution = () => (
  <section
    id='institution'
    className='relative bg-white pb-11 pt-12 text-pp-grey max-[1040px]:pb-8 max-[640px]:pb-7'
  >
    <div className={WRAP}>
      <div className={SEC_HEAD}>
        <div>
          <h2 className={H2}>
            முழுமையின் <em className={EM}>மகிழ்ச்சி.</em>
          </h2>
        </div>
        <div>
          <p>
            15 ஆண்டுகளுக்கும் மேலாக, கர்பகுடி IVF மையம் தம்பதியரின் பெற்றோராகும் பயணத்தில்
            அவர்களுடன் கைகோர்த்து நடந்து வந்திருக்கிறது. பெங்களூரு, தாவணகெரே மற்றும் ஓசூரில் உள்ள 10
            மையங்களுடன், நீங்கள் வசிக்கும் இடத்திற்கு அருகிலேயே கருவுறுதல் நிபுணரைச் சந்திக்கலாம்,
            உங்கள் பரிசோதனைகளை முடிக்கலாம், மேலும் எங்கள் ஆலோசகர்களுடன் பேசலாம்.
          </p>
          <p className='mt-[22px]'>
            <a
              href='#cta'
              className='inline-flex items-center gap-2 border-b-2 border-pp-pink pb-0.5 font-pp-ui text-[0.95rem] font-semibold leading-[normal] text-pp-pink-d'
            >
              மேலும் அறிய
            </a>
          </p>
        </div>
      </div>
      <Reveal className='mt-[70px] grid grid-cols-2 gap-4 max-[1040px]:mt-7 max-[640px]:gap-2.5'>
        {stats.map((s) => (
          <div
            key={s.value}
            className='rounded-[14px] border border-pp-line bg-pp-bg px-[26px] py-8 max-[640px]:px-4 max-[640px]:py-5'
          >
            <b className='block font-pp-head text-[clamp(2.8rem,4.6vw,3.8rem)] font-bold leading-none tracking-[-0.04em] text-pp-char max-[640px]:text-[2.4rem]'>
              {s.value}
            </b>
            <span className='mt-[14px] block text-[0.9rem] leading-[1.55] text-pp-grey-2'>
              {s.label}
            </span>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Institution;
