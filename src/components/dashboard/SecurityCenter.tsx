
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecurityCenter = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Security Center</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="text-green-500" size={18} />
            <span className="text-sm">Security system active</span>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={18} />
              <div>
                <p className="text-sm text-orange-800 font-medium">Security Reminder</p>
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
