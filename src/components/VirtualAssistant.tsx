import React from 'react';

export default function VirtualAssistant() {
  return (
    <section
      className="relative w-full flex flex-col md:flex-row items-center bg-gradient-to-br from-[#353232] to-[#6b6464] overflow-hidden py-12 md:py-20"
    >
      {/* Left: Phone Image (Order changes on mobile) */}
      <div className="flex justify-center md:justify-end items-center w-full md:w-1/3 z-10 order-2 md:order-1 px-4 md:px-0 mt-8 md:mt-0">
        <img
          src="/phone.png"
          alt="Phone"
          className="w-48 md:w-72 h-auto object-contain drop-shadow-2xl"
        />
      </div>
      {/* Right: Text and App Store Buttons */}
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-2/3 px-6 md:pl-16 md:pr-32 z-10 order-1 md:order-2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">Need help? Ask Fargo<sup>®</sup></h2>
        <p className="text-lg md:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl">
          Fargo<sup>1</sup> gives you valuable insights like a summary of your spending by category, retailer and across accounts. Find it only in the Wells Fargo Mobile<sup>®</sup> app.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/apple.png" alt="Download on the App Store" className="h-12 md:h-16 w-auto" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/google.png" alt="Get it on Google Play" className="h-12 md:h-16 w-auto" />
          </a>
        </div>
        <span className="text-xs md:text-sm text-white/70 mt-4">*Screen image is simulated</span>
      </div>
    </section>
  );
}
