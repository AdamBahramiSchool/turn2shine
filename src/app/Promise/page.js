'use client';
import React from 'react';
import Link from 'next/link';

const Promise = () => {
  const promises = [
    {
      title: "Quality Excellence",
      description: "We promise to deliver exceptional cleaning results using professional-grade equipment and eco-friendly products. Every project is completed to the highest standards.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our top priority. We listen to your needs, provide personalized solutions, and ensure you're completely happy with our service.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "Community Care",
      description: "We're committed to maintaining clean, beautiful neighborhoods and business districts. Your property's appearance reflects on the whole community.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Long-Term Relationships",
      description: "We aim to be your trusted cleaning partner for years to come, building lasting relationships through reliability, trust, and consistent results.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const standards = [
    {
      title: "Professional Service",
      points: [
        "Trained and experienced cleaning specialists",
        "Modern, professional-grade equipment",
        "Eco-friendly cleaning solutions",
        "Attention to detail on every project"
      ]
    },
    {
      title: "Customer Experience",
      points: [
        "Clear communication throughout the process",
        "Flexible scheduling to meet your needs",
        "Prompt response to inquiries and concerns",
        "Follow-up satisfaction checks"
      ]
    },
    {
      title: "Quality Assurance",
      points: [
        "Thorough inspection after completion",
        "Satisfaction guarantee on all services",
        "Regular training and equipment updates",
        "Insurance and safety compliance"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen mt-16">
      {/* Hero Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Our Promise To You
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              At Turn2shine, we're more than just a cleaning company. We're your partner in maintaining beautiful, clean spaces that enhance our community and exceed your expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Core Promises */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100">
                {promise.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{promise.title}</h3>
              <p className="text-gray-600">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Standards */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-blue-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{standard.title}</h3>
                <ul className="space-y-3">
                  {standard.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-300 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We understand that a clean environment is essential for both residential and commercial properties. 
            Our commitment goes beyond just cleaning – we're dedicated to creating lasting relationships with our 
            customers and maintaining the beauty of our communities.
          </p>
          <Link href="/Quote">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
              Experience the Turn2shine Difference
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promise;