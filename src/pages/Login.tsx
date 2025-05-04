import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!username.trim() || !password.trim()) {
        toast.error('Please enter both username and password');
        return;
      }

      const success = login(username, password);
      if (success) {
        toast.success('Login successful!');
      } else {
        toast.error('Invalid credentials! Please check your username and password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
          required
        />
        <Button 
          type="submit" 
          className="w-full bg-wellsfargo-red text-white py-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="font-semibold mb-2">Demo credentials:</p>
          <div className="space-y-1">
            <p>User 1:</p>
            <p>Username: admin</p>
            <p>Password: password</p>
            <p className="mt-2">User 2:</p>
            <p>Username: bobbyb343</p>
            <p>Password: System123#</p>
          </div>
        </div>
      </form>
    </div>
  );
}
