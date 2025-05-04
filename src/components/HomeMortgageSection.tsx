import React from 'react';

export default function HomeMortgageSection() {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-stretch bg-white overflow-hidden"
      style={{
        backgroundImage: 'url(/ownhome.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay for readability, fades to transparent on right */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0.85) 0%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0.1) 85%,rgba(255,255,255,0) 100%)'}} />
      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-start w-full md:w-1/2 p-8 md:pl-16 min-h-[500px]">
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">A home of your own</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-md">With low down payment options on a fixed-rate mortgage</p>
        <button className="border border-gray-400 rounded-full px-8 py-3 font-semibold text-gray-900 bg-white hover:bg-gray-100 transition text-lg">Get started</button>
      </div>
    </section>
  );
} 