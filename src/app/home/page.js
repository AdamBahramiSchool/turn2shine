'use client';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contactus');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>
          Professional Exterior Maintenance | Pressure Washing, Gutter Cleaning, House Washing
        </title>
        <meta
          name="description"
          content="Expert exterior maintenance services including pressure washing, gutter cleaning, window cleaning, roof cleaning, moss removal, house washing, deck and patio cleaning, driveway cleaning, fence cleaning and restoration, and exterior painting preparation in Tri-Cities and Vancouver."
        />
        <meta
          name="keywords"
          content="Pressure Washing, Power Washing Services, Gutter Cleaning, Window Cleaning, Roof Cleaning, Moss Removal, House Washing, Deck Cleaning, Patio Cleaning, Driveway Cleaning, Walkway Cleaning, Fence Cleaning, Fence Restoration, Exterior Painting Preparation, Exterior Maintenance, Home Exterior Cleaning, Eco-Friendly Exterior Cleaning"
        />
        {/* JSON-LD Structured Data for Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Turn2shine",
              "description": "Professional exterior maintenance services including pressure washing, gutter cleaning, window cleaning, roof cleaning, house washing, deck and patio cleaning, driveway cleaning, fence cleaning, and exterior painting preparation.",
              "image": "https://yourwebsite.com/housecleaning.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Tri-Cities",
                "addressRegion": "BC",
                "postalCode": "Your Postal Code",
                "addressCountry": "CA"
              },
              "areaServed": ["Tri-Cities", "Vancouver"],
              "url": "https://www.turn2shine.com/",
              "telephone": "Your Phone Number"
            }
          `}
        </script>
      </Head>
      
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image 
            src="/housecleaning.jpg" 
            alt="Exterior maintenance services: pressure washing, gutter cleaning, window cleaning, roof cleaning, house washing, deck and patio cleaning, and more."
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Your All-in-One Exterior Maintenance Solution
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional Pressure Washing, Gutter Cleaning, Roof Cleaning, House Washing, and More in Tri-Cities and Vancouver.
          </p>
          <button
            onClick={()=>{router.push('/Quote')}}
            className="bg-blue-400 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
