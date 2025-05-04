import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      <div className="bg-wellsfargo-red text-white py-3 px-4 md:px-6 border-b-4 border-[#FFDA63]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/">
              <img src="/logo.webp" alt="Wells Fargo Logo" className="h-5" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
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
          {/* Mobile Sign On Button */}
          <div className="md:hidden">
            {isAuthenticated ? (
              <Button 
                className="bg-white text-black rounded-full hover:bg-gray-100"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
            ) : (
              <Button 
                className="bg-white text-black rounded-full hover:bg-gray-100"
                onClick={() => setIsLoginOpen(!isLoginOpen)}
              >
                Sign On
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="py-2 px-4 text-gray-600 hover:text-black">ATMs/Locations</a>
              <a href="#" className="py-2 px-4 text-gray-600 hover:text-black">Help</a>
              <a href="#" className="py-2 px-4 text-gray-600 hover:text-black">Español</a>
              <div className="border-t pt-4">
                <a href="#" className="py-2 px-4 block font-semibold">Personal</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Investing & Wealth Management</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Small Business</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Commercial Banking</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Corporate & Investment Banking</a>
                <a href="#" className="py-2 px-4 block text-gray-600">About Wells Fargo</a>
              </div>
              <div className="border-t pt-4">
                <a href="#" className="py-2 px-4 block text-gray-600">Checking</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Savings & CDs</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Credit Cards</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Home Loans</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Personal Loans</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Auto Loans</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Premier</a>
                <a href="#" className="py-2 px-4 block text-gray-600">Education & Tools</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-gray-50 border-b">
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

      <div className="hidden md:block bg-white shadow-sm">
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

      {/* Mobile Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Sign On</h2>
              <button onClick={() => setIsLoginOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        </div>
      )}
    </header>
  );
}
