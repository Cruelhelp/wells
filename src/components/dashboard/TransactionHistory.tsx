import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronsUpDown, FileText, Send, Wallet, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Transaction {
  id: string;
  account_id: string;
  description: string;
  amount: number;
  transaction_date: string;
  transaction_type: string;
}

interface Account {
  id: string;
  account_type: string;
  account_name: string;
  account_number: string;
  balance: number;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
  accounts: Account[];
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
    <Card>
      <CardHeader className="py-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-gray-800">Activity Summary</CardTitle>
          <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
            Switch Account <ChevronsUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center justify-around mt-2">
          <button className="text-gray-500 hover:text-gray-700 flex flex-col items-center text-xs">
            <Wallet className="h-4 w-4 mb-1" />
            Transfer Money
          </button>
          <button className="text-gray-500 hover:text-gray-700 flex flex-col items-center text-xs">
            <Send className="h-4 w-4 mb-1" />
            Send Money
          </button>
          <Link to="/statement" className="text-gray-500 hover:text-gray-700 flex flex-col items-center text-xs">
            <FileText className="h-4 w-4 mb-1" />
            View Statements
          </Link>
          <button className="text-gray-500 hover:text-gray-700 flex flex-col items-center text-xs">
            <Bell className="h-4 w-4 mb-1" />
            Manage Alerts
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 py-2">
        <div className="flex items-center justify-between py-1 border-b">
          <p className="text-gray-600 text-sm">Current posted balance</p>
          <p className="font-semibold text-sm">{formatCurrency(availableBalance)}</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b">
          <p className="text-gray-600 text-sm">Pending withdrawals/debits</p>
          <p className="font-semibold text-sm">$0.00</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b">
          <p className="text-gray-600 text-sm">Pending deposits/credits</p>
          <p className="font-semibold text-sm">$0.00</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b">
          <p className="text-gray-600 text-sm">Available balance</p>
          <p className="font-semibold text-sm">{formatCurrency(availableBalance)}</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b">
          <p className="text-gray-600 text-sm">Monthly Service Fee Summary</p>
          <p className="font-semibold text-sm">$0.00</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
