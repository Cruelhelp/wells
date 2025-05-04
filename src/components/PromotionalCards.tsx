
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function PromotionalCards() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <div className="mb-4">
              {/* Restored original SVG icon */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-wellsfargo-red">
                <rect x="4" y="12" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="36" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-1">Earn a $200 cash rewards bonus</h3>
            <p className="text-gray-700 mb-4 text-sm">Plus, earn unlimited 2% cash rewards on purchases with $0 annual fee. Terms apply.</p>
            <div className="flex items-center text-indigo-600 font-medium">
              <span>Learn more</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-wellsfargo-red">
                <rect x="8" y="12" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="18" x2="13" y2="18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-1">Want a $125 checking bonus?</h3>
            <p className="text-gray-700 mb-4 text-sm">Open a new Clear Access Banking account and complete the qualifying requirements</p>
            <div className="flex items-center text-indigo-600 font-medium">
              <span>Learn more</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-wellsfargo-red">
                <path d="M24 12C18.5 12 14 16.5 14 22C14 27.5 18.5 32 24 32C29.5 32 34 27.5 34 22C34 16.5 29.5 12 24 12ZM24 12V8M18 14L16 10M30 14L32 10M14 22H10M34 22H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-1">Open a savings account</h3>
            <p className="text-gray-700 mb-4 text-sm">Explore our savings accounts and find the right fit for you</p>
            <div className="flex items-center text-indigo-600 font-medium">
              <span>Get started</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="12" fill="#F97316" />
                <path d="M24 16V32M18 22L24 16L30 22M18 26L24 32L30 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-1">Interest rates today</h3>
            <div className="flex items-center text-indigo-600 font-medium mt-12">
              <span>Check rates</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
