import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const validCredentials = [
      { username: 'bobbyb343', password: 'System123#' },
      { username: 'admin', password: 'Master@1' },
    ];

    try {
      if (!username.trim() || !password.trim()) {
        toast.error('Please enter both username and password');
        setIsLoading(false);
        return;
      }

      if (username === 'admin' && password === 'Master@1') {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success('Admin login successful!');
        setIsLoginOpen(false);
        navigate('/admin');
      } else if (validCredentials.some(
        (cred) => cred.username === username && cred.password === password
      )) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success('Login successful!');
        setIsLoginOpen(false);
        navigate('/dashboard');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <header>
      <div className="bg-wellsfargo-red text-white py-3 px-6 border-b-4 border-[#FFDA63]">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/">
              <img src="/logo.webp" alt="Wells Fargo Logo" className="h-5" />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white text-sm hover:underline">ATMs/Locations</a>
            <a href="#" className="text-white text-sm hover:underline">Help</a>
            <a href="#" className="text-white text-sm hover:underline">Español</a>
            <button className="text-white">
              <Search size={18} />
            </button>
            {isAuthenticated ? (
              <Button 
                className="bg-white text-black rounded-full hover:bg-gray-100"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
            ) : (
              <div className="relative">
                <Button 
                  className="bg-white text-black rounded-full hover:bg-gray-100"
                  onClick={() => setIsLoginOpen(!isLoginOpen)}
                >
                  Sign On
                </Button>
                {isLoginOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded shadow-lg z-50">
                    <form onSubmit={handleLogin} className="p-4">
                      <Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-2"
                        required
                      />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-2"
                        required
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-wellsfargo-red text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Signing On...' : 'Sign On'}
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto">
          <nav className="flex">
            <a href="#" className="py-4 px-4 border-b-4 border-wellsfargo-red font-semibold">Personal</a>
            <a href="#" className="py-4 px-6 text-gray-600 hover:text-black">Investing & Wealth Management</a>
            <a href="#" className="py-4 px-6 text-gray-600 hover:text-black">Small Business</a>
            <a href="#" className="py-4 px-6 text-gray-600 hover:text-black">Commercial Banking</a>
            <a href="#" className="py-4 px-6 text-gray-600 hover:text-black">Corporate & Investment Banking</a>
            <a href="#" className="py-4 px-6 text-gray-600 hover:text-black">About Wells Fargo</a>
          </nav>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="container mx-auto">
          <nav className="flex">
            <a href="#" className="py-3 px-6 text-gray-600 hover:text-black">Checking</a>
            <a href="#" className="py-3 px-6 text-gray-600 hover:text-black">Savings & CDs</a>
            <a href="#" className="py-3 px-6 text-gray-600 hover:text-black">Credit Cards</a>
            <a href="#" className="py-3 px-6 text-gray-600 hover:text-black">Home Loans</a>
            <a href="#" className="py-3 px-6 text-gray-600 hover:text-black">Personal Loans</a>
            <a href="#" className="py-3 px-6 text-gray-600 hover:text-black">Auto Loans</a>
            <a href="#" className="py-3 px-6 text-gray-600 hover:text-black">Premier</a>
            <a href="#" className="py-3 px-6 text-gray-600 hover:text-black">Education & Tools</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
