import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { Loader2 } from 'lucide-react';

interface LoginFormProps {
  onSuccess?: () => void;
  showDemoCredentials?: boolean;
  className?: string;
}

export default function LoginForm({ onSuccess, showDemoCredentials = true, className = '' }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const [showFields, setShowFields] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!username.trim() || !password.trim()) {
        toast.error('Please enter both username and password');
        setIsLoading(false);
        return;
      }

      const success = login(username, password);
      if (success) {
        toast.success('Login successful!');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        onSuccess?.();
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
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-20">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="mt-2 text-sm text-gray-600">Logging in...</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {showFields ? (
          <>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <Button type="submit">Login</Button>
        )}
      </form>
      {showDemoCredentials && (
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="font-semibold mb-2">Demo credentials:</p>
          <div className="space-y-1">
            <p>User 1:</p>
            <p>Username: admin</p>
            <p>Password: password</p>
            <p className="mt-2">User 2:</p>
            <p>Username: bobbyb343</p>
            <p>Password: Master123</p>
          </div>
        </div>
      )}
    </div>
  );
}