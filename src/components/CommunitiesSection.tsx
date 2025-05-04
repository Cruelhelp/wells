import React from 'react';
import { Button } from '@/components/ui/button';

export default function CommunitiesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-normal text-center text-gray-800 mb-10">Serving our customers and communities</h2>
        
        <div className="text-center text-lg mb-16 max-w-4xl mx-auto">
          <p>It doesn't happen with one transaction, in one day on the job, or in one quarter. It's earned relationship by relationship.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Why we're committed to communities card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <div className="h-[500px] bg-gray-200 relative overflow-hidden">
              <img 
                src="public/lovable-uploads/a73cc817-0dcd-4788-9a59-c13e824ad8b8.png" 
                alt="Women growing vegetables together" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12">
              <h3 className="text-4xl font-medium mb-6">Why we're committed to communities</h3>
              <p className="text-2xl text-gray-700 mb-8">We don't just serve our communities—we are our communities. We're committed to helping customers and neighborhoods across the country thrive.</p>
              <Button className="secondary-button">Wells Fargo Stories</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
