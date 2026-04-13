import { Layout } from '@/components/layout';
import { Card } from '@/components/common';
import { useParams, Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';
import { SubjectTopic } from '@/types/subject.types';

// Mock data - Subject topics/levels
const subjectTopics: Record<string, SubjectTopic[]> = {
  english: [
    {
      id: 'parts-of-speech',
      title: 'Parts of Speech',
      description: 'Learn about nouns, verbs, adjectives, and more',
      lessonsCount: 5,
      completedLessons: 0,
      icon: '📝',
    },
    {
      id: 'sentence-structure',
      title: 'Sentence Structure',
      description: 'Understanding how sentences are built',
      lessonsCount: 4,
      completedLessons: 0,
      icon: '📄',
    },
    {
      id: 'grammar-rules',
      title: 'Grammar Rules',
      description: 'Essential grammar rules and usage',
      lessonsCount: 6,
      completedLessons: 0,
      icon: '📚',
    },
    {
      id: 'vocabulary',
      title: 'Vocabulary Building',
      description: 'Expand your word knowledge',
      lessonsCount: 8,
      completedLessons: 0,
      icon: '💬',
    },
  ],
  reading: [
    {
      id: 'comprehension',
      title: 'Reading Comprehension',
      description: 'Improve your understanding of texts',
      lessonsCount: 6,
      completedLessons: 0,
      icon: '📖',
    },
    {
      id: 'fluency',
      title: 'Reading Fluency',
      description: 'Read faster and more accurately',
      lessonsCount: 5,
      completedLessons: 0,
      icon: '⚡',
    },
  ],
  maths: [
    {
      id: 'arithmetic',
      title: 'Arithmetic',
      description: 'Basic math operations',
      lessonsCount: 7,
      completedLessons: 0,
      icon: '➕',
    },
    {
      id: 'algebra',
      title: 'Algebra',
      description: 'Introduction to algebra',
      lessonsCount: 6,
      completedLessons: 0,
      icon: '🔢',
    },
    {
      id: 'geometry',
      title: 'Geometry',
      description: 'Shapes and measurements',
      lessonsCount: 5,
      completedLessons: 0,
      icon: '📐',
    },
  ],
  science: [
    {
      id: 'biology',
      title: 'Biology',
      description: 'Living things and their processes',
      lessonsCount: 6,
      completedLessons: 0,
      icon: '🌱',
    },
    {
      id: 'chemistry',
      title: 'Chemistry',
      description: 'Matter and its properties',
      lessonsCount: 5,
      completedLessons: 0,
      icon: '⚗️',
    },
    {
      id: 'physics',
      title: 'Physics',
      description: 'Forces, energy, and motion',
      lessonsCount: 4,
      completedLessons: 0,
      icon: '⚛️',
    },
  ],
};

const subjectInfo: Record<string, { name: string; emoji: string; color: string }> = {
  english: { name: 'English', emoji: '📚', color: 'bg-pink-100' },
  reading: { name: 'Reading', emoji: '📖', color: 'bg-purple-100' },
  maths: { name: 'Maths', emoji: '🔢', color: 'bg-blue-100' },
  science: { name: 'Science', emoji: '🔬', color: 'bg-green-100' },
  hindi: { name: 'हिंदी', emoji: '🇮🇳', color: 'bg-orange-100' },
  marathi: { name: 'मराठी', emoji: '📜', color: 'bg-yellow-100' },
};

export default function SubjectDetail() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? subjectInfo[subjectId] : null;
  const topics = subjectId ? subjectTopics[subjectId] || [] : [];

  if (!subject) {
    return (
      <Layout>
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subject not found</h1>
          <Link to={ROUTES.SUBJECTS} className="text-primary hover:underline">
            Go back to Subjects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            to={ROUTES.SUBJECTS}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center text-3xl`}>
              {subject.emoji}
            </div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">{subject.name}</h1>
          </div>
        </div>

        {/* Topics/Levels Section */}
        <div>
          <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Topics & Levels</h2>
          {topics.length > 0 ? (
            <div className="space-y-3">
              {topics.map((topic) => (
                <Card
                  key={topic.id}
                  className="bg-white border border-gray-200 hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {topic.icon || '📚'}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">{topic.title}</h3>
                      {topic.description && (
                        <p className="text-sm text-gray-600 mb-2">{topic.description}</p>
                      )}
                      {topic.lessonsCount !== undefined && (
                        <p className="text-xs text-gray-500">
                          {topic.completedLessons || 0} / {topic.lessonsCount} lessons completed
                        </p>
                      )}
                    </div>
                    <div className="text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-gray-50 border border-gray-200">
              <div className="text-center py-8">
                <p className="text-gray-600 mb-2">No topics available yet</p>
                <p className="text-sm text-gray-500">Content will be added soon</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}

