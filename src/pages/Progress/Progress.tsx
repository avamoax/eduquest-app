import { Layout } from '@/components/layout';
import { Card, ProgressBar } from '@/components/common';
import { useParams } from 'react-router-dom';
import { SubjectProgress } from '@/types/subject.types';

// Mock data - all subjects
const allSubjects: SubjectProgress[] = [
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

export default function Progress() {
  const { subjectId } = useParams<{ subjectId?: string }>();

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">Your Progress</h1>
          <h2 className="text-xl font-heading font-bold text-gray-900">Subject Progress</h2>
        </div>

        {/* Subject Progress List */}
        <div className="space-y-3">
          {allSubjects.map((subject) => {
            const isHighlighted = subjectId === subject.id;
            return (
              <Card
                key={subject.id}
                className={`${
                  subject.backgroundColor || 'bg-gray-50'
                } border-0 ${isHighlighted ? 'ring-2 ring-primary' : ''}`}
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${
                      subject.backgroundColor || 'bg-white'
                    } rounded-lg flex items-center justify-center text-3xl shadow-sm`}
                  >
                    {subject.emoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{subject.name}</h3>
                    <ProgressBar
                      value={subject.lessonsCompleted}
                      max={subject.totalLessons}
                      color="primary"
                      size="sm"
                      className="mt-2"
                    />
                  </div>

                  {/* Lesson Count */}
                  <div className="text-sm text-gray-600 whitespace-nowrap">
                    {subject.lessonsCompleted} lessons
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

