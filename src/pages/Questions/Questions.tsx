import { useNavigate } from 'react-router-dom';

export default function Questions() {
  const navigate = useNavigate();

  // Mock data - will be replaced with actual data from store/API
  const questionsData = {
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    accuracy: 0,
    bySubject: [
      { name: 'English', total: 0, correct: 0, emoji: '📚', color: 'bg-pink-100' },
      { name: 'Reading', total: 0, correct: 0, emoji: '📖', color: 'bg-purple-100' },
      { name: 'Maths', total: 0, correct: 0, emoji: '🔢', color: 'bg-blue-100' },
      { name: 'Science', total: 0, correct: 0, emoji: '🔬', color: 'bg-green-100' },
    ],
    recentActivity: [] as { date: string; questions: number; correct: number }[],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
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
          <h1 className="text-xl font-bold text-gray-900">Questions</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6 pb-20">
        {/* Total Questions Display */}
        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <div className="text-6xl mb-3">🎯</div>
          <div className="text-6xl font-bold text-blue-600 mb-2">
            {questionsData.totalQuestions}
          </div>
          <div className="text-xl font-semibold text-gray-700">Total Questions Answered</div>
        </div>

        {/* Correct vs Incorrect */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="text-4xl mb-2">✅</div>
            <div className="text-3xl font-bold text-green-600 mb-1">
              {questionsData.correctAnswers}
            </div>
            <div className="text-sm font-semibold text-gray-600">Correct</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="text-4xl mb-2">❌</div>
            <div className="text-3xl font-bold text-red-600 mb-1">
              {questionsData.incorrectAnswers}
            </div>
            <div className="text-sm font-semibold text-gray-600">Incorrect</div>
          </div>
        </div>

        {/* By Subject */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Questions by Subject</h2>
          <div className="space-y-3">
            {questionsData.bySubject.map((subject) => {
              const accuracy = Math.round((subject.correct / subject.total) * 100);
              return (
                <div key={subject.name} className={`${subject.color} rounded-xl p-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{subject.emoji}</span>
                      <div>
                        <div className="font-bold text-gray-900">{subject.name}</div>
                        <div className="text-sm text-gray-600">
                          {subject.correct}/{subject.total} correct
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{accuracy}%</div>
                  </div>
                  <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all"
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          {questionsData.recentActivity.length > 0 ? (
            <div className="space-y-2">
              {questionsData.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">📝</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{activity.date}</div>
                      <div className="text-sm text-gray-600">
                        {activity.correct}/{activity.questions} correct
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    {Math.round((activity.correct / activity.questions) * 100)}%
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-5xl mb-3">📝</div>
              <p className="text-gray-500">No activity yet. Start answering questions!</p>
            </div>
          )}
        </div>

        {/* Motivational Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg text-white text-center">
          <div className="text-5xl mb-3">🚀</div>
          <h3 className="text-xl font-bold mb-2">Keep Going!</h3>
          <p className="text-white/90">
            You're doing amazing! Every question brings you closer to mastery.
          </p>
        </div>
      </div>
    </div>
  );
}
