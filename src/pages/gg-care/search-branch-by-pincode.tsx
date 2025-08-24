import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';

// List of available zipcodes
const availableZipcodes = [
  '560050',
  '560043',
  '560004',
  '560100',
  '560037',
  '560094',
  '560072',
  '560064',
];

interface Coordinates {
  latitude: number;
  longitude: number;
}

const NearestZipcodeFinder: React.FC = () => {
  const [inputZipcode, setInputZipcode] = useState('');
  const [nearestZipcode, setNearestZipcode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Validate input to allow only 6-digit numbers
    if (inputValue.length <= 6 && /^\d*$/.test(inputValue)) {
      setInputZipcode(inputValue);
    }
  };

  const handleFindNearest = async () => {
    setLoading(true);
    const inputCoords = await getCoordinates(inputZipcode);

    if (inputCoords) {
      const nearest = await getNearestZipcode(inputCoords);
      setNearestZipcode(nearest);
    }
    setLoading(false);
  };

  const getNearestZipcode = async (inputCoords: Coordinates) => {
    let nearestZipcode = '';
    let minDistance = Infinity;

    for (const zipcode of availableZipcodes) {
      const coords = getCoordinates(zipcode);
      if (!coords) continue;

      const distance = calculateDistance(inputCoords, await coords);

      if (distance < minDistance) {
        minDistance = distance;
        nearestZipcode = zipcode;
      }
    }

    return nearestZipcode;
  };

  const getCoordinates = async (zipcode: string): Promise<Coordinates | null> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${zipcode}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        };
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }

    return null;
  };

  const calculateDistance = (coords1: Coordinates, coords2: Coordinates) => {
    const { latitude: lat1, longitude: lon1 } = coords1;
    const { latitude: lat2, longitude: lon2 } = coords2;

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Search branch by pincode | GarbhaGudi IVF Centre</title>
        <meta name='title' content='Search branch by pincode | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='To book an appointment for your Fertility and IVF treatment in GarbhaGudi, you can contact on 9108910832 or you can also Email us on dreams@garbhagudi.com.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Search branch by pincode | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content="Reach out with your questions, concerns and challenges. Or just to say hi. We're always standing by and eager to help."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Search branch by pincode | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content="Reach out with your questions, concerns and challenges. Or just to say hi. We're always standing by and eager to help."
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.webp'
        />
      </Head>

      <div className='mt-10 flex flex-col items-center justify-center'>
        <h1 className='px-2 py-6 pb-6 text-center font-heading text-3xl font-semibold lg:pt-12 lg:text-4xl'>
          Find Your Nearest GarbhaGudi Branch
        </h1>
        <p className='px-3 pb-6 font-content'>
          Enter your Zipcode / Pincode to find your nearest GarbhaGudi Branch
        </p>
        <input
          type='text'
          placeholder='Enter you Zip Code'
          value={inputZipcode}
          onChange={handleInputChange}
          className='rounded-lg border-2 border-brandPurpleDark px-3 py-2 text-center font-content text-lg font-semibold text-brandPink focus:border-brandPink focus:outline-none dark:border-brandPurple dark:bg-gray-700 dark:text-gray-200'
        />
        <button
          onClick={handleFindNearest}
          disabled={loading}
          className='mx-auto mt-4 h-11 w-48 rounded-lg border-2 border-brandPink3 px-3 py-2 text-center font-content font-semibold hover:bg-brandPink3 hover:text-white'
        >
          {loading ? (
            <FaSpinner className='mx-auto animate-spin text-center' />
          ) : (
            'Find Nearest Branch'
          )}
        </button>
        <div className='py-6 md:py-12'>
          {locations.map(
            (items) =>
              nearestZipcode &&
              nearestZipcode === items.zipCode && (
                <div
                  key={items.id}
                  className='flex max-w-5xl flex-col rounded-lg bg-gray-200 bg-opacity-70 p-3 shadow-xl backdrop-blur-2xl dark:bg-gray-700 dark:bg-opacity-90 md:flex-row'
                >
                  <div className='w-full px-3 md:w-6/12 md:px-0'>
                    <Image
                      src={items.image}
                      alt={items.name}
                      className='rounded-lg'
                      width={1024}
                      height={1024}
                      loading='lazy'
                    />
                  </div>
                  <div className='ml-5 flex flex-col items-center justify-center space-y-3 md:items-start'>
                    <div className='mt-4 font-heading text-2xl md:mt-0'>
                      GarbhaGudi IVF Centre, {items.name}
                    </div>
                    <div className='text-center font-content text-lg md:text-left'>
                      {items.address}
                    </div>
                    <div className='flex items-center justify-center'>
                      <a
                        href={`tel:${items.phone}`}
                        className='mr-5 w-32 rounded-lg bg-brandPink px-3 py-2 text-center font-content font-semibold text-white'
                      >
                        Call Now
                      </a>

                      <a
                        href={items.directionLink}
                        className='w-44 rounded-lg bg-brandPink px-3 py-2 text-center font-content font-semibold text-white'
                      >
                        Maps / Directions
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default NearestZipcodeFinder;

const locations = [
  {
    id: '1',
    name: 'Hosur',
    image: 'https://media.graphassets.com/pzLEWknQ9GG46x1mErBM',
    zipCode: '635109',
    address: (
      <div>
        <p>நம்பர். 822/3, கே.எம். டவேர்ஸ், புதிய கிருஷ்ணகிரி பைபாஸ் சாலை,</p>
        <p className='mb-5 mt-1'> வசந்த் நகர், ஹோசூர், தமிழ்நாடு – 635109</p>
      </div>
    ),
    phone: '+91 9108 9108 32',
    directionLink: 'https://g.page/GG1-HN?share',
  },
];
