import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowUpRight, ArrowDownRight, MoreVertical } from 'lucide-react';

interface Transaction {
  id: string;
  account_id: string;
  description: string;
  amount: number;
  transaction_date: string;
  transaction_type: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
  accounts: Account[];
}

interface Account {
  id: string;
  account_type: string;
  account_name: string;
  account_number: string;
  balance: number;
}

const TransactionHistory = ({ transactions, accounts }: TransactionHistoryProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const chequingAccount = accounts.find(account => account.account_type === 'Chequing');
  const availableBalance = chequingAccount ? chequingAccount.balance : 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0 px-2 md:px-0">
        <div className="flex items-center gap-2">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Recent Activity</h2>
          <span className="text-xs text-gray-500">(Last 30 days)</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs md:text-sm text-blue-700 font-semibold hover:underline">View all activity</button>
          <button className="hover:bg-gray-100 rounded-full p-1">
            <MoreVertical className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
            <CardTitle className="text-base md:text-lg">Checking Account</CardTitle>
            <div className="flex items-center gap-2">
              <button className="text-xs md:text-sm text-blue-700 font-semibold hover:underline">Transfer money</button>
              <button className="text-xs md:text-sm text-blue-700 font-semibold hover:underline">View statements</button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="p-3 md:p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {transaction.transaction_type === 'Deposit' ? (
                        <ArrowDownRight className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm md:text-base font-medium text-gray-900">{transaction.description}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{transaction.transaction_date}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`text-sm md:text-base font-medium ${transaction.transaction_type === 'Deposit' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.transaction_type === 'Deposit' ? '+' : '-'}{formatCurrency(Math.abs(transaction.amount))}
                    </span>
                    <span className="text-xs text-gray-500 mt-0.5">Available balance</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionHistory;
