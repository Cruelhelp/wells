import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';
import { Mail, Search, User, ChevronDown, Lock, Menu, X } from 'lucide-react';

// Define props type including the optional callback
interface TopNavBarProps {
  onLogoClick?: () => void; // Optional function prop
}

export default function TopNavBar({ onLogoClick }: TopNavBarProps) { // Destructure the prop
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSigningOff, setIsSigningOff] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center">
          {/* Add onClick handler to the Link */}
          <Link 
            to="/dashboard" 
            onClick={(e) => {
              // Prevent default link behavior if needed, though Link handles it
              // e.preventDefault(); 
              if (onLogoClick) {
                console.log("Logo clicked, calling onLogoClick..."); // Add log
                onLogoClick(); // Call the passed function
              }
              // Navigation still happens via the Link's 'to' prop
            }}
          >
            <img src="/logo.webp" alt="Wells Fargo Logo" className="h-5 w-auto" />
          </Link>
        </div>
        {/* Right Side - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <button className="hover:bg-white/10 rounded-full p-2">
            <Search className="h-5 w-5" />
          </button>
          <span className="h-6 w-px bg-white/40 mx-1" /> 
          <button className="hover:bg-white/10 rounded-full p-2">
            <Mail className="h-5 w-5" />
          </button>
          <span className="h-6 w-px bg-white/40 mx-1" />
          <div className="flex items-center">
            <Lock className="h-4 w-4 text-white mr-1" />
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded font-semibold text-sm text-white hover:underline focus:outline-none relative"
              disabled={isSigningOff}
            >
              {isSigningOff ? (
                <span className="flex items-center justify-center">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Signing Off...
                </span>
              ) : (
                'Sign Off'
              )}
            </button>
          </div>
          <span className="h-6 w-px bg-white/40 mx-1" />
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-1">
              <User className="h-5 w-5" />
            </span>
            <span className="font-semibold text-sm">Welcome, Bobby</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        
        {/* Right Side - Mobile */}
        <div className="md:hidden flex items-center space-x-2">
           {/* Sign Off Button - Always visible */}
           <button
              onClick={handleLogout}
              className="px-2 py-1 rounded font-semibold text-xs text-white hover:underline focus:outline-none relative"
              disabled={isSigningOff}
            >
              {isSigningOff ? (
                <span className="flex items-center justify-center">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></span>
                  <span className="text-xs">Signing Off...</span>
                </span>
              ) : (
                'Sign Off'
              )}
            </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute right-0 top-full mr-2 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <div className="px-3 py-2 border-b">
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="inline-flex items-center justify-center rounded-full bg-gray-500 p-1">
                  <User className="h-4 w-4 text-white" />
                </span>
                <span className="font-semibold text-sm text-gray-700">Welcome, Bobby</span>
              </div>
            </div>
            <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-500" /> Search
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" /> Messages
            </button>
          </div>
        </div>
      )}
    </header>
  );
} 