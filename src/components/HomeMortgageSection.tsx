import React from 'react';

export default function HomeMortgageSection() {
  return (
    <section
      className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center md:justify-start bg-white overflow-hidden text-center md:text-left"
      style={{
        backgroundImage: 'url(/ownhome.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center', // Center for mobile
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-white via-white/70 to-white/10 md:from-white/85 md:via-white/50 md:to-transparent" />
      
      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center md:items-start w-full md:w-1/2 p-6 md:p-8 md:pl-16">
        <h2 className="text-3xl md:text-5xl font-light mb-3 md:mb-4 text-gray-900">A home of your own</h2>
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-md">With low down payment options on a fixed-rate mortgage</p>
        <button className="border border-gray-400 rounded-full px-6 md:px-8 py-2 md:py-3 font-semibold text-gray-900 bg-white hover:bg-gray-100 transition text-base md:text-lg">Get started</button>
      </div>
    </section>
  );
} 