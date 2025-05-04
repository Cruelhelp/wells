
import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-wellsfargo-darkBeige pt-8 pb-4">
      <div className="container mx-auto">
        {/* Footer links */}
        <div className="flex flex-wrap mb-6 border-b border-gray-300 pb-4">
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">Privacy, Cookies, Security & Legal</a>
          </div>
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">Do Not Sell or Share My Personal Information</a>
          </div>
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">Notice of Data Collection</a>
          </div>
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">General Terms of Use</a>
          </div>
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">Online Access Agreement</a>
          </div>
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">Report Fraud</a>
          </div>
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">About Wells Fargo</a>
          </div>
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">Careers</a>
          </div>
        </div>
        
        <div className="flex flex-wrap border-b border-gray-300 pb-6">
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">Diversity and Accessibility</a>
          </div>
          <div className="w-full md:w-auto mr-6 mb-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">Sitemap</a>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 my-6">
          <a href="#" className="text-gray-800">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-800">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-800">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-800">
            <Twitter size={20} />
          </a>
        </div>
        
        {/* Investment disclaimer */}
        <div className="border border-gray-400 p-4 mb-6">
          <h3 className="font-medium mb-2">Investment and Insurance Products are:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Not Insured by the FDIC or Any Federal Government Agency</li>
            <li>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</li>
            <li>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</li>
          </ul>
        </div>
        
        {/* Legal text */}
        <div className="text-sm text-gray-700 space-y-4">
          <p>Investment products and services are offered through Wells Fargo Advisors. Wells Fargo Advisors is a trade name used by Wells Fargo Clearing Services, LLC (WFCS) and Wells Fargo Advisors Financial Network, LLC, Members <a href="#" className="text-blue-600 hover:underline">SIPC</a>, separate registered broker-dealers and non-bank affiliates of Wells Fargo & Company.</p>
          
          <p>1. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates may apply. Fargo is only available on the smartphone versions of the Wells Fargo Mobile<sup>®</sup> app.</p>
          
          <p>Android, Google Play, Chrome, Pixel and other marks are trademarks of Google LLC.</p>
          
          <p>Apple, the Apple logo, Apple Pay, Apple Watch, Face ID, iCloud Keychain, iPad, iPad Pro, iPhone, iTunes, Mac, Safari, and Touch ID are trademarks of Apple Inc., registered in the U.S. and other countries. Apple Wallet is a trademark of Apple Inc. App Store is a service mark of Apple Inc.</p>
          
          <p>Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
        </div>
        
        <div className="mt-6 flex items-center">
          <span className="inline-block mr-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="2" fill="#f5f5f5" />
              <path d="M4 10H16M10 4V16" stroke="#666" strokeWidth="2" />
            </svg>
          </span>
          <span className="text-sm text-gray-700">Equal Housing Lender</span>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>PM-09282026-7798034.1.1</p>
          <p className="mt-1">LRC-0325</p>
          <p className="mt-3">© 1999 - 2025 Wells Fargo. NMLSR ID 399801</p>
        </div>
      </div>
    </footer>
  );
}
