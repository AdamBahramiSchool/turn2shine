'use client';
import React from 'react';
import Link from 'next/link';

const ShiningEffect = () => {
  const processSteps = [
    {
      title: "Pre-Treatment Analysis",
      description: "We begin by assessing your property's specific needs, identifying problem areas, and determining the optimal treatment approach.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Chemical Application",
      description: "Our specialized solution is carefully applied, penetrating deep into surfaces to break down contaminants at their source.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Deep Cleaning",
      description: "Our solution works at the molecular level to eliminate moss, algae, and other contaminants from their roots.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Protection & Shine",
      description: "The final stage creates a protective barrier that not only leaves surfaces gleaming but also prevents future growth.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Long-Lasting Results",
      description: "Our treatment continues to protect your property for years, maintaining that fresh, clean appearance.",
      icon: "⏱️"
    },
    {
      title: "Deep Root Elimination",
      description: "Unlike standard cleaning, our solution completely removes moss and algae from their roots.",
      icon: "🌱"
    },
    {
      title: "Preventive Protection",
      description: "Creates a protective barrier that prevents new growth and contamination.",
      icon: "🛡️"
    },
    {
      title: "Enhanced Appearance",
      description: "Leaves surfaces with a remarkable shine that enhances your property's curb appeal.",
      icon: "✨"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen mt-16">
      {/* Hero Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              The Shining Effect
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Our scientifically proven treatment process delivers superior cleaning results that last for years.
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Advanced Treatment Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chemical Solution */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Science Behind the Shine</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our proprietary chemical solution is the result of extensive research and development, 
              designed to not just clean surfaces, but to provide long-lasting protection and shine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-700 rounded-xl p-6">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Long-lasting Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Results That Last
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our treatment doesn't just clean – it transforms. The protective barrier created by our solution 
              keeps your property looking pristine for years, significantly extending the time between services 
              and providing exceptional value for our customers.
            </p>
            <Link href="/Quote">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                Experience the Difference
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiningEffect;