'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GutterCleaning = () => {
  const services = [
    {
      title: "Complete Debris Removal",
      description: "Thorough removal of leaves, twigs, and all debris from gutters and downspouts.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    {
      title: "Downspout Cleaning",
      description: "Ensuring proper water flow through downspouts with thorough cleaning and testing.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    },
    {
      title: "Gutter Inspection",
      description: "Detailed inspection for damage, loose fittings, and potential issues requiring attention.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Minor Repairs",
      description: "Quick fixes for minor issues like loose brackets, small leaks, and realignment.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Prevent Water Damage",
      description: "Clean gutters protect your home's foundation, walls, and landscaping from water damage."
    },
    {
      title: "Avoid Pest Problems",
      description: "Eliminate breeding grounds for mosquitoes and nesting areas for pests."
    },
    {
      title: "Extend Roof Life",
      description: "Proper drainage helps prevent roof damage and extends its lifespan."
    },
    {
      title: "Save Money",
      description: "Regular maintenance prevents costly repairs and water damage restoration."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We inspect your gutters and identify any potential issues or areas of concern."
    },
    {
      step: "2",
      title: "Debris Removal",
      description: "Thorough removal of all leaves, twigs, and debris from gutters and downspouts."
    },
    {
      step: "3",
      title: "System Flush",
      description: "Complete flushing of the gutter system to ensure proper water flow."
    },
    {
      step: "4",
      title: "Final Inspection",
      description: "Quality check and testing to ensure everything is working perfectly."
    }
  ];

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/guttercleaning1.jpg"
          alt="Professional Gutter Cleaning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Professional Gutter Cleaning
            </h1>
            <p className="text-xl text-white mb-8">
              Protect your home with our expert gutter maintenance service
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
              Complete Gutter Maintenance
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive gutter cleaning and maintenance services
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

      {/* Benefits Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Clean Your Gutters?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Protect your home and prevent costly damage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Cleaning Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              Thorough and professional gutter maintenance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
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

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protect Your Home Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your professional gutter cleaning service
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

export default GutterCleaning;