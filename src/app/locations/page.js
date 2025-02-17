import React from 'react'
import Image from 'next/image'

const page = () => {
  const locations = [
    "Port Coquitlam",
    "Coquitlam",
    "Burnaby",
    "Surrey",
    "Vancouver"
  ];

  return (
    <div className="bg-white p-4 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-black text-center mb-6">Our Service Areas</h1>
      
      <div className="rounded-lg overflow-hidden border-2 border-black mb-6">
        <Image 
          src='/maps.png' 
          alt="Our Service Areas Map"
          width={800}
          height={400}
          layout="responsive"
          className="object-cover"
        />
      </div>
      
      <div className="text-black text-lg sm:text-xl space-y-4">
        <p>
          We're proud to offer our top-notch exterior maintenance services across the Greater Vancouver area. Our expert team is ready to serve you in:
        </p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
          {locations.map((location, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {location}
            </li>
          ))}
        </ul>

        <p>
          Whether you're in a bustling city center or a quiet suburban neighborhood, our team is equipped to handle all your exterior maintenance needs. From pressure washing in Port Coquitlam to gutter cleaning in Vancouver, we've got you covered.
        </p>

        <p>
          Don't see your specific location listed? No worries! We often serve surrounding areas as well. Contact us to check if we can accommodate your location.
        </p>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Our Promise</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quick response times</li>
            <li>Familiarity with local weather conditions and their impact on exteriors</li>
            <li>Support for your local community</li>
            <li>Personalized service tailored to your neighborhood's needs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page

