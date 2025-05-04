import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberUser, setRememberUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
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

      if (validCredentials.some(
        (cred) => cred.username === username && cred.password === password
      )) {
        // Simulate login delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Redirect to dashboard
        navigate('/dashboard');
        toast.success('Login successful!');
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
    <section
      className="relative w-full min-h-[500px] flex flex-col md:flex-row items-stretch bg-white"
      style={{ background: 'linear-gradient(90deg, #fff 60%, rgba(255,255,255,0.7) 80%, transparent 100%)' }}
    >
      {/* Left: Login Card */}
      <div className="flex flex-col justify-start items-start w-full md:w-[400px] p-6 md:pl-12 pt-8 z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-xs p-6" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
          <h2 className="text-xl font-semibold mb-1">Good evening</h2>
          <p className="text-gray-600 text-sm mb-4">Sign on to manage your accounts.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0"
              required
            />
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 pr-16"
                required
              />
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-700 text-sm cursor-pointer select-none px-3"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="save-username"
                checked={rememberUser}
                onCheckedChange={(checked) => setRememberUser(Boolean(checked))}
              />
              <label htmlFor="save-username" className="text-sm text-gray-600">
                Save username
              </label>
            </div>
            <div className="flex items-center justify-between mt-2">
              <Button
                type="submit"
                className="bg-wellsfargo-red w-2/3 text-white rounded-full text-lg font-semibold py-2 hover:bg-red-700 relative"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Sign On'
                )}
              </Button>
              <a href="#" className="ml-4 text-blue-700 text-sm font-semibold hover:underline">Enroll</a>
            </div>
          </form>
          <div className="mt-6 space-y-1 text-sm text-gray-600">
            <a href="#" className="hover:underline cursor-pointer block">Forgot username or password?</a>
            <a href="#" className="hover:underline cursor-pointer block">Security Center</a>
            <a href="#" className="hover:underline cursor-pointer block">Privacy, Cookies, and Legal</a>
          </div>
        </div>
      </div>
      {/* Right: Hero Text and Background */}
      <div className="flex-1 flex flex-col justify-center items-start px-6 md:px-0 relative overflow-hidden">
        <div className="z-10 max-w-xl md:ml-12 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">Say hello to<br />convenient checking</h1>
          <p className="text-lg text-gray-700 mb-6">Explore our checking options and choose the right account for you</p>
          <button className="bg-white border border-gray-400 rounded-full px-6 py-2 font-semibold text-gray-900 hover:bg-gray-100 transition">Get started &gt;&gt;</button>
        </div>
        {/* Background image on the right */}
        <img
          src="/hero.avif"
          alt="Wells Fargo Hero"
          className="absolute right-0 top-0 h-full w-2/3 object-cover object-right z-0 pointer-events-none select-none hidden md:block"
          style={{ filter: 'brightness(1.05)' }}
        />
      </div>
    </section>
  );
}
