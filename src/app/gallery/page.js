'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 10;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => 
        prevImage === totalImages ? 1 : prevImage + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
      <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        {[...Array(totalImages)].map((_, index) => (
          <div
            key={index + 1}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentImage === index + 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={`/s${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
