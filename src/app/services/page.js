import React from 'react'

const page = () => {
    const services = [
        "Pressure Washing",
        "Gutter Cleaning",
        "Window Cleaning",
        "Roof Cleaning and Moss Removal",
        "House Washing",
        "Deck and Patio Cleaning",
        "Driveway and Walkway Cleaning",
        "Fence Cleaning and Restoration",
        "Exterior Painting Preparation"
      ];
    
      return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Exterior Care</h3>
                <p className="text-gray-600 mb-4">
                  As your all-in-one exterior maintenance solution in Vancouver and Tri-Cities, we offer a wide range of services to keep your property looking its best:
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  {services.map((service, index) => (
                    <li key={index} className="mb-2">{service}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment to Excellence</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Experienced and professional team</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Eco-friendly cleaning solutions</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Attention to detail in every job</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Customized solutions for your property</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
}

export default page