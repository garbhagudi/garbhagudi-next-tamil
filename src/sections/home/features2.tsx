import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    id: 1,
    name: 'உயர் வெற்றிவிகிதம்',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840283/Icons/Features/Success_Rate_lig6sq.svg',
    content:
      'கர்பகுடி, தொழில்துறையில் மிக உயர்ந்த IVF சிகிச்சை வெற்றிவிகிதம் கொண்ட மையங்களில் ஒன்றாகும்.',
    link: '/features/success-rates-of-ivf',
  },
  {
    id: 2,
    name: 'உலகத் தரமான கருத்தரிப்பு பராமரிப்பு',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840286/Icons/Features/World_Class_Fertility_Care_un83f6.svg',
    content: '2011 முதல் இதுவரை 15,000+ குழந்தைகளை உலகிற்கு கொண்டு வருவதில் பெருமை கொண்டுள்ளது.',
    link: '/features/world-class-fertility-care',
  },
  {
    id: 3,
    name: 'முன்னணி கருத்தரிப்பு நிபுணர்கள்',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840305/Icons/Features/Top_Fertility_Specialists_zkyl9x.svg',
    content:
      'மருத்துவர்கள், கருவுறுதல் நிபுணர்கள், தொழில்நுட்ப வல்லுநர்கள் மற்றும் பணியாளர்களைக் கொண்ட சிறந்த குழு உங்களுடன் உள்ளது.',
    link: '/fertility-experts',
  },
  {
    id: 4,
    name: 'மலிவான சிகிச்சைகள்',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840310/Icons/Features/Affordable_Treatment_lwaaku.svg',
    content:
      'சேவையிலும் மருந்துகளின் தரத்திலும் எந்தச் சமரசமும் இல்லாமல் மலிவான சிகிச்சைகளை வழங்குகிறோம்.',
    link: '/features/affordable-treatments',
  },
  {
    id: 5,
    name: 'இலவச இரண்டாவது ஆலோசனை',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840323/Icons/Features/Free_Second_Opinion_lkihbz.svg',
    content:
      'நோயாளிகள் எங்கள் மருத்துவர்களைச் சந்தித்து, பரிந்துரைக்கப்பட்ட சிகிச்சை தங்களுக்கு ஏற்றதா என்பதைப் புரிந்துகொள்ளலாம்.',
    link: 'https://garbhagudi-ivf.com/contact-us',
  },
  {
    id: 6,
    name: 'நிதி வசதிகள்',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840329/Icons/Features/Financial_Options_rrv8hi.svg',
    content: 'சிகிச்சைக்கான செலவினை சமாளிக்க முடியாத நோயாளிகளுக்கு 0% வட்டியுடன் நிதி வசதி',
    link: '/features/financing-options',
  },
  {
    id: 7,
    name: 'முழுமையான அணுகுமுறை',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840338/Icons/Features/Holistic_Approach_pcqyr1.svg',
    content:
      'மனம்–உடல்–ஆன்மா என அனைத்தையும் ஒருங்கிணைக்கும் முழுமையான அணுகுமுறையின் மூலம் கருதரிப்பு சிகிச்சையளிக்கிறோம்.',
    link: '/features/holistic-approach',
  },
  {
    id: 8,
    name: 'சிகிச்சை முறைகள்',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840352/Icons/Features/Treatment_Protocols_hll4cu.svg',
    content:
      'சமீபத்திய தொழில்நுட்பங்கள், ஆராய்ச்சிகள் மற்றும் முன்னேற்றங்களை தொடர்ந்து இணைத்து மேம்படுத்தப்படுகின்றன.',
    link: '/features/treatment-protocols',
  },
  {
    id: 9,
    name: 'சிறந்த வசதிகள்',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840357/Icons/Features/Best_in_Class_Facilities_fchmjr.svg',
    content:
      'பெங்களூரில் உள்ள எங்கள் IVF மையங்கள், நவீன தொழில்நுட்பங்களுடன் மிகச் சவாலான கருவுறுதல் பிரச்சினைகளை கையாளும் திறன் கொண்டவை.',
    link: '/features/best-in-class-facilities',
  },
];

const Features2 = () => {
  return (
    <div className='sm:py-18 relative bg-white py-8' id='features'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-brandDark mt-2 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl'>
          எங்கள் பல்துறை அணுகுமுறை
        </h1>
        <p className='text-md text-brandDark mx-auto mt-5 max-w-prose font-content'>
          கற்பப்பை சிகிச்சைகள் மனதாலும் உடலாலும் சிரமமானவை என்பதை கர்பகுடி நன்கு அறிந்துள்ளது.
          நாங்கள் எப்போதும் பல்வேறு வாய்ப்புகளை வழங்குவதற்கும், தம்பதிகளின் வாழ்வில் புதிய
          நம்பிக்கையின் ஒளியை கொண்டு வருவதற்கும் அர்ப்பணிக்கப்பட்டுள்ளோம். எனவே, நீங்கள்
          எங்களிடமிருந்து எதிர்பார்க்கக்கூடியவை:
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {features?.map((feature) => (
              <Link href={feature.link} key={feature.id} passHref className='h-full'>
                <div className='mx-auto h-full max-w-sm pt-3'>
                  <div className='flow-root h-full rounded-lg border bg-gray-100 px-6 pb-8 shadow-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl'>
                    <div className='-mt-6'>
                      <div>
                        <span className='inline-flex items-center justify-center rounded-full bg-brandPink p-2 shadow-xl'>
                          <Image
                            src={feature.icon}
                            alt={feature.name}
                            width={48}
                            height={48}
                            className='h-10 w-10'
                            aria-hidden='true'
                            loading='lazy'
                          />
                        </span>
                      </div>
                      <h3 className='text-brandDark mt-5 font-heading text-lg font-semibold tracking-tight'>
                        {feature.name}
                      </h3>
                      <p className='text-brandDark mt-5 min-h-[60px] font-content text-sm font-medium antialiased'>
                        {feature.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
