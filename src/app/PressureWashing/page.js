'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Residential Pressure Washing",
    description: "Expert cleaning for driveways, patios, decks, and home exteriors.",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Commercial Pressure Washing",
    description: "Professional cleaning for storefronts, sidewalks, and commercial properties.",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Surface Restoration",
    description: "Deep cleaning that restores surfaces to their original appearance.",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Safe and effective cleaning products that protect your property and the environment.",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

const process = [
  {
    step: "1",
    title: "Surface Evaluation",
    description: "We assess the surface condition and determine the appropriate cleaning approach."
  },
  {
    step: "2",
    title: "Area Preparation",
    description: "Protecting surrounding areas and setting up equipment for optimal cleaning."
  },
  {
    step: "3",
    title: "Deep Cleaning",
    description: "Using professional-grade equipment and techniques for thorough cleaning."
  },
  {
    step: "4",
    title: "Final Inspection",
    description: "Quality check to ensure every surface meets our high standards."
  }
];

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sliderRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

 // Auto-scroll slider left ➡ right
useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
  
    const scrollSpeed = 2; // Adjust speed as needed
    const interval = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        // Reset to the beginning smoothly
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Incrementally scroll
        slider.scrollLeft += scrollSpeed;
      }
    }, 16); // Lower interval for smoother motion (60fps)
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="flex flex-col">
     {/* Hero Section */}
    <div className="relative w-full h-screen bg-black">
      {/* Fullscreen Image */}
      <Image
        src="/pressure_washing.jpg"
        alt="Pressure Washing Hero"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">Power & Pressure Washing</h1>
        <p className="text-white mt-4 text-lg md:text-xl">Your Home Will Love You</p>
        <Link href="/Quote">
          <button className="mt-6 bg-blue-300 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-400">
            Quote / Book Now
          </button>
        </Link>
      </div>
    
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Professional Pressure Washing Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Expert cleaning solutions for all your exterior surfaces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Cleaning Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional, thorough, and efficient pressure washing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-4">Step {step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Our Pressure Washing Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Equipment</h3>
                <p className="text-gray-600">Commercial-grade surface cleaners and pressure wands for optimal results.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">Skilled technicians trained in safe and effective cleaning techniques.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">We ensure every surface is restored to its best possible condition.</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote for your pressure washing needs today
          </p>
          <Link href="/Quote">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
