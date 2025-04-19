'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WindowCleaning = () => {
  const services = [
    {
      title: "Interior & Exterior",
      description: "Complete cleaning of both sides of windows, ensuring crystal clear views from every angle.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Track & Frame Cleaning",
      description: "Detailed cleaning of window tracks, frames, and sills to prevent dirt buildup and ensure smooth operation.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Screen Cleaning",
      description: "Thorough cleaning of window screens to remove dust, debris, and improve airflow.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Hard Water Treatment",
      description: "Specialized treatment to remove hard water stains and mineral deposits from glass surfaces.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We evaluate your windows' condition and discuss any specific concerns or requirements."
    },
    {
      step: "2",
      title: "Pre-cleaning Preparation",
      description: "We protect surrounding areas and prepare our professional cleaning solutions."
    },
    {
      step: "3",
      title: "Deep Cleaning",
      description: "Using professional techniques and tools for streak-free, spotless results."
    },
    {
      step: "4",
      title: "Final Inspection",
      description: "Thorough quality check to ensure every window meets our high standards."
    }
  ];

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/windowcleaning1.jpg"
          alt="Professional Window Cleaning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Professional Window Cleaning
            </h1>
            <p className="text-xl text-white mb-8">
              Crystal clear views with our expert window cleaning service
            </p>
            <Link href="/Quote">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Comprehensive Window Cleaning Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional cleaning solutions for every window type
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
              Professional, thorough, and efficient window cleaning
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
              Why Choose Our Window Cleaning Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Equipment</h3>
                <p className="text-gray-600">We use professional-grade tools and cleaning solutions for the best results.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Experienced Team</h3>
                <p className="text-gray-600">Our skilled technicians are trained in the latest cleaning techniques.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">We're not satisfied until you're completely happy with the results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Sparkling Clean Windows?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote for your window cleaning needs today
          </p>
          <Link href="/Quote">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Schedule Your Cleaning
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WindowCleaning;