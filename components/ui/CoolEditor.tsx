import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, Phone, Shield, User } from 'lucide-react';

interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  marketing: boolean;
  security: boolean;
  updates: boolean;
}

const NotificationSetting: React.FC = () => {
  const [settings, setSettings] = useState<NotificationSettings>({
    email: true,
    push: true,
    sms: false,
    marketing: false,
    security: true,
    updates: true
  });

  const handleToggle = (key: keyof NotificationSettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const notificationTypes = [
    {
      key: 'email' as keyof NotificationSettings,
      label: 'Email Notifications',
      description: 'Receive notifications via email',
      icon: Mail
    },
    {
      key: 'push' as keyof NotificationSettings,
      label: 'Push Notifications',
      description: 'Get push notifications on your device',
      icon: Bell
    },
    {
      key: 'sms' as keyof NotificationSettings,
      label: 'SMS Notifications',
      description: 'Receive text message alerts',
      icon: Phone
    },
    {
      key: 'marketing' as keyof NotificationSettings,
      label: 'Marketing Messages',
      description: 'Promotional emails and offers',
      icon: MessageSquare
    },
    {
      key: 'security' as keyof NotificationSettings,
      label: 'Security Alerts',
      description: 'Important security notifications',
      icon: Shield
    },
    {
      key: 'updates' as keyof NotificationSettings,
      label: 'Product Updates',
      description: 'New features and announcements',
      icon: User
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Notification Settings
        </h1>
        <p className="text-gray-600">
          Manage how you receive notifications and updates
        </p>
      </div>

      <div className="space-y-4">
        {notificationTypes.map(({ key, label, description, icon: Icon }) => (
          <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon className="h-5 w-5 text-gray-500" />
              <div>
                <h3 className="font-medium text-gray-900">{label}</h3>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </div>
            <button
              onClick={() => handleToggle(key)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings[key] ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings[key] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NotificationSetting;