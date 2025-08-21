import Link from 'next/link';

const EventInfo = () => {
  return (
    <div>
      {/* Event Details Section */}
      <section className='my-10 text-gray-800 dark:text-gray-200'>
        <h2 className='mb-3 font-lexend text-3xl font-semibold'>Welcome</h2>
        <div className='space-y-2 font-content text-lg'>
          <p>
            to the Ghar Ghar GarbhaGudi, a campaign brought to you by{' '}
            <Link href='/' className='text-gg-500 underline'>
              GarbhaGudi IVF Centre
            </Link>{' '}
            in partnership with GarbhaGnan Foundation and Suvarna Deepa Visually Impaired and
            Physically Challenged Developmental Trust. Our mission is to transform every home in
            Karnataka into a place of joy by eliminating infertility.
          </p>
          <p>
            As part of this initiative, we are excited to offer a special promotion throughout the
            month of September 2023. We invite all women to take advantage of our Free{' '}
            <Link
              href='/solutions/best-female-fertility-test-in-bangalore'
              className='text-gg-500 underline'
            >
              Female Fertility Screening Package
            </Link>
            , which includes a comprehensive consultation with our expert fertility specialists, an
            ultrasound scan, and professional counseling.
          </p>
          <p>
            We believe that parenthood is a dream that should be accessible to all, and with this
            campaign, we're taking a step closer to making that dream a reality. Mark your calendar
            and be sure not to miss this opportunity! Our special offer is valid from the 1st to the
            30th of September 2023.
          </p>
          <p>
            Join us in our mission to create a Karnataka where infertility is no longer a barrier to
            happiness. Schedule your appointment today, and let us be a part of your journey towards
            parenthood. Together, we can turn every home into a Ghar Ghar GarbhaGudi!
          </p>
        </div>
      </section>
    </div>
  );
};

export default EventInfo;
