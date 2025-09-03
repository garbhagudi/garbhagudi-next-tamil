import Image from 'next/image';
import Link from 'next/link';

interface TreatmentOptionsProps {
  branch: string;
  image?: string;
}

const TreatmentOptions = ({ branch, image }: TreatmentOptionsProps) => {
  return (
    <div className='container mx-auto'>
      {image && (
        <div className='mx-auto mt-16 flex max-w-fit items-center justify-center space-x-3 rounded-lg border px-2.5 py-2.5 dark:border-gray-600'>
          <Image
            src={image}
            alt='IVF Treatment'
            width={100}
            height={100}
            className='w-20 rounded-lg bg-white dark:bg-gray-200/70'
            loading='lazy'
          />
        </div>
      )}
      <div className='px-2 py-16 text-center font-heading text-xl font-bold lg:py-20 lg:text-2xl'>
        {branch} கர்பகுடி IVF மையத்தில் கருத்தரிப்பு சிகிச்சை வாய்ப்புகள்
      </div>
      <div className='grid grid-cols-2 gap-x-3 gap-y-16 px-2 pb-10 lg:grid-cols-4 lg:gap-16 lg:pb-16'>
        {Data.map((items) => (
          <div
            key={items?.id}
            className='group flex flex-col items-center justify-between rounded-xl border border-gg-400 font-content transition-all duration-300 hover:-translate-y-2 hover:bg-pink-50 hover:shadow-2xl dark:border-2 dark:border-gray-700 dark:hover:bg-gray-700'
          >
            <div className='mx-auto -mt-14 flex h-28 w-28 items-center justify-center rounded-full'>
              <Image
                src={items?.image}
                alt={items?.treatent}
                width={100}
                height={100}
                className='w-20 transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                loading='lazy'
              />
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
              <div className='pb-2 text-center font-heading text-xl font-bold'>
                {items?.treatent}
              </div>
              <div className='px-3 text-center text-base'>{items?.desc}</div>
            </div>
            <div className='w-full rounded-b-xl border bg-gg-500 py-1 text-center dark:border-gray-800 dark:bg-gray-500'>
              <Link
                href={items?.link}
                className='font-content font-bold text-white dark:text-white'
              >
                மேலும் அறிக
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentOptions;

const Data = [
  {
    id: 1,
    treatent: 'IVF சிகிச்சை',
    desc: 'உங்கள் பெற்றோராகும் கனவை நிறைவேற்ற கர்பகுடியின் மேம்பட்ட IVF சிகிச்சையைப் பயன்படுத்துங்கள்',
    link: '/treatments/ivf-treatment-in-hosur',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/ivf_jwjqwf.webp',
  },
  {
    id: 2,
    treatent: 'ICSI',
    desc: ' கருத்தரிப்பில் சிரமப்படும் தம்பதிகளுக்கான உயர்ந்த வெற்றி விகிதத்துடன் கூடிய கர்பகுடியின் ICSI சிகிச்சை.',
    link: '/treatments/icsi-treatment-in-hosur',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/fertilization_o5hpkk.webp',
  },
  {
    id: 3,
    treatent: 'IUI',
    desc: 'இயற்கையான முறையில் கர்ப்பமாகும் வாய்ப்பை அதிகரிக்கும் கர்பகுடியின் IUI சிகிச்சை.',
    link: '/treatments/iui-treatment-in-hosur',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/in-vitro_mujzkz.webp',
  },
  {
    id: 4,
    treatent: 'TESA/PESA',
    desc: 'குறைந்த ஸ்பெர்ம் எண்ணிக்கை அல்லது தரமற்ற ஸ்பெர்ம் கொண்ட ஆண்களுக்கு குழந்தையைப் பெற உதவும் மேம்பட்ட சிகிச்சை.',
    link: '/treatments/pesa-and-tesa',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/research_j8mdnk.webp',
  },
  {
    id: 5,
    treatent: 'பிளாஸ்டோசிஸ்ட் கல்ச்சர்',
    desc: ' எம்ப்ரியோவை நீண்ட நாட்கள் வளர்த்து வெற்றிகரமாக கருப்பை நட்டு வைக்கும் வாய்ப்பை அதிகரிக்கும் சிகிச்சை.',
    link: '/treatments/ivf-treatment-in-hosur',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/sperm_utf0oe.webp',
  },
  {
    id: 6,
    treatent: 'மகளிர் நல சிகிச்சைகள்',
    desc: ' பெண்களின் ஆரோக்கியம் மற்றும் கருத்தரிப்பை பாதுகாக்க முழுமையான சிகிச்சைகள்',
    link: '/resources/causes/polycystic-ovarian-syndrome-pcos',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/gynecology_ynvds8.webp',
  },
  {
    id: 7,
    treatent: 'இயற்கை கருத்தரிப்பு',
    desc: 'உங்கள் கருத்தரிப்பு நிலையைப் புரிந்து கொண்டு இயற்கையான முறையில் கர்ப்பமாகும் வாய்ப்பை அதிகரிக்க உதவும் திட்டம்.',
    link: '/treatments/natural-pregnancy',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/maternity_cee8v2.webp',
  },
  {
    id: 8,
    treatent: 'வீரிய பரிசோதனை / CASA',
    desc: ' உங்கள் கருத்தரிப்பு நிலையை மதிப்பீடு செய்ய விரிவான வீரிய பரிசோதனை.',
    link: '/resources/diagnosis/semen-analysis',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890580/Misc/ivf%20icons/semen_nqxd6s.webp',
  },
];
