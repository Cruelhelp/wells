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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96 space-y-4">
          <h2 className="text-2xl font-bold mb-2 text-center">Admin Login</h2>
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
          <Button type="submit" className="w-full bg-wellsfargo-red text-white">Sign In</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <h1 className="text-3xl font-bold mb-6 text-wellsfargo-red">Admin Panel</h1>
      <div className="bg-white rounded shadow p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit User: bobbyb343</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Balance ($)</label>
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
          />
          <label htmlFor="onHold" className="text-gray-700">On Hold</label>
        </div>
        <Button onClick={handleSave} className="bg-wellsfargo-red text-white w-full">Save Changes</Button>
        <div className="mt-6 text-sm text-gray-600">
          <div><span className="font-semibold">Current Balance:</span> ${bobby.balance.toLocaleString()}</div>
          <div><span className="font-semibold">On Hold:</span> {bobby.onHold ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </div>
  );
} 