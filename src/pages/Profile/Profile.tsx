import { Layout } from '@/components/layout';
import { Card, ProgressBar } from '@/components/common';
import { SubjectProgress } from '@/types/subject.types';

// Mock data
const user = {
  name: 'Kate Malone',
  class: 'Class 9A',
  avatar: '🎓',
  about: 'I am interested in math and biology. I like to solve complex problems and participate in school Olympiads.',
};

const stats = {
  totalPoints: 0,
  dayStreak: 0,
  accuracy: 0,
  questions: 0,
};

const subjectProgress: SubjectProgress[] = [
  {
    id: 'english',
    name: 'English',
    emoji: '📚',
    lessonsCompleted: 0,
    totalLessons: 20,
    backgroundColor: 'bg-pink-50',
  },
  {
    id: 'reading',
    name: 'Reading',
    emoji: '📖',
    lessonsCompleted: 0,
    totalLessons: 15,
    backgroundColor: 'bg-blue-50',
  },
  {
    id: 'maths',
    name: 'Maths',
    emoji: '🔢',
    lessonsCompleted: 0,
    totalLessons: 25,
    backgroundColor: 'bg-blue-50',
  },
  {
    id: 'science',
    name: 'Science',
    emoji: '🔬',
    lessonsCompleted: 0,
    totalLessons: 18,
    backgroundColor: 'bg-green-50',
  },
  {
    id: 'hindi',
    name: 'हिंदी',
    emoji: '🇮🇳',
    lessonsCompleted: 0,
    totalLessons: 12,
    backgroundColor: 'bg-orange-50',
  },
  {
    id: 'marathi',
    name: 'मराठी',
    emoji: '📜',
    lessonsCompleted: 0,
    totalLessons: 12,
    backgroundColor: 'bg-yellow-50',
  },
];

export default function Profile() {
  return (
    <Layout>
      <div className="bg-primary text-white p-4 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-heading font-bold">My profile</h1>
          <div className="flex gap-4">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
            {user.avatar}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-heading font-bold text-white mb-1">{user.name}</h2>
            <p className="text-white/80">{user.class}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 bg-white/20 text-white rounded-lg py-2 px-4 font-semibold">
            Achievements
          </button>
          <button className="flex-1 bg-white/10 text-white/80 rounded-lg py-2 px-4 font-semibold">
            Notes
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6 -mt-4">
        {/* About Section */}
        <Card>
          <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">About</h3>
          <p className="text-gray-600">{user.about}</p>
        </Card>

        {/* Statistics Section */}
        <div>
          <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-orange-50 border-0">
              <div className="text-center">
                <div className="text-3xl mb-2">🎗️</div>
                <div className="text-2xl font-bold text-gray-900">{stats.totalPoints}</div>
                <div className="text-sm text-gray-600">Total Points</div>
              </div>
            </Card>
            <Card className="bg-purple-50 border-0">
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-gray-900">{stats.dayStreak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </Card>
            <Card className="bg-green-50 border-0">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-gray-900">{stats.accuracy}%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </Card>
            <Card className="bg-blue-50 border-0">
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-2xl font-bold text-gray-900">{stats.questions}</div>
                <div className="text-sm text-gray-600">Questions</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Subject Progress */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Your Progress</h2>
          <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Subject Progress</h3>
          <div className="space-y-3">
            {subjectProgress.map((subject) => (
                <Card
                  key={subject.id}
                  className={`${subject.backgroundColor || 'bg-gray-50'} border-0`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 ${
                        subject.backgroundColor || 'bg-white'
                      } rounded-lg flex items-center justify-center text-2xl shadow-sm`}
                    >
                      {subject.emoji}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{subject.name}</h4>
                      <ProgressBar
                        value={subject.lessonsCompleted}
                        max={subject.totalLessons}
                        color="primary"
                        size="sm"
                        className="mt-2"
                      />
                    </div>
                    <div className="text-sm text-gray-600 whitespace-nowrap">
                      {subject.lessonsCompleted} lessons
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

