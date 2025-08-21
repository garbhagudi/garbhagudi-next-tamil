import { CloseButton, Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiPhone } from 'react-icons/hi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdCalendarMonth } from 'react-icons/md';
import Form from 'sections/LandingPages/Performant/form';

const FloatPhone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div className='fixed bottom-0 z-10 grid w-full animate-shake cursor-pointer grid-cols-2 items-center justify-center bg-gg-500 px-2 font-content font-bold text-white transition-opacity ease-in hover:opacity-100 md:hidden'>
        {/* Book Appointment Button */}
        <button
          className='flex h-full flex-col items-center justify-center gap-y-1 border-r p-2.5'
          onClick={open}
        >
          <MdCalendarMonth className='h-6 w-6' />
          <div className='text-sm'>முன்பதிவு அப்பாயிண்ட்மெண்ட்</div>
        </button>
        {/* Phone Call Button */}
        <Link
          href='tel:+919108910832'
          className='flex flex-col items-center gap-y-1 border-l p-2.5'
        >
          <HiPhone className='h-5 w-5' />
          <div className='text-sm' suppressHydrationWarning>
            {path === '/treatments/iui-treatment-in-bangalore'
              ? '+91 9480 9480 05'
              : '+91 9108 9108 32'}
          </div>
        </Link>
      </div>

      <Dialog open={isOpen} as='div' className='relative z-10 focus:outline-none' onClose={close}>
        {/* Faded background */}
        <div
          className='fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out'
          onClick={close}
        ></div>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center px-3 pt-8'>
            <DialogPanel
              transition
              className='data-[closed]:transform-[scale(95%)] max-w-md rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:opacity-0'
            >
              <div className='relative h-32 w-full'>
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722509021/Banner/Google_Form_Header-min_tjenif_1_1_k8jrow.webp'
                  alt='formBanner'
                  className='h-full w-full rounded-t-md'
                  width={380}
                  height={220}
                />
                <CloseButton
                  className={'absolute right-2 top-1 h-fit w-fit rounded-2xl bg-white text-gg-500'}
                >
                  <IoIosCloseCircleOutline fontSize={24} />
                </CloseButton>
              </div>
              <div className='px-0'>
                <div className='flex justify-center'>
                  <div className='mx-5 mt-5 w-fit self-center rounded-md bg-brandPink px-4 py-1 text-center text-[13px] font-semibold text-white shadow-sm'>
                    Book your Consultation
                  </div>
                </div>
                <Form />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default FloatPhone;
