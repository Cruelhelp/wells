import React from 'react';
import { ShieldCheck, Smartphone, Lock, BarChart2, Calculator, TrendingUp, Send } from 'lucide-react';

export default function DashboardRightSidebar() {
  return (
    <aside className="w-full bg-[#232323] text-white p-0 min-h-full flex flex-col font-sans">
      {/* Zelle Section */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center mb-1">
          <div className="h-6 border-l-4 border-dashed border-yellow-400 mr-2" />
          <span className="text-base font-bold tracking-wide">Zelle</span>
        </div>
        <div className="text-sm mb-2 font-semibold">Pay people easily</div>
        <div className="text-xs text-gray-300 mb-3">Use Zelle® to send money to friends and family</div>
        <button className="flex items-center gap-2 bg-wellsfargo-red text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-700">
          <Send className="h-4 w-4" /> Send Money
        </button>
      </div>
      {/* Security Tools */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center mb-2">
          <div className="h-6 border-l-4 border-dashed border-yellow-400 mr-2" />
          <span className="text-base font-bold tracking-wide flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-yellow-400" /> Security Tools
          </span>
        </div>
        <ul className="space-y-1 text-sm">
          <li className="flex items-center gap-2 cursor-pointer hover:underline py-1"><ShieldCheck className="h-4 w-4 text-gray-300 shrink-0" /> Visit the Security Center</li>
          <li className="flex items-center gap-2 cursor-pointer hover:underline py-1"><Smartphone className="h-4 w-4 text-gray-300 shrink-0" /> Confirm your mobile number</li>
          <li className="flex items-center gap-2 cursor-pointer hover:underline py-1"><Lock className="h-4 w-4 text-gray-300 shrink-0" /> Enable 2-Step Verification</li>
        </ul>
      </div>
      {/* Planning & Tools */}
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="h-6 border-l-4 border-dashed border-yellow-400 mr-2" />
          <span className="text-base font-bold tracking-wide flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-yellow-400" /> Planning & Tools
          </span>
        </div>
        <ul className="space-y-1 text-sm">
          <li className="flex items-center gap-2 cursor-pointer hover:underline py-1"><BarChart2 className="h-4 w-4 text-gray-300 shrink-0" /> View your FICO® Credit Score</li>
          <li className="flex items-center gap-2 cursor-pointer hover:underline py-1"><Calculator className="h-4 w-4 text-gray-300 shrink-0" /> Calculate debt-to-income ratio</li>
          <li className="flex items-center gap-2 cursor-pointer hover:underline py-1"><TrendingUp className="h-4 w-4 text-gray-300 shrink-0" /> View My Retirement Plan®</li>
        </ul>
      </div>
    </aside>
  );
} 