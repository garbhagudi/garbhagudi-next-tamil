import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import BannerComponent from 'sections/home/bannerComponent';
import Nav from 'sections/hosur-home/Nav';
import HeroSection from 'sections/hosur-home/HeroSection';
import TrustStrip from 'sections/hosur-home/TrustStrip';
import WhySection from 'sections/hosur-home/WhySection';
import TreatmentsSection from 'sections/hosur-home/TreatmentsSection';
import ProcessSection from 'sections/hosur-home/ProcessSection';
import TestimonialsSection from 'sections/hosur-home/TestimonialsSection';
import FormSection from 'sections/hosur-home/FormSection';
import Footer from 'sections/hosur-home/Footer';
import FloatCall from 'sections/hosur-home/FloatCall';

const Home = ({ data }) => {
  function addBreadcrumbJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tamil.garbhagudi.com"
          }
        ]
      }`,
    };
  }

  function addOrgJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "GarbhaGudi IVF Centre Pvt Ltd",
        "url": "https://tamil.garbhagudi.com",
        "logo": "https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87q557nq07pls65nzuhg",
        "alternateName": "GarbhaGudi",
        "sameAs": [
          "https://twitter.com/garbhagudiivf",
          "https://www.youtube.com/c/GarbhaGudiIVFCentre",
          "https://www.linkedin.com/company/garbagudi",
          "https://www.facebook.com/garbhagudiIVF/",
          "https://api.whatsapp.com/send/?phone=918884183338&text=Hi."
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91 9108 9108 32",
            "contactType": "customer service",
            "email": "dreams@garbhagudi.com",
            "areaServed": "IN",
            "availableLanguage": [
              "en",
              "hi",
              "kn",
              "ml",
              "te",
              "ta"
            ]
          }
        ]
      }`,
    };
  }

  function addWebJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "In-vitro Fertilization (IVF)",
        "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
        "description": "What is IVF and how does it work. IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).",
        "brand": {
          "@type": "Brand",
          "name": "GarbhaGudi IVF Centre"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "604"

        }
      }`,
    };
  }
  return (
    <div className='bg-white font-sans-tamil'>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி</title>
        <meta
          name='title'
          content='ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி'
        />
        <meta
          name='description'
          content='கர்பகுடி (GarbhaGudi) என்பது பெங்களூருவில் உள்ள சிறந்த IVF மருத்துவமனைகளில் ஒன்றாகும். IVF / கருத்தரிக்கையின்மை சிகிச்சைகளில் மிக உயர்ந்த வெற்றிவிகிதத்துடன் சேவையை வழங்குகிறது. ஓசூரில் உள்ள சிறந்த கர்பகுடி IVF மருத்துவமனையில் இப்போது ஆலோசனையை பதிவு செய்யுங்கள்.'
        />
        {/* Ld+JSON Data */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addOrgJsonLd()}
          key='org-jsonld'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addWebJsonLd()}
          key='web-jsonld'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbJsonLd()}
          key='breadcrumb-jsonld'
        />
        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://tamil.garbhagudi.com' />
        <meta
          property='og:description'
          content='கர்பகுடி (GarbhaGudi) என்பது பெங்களூருவில் உள்ள சிறந்த IVF மருத்துவமனைகளில் ஒன்றாகும். IVF / கருத்தரிக்கையின்மை சிகிச்சைகளில் மிக உயர்ந்த வெற்றிவிகிதத்துடன் சேவையை வழங்குகிறது. ஓசூரில் உள்ள சிறந்த கர்பகுடி IVF மருத்துவமனையில் இப்போது ஆலோசனையை பதிவு செய்யுங்கள்.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி'
        />
        <meta
          name='twitter:description'
          content='கர்பகுடி (GarbhaGudi) என்பது பெங்களூருவில் உள்ள சிறந்த IVF மருத்துவமனைகளில் ஒன்றாகும். IVF / கருத்தரிக்கையின்மை சிகிச்சைகளில் மிக உயர்ந்த வெற்றிவிகிதத்துடன் சேவையை வழங்குகிறது. ஓசூரில் உள்ள சிறந்த கர்பகுடி IVF மருத்துவமனையில் இப்போது ஆலோசனையை பதிவு செய்யுங்கள்.'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />

        {/* Google */}
        <meta
          name='google-site-verification'
          content='mzhcIRsJx6D4QkbJJp3Tepas8Lyv6sJLWmGb0DvKOrw'
        />
      </Head>
      <Nav />
      <BannerComponent banners={data.banners} />
      {/* No <main> here — RootLayout in components/layout.tsx already provides one */}
      <div>
        <HeroSection />
        <TrustStrip />
        <WhySection />
        <TreatmentsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FormSection />
      </div>
      <Footer />
      <FloatCall />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        banners(orderBy: order_ASC) {
          title
          id
          url
          image {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
    revalidate: 180,
  };
};
