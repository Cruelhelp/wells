import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, CreditCard, PiggyBank, TrendingUp } from 'lucide-react';

export default function FinancialGuidance() {
  return (
    <section className="w-full py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">Financial Guidance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-sm text-center">
            <Briefcase className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Investment Planning</h3>
            <p className="text-sm md:text-base text-gray-600">Plan your investments with expert guidance.</p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-sm text-center">
            <CreditCard className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Credit Management</h3>
            <p className="text-sm md:text-base text-gray-600">Manage your credit and improve your score.</p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-sm text-center">
            <PiggyBank className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Savings Strategies</h3>
            <p className="text-sm md:text-base text-gray-600">Discover effective ways to save and grow your money.</p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-sm text-center">
            <TrendingUp className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Financial Growth</h3>
            <p className="text-sm md:text-base text-gray-600">Strategies to help you achieve financial success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
