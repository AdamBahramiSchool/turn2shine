'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';
import { useRouter } from 'next/navigation';



const Page = () => {
  const cardRefs = useRef([]);
  const router=useRouter();
  const services = [
    {
      image: "/pressurewashing1.jpg",
      title: "Pressure Washing",
      route: "/PressureWashing"
    },
    {
      image: "/windowcleaning1.jpg",
      title: "Window Cleaning",
      route: "/WindowCleaning"
    },
    {
      image: "/guttercleaning1.jpg",
      title: "Gutter Cleaning",
      route: "/GutterCleaning"
    },
    {
      image: "/christmaslights1.jpg",
      title: "Christmas Lights",
      route: "/ChristmasLights"
    }
  ];

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 1200,
          perspective: 1400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.04,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        });
      }
    });
  }, []);

  return (
    <div className="bg-blue-200 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      {/* Title */}
      <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-4 text-center">
        Our Services
      </h1>

      {/* Hero Image */}
      <div className="relative w-full h-[500px] mb-8 rounded-xl overflow-hidden max-w-screen-lg mx-auto">
        <Image
          src="/suburbanhome.jpg"
          alt="Exterior maintenance services"
          fill
          priority
          className="object-cover rounded-xl"
        />
      </div>

      {/* Slogan */}
      <h2 className="text-center text-white/90 text-xl md:text-2xl font-semibold italic mb-8 px-6 md:px-20 lg:px-32 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
        From Grime to Prime — Turn2Shine Has You Covered! Why spend your weekends scrubbing when Turn2Shine can make your home sparkle in just one day? From windows to driveways, gutters to Christmas lights — we clean it all, so you don’t have to lift a finger (or a ladder). Let your home shine bright, all year round.
      </h2>

      {/* Tilt Cards */}
     
   {/* Tilt Cards */}
<div className="flex flex-wrap justify-center gap-6">
  {services.map((service, i) => (
    <div key={i} className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 flex flex-col items-center">
      {/* Tilt Card */}
      <div
        ref={(el) => (cardRefs.current[i] = el)}
        onClick={() => router.push(service.route)}
        className="card w-full overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
      >
        <div className="relative w-full h-[200px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-md font-semibold text-center px-2">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      {/* See More Button (below tilt card) */}
      <button
        onClick={() => router.push(service.route)}
        className="mt-4 mb-2 bg-green-400 text-white text-sm px-5 py-2 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
      >
        See More
      </button>
    </div>
  ))}
  <div className="flex justify-center gap-6 mt-5">
  <button onClick={()=>{router.push('/Quote')}} className="bg-blue-800 text-white text-lg mr-10 px-6 py-3 rounded-full hover:bg-green-400 transition-colors duration-300">
    Get a Quote
  </button>
  <button className="bg-blue-800 text-white text-lg px-10 py-5 rounded-full hover:bg-green-400 transition-colors duration-300">
    Book a Service
  </button>
</div>

</div>




    </div>
  );
};

export default Page;
