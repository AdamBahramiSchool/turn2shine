import React from 'react'

const WhyUs = () => {
  const reasons = [
    {
      title: "Competitive Pricing",
      description: "We offer high-quality services at affordable rates, ensuring you get the best value for your money.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Eco-Friendly Solutions",
      description: "We use environmentally friendly cleaning products and methods to protect your property and the planet.",
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Professional Experience",
      description: "Our team of experts brings years of experience and knowledge to every job, ensuring top-notch results.",
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Tailored Services",
      description: "We customize our approach to meet the unique needs of your property, ensuring the best possible results.",
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-blue-100 mt-16 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn2shine is your trusted partner for all exterior cleaning needs. We combine expertise,
            quality, and dedication to deliver exceptional results for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl border-t-4 border-blue-500">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-100">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h4>
              <p className="text-gray-600 mb-6">
                We take pride in delivering consistent, high-quality results. Our team undergoes regular training
                to stay updated with the latest cleaning techniques and safety protocols. Every project is
                completed with attention to detail and a commitment to excellence.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Customer Satisfaction</h4>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We work closely with you to understand your needs and
                exceed your expectations. Our team is always available to address your concerns and ensure
                you're completely satisfied with our services.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Advanced Equipment</h4>
              <p className="text-gray-600 mb-6">
                We invest in state-of-the-art cleaning equipment and use professional-grade, eco-friendly
                cleaning solutions. This ensures efficient cleaning while protecting your property and
                the environment.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Reliable Service</h4>
              <p className="text-gray-600">
                Count on us for timely, professional service. We respect your schedule and property,
                arriving on time and completing projects efficiently without compromising on quality.
                Our reliable team is here to serve you year-round.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Turn2shine Difference?</h3>
          <p className="text-gray-600 mb-8">Contact us today for a free consultation and quote.</p>
          <a href="/Quote" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
