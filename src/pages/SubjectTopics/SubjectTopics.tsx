import { useNavigate, useParams } from 'react-router-dom';

interface Topic {
  id: string;
  name: string;
  emoji: string;
  color: string;
  levels: Level[];
}

interface Level {
  id: number;
  name: string;
  locked: boolean;
  stars: number;
  completed: boolean;
}

export default function SubjectTopics() {
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();

  // Subject configuration
  const subjects: Record<string, { name: string; emoji: string; color: string }> = {
    english: { name: 'English', emoji: '📚', color: 'from-pink-400 to-pink-600' },
    hindi: { name: 'Hindi', emoji: '🇮🇳', color: 'from-orange-400 to-orange-600' },
    marathi: { name: 'Marathi', emoji: '📝', color: 'from-yellow-400 to-yellow-600' },
    maths: { name: 'Maths', emoji: '🔢', color: 'from-blue-400 to-blue-600' },
    science: { name: 'Science', emoji: '🔬', color: 'from-green-400 to-green-600' },
    reading: { name: 'Reading', emoji: '📖', color: 'from-purple-400 to-purple-600' },
  };

  const currentSubject = subjects[subjectId || 'english'];

  // Topics for each subject
  const getTopics = (): Topic[] => {
    if (subjectId === 'english') {
      return [
        {
          id: 'grammar',
          name: 'Grammar',
          emoji: '✏️',
          color: 'bg-pink-100',
          levels: [
            { id: 1, name: 'Level 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'Level 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'Level 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'Level 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'Level 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'reading',
          name: 'Reading Comprehension',
          emoji: '📖',
          color: 'bg-purple-100',
          levels: [
            { id: 1, name: 'Level 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'Level 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'Level 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'Level 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'Level 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'vocabulary',
          name: 'Vocabulary',
          emoji: '📝',
          color: 'bg-yellow-100',
          levels: [
            { id: 1, name: 'Level 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'Level 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'Level 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'Level 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'Level 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'writing',
          name: 'Writing Skills',
          emoji: '✍️',
          color: 'bg-blue-100',
          levels: [
            { id: 1, name: 'Level 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'Level 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'Level 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'Level 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'Level 5', locked: true, stars: 0, completed: false },
          ],
        },
      ];
    }
    
    if (subjectId === 'hindi') {
      return [
        {
          id: 'शब्द ज्ञान',
          name: 'शब्द ज्ञान (Word Knowledge)',
          emoji: '📚',
          color: 'bg-orange-100',
          levels: [
            { id: 1, name: 'स्तर 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'स्तर 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'स्तर 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'स्तर 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'स्तर 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'व्याकरण',
          name: 'व्याकरण (Grammar)',
          emoji: '✏️',
          color: 'bg-yellow-100',
          levels: [
            { id: 1, name: 'स्तर 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'स्तर 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'स्तर 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'स्तर 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'स्तर 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'शब्दार्थ',
          name: 'शब्दार्थ (Word Meanings)',
          emoji: '💡',
          color: 'bg-green-100',
          levels: [
            { id: 1, name: 'स्तर 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'स्तर 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'स्तर 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'स्तर 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'स्तर 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'सामान्य ज्ञान',
          name: 'सामान्य ज्ञान (General Knowledge)',
          emoji: '🌟',
          color: 'bg-purple-100',
          levels: [
            { id: 1, name: 'स्तर 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'स्तर 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'स्तर 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'स्तर 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'स्तर 5', locked: true, stars: 0, completed: false },
          ],
        },
      ];
    }
    
    if (subjectId === 'marathi') {
      return [
        {
          id: 'शब्द ज्ञान',
          name: 'शब्द ज्ञान (Word Knowledge)',
          emoji: '📚',
          color: 'bg-yellow-100',
          levels: [
            { id: 1, name: 'स्तर 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'स्तर 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'स्तर 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'स्तर 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'स्तर 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'व्याकरण',
          name: 'व्याकरण (Grammar)',
          emoji: '✏️',
          color: 'bg-orange-100',
          levels: [
            { id: 1, name: 'स्तर 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'स्तर 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'स्तर 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'स्तर 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'स्तर 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'शब्दार्थ',
          name: 'शब्दार्थ (Word Meanings)',
          emoji: '💡',
          color: 'bg-green-100',
          levels: [
            { id: 1, name: 'स्तर 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'स्तर 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'स्तर 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'स्तर 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'स्तर 5', locked: true, stars: 0, completed: false },
          ],
        },
        {
          id: 'सामान्य ज्ञान',
          name: 'सामान्य ज्ञान (General Knowledge)',
          emoji: '🌟',
          color: 'bg-purple-100',
          levels: [
            { id: 1, name: 'स्तर 1', locked: false, stars: 0, completed: false },
            { id: 2, name: 'स्तर 2', locked: true, stars: 0, completed: false },
            { id: 3, name: 'स्तर 3', locked: true, stars: 0, completed: false },
            { id: 4, name: 'स्तर 4', locked: true, stars: 0, completed: false },
            { id: 5, name: 'स्तर 5', locked: true, stars: 0, completed: false },
          ],
        },
      ];
    }
    
    // Default topics for other subjects
    return [
      {
        id: 'basics',
        name: 'Basics',
        emoji: '📚',
        color: 'bg-blue-100',
        levels: [
          { id: 1, name: 'Level 1', locked: false, stars: 0, completed: false },
          { id: 2, name: 'Level 2', locked: true, stars: 0, completed: false },
          { id: 3, name: 'Level 3', locked: true, stars: 0, completed: false },
        ],
      },
      {
        id: 'intermediate',
        name: 'Intermediate',
        emoji: '📖',
        color: 'bg-green-100',
        levels: [
          { id: 1, name: 'Level 1', locked: true, stars: 0, completed: false },
          { id: 2, name: 'Level 2', locked: true, stars: 0, completed: false },
          { id: 3, name: 'Level 3', locked: true, stars: 0, completed: false },
        ],
      },
      {
        id: 'advanced',
        name: 'Advanced',
        emoji: '🎓',
        color: 'bg-purple-100',
        levels: [
          { id: 1, name: 'Level 1', locked: true, stars: 0, completed: false },
          { id: 2, name: 'Level 2', locked: true, stars: 0, completed: false },
          { id: 3, name: 'Level 3', locked: true, stars: 0, completed: false },
        ],
      },
    ];
  };

  const topics = getTopics();

  const handleLevelClick = (topic: Topic, level: Level) => {
    if (level.locked) {
      alert('🔒 Complete previous level to unlock!');
      return;
    }
    // Navigate to quiz with topic and level
    navigate(`/quiz/${subjectId}/${topic.id}/${level.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentSubject.color} shadow-lg`}>
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <span className="text-5xl">{currentSubject.emoji}</span>
            <h1 className="text-2xl font-bold text-white">{currentSubject.name}</h1>
          </div>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a Topic</h2>

        {/* Topics Grid */}
        <div className="grid gap-6">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Topic Header */}
              <div className={`${topic.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{topic.emoji}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{topic.name}</h3>
                    <p className="text-gray-600">Complete all levels to master this topic!</p>
                  </div>
                </div>
              </div>

              {/* Levels */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {topic.levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => handleLevelClick(topic, level)}
                      disabled={level.locked}
                      className={`relative p-6 rounded-2xl transition-all ${
                        level.locked
                          ? 'bg-gray-200 cursor-not-allowed opacity-60'
                          : 'bg-gradient-to-br from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95'
                      }`}
                    >
                      {/* Lock Icon */}
                      {level.locked && (
                        <div className="absolute top-2 right-2 text-2xl">🔒</div>
                      )}

                      {/* Level Number */}
                      <div className={`text-4xl font-black mb-2 ${level.locked ? 'text-gray-500' : 'text-white'}`}>
                        {level.id}
                      </div>

                      {/* Level Name */}
                      <div className={`text-sm font-bold ${level.locked ? 'text-gray-600' : 'text-white'}`}>
                        {level.name}
                      </div>

                      {/* Stars */}
                      {!level.locked && (
                        <div className="flex justify-center gap-1 mt-2">
                          {[1, 2, 3].map((star) => (
                            <span
                              key={star}
                              className={`text-xl ${star <= level.stars ? 'opacity-100' : 'opacity-30'}`}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Completed Badge */}
                      {level.completed && (
                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          ✓ Done
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
