'use client';
import React from 'react';
import Link from 'next/link';

const Pricing = () => {
  const pricingFactors = [
    {
      title: "Property Type",
      description: "Whether your property is residential or commercial affects pricing due to different equipment and approaches needed.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Square Footage",
      description: "The size of your property is a key factor in determining service costs, ensuring fair pricing based on the scope of work.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      )
    },
    {
      title: "Service Type",
      description: "Different services require different equipment, time, and expertise, which influences the overall cost.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Location",
      description: "Transportation fees may apply based on your location, but we strive to keep these costs minimal for our customers.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const promotions = [
    {
      title: "First-Time Customer Discount",
      description: "New customers receive a special discount on their first service.",
      badge: "15% OFF"
    },
    {
      title: "Bundle Services",
      description: "Book multiple services together and save on the total cost.",
      badge: "SAVE 20%"
    },
    {
      title: "Seasonal Specials",
      description: "Take advantage of our seasonal promotions for additional savings.",
      badge: "SEASONAL"
    },
    {
      title: "Referral Rewards",
      description: "Refer a friend and both of you receive a discount on your next service.",
      badge: "WIN-WIN"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen mt-16">
      {/* Hero Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Transparent & Flexible Pricing
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              We believe in fair pricing that reflects the quality of our work while remaining accessible to our community.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Factors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Understanding Our Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingFactors.map((factor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100">
                {factor.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Commitment */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to the Community</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We understand that every customer's needs are unique. That's why we're committed to working with you to find 
              a solution that fits your budget while maintaining our high standards of service. Your satisfaction and our 
              community's cleanliness are our top priorities.
            </p>
          </div>
        </div>
      </div>

      {/* Current Promotions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Current Promotions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promotions.map((promo, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{promo.title}</h3>
                  <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {promo.badge}
                  </span>
                </div>
                <p className="text-gray-600">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us for a personalized quote tailored to your specific needs.
            </p>
            <Link href="/Quote">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                Get Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;