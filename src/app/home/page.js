'use client';
import React from 'react'
import Image from 'next/image'

const Page = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contactus');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image 
          src='/housecleaning.jpg' 
          alt="Pressure Washing"
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
          Serving Tri-Cities and Vancouver
        </p>
        <a 
          href="/#contactus" 
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
        >
          Book Appointment
        </a>
      </div>
    </div>
  )
}

export default Page
