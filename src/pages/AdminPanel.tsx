import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { supabase } from '@/integrations/supabase/client'; // Import Supabase client

// Define the structure for the editable data
interface EditableData {
  balance: number | string; // Allow string for input field
  onHold: boolean;
}

// Key for Supabase table
const BALANCE_KEY = 'bobby_balance';
// Key for localStorage (still used for onHold temporarily)
const ON_HOLD_STORAGE_KEY = 'bobbyb343_on_hold_status';

// Default values
const defaultBalance = 18500000;
const defaultOnHold = true;

export default function AdminPanel() {
  const navigate = useNavigate(); // Get navigate function
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');

  // State for the editable fields
  const [editBalance, setEditBalance] = useState<number | string>(defaultBalance);
  const [editOnHold, setEditOnHold] = useState(defaultOnHold);

  // State to display the *current* stored values
  const [currentStoredBalance, setCurrentStoredBalance] = useState<number>(defaultBalance);
  const [currentStoredOnHold, setCurrentStoredOnHold] = useState<boolean>(defaultOnHold);


  const [isLoading, setIsLoading] = useState(true); // Loading state for reading data
  const [isSaving, setIsSaving] = useState(false); // Saving state
  const [error, setError] = useState('');

  const targetUsername = 'bobbyb343'; // Still relevant for display

  // Load data when admin logs in
  useEffect(() => {
    if (adminLoggedIn) {
      setIsLoading(true);
      setError('');

      const fetchData = async () => {
        try {
          // Fetch balance from Supabase
          const { data: balanceData, error: balanceError } = await supabase
            .from('app_settings')
            .select('numeric_value')
            .eq('key', BALANCE_KEY)
            .maybeSingle(); // Use maybeSingle to handle case where key doesn't exist yet

          if (balanceError) throw balanceError;

          const fetchedBalance = balanceData?.numeric_value ?? defaultBalance;
          setCurrentStoredBalance(fetchedBalance);
          setEditBalance(fetchedBalance);

          // Fetch onHold status from localStorage (keeping this separate for now)
          const storedOnHold = localStorage.getItem(ON_HOLD_STORAGE_KEY);
          const fetchedOnHold = storedOnHold ? JSON.parse(storedOnHold) : defaultOnHold;
          setCurrentStoredOnHold(fetchedOnHold);
          setEditOnHold(fetchedOnHold);

        } catch (e: any) {
          console.error("Error fetching data:", e);
          setError(`Failed to load data: ${e.message}`);
          toast.error(`Failed to load data: ${e.message}`);
          // Use defaults on error
          setCurrentStoredBalance(defaultBalance);
          setEditBalance(defaultBalance);
          setCurrentStoredOnHold(defaultOnHold);
          setEditOnHold(defaultOnHold);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [adminLoggedIn]);


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUser === 'admin' && adminPass === 'Master@1') {
      setAdminLoggedIn(true);
      setError('');
    } else {
      setError('Invalid admin credentials');
    }
  };

  // Save changes
  const handleSave = async () => {
    setIsSaving(true);
    setError('');
    try {
      const balanceValue = Number(editBalance);
      if (isNaN(balanceValue)) {
        throw new Error("Invalid balance value.");
      }

      // Save balance to Supabase
      const { error: updateError } = await supabase
        .from('app_settings')
        .update({ numeric_value: balanceValue })
        .eq('key', BALANCE_KEY);

      if (updateError) throw updateError;

      // Save onHold status to localStorage (keeping separate for now)
      localStorage.setItem(ON_HOLD_STORAGE_KEY, JSON.stringify(editOnHold));

      setCurrentStoredBalance(balanceValue); // Update the displayed current balance
      setCurrentStoredOnHold(editOnHold); // Update displayed onHold

      toast.success('Changes saved!');

    } catch (err: any) {
      console.error("Error saving changes:", err);
      setError(`Failed to save changes: ${err.message}`);
      toast.error(`Failed to save changes: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  // --- Logout Handler ---
  const handleLogout = () => {
    setAdminLoggedIn(false);
    setAdminUser(''); // Clear credentials
    setAdminPass('');
    setError(''); // Clear any previous errors
    // Reset edit fields if desired
    // setEditBalance(defaultBalance);
    // setEditOnHold(defaultOnHold);
    navigate('/'); // Navigate to homepage
  };

  // --- Render Login Form ---
  if (!adminLoggedIn) {
     return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <form onSubmit={handleLogin} className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">Admin Login</h2>
          <Input
            type="text"
            placeholder="Admin Username"
            value={adminUser}
            onChange={e => setAdminUser(e.target.value)}
            required
            aria-label="Admin Username"
          />
          <Input
            type="password"
            placeholder="Admin Password"
            value={adminPass}
            onChange={e => setAdminPass(e.target.value)}
            required
            aria-label="Admin Password"
          />
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <Button type="submit" className="w-full bg-wellsfargo-red text-white hover:bg-red-700">Sign In</Button>
        </form>
      </div>
    );
  }

  // --- Render Admin Panel ---
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 md:py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-wellsfargo-red">Admin Panel</h1>
      
      {isLoading && <p>Loading user data...</p>}

      {!isLoading && (
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Edit User: {targetUsername}</h2>
          
          {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}

          <div className="mb-4">
            <label htmlFor="editBalance" className="block text-sm text-gray-700 mb-1">Balance ($)</label>
            <Input
              id="editBalance"
              type="number"
              value={editBalance}
              onChange={e => setEditBalance(e.target.value)} 
              className="mb-2"
              aria-label="Edit Balance"
            />
          </div>
          <div className="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              checked={editOnHold}
              onChange={e => setEditOnHold(e.target.checked)}
              id="onHold"
              className="h-4 w-4 text-wellsfargo-red focus:ring-wellsfargo-red border-gray-300 rounded"
              aria-label="Edit On Hold Status"
            />
            <label htmlFor="onHold" className="text-sm text-gray-700">On Hold</label>
          </div>
          <Button 
            onClick={handleSave} 
            className="bg-wellsfargo-red text-white w-full hover:bg-red-700"
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
          {/* --- Logout Button --- */}
          <Button
            onClick={handleLogout}
            variant="outline" // Use a different style for logout
            className="mt-3 w-full"
          >
            Logout
          </Button>
          <div className="mt-6 text-sm text-gray-600 border-t pt-4 space-y-1">
            {/* Display current data from state */}
            <div><span className="font-semibold">Current Balance (from DB):</span> ${currentStoredBalance.toLocaleString()}</div>
            <div><span className="font-semibold">On Hold (from LocalStorage):</span> {currentStoredOnHold ? 'Yes' : 'No'}</div>
          </div>
        </div>
      )}
    </div>
  );
} 