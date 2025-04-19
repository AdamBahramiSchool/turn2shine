'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ChristmasLights = () => {
  const features = [
    {
      title: "Professional Installation",
      description: "Expert installation of commercial-grade LED lights, ensuring safety and stunning displays.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Custom Design",
      description: "Personalized lighting designs that complement your home's architecture and style.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Maintenance & Removal",
      description: "Full-service package including maintenance during the season and professional removal.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m4-10a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      )
    },
    {
      title: "Storage Solution",
      description: "Professional storage of your lights during the off-season, ensuring longevity and convenience.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  const process = [
    {
      step: "1",
      title: "Design Consultation",
      description: "We work with you to create the perfect holiday lighting design for your property."
    },
    {
      step: "2",
      title: "Professional Installation",
      description: "Our trained team safely installs your custom lighting display."
    },
    {
      step: "3",
      title: "Season-Long Support",
      description: "We maintain your display throughout the season, fixing any issues promptly."
    },
    {
      step: "4",
      title: "Professional Removal",
      description: "After the season, we carefully remove and store your lights for next year."
    }
  ];

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/christmaslights1.jpg"
          alt="Christmas Lights Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Professional Christmas Light Installation
            </h1>
            <p className="text-xl text-white mb-8">
              Create magical holiday memories with our professional lighting services
            </p>
            <Link href="/Quote">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Your Holiday Quote
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Complete Holiday Lighting Service
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              From design to removal, we handle everything for a stress-free holiday season
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Installation Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              A seamless experience from start to finish
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

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Light Up Your Holidays?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book now to secure your spot for this holiday season
          </p>
          <Link href="/Quote">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Schedule Your Installation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChristmasLights;