
import React from 'react';
import { Button } from '@/components/ui/button';

export default function MobileAppSection() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2 pr-12">
            <h2 className="text-4xl font-normal text-gray-800 mb-6">It's easy to do more in the mobile app</h2>
            <p className="text-xl text-gray-700 mb-8">Get fast, secure access to your accounts with app exclusive features</p>
            <Button className="border border-gray-300 rounded-full bg-white text-black hover:bg-gray-100">
              Download the app
            </Button>
          </div>
          <div className="w-1/2">
            <div className="relative">
              <div className="text-sm text-gray-600 mb-2">Screen images simulated.</div>
              <div className="flex">
                {/* These would be actual phone images in a real implementation */}
                <div className="w-1/2 h-80 bg-gray-300 rounded-3xl mr-4 relative overflow-hidden">
                  <div className="absolute inset-0 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">9:41</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="w-32 h-8 bg-purple-600 rounded-full mx-auto mb-4"></div>
                      <div className="text-center">Explore Wells Fargo</div>
                      <div className="mt-4">
                        <div className="font-medium mb-2">Banking</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white p-2 rounded text-xs">Checking</div>
                          <div className="bg-white p-2 rounded text-xs">Savings & CDs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 h-80 bg-gray-300 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">9:41</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="text-sm mb-2">Here are your spending details.</div>
                      <div className="text-sm font-medium mb-1">Your spending</div>
                      <div className="flex justify-between items-center text-xs mb-4">
                        <div>2 accounts</div>
                        <div>Jan 2025</div>
                      </div>
                      <div className="flex border-b border-gray-400">
                        <div className="px-4 border-b-2 border-purple-700 py-1 text-xs">Summary</div>
                        <div className="px-4 py-1 text-xs">Category</div>
                        <div className="px-4 py-1 text-xs">Merchant</div>
                      </div>
                      <div className="mt-4 relative">
                        <div className="h-32 w-32 rounded-full border-16 border-purple-600 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
