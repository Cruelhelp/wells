import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Footer from '@/components/Footer';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import TopNavBar from '@/components/TopNavBar';
import { useNavigate } from 'react-router-dom';

const Statement = () => {
  const navigate = useNavigate();

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
      <main className="flex-grow container mx-auto py-4 px-4 md:px-2 max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <svg className="h-6 w-6 md:h-8 md:w-8 text-wellsfargo-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" /></svg>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Holds & Reports Center</h1>
            <p className="text-gray-700 text-xs md:text-sm">Review and resolve important account holds, pending actions, and reports that require your attention.</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-4 flex items-center gap-2 bg-white text-wellsfargo-red border border-wellsfargo-red px-3 py-1 rounded-full font-semibold shadow-sm hover:bg-wellsfargo-red hover:text-white transition-all duration-200 text-sm w-full md:w-auto justify-center"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Back to Dashboard
        </button>
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
          <h2 className="px-4 pt-4 pb-3 font-semibold text-base md:text-lg text-wellsfargo-red border-b">Items Requiring Your Attention</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action / Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    Deposit Hold & Fee
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Overdue Payment
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <details className="group">
                      <summary className="cursor-pointer text-blue-600 hover:text-blue-800 hover:underline font-medium">
                        View Details
                      </summary>
                      <div className="mt-4 p-4 border bg-gray-50 rounded space-y-3 text-xs text-gray-700 whitespace-normal">
                         <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                          <div className="font-semibold text-blue-900 mb-1">Deposit Details</div>
                          <div className="text-blue-800">A deposit of <span className="font-bold">{formatCurrency(depositsCredits)}</span> was made on <span className="font-bold">Apr 23, 2025</span>. Funds on hold pending fee payment. <span className='font-bold text-red-600'>Payment due Apr 28th was missed.</span></div>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                          <div className="font-semibold text-yellow-900 mb-1">Fee Breakdown</div>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Initial Fee: <span className="font-bold">$9,772</span> <span className="text-xs text-gray-500">(Overdue)</span></li>
                            <li>Remaining Balance: <span className="font-bold">$7,570</span> <span className="text-xs text-gray-500">(Due Dec 12, 2025)</span></li>
                          </ul>
                        </div>
                        <div className="text-red-600 flex items-center space-x-2 p-3 border border-red-600 rounded-md text-xs mt-2">
                          <InformationCircleIcon className="h-4 w-4 flex-shrink-0" />
                          <p>Please contact our agent to release the funds. A processing fee is required. Contact us at 1-800-555-0199.</p>
                        </div>
                      </div>
                    </details>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Statement;
