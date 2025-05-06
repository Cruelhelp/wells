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
        setIsLoading(false); // Ensure loading state is reset
        return;
      }

      const success = login(username, password);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (success) {
        toast.success('Login successful!');
        // Note: Navigation should happen in the AuthContext or via effect after login state updates
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
          required
          aria-label="Username"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
          required
          aria-label="Password"
        />
        <Button 
          type="submit" 
          className="w-full bg-wellsfargo-red text-white py-2 rounded hover:bg-red-700 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging in...
            </span>
          ) : 'Login'}
        </Button>
        <div className="mt-6 text-center text-xs text-gray-600 border-t pt-4">
          <p className="font-semibold mb-2">Demo credentials:</p>
          <div className="space-y-1">
            <p>User: <span className="font-mono">admin</span> / <span className="font-mono">Master@1</span></p>
            <p>User: <span className="font-mono">bobbyb343</span> / <span className="font-mono">Master123</span></p>
          </div>
        </div>
      </form>
    </div>
  );
}
