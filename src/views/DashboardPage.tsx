'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, FileText, Calendar, Wallet, Settings, Bell } from 'lucide-react';
import Container from '../components/ui/Container';
import FileManager from '../components/dashboard/FileManager';
import ComplianceCalendar from '../components/dashboard/ComplianceCalendar';
import UserWallet from '../components/dashboard/UserWallet';
import Button from '../components/ui/Button';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const user = { name: 'Guest User', email: 'guest@example.com', phone: '', company: '' };

  useEffect(() => {
    document.title = 'Dashboard - WalTax India';
  }, []);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'files', name: 'File Manager', icon: FileText },
    { id: 'calendar', name: 'Compliance Calendar', icon: Calendar },
    { id: 'wallet', name: 'My Wallet', icon: Wallet },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    alert('Profile updated locally. Backend storage has been removed.');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome back, {user?.name}!</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">Active Services</h3>
                  <p className="text-3xl font-bold text-primary-600">5</p>
                  <p className="text-sm text-primary-700">Currently in progress</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Completed</h3>
                  <p className="text-3xl font-bold text-green-600">12</p>
                  <p className="text-sm text-green-700">Successfully delivered</p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Pending</h3>
                  <p className="text-3xl font-bold text-yellow-600">3</p>
                  <p className="text-sm text-yellow-700">Awaiting documents</p>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { title: 'GST Registration Completed', date: '2 days ago', status: 'completed' },
                  { title: 'Income Tax Filing In Progress', date: '1 week ago', status: 'progress' },
                  { title: 'Private Limited Company Registration', date: '2 weeks ago', status: 'completed' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{activity.title}</h4>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {activity.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'files':
        return <FileManager />;
      case 'calendar':
        return <ComplianceCalendar />;
      case 'wallet':
        return <UserWallet />;
      case 'settings':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.name || ''}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email || ''}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      defaultValue={user?.phone || ''}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      defaultValue={user?.company || ''}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button type="submit">Update Profile</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
                <div className="space-y-3">
                  {[
                    'Email notifications for service updates',
                    'SMS alerts for compliance deadlines',
                    'Push notifications for new messages',
                    'Weekly compliance reminders'
                  ].map((pref, index) => (
                    <label key={index} className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-gray-700">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage your services, files, and compliance requirements
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderTabContent()}
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashboardPage;