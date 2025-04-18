'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  '/s1.jpg',
  '/s2.jpg',
  '/s3.jpg',
  '/s1.jpg',
  '/s2.jpg',
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

      {/* Description */}
      <div className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800 space-y-4">
        <h2 className="text-2xl font-bold text-blue-500">Residential & Commercial Expertise</h2>
        <p>
          At Turn2shine, we specialize in <strong>residential and commercial pressure washing</strong>. Whether it’s your home’s driveway,
          siding, patio, or your business's storefront and sidewalks—we handle it all.
        </p>
        <p>
          Our <strong>professional-grade equipment</strong> includes commercial surface cleaners, pressure wands, and powerful leaf blowers
          to remove all debris prior to cleaning. We don’t just wash—we restore.
        </p>
        <h3 className="font-semibold text-lg text-blue-400">Our Residential Process:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>Pre-clean inspection and safety setup</li>
          <li>Debris removal with blower</li>
          <li>Surface cleaner wash of concrete/patios</li>
          <li>High-pressure rinse & detail edge wash</li>
        </ul>
        <h3 className="font-semibold text-lg text-blue-400">Our Commercial Process:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>Flexible after-hours scheduling</li>
          <li>Heavy-duty degreasing (if needed)</li>
          <li>Efficient high-pressure cleaning</li>
          <li>Cleanup & final walkthrough</li>
        </ul>
      </div>

      {/* Gallery Slider */}
      <div className="bg-white py-8 overflow-hidden">
  <h2 className="text-center text-2xl font-bold mb-6 text-blue-500">Our Pressure Washing Work</h2>
  <div className="relative flex items-center animate-scroll">
    {galleryImages.map((img, index) => (
      <div
        key={index}
        className="min-w-[300px] h-64 relative rounded overflow-hidden shadow-lg flex-shrink-0 mx-2"
      >
        <Image src={img} alt={`Gallery ${index}`} fill className="object-cover" />
      </div>
    ))}
    {galleryImages.map((img, index) => (
      <div
        key={`duplicate-${index}`}
        className="min-w-[300px] h-64 relative rounded overflow-hidden shadow-lg flex-shrink-0 mx-2"
      >
        <Image src={img} alt={`Gallery Duplicate ${index}`} fill className="object-cover" />
      </div>
    ))}
  </div>
</div>




      {/* Contact Form */}
      <div className="bg-blue-100 p-8 md:p-12">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Ask Us Questions</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us what you're looking for..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
