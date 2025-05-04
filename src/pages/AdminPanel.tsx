import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const initialBobby = {
  username: 'bobbyb343',
  balance: 18500000,
  onHold: true,
};

export default function AdminPanel() {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [bobby, setBobby] = useState(initialBobby);
  const [editBalance, setEditBalance] = useState(bobby.balance);
  const [editOnHold, setEditOnHold] = useState(bobby.onHold);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUser === 'admin' && adminPass === 'Master@1') {
      setAdminLoggedIn(true);
      setError('');
    } else {
      setError('Invalid admin credentials');
    }
  };

  const handleSave = () => {
    setBobby({ ...bobby, balance: editBalance, onHold: editOnHold });
  };

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
          />
          <Input
            type="password"
            placeholder="Admin Password"
            value={adminPass}
            onChange={e => setAdminPass(e.target.value)}
            required
          />
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <Button type="submit" className="w-full bg-wellsfargo-red text-white hover:bg-red-700">Sign In</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 md:py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-wellsfargo-red">Admin Panel</h1>
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Edit User: bobbyb343</h2>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Balance ($)</label>
          <Input
            type="number"
            value={editBalance}
            onChange={e => setEditBalance(Number(e.target.value))}
            className="mb-2"
          />
        </div>
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            checked={editOnHold}
            onChange={e => setEditOnHold(e.target.checked)}
            id="onHold"
            className="h-4 w-4 text-wellsfargo-red focus:ring-wellsfargo-red border-gray-300 rounded"
          />
          <label htmlFor="onHold" className="text-sm text-gray-700">On Hold</label>
        </div>
        <Button onClick={handleSave} className="bg-wellsfargo-red text-white w-full hover:bg-red-700">Save Changes</Button>
        <div className="mt-6 text-sm text-gray-600 border-t pt-4 space-y-1">
          <div><span className="font-semibold">Current Balance:</span> ${bobby.balance.toLocaleString()}</div>
          <div><span className="font-semibold">On Hold:</span> {bobby.onHold ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </div>
  );
} 