import React from 'react';

export default function DashboardMenuBar() {
  return (
    <nav className="bg-white border-b border-gray-200 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 h-12">
        <button className="flex-1 text-gray-700 hover:text-wellsfargo-red font-medium text-center">Accounts</button>
        <span className="h-6 w-px bg-gray-200 mx-2" />
        <button className="flex-1 text-gray-700 hover:text-wellsfargo-red font-medium text-center">Brokerage</button>
        <span className="h-6 w-px bg-gray-200 mx-2" />
        <button className="flex-1 text-gray-700 hover:text-wellsfargo-red font-medium text-center">Transfer & Pay</button>
        <span className="h-6 w-px bg-gray-200 mx-2" />
        <button className="flex-1 text-gray-700 hover:text-wellsfargo-red font-medium text-center">Plan & Learn</button>
        <span className="h-6 w-px bg-gray-200 mx-2" />
        <button className="flex-1 text-gray-700 hover:text-wellsfargo-red font-medium text-center">Security & Support</button>
      </div>
    </nav>
  );
} 