import Link from 'next/link';
import { CiPercent, CiMedicalCase, CiBank } from 'react-icons/ci';
import { BsCurrencyRupee } from 'react-icons/bs';
import { GiMeditation } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';

const features = [
  {
    id: 1,
    name: 'சிறந்த வெற்றிவிகிதங்கள்',
    icon: <CiPercent />,
    content:
      'கர்பகுடி ஐவிஎப் சிகிச்சைகளில் மிக உயர்ந்த வெற்றிவிகிதங்களை கொண்ட மையங்களில் ஒன்றாகும்.',
    link: '/features/success-rates-of-ivf',
  },
  {
    id: 2,
    name: 'சிறந்த கருத்தரிப்பு நிபுணர்கள்',
    icon: <CiMedicalCase />,
    content:
      'மகப்பேறு நிபுணர்கள், தொழில்நுட்ப நிபுணர்கள் மற்றும் பணியாளர்கள் ஆகியோரைக் கொண்ட கருத்தரிப்பு நிபுணர் குழு, நீங்கள் குழந்தையைப் பெற உதவ தயாராக உள்ளது.',
    link: '/fertility-experts',
  },
  {
    id: 3,
    name: 'மலிவு சிகிச்சைகள்',
    icon: <BsCurrencyRupee />,
    content:
      'சேவை அல்லது மருந்துகளின் தரத்தில் எந்தவித குறைப்பும் இன்றி, கர்பகுடி மலிவான கருத்தரிப்பு சிகிச்சைகளை வழங்குகிறது.',
    link: '/features/affordable-treatments',
  },
  {
    id: 4,
    name: 'நிதி வசதிகள்',
    icon: <CiBank />,
    content:
      'சிகிச்சை செலவுகளைச் சமாளிக்க முடியாத நேரங்களில், தம்பதிகளுக்கு 0% வட்டியில் நிதி வசதி வழங்கப்படுகிறது.',
    link: '/features/financing-options',
  },
  {
    id: 5,
    name: 'முழுமையான அணுகுமுறை',
    icon: <GiMeditation />,
    content:
      'கர்பகுடியில், மனம்–உடல்–ஆன்மா ஒருங்கிணைந்த திட்டத்தின் மூலம் கருத்தரிக்காத பிரச்சினைகளைச் சிகிச்சையளிப்பதில் நாங்கள் முழுமையாக அர்ப்பணிக்கப்பட்டுள்ளோம்.',
    link: '/features/holistic-approach',
  },
  {
    id: 6,
    name: 'உயர்தர வசதிகள்',
    icon: <ImLab />,
    content:
      'எங்கள் ஐவிஎப் மையங்கள், நவீன தொழில்நுட்பங்களுடன், மிகவும் சிக்கலான கேஸ்களையும்  திறம்பட கையாளும் வகையில் அமைக்கப்பட்டுள்ளன.',
    link: '/features/best-in-class-facilities',
  },
];

const Features = () => {
  return (
    <div className='sm:py-18 relative bg-white py-8 dark:bg-gray-800' id='features'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='mt-2 font-heading text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
          எங்களின் பலதரப்பட்ட அணுகுமுறை
        </h2>
        <p className='text-md mx-auto mt-5 max-w-prose font-content text-gray-800 dark:text-gray-200'>
          கர்பகுடியில், கருத்தரிப்பு சிகிச்சைகள் மனதிலும் உடலிலும் அழுத்தம் தரக்கூடும் என்பதை
          நாங்கள் நன்றாகப் புரிந்திருக்கிறோம். குழந்தையைப் பெற முயற்சிக்கும் பலருக்கும், பல்வேறு
          வாய்ப்புகளை வழங்கி, ஒரு புதிய நம்பிக்கையின் ஒளியை கொடுப்பதில் எப்போதும் உறுதியாக
          செயல்படுகிறோம். அதனால், நீங்கள் எதிர்பார்க்கக்கூடியவை:’
        </p>
        <div className='mt-8'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <Link href={feature.link} key={feature.id} passHref className='group h-full'>
                <div className='group mx-auto h-full max-w-sm pt-3'>
                  <div className='shadow-3xl h-full overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl'>
                    <div className='grid h-full grid-cols-6'>
                      <div className='col-span-1 flex h-full items-center justify-center bg-gg-500 dark:bg-gray-600 dark:group-hover:bg-gg-500'>
                        <div className='text-4xl font-bold text-white'>{feature.icon}</div>
                      </div>
                      <div className='col-span-5 flex flex-col rounded-br-lg rounded-tr-lg border-2 border-gg-500 px-2 dark:border-gray-600 dark:group-hover:border-gg-500'>
                        <h3 className='mt-3 font-heading text-base font-semibold tracking-tight text-gray-800 dark:text-gray-200'>
                          {feature.name}
                        </h3>
                        <p className='mt-2 pb-3 font-content text-sm font-normal text-gray-800 antialiased dark:text-gray-200'>
                          {feature.content}
                        </p>
                      </div>
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

export default Features;
