import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, FileText, CreditCard, AlertTriangle } from 'lucide-react';

const ActivityCenter = () => {
  const activities = [
    {
      icon: <Bell className="text-wellsfargo-red" />,
      title: "Your statement is ready",
      description: "April 2025 statement is now available",
      time: "3 days ago"
    },
    {
      icon: <FileText className="text-blue-500" />,
      title: "Tax documents ready",
      description: "Your 2024 tax documents are available",
      time: "1 week ago"
    },
    {
      icon: <CreditCard className="text-green-500" />,
      title: "Card transaction alert",
      description: "Unusual activity detected on your card",
      time: "2 weeks ago"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Activity Center</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0 hover:bg-gray-100 cursor-pointer transition-colors duration-200 rounded">
              <div className="shrink-0 mt-1">
                {activity.icon}
              </div>
              <div>
                <h4 className="font-medium">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.description}</p>
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
