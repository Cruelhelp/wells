import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, CreditCard, PiggyBank, TrendingUp } from 'lucide-react';

export default function FinancialGuidance() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Guidance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Investment Planning</h3>
            <p className="text-gray-600 text-center">Plan your investments with expert guidance.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Credit Management</h3>
            <p className="text-gray-600 text-center">Manage your credit and improve your score.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <PiggyBank className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Savings Strategies</h3>
            <p className="text-gray-600 text-center">Discover effective ways to save and grow your money.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Growth</h3>
            <p className="text-gray-600 text-center">Strategies to help you achieve financial success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
