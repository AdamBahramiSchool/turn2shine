'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleContact = () => setContactOpen(!contactOpen);

  const navItems = [
    { name: 'Why Us', href: '/whyus' },
    { name: 'Services', dropdown: true },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact Us', dropdown: true },
    { name: 'Gallery', href: '/gallery' },
  ];

  const serviceItems = [
    { name: 'Pressure Washing', href: '/PressureWashing' },
    { name: 'Window Cleaning', href: '/WindowCleaning' },
    { name: 'Gutter Cleaning', href: '/GutterCleaning' },
    { name: 'Christmas Lights', href: '/ChristmasLights' },
    { name: 'Quote/Book Appointment', href: '/Quote' },
  ];

  const contactItems = [
    { name: 'Ask Us Questions', href: '/contactus' },
    { name: 'Quote/Book Appointment', href: '/Quote' },
  ];

  return (
    <nav className="bg-blue-400 text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Turn2shine
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => {
              if (item.dropdown && item.name === 'Services') {
                return (
                  <div key={item.name} className="relative group">
                    <button className="hover:bg-green-400 px-3 py-2 rounded-md text-sm font-medium">
                      {item.name}
                    </button>
                    <div className="absolute left-0 mt-2 w-64 bg-blue-300 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      {serviceItems.map((sub, index) => (
                        <Link key={sub.name} href={sub.href}>
                          <div
                            className={`px-4 py-2 text-sm font-bold hover:bg-green-400 ${
                              index !== serviceItems.length - 1
                                ? 'border-b border-white'
                                : ''
                            }`}
                          >
                            {sub.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.dropdown && item.name === 'Contact Us') {
                return (
                  <div key={item.name} className="relative group">
                    <button className="hover:bg-green-400 px-3 py-2 rounded-md text-sm font-medium">
                      {item.name}
                    </button>
                    <div className="absolute left-0 mt-2 w-64 bg-blue-300 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      {contactItems.map((sub, index) => (
                        <Link key={sub.name} href={sub.href}>
                          <div
                            className={`px-4 py-2 text-sm font-bold hover:bg-green-400 ${
                              index !== contactItems.length - 1
                                ? 'border-b border-white'
                                : ''
                            }`}
                          >
                            {sub.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.name} href={item.href}>
                  <span className="hover:bg-green-400 px-3 py-2 rounded-md text-sm font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blue-500">
          <div className="px-2 pt-2 pb-3 sm:px-3 bg-blue-300">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="mb-2">
                  <button
                    onClick={
                      item.name === 'Services' ? toggleServices : toggleContact
                    }
                    className="hover:bg-green-400 text-white font-bold w-full text-left block px-3 py-2 rounded-md text-base border border-white"
                  >
                    {item.name}
                  </button>

                  {item.name === 'Services' && servicesOpen && (
                    <div className="ml-4 border-l border-gray-700 pl-4 mt-2">
                      {serviceItems.map((sub) => (
                        <Link key={sub.name} href={sub.href}>
                          <span className="block hover:bg-green-400 text-white font-bold px-3 py-2 rounded-md text-base border border-white mb-2">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.name === 'Contact Us' && contactOpen && (
                    <div className="ml-4 border-l border-gray-700 pl-4 mt-2">
                      {contactItems.map((sub) => (
                        <Link key={sub.name} href={sub.href}>
                          <span className="block hover:bg-green-400 text-white font-bold px-3 py-2 rounded-md text-base border border-white mb-2">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div key={item.name} className="mb-2">
                  <Link href={item.href}>
                    <span className="hover:bg-green-400 block text-white font-bold px-3 py-2 rounded-md text-base font-medium border border-white">
                      {item.name}
                    </span>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
