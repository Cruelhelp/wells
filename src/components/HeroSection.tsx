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
      { username: 'bobbyb343', password: 'Master123' },
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
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Navigate based on user type (optional)
        if (username === 'admin') {
            navigate('/admin'); // Redirect admin
        } else {
            navigate('/dashboard'); // Redirect regular user
        }
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
    // Main container: flex-col on mobile, flex-row on desktop
    <section className="relative w-full flex flex-col md:flex-row min-h-[600px] bg-white overflow-hidden">

      {/* Unified Background Image (Covers entire section) */}
      <img 
        src="/hero.avif"
        alt="Background"
        // Use object-cover to fill the area, may crop
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Mobile Overlay (Only visible on mobile) */}
      <div className="md:hidden absolute inset-0 w-full h-full z-10 bg-white/70 backdrop-blur-sm"></div> 
      
      {/* Left Side: Login Form */}
      {/* Outer container for positioning and padding */}
      <div className="relative z-20 w-full md:w-1/3 flex items-center md:items-start justify-center md:justify-start p-4 md:p-8 md:pt-8 order-1">
        {/* Inner container with mobile and desktop card styling */}
        <div className="w-full max-w-xs bg-white rounded-lg border border-gray-200 shadow-lg p-4 md:bg-white md:rounded-lg md:border md:border-gray-200 md:shadow-xl md:p-6">
          <h2 className="text-xl font-semibold mb-1 text-gray-800">Good evening</h2>
          <p className="text-gray-600 text-sm mb-4">Sign on to manage your accounts.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-b border-gray-400 md:border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 focus:border-gray-500"
              required
            />
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-gray-400 md:border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none focus:ring-0 focus:border-gray-500 pr-16"
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
                className="border-gray-500 md:border-gray-400 bg-white"
              />
              <label htmlFor="save-username" className="text-sm text-gray-600">
                Save username
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-2 space-y-3 sm:space-y-0 sm:gap-4">
              <Button
                type="submit"
                className="bg-wellsfargo-red w-full sm:w-auto sm:flex-grow text-white rounded-full text-sm font-semibold py-1.5 px-5 hover:bg-red-700 relative"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Sign On'
                )}
              </Button>
              <a href="#" className="text-blue-700 text-sm font-semibold hover:underline flex-shrink-0">Enroll</a>
            </div>
          </form>
          <div className="mt-6 space-y-1 text-sm text-gray-600">
            <a href="#" className="hover:underline cursor-pointer block">Forgot username or password?</a>
            <a href="#" className="hover:underline cursor-pointer block">Security Center</a>
            <a href="#" className="hover:underline cursor-pointer block">Privacy, Cookies, and Legal</a>
          </div>
        </div>
      </div>

      {/* Right Side: Hero Text */}
      {/* Align content to center (default flex behavior), added padding */}
      <div className="relative z-20 w-full md:w-2/3 flex flex-col justify-center items-center md:items-start p-6 md:p-8 text-center md:text-left order-2">
        {/* Text Content Container */} 
        {/* Removed the dark overlay/blur for desktop */}
        <div className="relative p-6 md:p-0 rounded-lg">
          {/* Text color changed back to dark gray for desktop */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 md:mb-4 text-gray-900">
            Say hello to<br />convenient checking
          </h1>
          {/* Text color changed back to dark gray for desktop */}
          <p className="text-base md:text-lg text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
            Explore our checking options and choose the right account for you
          </p>
          <button className="bg-white border border-gray-400 rounded-full px-6 py-2 font-semibold text-gray-900 hover:bg-gray-100 transition text-sm md:text-base">
            Get started &gt;&gt;
          </button>
        </div>
      </div>

    </section>
  );
}
