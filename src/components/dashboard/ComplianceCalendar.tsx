'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus, Trash2, Bell, Clock, AlertTriangle, X } from 'lucide-react';
import Button from '../ui/Button';

type ComplianceReminder = {
  id: string;
  title: string;
  description?: string;
  reminder_date: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
  completed: boolean;
};

const ComplianceCalendar = () => {
  const [reminders, setReminders] = useState<ComplianceReminder[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertTriangle className="h-4 w-4" />;
      case 'medium': return <Clock className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const getRemindersForDate = (date: string) => reminders.filter(reminder => reminder.reminder_date === date);

  const toggleReminderComplete = (id: string) => {
    setReminders(prev => prev.map(reminder => reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder));
  };

  const deleteReminder = (id: string) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    setReminders(prev => [
      ...prev,
      {
        id: `reminder-${Date.now()}`,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        reminder_date: formData.get('date') as string,
        priority: formData.get('priority') as 'low' | 'medium' | 'high',
        category: formData.get('category') as string,
        completed: false
      }
    ]);
    setShowAddModal(false);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayReminders = getRemindersForDate(dateStr);
      const isToday = dateStr === new Date().toISOString().split('T')[0];
      const isSelected = dateStr === selectedDate;

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 p-2 cursor-pointer transition-colors ${
            isToday ? 'bg-primary-50 border-primary-300' : isSelected ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
          }`}
          onClick={() => setSelectedDate(dateStr)}
        >
          <div className={`text-sm font-medium ${isToday ? 'text-primary-600' : 'text-gray-900'}`}>{day}</div>
          <div className="mt-1 space-y-1">
            {dayReminders.slice(0, 2).map(reminder => (
              <div key={reminder.id} className={`text-xs px-1 py-0.5 rounded truncate ${reminder.completed ? 'bg-gray-100 text-gray-500 line-through' : getPriorityColor(reminder.priority)}`}>
                {reminder.title}
              </div>
            ))}
            {dayReminders.length > 2 && <div className="text-xs text-gray-500">+{dayReminders.length - 2} more</div>}
          </div>
        </div>
      );
    }

    return days;
  };

  const selectedReminders = getRemindersForDate(selectedDate);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Compliance Calendar</h2>
          <p className="text-gray-500 text-sm mt-1">Frontend-only reminders are kept in memory for this session.</p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Reminder
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Previous</button>
            <h3 className="text-xl font-semibold text-gray-900">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Next</button>
          </div>

          <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="bg-gray-50 p-3 text-center text-sm font-medium text-gray-700 border-b border-gray-200">{day}</div>
            ))}
            {renderCalendarDays()}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </h3>

          {selectedReminders.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No reminders for this date</p>
            </div>
          ) : (
            <div className="space-y-3">
              {selectedReminders.map(reminder => (
                <motion.div key={reminder.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 border rounded-lg ${getPriorityColor(reminder.priority)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getPriorityIcon(reminder.priority)}
                      <h4 className={`font-medium ${reminder.completed ? 'line-through' : ''}`}>{reminder.title}</h4>
                    </div>
                    <button onClick={() => deleteReminder(reminder.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  {reminder.description && <p className="text-sm mb-2">{reminder.description}</p>}
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-white rounded">{reminder.category}</span>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={reminder.completed} onChange={() => toggleReminderComplete(reminder.id)} className="rounded" />
                      Complete
                    </label>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add Reminder</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="title" placeholder="Reminder title" required className="w-full p-3 border border-gray-300 rounded-lg" />
              <textarea name="description" placeholder="Description" className="w-full p-3 border border-gray-300 rounded-lg" rows={3} />
              <input name="date" type="date" defaultValue={selectedDate} required className="w-full p-3 border border-gray-300 rounded-lg" />
              <select name="priority" defaultValue="medium" className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
              <input name="category" placeholder="Category" defaultValue="Compliance" required className="w-full p-3 border border-gray-300 rounded-lg" />
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">Add Reminder</Button>
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)} className="flex-1">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplianceCalendar;