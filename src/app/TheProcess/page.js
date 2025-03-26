'use client';
import React from 'react';

const steps = [
  {
    number: 1,
    text: "Find the service you're looking for.",
  },
  {
    number: 2,
    text: `Residential: Get an estimate or quote by filling out our forms, or uploading house images/videos (no in-person check needed).
    
Commercial: Contact us to receive quote and book appointment.`,
  },
  {
    number: 3,
    text: 'Schedule a booking appointment (no need to pay upfront).',
  },
  {
    number: 4,
    text: 'Your home will look clean and amazing!',
  },
];

const Page = () => {
  return (
    <div className="bg-blue-400 min-h-screen py-16 px-6 sm:px-12 flex flex-col items-center justify-center">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mb-12 text-center drop-shadow-md">
        The Process
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl w-full">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl p-6 w-full sm:w-5/12 md:w-1/4 shadow-md"
          >
            <div className="text-6xl font-extrabold text-white/80 mb-4 drop-shadow-lg text-center">
              {step.number}
            </div>
            <p className="text-white/90 font-semibold text-base whitespace-pre-line leading-relaxed text-center drop-shadow-sm">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
