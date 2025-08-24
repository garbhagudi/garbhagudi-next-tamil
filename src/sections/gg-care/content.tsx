import { MdAlternateEmail, MdPhone } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='divide-y-2 divide-gray-200'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='font-heading text-2xl font-extrabold text-gray-800 dark:text-gray-200 sm:text-3xl'>
              தொடர்புக்கு
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-12 font-content sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0'>
              {contactData?.getInTouch.map((items) => (
                <div key={items.id}>
                  <h3 className='text-lg font-medium leading-6 text-gray-800 dark:text-gray-200'>
                    {items.name}
                  </h3>
                  <div className='mt-2 text-base'>
                    <div className='sr-only'>Email</div>
                    <Link
                      href={`mailto:${items.email}`}
                      className='text-purple-800 hover:underline dark:text-purple-300'
                    >
                      <div>
                        <MdAlternateEmail className='inline-flex' /> {items.email}
                      </div>
                    </Link>
                    {items.phone && (
                      <div className='mt-1'>
                        <div className='sr-only'>Phone number</div>
                        <Link
                          href={`tel:${items.phone}`}
                          className='text-gg-500 hover:underline dark:text-gg-400'
                        >
                          <div>
                            <MdPhone className='inline-block h-5 w-5' /> {items.phone}
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-16 pt-16 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mt-8 grid grid-cols-1 gap-12 font-content sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0'>
              <h2 className='font-heading text-2xl font-extrabold text-gray-800 dark:text-gray-200 sm:text-3xl'>
                இடங்கள்
              </h2>
              {contactData?.locations.map((items) => (
                <div key={items.id}>
                  <h3 className='text-lg font-medium leading-6 text-gray-800 dark:text-gray-200'>
                    {items.name}
                  </h3>
                  <div className='mt-2 text-base text-gray-500 dark:text-gray-300'>
                    <div className='mt-1'>
                      <Link
                        href={`tel:${items.phone}`}
                        className='text-gg-500 hover:underline dark:text-gg-400'
                      >
                        <div>
                          <MdPhone className='inline-block h-5 w-5' /> {items.phone}
                        </div>
                      </Link>
                    </div>
                    <div>{items.address}</div>
                    <div className='space-x-3'>
                      <Link
                        href={items.directionLink}
                        className='inline-flex h-8 w-auto max-w-[32px] items-center overflow-hidden rounded-3xl bg-gg-500 font-bold text-white transition-all duration-500 ease-linear hover:max-w-[340px] hover:bg-brandPink2 dark:bg-gray-500 dark:text-gray-100 dark:hover:bg-gg-400'
                        target={'_blank'}
                        rel='noreferrer'
                      >
                        <span>
                          <SiGooglemaps className='ml-2 flex items-center text-base' />
                        </span>
                        <span className='whitespace-nowrap pl-2 pr-4'>திசை</span>
                      </Link>
                      <Link
                        href={`tel:${items.phone}`}
                        className='inline-flex h-8 w-auto max-w-[32px] items-center overflow-hidden rounded-3xl bg-gg-500 font-bold text-white transition-all duration-500 ease-linear hover:max-w-[340px] hover:bg-brandPink2 dark:bg-gray-500 dark:text-gray-100 dark:hover:bg-gg-400'
                        target={'_blank'}
                        rel='noreferrer'
                      >
                        <span>
                          <MdPhone className='ml-2 flex items-center text-base' />
                        </span>
                        <span className='whitespace-nowrap pl-2 pr-4'>Phone Call</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const contactData = {
  getInTouch: [
    {
      id: 1,
      name: 'நேர்முகப் பேட்டி & கேள்விகள்',
      email: 'dreams@garbhagudi.com',
      phone: '+91 9108 9108 32',
    },
    {
      id: 2,
      name: 'கருத்துக்கள் & புகார்கள்',
      email: 'grievance@garbhagudi.com',
      phone: '+91 9108 9108 32',
    },
    {
      id: 3,
      name: 'மனிதவள மேலாண்மை',
      email: 'hr@garbhagudi.com',
    },
    {
      id: 4,
      name: 'கூட்டாண்மை தொடர்புகள்',
      email: 'jayaram@garbhagudi.com',
    },
  ],
  locations: [
    {
      id: '1',
      name: 'Hosur',
      address: (
        <div>
          <p>நம்பர். 822/3, கே.எம். டவேர்ஸ், புதிய கிருஷ்ணகிரி பைபாஸ் சாலை, வசந்த் நகர்,</p>
          <p className='mb-5 mt-1'> ஹோசூர், தமிழ்நாடு – 635109</p>
        </div>
      ),
      phone: '+91 9108 9108 32',
      directionLink: 'https://g.page/GG1-HN?share',
    },
  ],
};
