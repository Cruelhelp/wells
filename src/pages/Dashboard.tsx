import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '@/components/TopNavBar';
import DashboardMenuBar from '@/components/DashboardMenuBar';
import AccountSummary from '@/components/dashboard/AccountSummary';
import TransactionHistory from '@/components/dashboard/TransactionHistory';
import ActivityCenter from '@/components/dashboard/ActivityCenter';
import SecurityCenter from '@/components/dashboard/SecurityCenter';
import Footer from '@/components/Footer';
import { Loader2, Menu, X } from 'lucide-react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { useAuth } from '@/contexts/AuthContext';
import TransactionSummary from '@/components/dashboard/TransactionSummary';
import DashboardRightSidebar from '@/components/dashboard/DashboardRightSidebar';
import { supabase } from '@/integrations/supabase/client';

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

const BALANCE_KEY = 'bobby_balance';
const ON_HOLD_STORAGE_KEY = 'bobbyb343_on_hold_status';

const defaultBalance = 18500000;
const defaultOnHold = true;

const Dashboard = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser } = useAuth();

  const loadDashboardData = useCallback(async () => {
    console.log("Reloading dashboard data...");
    setLoading(true);
    try {
      const { data: balanceData, error: balanceError } = await supabase
        .from('app_settings')
        .select('numeric_value')
        .eq('key', BALANCE_KEY)
        .maybeSingle();

      if (balanceError) {
        console.error('Error fetching balance from Supabase:', balanceError);
      }

      const bobbyBalance = balanceData?.numeric_value ?? defaultBalance;

      const storedOnHold = localStorage.getItem(ON_HOLD_STORAGE_KEY);
      const bobbyOnHold = storedOnHold ? JSON.parse(storedOnHold) : defaultOnHold;

      const accountsData: Account[] = [
        {
          id: '1',
          account_type: 'Savings',
          account_name: 'PLATINUM SAVINGS',
          account_number: '6947',
          balance: 0,
          onHold: false,
        },
        {
          id: '2',
          account_type: 'Checking',
          account_name: 'Premium Checking',
          account_number: '0819',
          balance: bobbyBalance,
          onHold: bobbyOnHold,
        },
      ];
      setAccounts(accountsData);

      const transactionDate = "2025-05-01";
      const transactionsData: Transaction[] = [
        {
          id: '1',
          account_id: '2',
          description: 'Deposit from Publishers Clearing House',
          amount: bobbyBalance,
          transaction_date: transactionDate,
          transaction_type: 'Deposit',
        },
      ];
      setTransactions(transactionsData);

    } catch (error: any) {
      console.error('Error processing dashboard data:', error);
      setAccounts([]);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-wellsfargo-red" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavBar onLogoClick={loadDashboardData} />
      <DashboardMenuBar />
      <div className="flex flex-1 container mx-auto py-4 md:py-6 px-4 h-full min-h-[700px]">
        <button
          className="md:hidden fixed bottom-4 right-4 z-50 bg-wellsfargo-red text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div 
             className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
             onClick={() => setIsMobileMenuOpen(false)}
          >
            <div 
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <button 
                   onClick={() => setIsMobileMenuOpen(false)} 
                   className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-800"
                   aria-label="Close menu"
                 >
                  <X size={20} />
                </button>
                <ActivityCenter />
                <SecurityCenter />
                <DashboardRightSidebar />
              </div>
            </div>
          </div>
        )}

        <main className="flex-grow pr-0 md:pr-8">
          {accounts.some(acc => acc.onHold) && (
            <div className="bg-[#fff8e1] border-l-4 border-[#eab308] text-[#a16207] p-4 rounded mb-6 flex items-start space-x-3 transition-colors duration-200 hover:border-yellow-600 cursor-pointer"
                 onClick={() => navigate('/statement')}
            >
              <svg className="h-6 w-6 text-[#eab308] mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" /></svg>
              <div>
                <div className="font-semibold mb-1">Important Notice</div>
                <div className="text-sm md:text-base">
                  Your attention is required regarding funds on hold. Click here or use the button below for details.
                  <div className="mt-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate('/statement'); }}
                      className="bg-wellsfargo-red text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-red-700 transition text-sm md:text-base"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <AccountSummary accounts={accounts} />
          
          {transactions.length > 0 ? (
            <div className="mt-6 md:mt-8">
              <TransactionSummary transactions={transactions} />
            </div>
          ) : (
             <div className="mt-6 md:mt-8 text-center text-gray-500">No recent transactions.</div>
          )}
          
          {accounts.length > 0 ? (
            <div className="mt-6 md:mt-8">
              <TransactionHistory transactions={transactions} accounts={accounts} />
            </div>
           ) : (
             <div className="mt-6 md:mt-8 text-center text-gray-500">No accounts found.</div>
           )}

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
