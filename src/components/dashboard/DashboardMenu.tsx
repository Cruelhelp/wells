import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  CreditCard, 
  PiggyBank, 
  Building2, 
  Settings, 
  Bell, 
  HelpCircle,
  LogOut
} from 'lucide-react';

export default function DashboardMenu() {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-3 px-6">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-black">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/dashboard/accounts" className="flex items-center space-x-2 text-gray-600 hover:text-black">
              <CreditCard className="h-5 w-5" />
              <span>Accounts</span>
            </Link>
            <Link to="/dashboard/transfers" className="flex items-center space-x-2 text-gray-600 hover:text-black">
              <PiggyBank className="h-5 w-5" />
              <span>Transfers</span>
            </Link>
            <Link to="/dashboard/business" className="flex items-center space-x-2 text-gray-600 hover:text-black">
              <Building2 className="h-5 w-5" />
              <span>Business</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-black">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-black">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-black">
              <Settings className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-black">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
} 