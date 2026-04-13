import { Layout } from '@/components/layout';
import { Card } from '@/components/common';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';

// Mock data
const subjects = [
  { id: 'english', name: 'English', emoji: '📚', color: 'bg-pink-100' },
  { id: 'reading', name: 'Reading', emoji: '📖', color: 'bg-purple-100' },
  { id: 'maths', name: 'Maths', emoji: '🔢', color: 'bg-blue-100' },
  { id: 'science', name: 'Science', emoji: '🔬', color: 'bg-green-100' },
  { id: 'hindi', name: 'Hindi', emoji: 'ॐ', color: 'bg-orange-100' },
  { id: 'marathi', name: 'Marathi', emoji: '📄', color: 'bg-yellow-100' },
];

const upcomingClasses = [
  {
    id: '1',
    subject: 'Reading',
    time: '12:00 PM',
    location: 'B2, Room 158',
    emoji: '📖',
  },
  {
    id: '2',
    subject: 'Science',
    time: '01:45 PM',
    location: 'C1, Room 201',
    emoji: '🔬',
  },
];

const days = [
  { label: 'Mon', date: '18' },
  { label: 'Tue', date: '19', active: true },
  { label: 'Wed', date: '20' },
  { label: 'Thu', date: '21' },
  { label: 'Fri', date: '22' },
];

const schedule = [
  {
    id: '1',
    subject: 'Social Studies',
    startTime: '8:30 AM',
    endTime: '10:00 AM',
    location: 'B3, Room 124',
    emoji: '📚',
    teacher: {
      name: 'Mrs. Goodman',
      avatar: '👩',
    },
    isPast: true,
  },
  {
    id: '2',
    subject: 'English Literature',
    startTime: '10:30 AM',
    endTime: '12:00 PM',
    location: 'B2, Room 158',
    emoji: '📖',
    teacher: {
      name: 'Mrs. Melton',
      avatar: '👩',
    },
    isActive: true,
  },
  {
    id: '3',
    subject: 'Computer Science',
    startTime: '12:15 PM',
    endTime: '01:45 PM',
    location: 'B3, Room 310',
    emoji: '💻',
    teacher: {
      name: 'Mr. Hodge',
      avatar: '👨',
    },
  },
  {
    id: '4',
    subject: 'Science',
    startTime: '02:00 PM',
    endTime: '03:30 PM',
    location: 'C1, Room 201',
    emoji: '🔬',
    teacher: {
      name: 'Mrs. Murray',
      avatar: '👩',
    },
  },
];

export default function Learn() {
  const [view, setView] = useState<'subjects' | 'schedule'>('subjects');

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-heading font-bold text-gray-900">
            {view === 'schedule' ? 'My schedule' : 'Learn'}
          </h1>
          {view === 'schedule' && (
            <button className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          )}
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setView('subjects')}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
              view === 'subjects'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            Subjects
          </button>
          <button
            onClick={() => setView('schedule')}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
              view === 'schedule'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            Schedule
          </button>
        </div>

        {view === 'subjects' ? (
          <>
            {/* Upcoming Classes */}
            {upcomingClasses.length > 0 && (
              <div>
                <h2 className="text-lg font-heading font-bold text-gray-900 mb-3">
                  Upcoming Classes
                </h2>
                <div className="space-y-3">
                  {upcomingClasses.map((classItem) => (
                    <Card key={classItem.id} className="bg-white border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{classItem.emoji}</div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{classItem.subject}</h3>
                            <p className="text-sm text-gray-600">{classItem.time}</p>
                            <p className="text-sm text-gray-500">{classItem.location}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Subjects */}
            <div>
              <h2 className="text-lg font-heading font-bold text-gray-900 mb-3">All Subjects</h2>
              <div className="grid grid-cols-3 gap-4">
                {subjects.map((subject) => (
                  <Link
                    key={subject.id}
                    to={ROUTES.SUBJECT_CONTENT(subject.id)}
                    className={`${subject.color} rounded-xl p-6 text-center transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg`}
                  >
                    <div className="text-5xl mb-3">{subject.emoji}</div>
                    <div className="text-sm font-semibold text-gray-900">{subject.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Date Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {days.map((day, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${
                    day.active
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  <div className="text-sm">{day.label}</div>
                  <div className="text-lg">{day.date}</div>
                </button>
              ))}
            </div>

            {/* Schedule List */}
            <div className="space-y-4">
              {schedule.map((item, index) => {
                const showNowIndicator = item.isActive && index > 0;
                return (
                  <div key={item.id}>
                    {showNowIndicator && (
                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t-2 border-dashed border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="bg-white px-3 py-1 text-xs font-semibold text-gray-600 rounded-full border border-gray-300">
                            Now
                          </span>
                        </div>
                      </div>
                    )}
                    <Card
                      className={`${
                        item.isActive
                          ? 'bg-green-50 border-2 border-green-300'
                          : item.isPast
                          ? 'bg-white border border-gray-200 opacity-75'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Time Column */}
                        <div className="flex flex-col items-center min-w-[80px]">
                          <svg
                            className="w-5 h-5 text-gray-400 mb-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div className="text-xs font-semibold text-gray-700 mb-1">
                            {item.startTime}
                          </div>
                          <div className="w-0.5 h-8 bg-gray-300 border-l-2 border-dashed"></div>
                          <div className="text-xs font-semibold text-gray-700 mt-1">
                            {item.endTime}
                          </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 text-lg">{item.subject}</h3>
                            {item.isActive && (
                              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                Now
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{item.location}</p>
                          {item.teacher && (
                            <div className="flex items-center gap-2 mt-3">
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                                {item.teacher.avatar || '👤'}
                              </div>
                              <span className="text-sm text-gray-600">{item.teacher.name}</span>
                            </div>
                          )}
                        </div>

                        {/* Emoji Column */}
                        <div className="text-5xl">{item.emoji}</div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

