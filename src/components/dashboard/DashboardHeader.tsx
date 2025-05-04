import React from 'react';

export default function DashboardHeader() {
  return (
    <header className="bg-wellsfargo-red">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src="/logo.webp" alt="Wells Fargo Logo" className="h-8" />
          <h1 className="text-xl font-semibold text-white">WELLS FARGO</h1>
        </div>
        {/* Optionally add Transfer & Pay, More buttons here */}
      </div>
    </header>
  );
}
