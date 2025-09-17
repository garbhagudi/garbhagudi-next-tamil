import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsFillEnvelopeAtFill,
} from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import Form from 'sections/LandingPages/Performant/form';

const navigation = {
  treatments: [
    { name: 'ஹிஸ்டரஸ்கோப்பி', href: '/treatments/hysteroscopy-treatment-in-hosur' },
    { name: 'ஐ.சி.எஸ்.ஐ சிகிச்சை', href: '/treatments/icsi-treatment-in-hosur' },
    { name: 'ஐ.யூ.ஐ சிகிச்சை', href: '/treatments/iui-treatment-in-hosur' },
    { name: 'ஐ.வி.எப் சிகிச்சை', href: '/treatments/ivf-treatment-in-hosur' },
    { name: 'லேபரோஸ்கோப்பி ', href: '/treatments/laparoscopy-treatment-in-hosur' },
    { name: 'உறைவு கருவுறுப்பு மாற்று', href: '/treatments/frozen-embryo-transfer' },
  ],
  locations: [{ name: 'ஓசூர்', href: '/locations/hosur' }],
  resources: [
    { name: 'மகப்பேறு நிபுணர்கள்', href: '/fertility-experts' },
    { name: 'கருத்தரிப்பு மையம்', href: '/fertility-center' },
    { name: 'அம்சங்கள்', href: '/features' },
  ],
  company: [
    { name: 'கர்பகுடி', href: '/about/overview' },
    { name: 'GGIRHR', href: 'https://ggirhr.com' },
    { name: 'கர்பகினான்', href: 'https://garbhagnan.org' },
    { name: 'மருந்தகம்', href: '#' },
  ],
  contact: [
    { name: 'தொழில் வாய்ப்புகள்', href: 'https://www.garbhagudi.com/careers' },
    { name: 'GG பராமரிப்பு', href: '/gg-care' },
  ],
  legal: [
    { name: 'தனியுரிமை', href: 'https://www.garbhagudi.com/legal/privacy-policy' },
    { name: 'விதிமுறைகள்', href: 'https://www.garbhagudi.com/legal/terms-and-conditions' },
  ],
};

export default function Footer() {
  const router = useRouter();
  const isYogaPage = router.pathname === '/yoga';
  return (
    <footer
      className='bg-neutral-50 font-content dark:bg-gray-800'
      aria-labelledby='footerHeading'
      id='footer'
    >
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto flex max-w-7xl flex-col justify-between border-t px-1 pb-12 dark:border-gray-600 sm:px-6 lg:flex-row lg:py-8'>
        <div className='xl:grid xl:grid-cols-2 xl:gap-8'>
          <div className='mt-12 grid grid-cols-1 gap-8 text-center antialiased xl:col-span-full xl:mt-0 xl:grid-cols-1'>
            <div className='grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-6'>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  சிகிச்சைகள்
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.treatments.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  வளங்கள்
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  நிறுவனங்கள்
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  தொடர்புக்கு
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  கிளை மையங்கள்
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.locations.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h3 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                  சட்டம்
                </h3>
                <ul className='mt-4 space-y-1'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className='cursor-pointer text-xs text-gray-800 hover:text-sm hover:text-brandPink hover:underline dark:text-white md:text-sm md:hover:text-base'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {!isYogaPage && (
          <div className='mt-5 w-fit self-center rounded-md bg-gray-800 md:mt-0'>
            <Form />
          </div>
        )}
      </div>
      <div className='mx-auto max-w-7xl border-t border-gray-200 dark:border-gray-600'>
        <div className='items-ceter mt-8 flex justify-center space-x-2 sm:space-x-3'>
          {SocialIcon.map((item) => (
            <Link key={item.name} href={item.url} target='_blank' rel='noreferrer' className=''>
              <span className='sr-only'>{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <p className='py-8 text-center font-content text-gray-800 dark:text-white'>
          &copy; {new Date().getFullYear()} கர்பகுடி IVF மையம்.inc. அனைத்து உரிமைகளும்
          பாதுகாக்கப்பட்டவை.
        </p>
      </div>
    </footer>
  );
}

const SocialIcon = [
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/c/GarbhaGudiIVFCentre',
    icon: <BsYoutube className='text-3xl text-red-600 dark:text-red-500' />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/garbhagudiIVF/',
    icon: <BsFacebook className='text-3xl text-blue-600 dark:text-blue-500' />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/garbhagudiivfcentre/?hl=en',
    icon: <BsInstagram className='text-3xl text-pink-600 dark:text-pink-500' />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/garbagudi',
    icon: <BsLinkedin className='text-3xl text-blue-600 dark:text-blue-500' />,
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=919108910832&text=Hi.',
    icon: <BsWhatsapp className='text-3xl text-green-600 dark:text-green-500' />,
  },
  {
    name: 'X',
    url: 'https://X.com/garbhagudiivf',
    icon: <RiTwitterXFill className='text-3xl dark:text-white' />,
  },
  {
    name: 'Mail',
    url: 'mailto:dreams@garbhagudi.com',
    icon: <BsFillEnvelopeAtFill className='text-3xl text-gray-600 dark:text-gray-200' />,
  },
];
