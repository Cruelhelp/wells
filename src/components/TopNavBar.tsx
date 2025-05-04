import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';
import { Mail, Search, User, ChevronDown, Lock } from 'lucide-react';

export default function TopNavBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSigningOff, setIsSigningOff] = useState(false);

  const handleLogout = async () => {
    setIsSigningOff(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    logout();
    toast.success('Signed out successfully');
    navigate('/');
    setIsSigningOff(false);
  };

  return (
    <header className="bg-wellsfargo-red text-white border-b-4 border-[#FFDA63]">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <Link to="/">
            <img src="/logo.webp" alt="Wells Fargo Logo" className="h-6 w-auto" />
          </Link>
        </div>
        {/* Right Side: Icons, Sign Off, Welcome, separated by dividers */}
        <div className="flex items-center space-x-2">
          {/* Hide Search on mobile */}
          <button className="hidden md:inline-flex hover:bg-white/10 rounded-full p-2">
            <Search className="h-5 w-5" />
          </button>
          {/* Hide divider on mobile */}
          <span className="hidden md:block h-6 w-px bg-white/40 mx-1" /> 
          {/* Hide Mail on mobile */}
          <button className="hidden md:inline-flex hover:bg-white/10 rounded-full p-2">
            <Mail className="h-5 w-5" />
          </button>
          {/* Hide divider on mobile */}
          <span className="hidden md:block h-6 w-px bg-white/40 mx-1" />
          {/* Sign Off Button - Always visible */}
          <div className="flex items-center">
            <Lock className="hidden md:inline-block h-4 w-4 text-white mr-1" /> {/* Hide Lock icon on mobile for space */}
            <button
              onClick={handleLogout}
              className="px-2 md:px-4 py-1 rounded font-semibold text-sm text-white hover:underline focus:outline-none relative"
              disabled={isSigningOff}
            >
              {isSigningOff ? (
                <span className="flex items-center justify-center">
                  <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Signing Off...
                </span>
              ) : (
                'Sign Off'
              )}
            </button>
          </div>
          {/* Hide divider on mobile */}
          <span className="hidden md:block h-6 w-px bg-white/40 mx-1" />
          {/* Welcome Section - Adjust for mobile */}
          <div className="flex items-center space-x-1 md:space-x-2 cursor-pointer">
            {/* User Icon - Always visible */}
            <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-1">
              <User className="h-4 w-4 md:h-5 md:w-5" />
            </span>
            {/* Hide text and chevron on mobile */}
            <span className="hidden md:inline font-semibold text-sm">Welcome, Bobby</span>
            <ChevronDown className="hidden md:inline-block h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
} 