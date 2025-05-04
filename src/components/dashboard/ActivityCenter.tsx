import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, FileText, CreditCard, AlertTriangle } from 'lucide-react';

const ActivityCenter = () => {
  const activities = [
    {
      icon: <Bell className="h-5 w-5 text-wellsfargo-red" />,
      title: "Your statement is ready",
      description: "April 2025 statement is now available",
      time: "3 days ago"
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      title: "Tax documents ready",
      description: "Your 2024 tax documents are available",
      time: "1 week ago"
    },
    {
      icon: <CreditCard className="h-5 w-5 text-green-500" />,
      title: "Card transaction alert",
      description: "Unusual activity detected on your card",
      time: "2 weeks ago"
    }
  ];

  return (
    <Card className="mb-6">
      <CardHeader className="pb-2 pt-3 px-3 md:px-4">
        <CardTitle className="text-base md:text-lg font-medium">Activity Center</CardTitle>
      </CardHeader>
      <CardContent className="px-3 md:px-4 pb-3">
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0 hover:bg-gray-50 cursor-pointer transition-colors duration-200 rounded">
              <div className="shrink-0 mt-1">
                {activity.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">{activity.title}</h4>
                <p className="text-xs md:text-sm text-gray-600">{activity.description}</p>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCenter;
