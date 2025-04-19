'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const totalImages = 10;

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev === totalImages ? 1 : prev + 1));
  }, [totalImages]);

  const previousImage = useCallback(() => {
    setCurrentImage((prev) => (prev === 1 ? totalImages : prev - 1));
  }, [totalImages]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextImage, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextImage]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-blue-200 to-blue-100 mt-16 flex flex-col justify-center">

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-6">
            Browse through our portfolio of completed projects showcasing our commitment to excellence.
          </p>
        </div>

        <div 
          className="relative w-full aspect-square sm:aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl bg-gray-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...Array(totalImages)].map((_, index) => (
            <div
              key={index + 1}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                currentImage === index + 1 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <Image
                src={`/s${index + 1}.jpg`}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover rounded-lg sm:rounded-xl"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={previousImage}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 focus:outline-none"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 focus:outline-none"
            aria-label="Next image"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            {[...Array(totalImages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index + 1)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-200 ${
                  currentImage === index + 1 
                    ? 'bg-white w-3 sm:w-4' 
                    : 'bg-white bg-opacity-50 w-1.5 sm:w-2 hover:bg-opacity-75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image Counter */}
        <div className="text-center mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
          <span className="font-medium">{currentImage}</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span>{totalImages}</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
