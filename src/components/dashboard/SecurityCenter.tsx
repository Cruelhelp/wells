import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecurityCenter = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2 pt-3 px-3 md:px-4">
        <CardTitle className="text-base md:text-lg font-medium">Security Center</CardTitle>
      </CardHeader>
      <CardContent className="px-3 md:px-4 pb-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Shield className="text-green-500" size={16} />
            <span className="text-xs md:text-sm">Security system active</span>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded p-2 md:p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="text-orange-500 shrink-0 mt-0.5" size={16} />
              <div>
                <p className="text-xs md:text-sm text-orange-800 font-medium">Security Reminder</p>
                <p className="text-xs text-orange-700">
                  It's been 90+ days since your last password update. Consider changing it for enhanced security.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <Button variant="outline" size="sm" className="text-xs w-full">
              Security Settings
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityCenter;
