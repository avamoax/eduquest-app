import { useNavigate } from 'react-router-dom';

export default function Accuracy() {
  const navigate = useNavigate();

  // Mock data - will be replaced with actual data from store/API
  const accuracyData = {
    overallAccuracy: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    trend: '+0%',
    bySubject: [
      { name: 'English', accuracy: 0, questions: 0, emoji: '📚', color: 'bg-pink-100' },
      { name: 'Reading', accuracy: 0, questions: 0, emoji: '📖', color: 'bg-purple-100' },
      { name: 'Maths', accuracy: 0, questions: 0, emoji: '🔢', color: 'bg-blue-100' },
      { name: 'Science', accuracy: 0, questions: 0, emoji: '🔬', color: 'bg-green-100' },
    ],
    weeklyProgress: [
      { day: 'Mon', accuracy: 0 },
      { day: 'Tue', accuracy: 0 },
      { day: 'Wed', accuracy: 0 },
      { day: 'Thu', accuracy: 0 },
      { day: 'Fri', accuracy: 0 },
      { day: 'Sat', accuracy: 0 },
      { day: 'Sun', accuracy: 0 },
    ],
  };

  const maxAccuracy = Math.max(...accuracyData.weeklyProgress.map(d => d.accuracy));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">Accuracy</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6 pb-20">
        {/* Overall Accuracy Display */}
        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <div className="text-6xl mb-3">🏆</div>
          <div className="text-7xl font-bold text-green-600 mb-2">
            {accuracyData.overallAccuracy}%
          </div>
          <div className="text-xl font-semibold text-gray-700 mb-1">Overall Accuracy</div>
          <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            {accuracyData.trend} this week
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="text-4xl mb-2">📊</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {accuracyData.totalQuestions}
            </div>
            <div className="text-sm font-semibold text-gray-600">Total Questions</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="text-4xl mb-2">✅</div>
            <div className="text-3xl font-bold text-green-600 mb-1">
              {accuracyData.correctAnswers}
            </div>
            <div className="text-sm font-semibold text-gray-600">Correct Answers</div>
          </div>
        </div>

        {/* Weekly Progress Chart */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Weekly Progress</h2>
          <div className="flex items-end justify-between gap-2 h-40">
            {accuracyData.weeklyProgress.map((day) => {
              const height = (day.accuracy / maxAccuracy) * 100;
              return (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="relative w-full flex-1 flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg transition-all hover:from-green-600 hover:to-green-500"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-700">
                        {day.accuracy}%
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-600">{day.day}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* By Subject */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Accuracy by Subject</h2>
          <div className="space-y-3">
            {accuracyData.bySubject.map((subject) => (
              <div key={subject.name} className={`${subject.color} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{subject.emoji}</span>
                    <div>
                      <div className="font-bold text-gray-900">{subject.name}</div>
                      <div className="text-sm text-gray-600">{subject.questions} questions</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{subject.accuracy}%</div>
                </div>
                <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all"
                    style={{ width: `${subject.accuracy}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Card */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg text-white">
          <div className="text-5xl mb-3">💡</div>
          <h3 className="text-xl font-bold mb-2">Pro Tip!</h3>
          <p className="text-white/90">
            Review your incorrect answers to improve your accuracy. Learning from mistakes is the key to mastery!
          </p>
        </div>
      </div>
    </div>
  );
}
 