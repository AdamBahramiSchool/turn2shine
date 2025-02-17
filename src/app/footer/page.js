'use client';
import React from 'react';
import Link from 'next/link';

const page = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Your All-in-One Exterior Maintenance Solution serving all over Vancouver.
            </p>
            <div className="mt-4">
              <Link href="#" className="text-gray-300 hover:text-white mr-4">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="list-none">
              <li>
                <a href="/#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-white block py-1">
                  Pressure Washing
                </a>
              </li>
              <li>
                <a href="/#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-white block py-1">
                  Gutter Cleaning
                </a>
              </li>
              <li>
                <a href="/#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-white block py-1">
                  Window Cleaning
                </a>
              </li>
              <li>
                <a href="/#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-white block py-1">
                  Roof Cleaning
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              123 Main Street, Vancouver, BC
            </p>
            <p className="text-gray-300">
              Phone: (555) 123-4567
            </p>
            <p className="text-gray-300">
              Email: info@example.com
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default page;
