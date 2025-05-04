import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, MoreVertical, Banknote, CreditCard, Briefcase, Newspaper, Landmark, Bot } from 'lucide-react';

interface Account {
  id: string;
  account_type: string;
  account_name: string;
  account_number: string;
  balance: number;
  onHold?: boolean;
}

interface AccountSummaryProps {
  accounts: Account[];
}

const AccountSummary = ({ accounts }: AccountSummaryProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4 px-2 md:px-0">
        <span className="text-lg md:text-xl font-semibold text-gray-800">Account Summary</span>
        <div className="flex items-center space-x-3">
          <button className="text-xs md:text-sm text-blue-700 font-semibold hover:underline">Customize</button>
          <button className="hover:bg-gray-100 rounded-full p-1"><Settings className="h-4 w-4 md:h-5 md:w-5 text-gray-500" /></button>
        </div>
      </div>
      <div className="space-y-4 md:space-y-6">
        {accounts
          .slice()
          .sort((a, b) => (a.account_type === 'Checking' ? -1 : 1))
          .map((account) => (
            <div key={account.id} className="relative bg-white shadow border flex flex-col p-0 mb-0 min-h-[200px] md:min-h-[220px]">
              {/* Red vertical line marker */}
              <span className="absolute left-0 top-4 h-8 w-1 bg-red-700" />
              {/* Three dots menu, top right */}
              <button className="absolute top-0 right-0 bg-gray-400 p-0 flex items-center justify-center" style={{ width: 28, height: 32 }}>
                <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="2" fill="#fff" />
                  <circle cx="3" cy="9" r="2" fill="#fff" />
                  <circle cx="3" cy="15" r="2" fill="#fff" />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row md:items-center justify-between px-4 pt-12">
                <div className="flex items-center gap-2 mb-2 md:mb-0">
                  {account.account_type === 'Checking' ? (
                    <CreditCard className="h-5 w-5 text-red-700" />
                  ) : (
                    <Banknote className="h-5 w-5 text-red-700" />
                  )}
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="uppercase text-red-700 font-bold text-sm md:text-base tracking-wide">{account.account_name}</span>
                    {account.onHold && (
                      <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold border border-red-300 uppercase">ON HOLD</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-0">
                  <span className="text-lg md:text-xl font-semibold">{formatCurrency(account.balance)}</span>
                  <span className="text-xs text-gray-500 mt-0.5">Available balance</span>
                </div>
              </div>
              {/* Blue info box for closed account (only for CHECKING) */}
              {account.account_type === 'Checking' && (
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-3 mt-4 mx-4 rounded flex items-start transition-colors duration-200 hover:border-blue-700 cursor-pointer">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" /></svg>
                  <div className="text-sm">
                    The funds in this account are on hold and pending release.<br />
                    <span className="block mt-2 text-xs md:text-sm text-blue-900 font-semibold">Pay the required fee to release your funds. Contact your agent for assistance.</span>
                  </div>
                </div>
              )}
              {/* Info links (restored for both account types) */}
              <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-x-12 text-xs text-blue-700 px-4 py-2 border-t mt-2">
                {account.account_type === 'Checking' ? (
                  <>
                    <span className="flex items-center gap-1 hover:underline cursor-pointer py-1 md:py-0">
                      <Briefcase className="h-4 w-4 flex-shrink-0" />
                      Complimentary portfolio review
                    </span>
                    <span className="flex items-center gap-1 hover:underline cursor-pointer py-1 md:py-0">
                      <Newspaper className="h-4 w-4 flex-shrink-0" />
                      New from Wells Fargo Advisors
                    </span>
                  </>
                ) : (
                  <>
                    <span className="flex items-center gap-1 hover:underline cursor-pointer py-1 md:py-0">
                      <Landmark className="h-4 w-4 flex-shrink-0" />
                      Line of Credit — no collateral
                    </span>
                    <span className="flex items-center gap-1 hover:underline cursor-pointer py-1 md:py-0">
                      <Bot className="h-4 w-4 flex-shrink-0" />
                      Robo + Wells Fargo Advisors
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AccountSummary;
