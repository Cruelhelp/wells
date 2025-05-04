import React from 'react';

export default function DashboardMenuBar() {
  return (
    <nav className="bg-white border-b border-gray-200 w-full">
      <div className="container mx-auto px-2 md:px-4 h-12 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center h-full space-x-2 md:space-x-0 md:justify-between">
          <button className="flex-shrink-0 md:flex-1 px-2 md:px-0 text-gray-700 hover:text-wellsfargo-red font-medium text-center text-sm md:text-base">Accounts</button>
          <span className="hidden md:block h-6 w-px bg-gray-200 mx-2" />
          <button className="flex-shrink-0 md:flex-1 px-2 md:px-0 text-gray-700 hover:text-wellsfargo-red font-medium text-center text-sm md:text-base">Brokerage</button>
          <span className="hidden md:block h-6 w-px bg-gray-200 mx-2" />
          <button className="flex-shrink-0 md:flex-1 px-2 md:px-0 text-gray-700 hover:text-wellsfargo-red font-medium text-center text-sm md:text-base">Transfer & Pay</button>
          <span className="hidden md:block h-6 w-px bg-gray-200 mx-2" />
          <button className="flex-shrink-0 md:flex-1 px-2 md:px-0 text-gray-700 hover:text-wellsfargo-red font-medium text-center text-sm md:text-base">Plan & Learn</button>
          <span className="hidden md:block h-6 w-px bg-gray-200 mx-2" />
          <button className="flex-shrink-0 md:flex-1 px-2 md:px-0 text-gray-700 hover:text-wellsfargo-red font-medium text-center text-sm md:text-base">Security & Support</button>
        </div>
      </div>
    </nav>
  );
} 