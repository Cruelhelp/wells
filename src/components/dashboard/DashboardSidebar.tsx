import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { CalendarCheck, LogOut, Globe2 } from 'lucide-react';

export default function DashboardSidebar() {
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
    <aside className="w-full md:w-80 bg-[#f7f7f7] border-l border-gray-200 p-6 flex flex-col space-y-6 min-h-full">
      <div>
        <div className="text-gray-700 font-semibold text-lg mb-1">Welcome, Pat</div>
        <div className="text-xs text-gray-500 mb-2">Your last sign on was December 2, 2014</div>
        <button
          onClick={handleLogout}
          className="flex items-center text-wellsfargo-red font-semibold text-sm hover:underline mb-4 relative"
          disabled={isSigningOff}
        >
          {isSigningOff ? (
            <>
              <span className="w-5 h-5 border-2 border-wellsfargo-red border-t-transparent rounded-full animate-spin mr-2"></span>
              Signing Off...
            </>
          ) : (
            <>
              <LogOut className="h-4 w-4 mr-1" /> Sign Off
            </>
          )}
        </button>
      </div>
      <div className="bg-white rounded shadow p-4 flex flex-col items-center">
        <CalendarCheck className="h-8 w-8 text-wellsfargo-red mb-2" />
        <div className="font-semibold mb-1">Meet with a banker</div>
        <div className="text-xs text-gray-600 text-center mb-2">Make an appointment online at your convenience</div>
        <button className="bg-wellsfargo-red text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-700">Make Appointment</button>
      </div>
      <div className="bg-white rounded shadow p-4 flex items-center">
        <Globe2 className="h-6 w-6 text-gray-400 mr-2" />
        <div>
          <div className="font-semibold text-sm">Full Site Access</div>
          <div className="text-xs text-gray-500">Wells Fargo Online®</div>
        </div>
      </div>
    </aside>
  );
} 