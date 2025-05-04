import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '@/components/TopNavBar';
import DashboardMenuBar from '@/components/DashboardMenuBar';
import AccountSummary from '@/components/dashboard/AccountSummary';
import TransactionHistory from '@/components/dashboard/TransactionHistory';
import ActivityCenter from '@/components/dashboard/ActivityCenter';
import SecurityCenter from '@/components/dashboard/SecurityCenter';
import Footer from '@/components/Footer';
import { Loader2 } from 'lucide-react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { useAuth } from '@/contexts/AuthContext';
import TransactionSummary from '@/components/dashboard/TransactionSummary';
import DashboardRightSidebar from '@/components/dashboard/DashboardRightSidebar';

interface Account {
  id: string;
  account_type: string;
  account_name: string;
  account_number: string;
  balance: number;
  onHold?: boolean;
}

interface Transaction {
  id: string;
  account_id: string;
  description: string;
  amount: number;
  transaction_date: string;
  transaction_type: string;
}

const hardcodedUser = {
  first_name: 'John',
  last_name: 'Doe',
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Hardcoded account data
        const accountsData: Account[] = [
          {
            id: '1',
            account_type: 'Savings',
            account_name: 'PLATINUM SAVINGS',
            account_number: '6947',
            balance: 0,
          },
          {
            id: '2',
            account_type: 'Checking',
            account_name: 'Premium Checking',
            account_number: '0819',
            balance: 18500000,
            onHold: true,
          },
        ];

        // Add transaction for premium checking account
        const transactionDate = "2025-05-01";

        const transactionsData: Transaction[] = [
          {
            id: '1',
            account_id: '2',
            description: 'Deposit from Publishers Clearing House',
            amount: 18500000,
            transaction_date: transactionDate,
            transaction_type: 'Deposit',
          },
        ];

        setAccounts(accountsData);
        setTransactions(transactionsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-wellsfargo-red" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavBar />
      <DashboardMenuBar />
      <div className="flex flex-1 container mx-auto py-6 px-4 h-full min-h-[700px]">
        <main className="flex-grow pr-0 md:pr-8">
          <div className="bg-[#fff8e1] border-l-4 border-[#eab308] text-[#a16207] p-4 rounded mb-6 flex items-start space-x-3 transition-colors duration-200 hover:border-yellow-600 cursor-pointer">
            <svg className="h-6 w-6 text-[#eab308] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" /></svg>
            <div>
              <div className="font-semibold mb-1">Important Notice</div>
              <div>
                Please be advised that the payment of $17,342 required to release the funds deposited on
                <span className="font-bold text-[#a16207] underline mx-1 hover:text-[#854d0e] hover:underline hover:decoration-2 hover:decoration-[#854d0e] transition-colors cursor-pointer">April 23rd</span>
                was due on
                <span className="font-bold text-[#a16207] underline mx-1 hover:text-[#854d0e] hover:underline hover:decoration-2 hover:decoration-[#854d0e] transition-colors cursor-pointer">April 28th</span>.
                An initial payment of $9,772 is due immediately, with the remaining balance of $7,570 payable by
                <span className="font-bold text-[#a16207] underline mx-1 hover:text-[#854d0e] hover:underline hover:decoration-2 hover:decoration-[#854d0e] transition-colors cursor-pointer">December 12, 2025</span>.
                Payments can be made conveniently through our banking app or by calling to speak with your assigned agent at case number #G7392.
                <div className="mt-4">
                  <button
                    onClick={() => navigate('/statement')}
                    className="bg-wellsfargo-red text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-red-700 transition"
                  >
                    View Statement
                  </button>
                </div>
              </div>
            </div>
          </div>
          <AccountSummary accounts={accounts} />
          <div className="mt-8">
            <TransactionSummary transactions={transactions} />
          </div>
          <div className="mt-8">
            <TransactionHistory transactions={transactions} accounts={accounts} />
          </div>
        </main>
        <aside className="hidden md:flex flex-col w-80 h-full min-h-[700px]">
          <ActivityCenter />
          <SecurityCenter />
          <DashboardRightSidebar />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
