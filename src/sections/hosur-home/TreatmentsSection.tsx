import {
  FlaskConical,
  Microscope,
  Syringe,
  Activity,
  Sparkles,
  Heart,
  Stethoscope,
  Search,
  Waves,
  Snowflake,
  ArrowRightLeft,
  Filter,
  Sprout,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

const treatments = [
  { Icon: FlaskConical, name: 'IVF', desc: 'உயிரணு கருத்தரிப்பு' },
  { Icon: Microscope, name: 'ICSI', desc: 'நேரடி கருத்தரிப்பு' },
  { Icon: Syringe, name: 'IUI', desc: 'கருப்பை கருத்தரிப்பு' },
  { Icon: Activity, name: 'TESA/PESA', desc: 'ஆண்மை குறைவு சிகிச்சை' },
  { Icon: Sparkles, name: 'Blastocyst', desc: 'கருவளர்ப்பு சிகிச்சை' },
  { Icon: Heart, name: 'Natural Conception', desc: 'இயற்கை கருத்தரிப்பு' },
  { Icon: Stethoscope, name: 'Laparoscopy', desc: 'தொப்புள் துளை அறுவை சிகிச்சை' },
  { Icon: Search, name: 'Hysteroscopy', desc: 'கருப்பை உள்நோக்கு பரிசோதனை' },
  { Icon: Waves, name: 'Varicocele', desc: 'விந்தணு நரம்பு வீக்க சிகிச்சை' },
  { Icon: Snowflake, name: 'Semen Freezing', desc: 'விந்தணு உறைவைப்பு' },
  { Icon: ArrowRightLeft, name: 'Sequential Transfer', desc: 'கட்ட கட்டமான கரு மாற்று' },
  { Icon: Filter, name: 'MACS', desc: 'விந்தணு தரம் பிரித்தல்' },
  { Icon: Sprout, name: 'Endometrial Rejuvenation', desc: 'கருப்பை உட்படலம் புத்துயிர்' },
];

export default function TreatmentsSection() {
  return (
    <section className='bg-pp-mauve-t px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          eyebrow='சிகிச்சை விருப்பங்கள்'
          title='எல்லா நிலைக்கும் தீர்வு இருக்கிறது'
          body='கருத்தரிப்பு சவால்களுக்கு அறிவியல் பூர்வமான, நவீன தீர்வுகள்.'
        />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4'>
          {treatments.map(({ Icon, name, desc }) => (
            <div
              key={name}
              className='rounded-[12px] border border-pp-line bg-white px-4 py-[1.1rem] text-center transition-all hover:-translate-y-0.5 hover:border-pp-pink'
            >
              <div className='mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-pp-pink-t'>
                <Icon className='h-5 w-5 text-pp-pink' strokeWidth={2} />
              </div>
              <div className='font-ui text-[13px] font-semibold text-pp-char'>{name}</div>
              <div className='mt-1 font-sans-tamil text-[12px] leading-[1.5] text-pp-grey'>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
