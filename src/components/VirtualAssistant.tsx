import React from 'react';

export default function VirtualAssistant() {
  return (
    <section
      className="relative w-full min-h-[600px] md:min-h-[700px] flex flex-col md:flex-row items-center bg-gradient-to-br from-[#353232] to-[#6b6464] overflow-hidden py-20 md:py-28"
    >
      {/* Left: Phone Image */}
      <div className="flex flex-col justify-center items-end w-full md:w-1/3 z-10 gap-8 pr-4 md:pr-0">
        <img
          src="/phone.png"
          alt="Phone"
          className="w-56 h-auto md:w-72 md:h-[420px] object-contain drop-shadow-2xl"
        />
      </div>
      {/* Right: Text and App Store Buttons */}
      <div className="flex flex-col justify-center items-start w-full md:w-2/3 px-8 md:pl-16 md:pr-32 z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Need help? Ask Fargo<sup>®</sup></h2>
        <p className="text-2xl text-white/90 mb-8 max-w-2xl">
          Fargo<sup>1</sup> gives you valuable insights like a summary of your spending by category, retailer and across accounts. Find it only in the Wells Fargo Mobile<sup>®</sup> app.
        </p>
        <div className="flex items-center gap-6 mb-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/apple.png" alt="Download on the App Store" className="h-16 w-auto" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/google.png" alt="Get it on Google Play" className="h-16 w-auto" />
          </a>
        </div>
        <span className="text-sm text-white/70 mt-4">*Screen image is simulated</span>
      </div>
    </section>
  );
}
