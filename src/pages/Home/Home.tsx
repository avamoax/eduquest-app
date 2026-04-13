import { Layout } from '@/components/layout';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { getUser, UserData } from '@/services/firestore';

// Stats will come from Firestore
const companion = { name: 'Happy Cloud', emoji: '☁️' };
const dailyChallenge = { title: 'LEVEL UP!!!', description: 'Mixed questions from all subjects', points: 10, emoji: '🚀' };

const quickAccessSubjects = [
  { id: 'english', name: 'English', emoji: '📚', color: 'bg-pink-100' },
  { id: 'hindi', name: 'Hindi', emoji: '🇮🇳', color: 'bg-orange-100' },
  { id: 'marathi', name: 'Marathi', emoji: '📝', color: 'bg-yellow-100' },
  { id: 'maths', name: 'Maths', emoji: '🔢', color: 'bg-blue-100' },
  { id: 'science', name: 'Science', emoji: '🔬', color: 'bg-green-100' },
  { id: 'reading', name: 'Reading', emoji: '📖', color: 'bg-purple-100' },
];

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [userAgeGroup, setUserAgeGroup] = useState<string>('');
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Load real data from Firestore
        const data = await getUser(firebaseUser.uid);
        if (data) {
          setUserData(data);
          setUserAgeGroup(data.ageGroup || localStorage.getItem('userAgeGroup') || '8-10');
        }
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Layout>
      <div className="p-4 space-y-4 pb-20">
        {/* User Profile Header */}
        {user && (
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg mb-6">
            <div className="flex items-center gap-4">
              {/* User Avatar */}
              <div className="relative">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName || 'User'} 
                    className="w-16 h-16 rounded-full border-4 border-white/20 shadow-lg"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-white/20 border-4 border-white/20 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {(user.displayName || user.email || 'U').charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                {/* Age Group Badge */}
                <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                  {userAgeGroup}
                </div>
              </div>
              
              {/* User Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold">
                  Welcome back, {user.displayName?.split(' ')[0] || 'Learner'}! 👋
                </h2>
                <p className="text-white/80 text-sm">
                  Ready for another amazing learning adventure?
                </p>
              </div>
              
              {/* Level Badge */}
              <div className="text-center">
                <div className="bg-white/20 rounded-2xl px-4 py-2">
                  <div className="text-2xl font-bold">Level 1</div>
                  <div className="text-xs text-white/80">Beginner</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
            <span className="italic">EduQuest:</span> <span style={{ fontFamily: 'cursive' }} className="text-2xl">Level Up Learning</span> 👋
          </h1>
          <p className="text-purple-600 text-sm font-semibold">Turn learning into fun! 🚀</p>
        </div>

        {/* Stats Section - Cute Design */}
        <div className="grid grid-cols-3 gap-3">
          <Link to={ROUTES.DAY_STREAK} className="text-center bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-3 shadow-md hover:shadow-lg transition-all active:scale-95">
            <div className="text-3xl mb-1">🔥</div>
            <div className="text-xl font-bold text-orange-700">{userData?.dayStreak ?? 0}</div>
            <div className="text-xs text-orange-600 font-semibold">Streak</div>
          </Link>
          <Link to={ROUTES.QUESTIONS} className="text-center bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-3 shadow-md hover:shadow-lg transition-all active:scale-95">
            <div className="text-3xl mb-1">🎯</div>
            <div className="text-xl font-bold text-blue-700">{userData?.questionsAnswered ?? 0}</div>
            <div className="text-xs text-blue-600 font-semibold">Questions</div>
          </Link>
          <Link to={ROUTES.ACCURACY} className="text-center bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-3 shadow-md hover:shadow-lg transition-all active:scale-95">
            <div className="text-3xl mb-1">⭐</div>
            <div className="text-xl font-bold text-amber-700">{userData?.accuracy ?? 0}%</div>
            <div className="text-xs text-amber-600 font-semibold">Accuracy</div>
          </Link>
        </div>

        {/* Companion Section - Cute */}
        <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-bold">Your Friend</p>
              <h2 className="text-2xl font-bold text-purple-900">{companion.name}</h2>
            </div>
            <div className="text-6xl animate-bounce">
              {companion.emoji}
            </div>
          </div>
        </div>

        {/* Daily Challenge Section - Cute */}
        <div>
          <Link to={ROUTES.QUIZ_SESSION('daily')}>
            <div className="bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-20 text-6xl">✨</div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-white/90 text-xs font-bold">Daily Challenge</p>
                  <h3 className="text-2xl font-black text-white">
                    {dailyChallenge.title}
                  </h3>
                  <p className="text-sm text-white/80 font-semibold mt-1">{dailyChallenge.description}</p>
                </div>
                <div className="text-4xl animate-bounce">
                  {dailyChallenge.emoji}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* AI Assistant Section - Cute */}
        <div>
          <Link to={ROUTES.AI_ASSISTANT}>
            <div className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-20 text-6xl">✨</div>
              
              <div className="relative z-10 flex items-center gap-3">
                <div className="text-5xl">🧚</div>
                <div>
                  <p className="text-white/90 text-xs font-bold">AI Tutor</p>
                  <h3 className="text-xl font-black text-white">Need Help?</h3>
                  <p className="text-sm text-white/80 font-semibold">Ask anything! 💡</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Access Section - Cute */}
        <div>
          <h2 className="text-lg font-bold text-purple-900 mb-3">📚 Quick Access</h2>
          <div className="grid grid-cols-3 gap-3">
            {quickAccessSubjects.map((subject) => (
              <Link
                key={subject.id}
                to={ROUTES.SUBJECT_DETAIL(subject.id)}
                className={`${subject.color} rounded-2xl p-3 text-center transition-all active:scale-95 shadow-md hover:shadow-lg relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-4xl mb-1">{subject.emoji}</div>
                  <div className="text-xs font-bold text-gray-800">{subject.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}