import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Footer from '@/components/Footer';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import TopNavBar from '@/components/TopNavBar';

const Statement = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const accountNumber = '9790629037';
  const statementPeriod = 'May 1, 2025 - May 31, 2025';
  const beginningBalance = 0.00;
  const depositsCredits = 18500000.00;
  const withdrawalsDebits = 0.00;
  const endingBalance = 18500000.00;
  const interestPaidThisStatement = 0.00;
  const averageCollectedBalance = 0.00;
  const annualPercentageYieldEarned = 0.00;
  const interestEarnedThisStatementPeriod = 0.00;
  const interestPaidThisYear = 0.00;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavBar />
      <main className="flex-grow container mx-auto py-4 px-2 max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <svg className="h-8 w-8 text-wellsfargo-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" /></svg>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Holds & Reports Center</h1>
            <p className="text-gray-700 text-sm">Review and resolve important account holds, pending actions, and reports that require your attention.</p>
          </div>
        </div>
        <button
          onClick={() => window.location.href = '/dashboard'}
          className="mb-4 flex items-center gap-2 bg-white text-wellsfargo-red border border-wellsfargo-red px-3 py-1 rounded-full font-semibold shadow-sm hover:bg-wellsfargo-red hover:text-white transition-all duration-200 text-sm"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Back to Dashboard
        </button>
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <h2 className="px-4 pt-4 pb-2 font-semibold text-lg text-wellsfargo-red">Items Requiring Your Attention</h2>
          <ul className="divide-y divide-gray-200">
            <li>
              <details open className="group">
                <summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-semibold text-wellsfargo-red text-base group-open:border-b group-open:border-gray-200">
                  <span>Deposit Hold & Fee Breakdown</span>
                  <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-4 py-3 space-y-2 text-sm text-gray-700">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                    <div className="font-semibold text-blue-900 mb-1">Deposit Details</div>
                    <div className="text-blue-800">A deposit of <span className="font-bold">{formatCurrency(depositsCredits)}</span> was made to your account on <span className="font-bold">April 23, 2025</span> from Publishers Clearing House. These funds are currently on hold pending the required processing fee. <span className='font-bold text-red-600'>The payment was due on April 28th and is now overdue.</span></div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <div className="font-semibold text-yellow-900 mb-1">Fee Breakdown</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Initial Processing Fee: <span className="font-bold">$9,772</span> <span className="text-xs text-gray-500">(due immediately)</span></li>
                      <li>Remaining Balance Fee: <span className="font-bold">$7,570</span> <span className="text-xs text-gray-500">(due by December 12, 2025)</span></li>
                      <li className="text-red-600 font-semibold">Total Due Now: $9,772 (Overdue)</li>
                    </ul>
                  </div>
                  <div className="my-2 space-y-1">
                    <p className="text-gray-700">Your payment to release the deposited funds was due on <span className="font-bold text-red-600">April 28th</span> and is now <span className="font-bold text-red-600">overdue</span>. Please pay the required processing fee as soon as possible to avoid further delays. Once the fee is paid, your funds will be available for immediate withdrawal.</p>
                    <p className="text-gray-700">You're almost done! Take care of the overdue processing fee today to clear the hold on your account and enjoy full access to your funds. If you need assistance, our agents are available to help you through the process.</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full flex items-center justify-end transition-all duration-700" style={{ width: '85%' }}>
                      <span className="text-xs font-semibold text-white pr-2">85% Complete</span>
                    </div>
                  </div>
                  <div className="text-red-600 flex items-center space-x-2 p-3 border border-red-600 rounded-md text-xs mt-2">
                    <InformationCircleIcon className="h-4 w-4" />
                    <p>Please contact our agent to release the funds. A processing fee is required. Contact us at 1-800-555-0199.</p>
                  </div>
                </div>
              </details>
            </li>
            {/* Future items can be added here as <li> elements */}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Statement;
