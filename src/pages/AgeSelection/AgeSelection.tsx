import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/config/routes';
import { auth } from '@/config/firebase';
import { updateAgeGroup } from '@/services/firestore';

interface AgeGroup {
  id: string;
  range: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  features: string[];
}

const ageGroups: AgeGroup[] = [
  {
    id: '8-10',
    range: '8-10',
    title: 'Young Explorers',
    description: 'Perfect for curious minds just starting their learning journey!',
    emoji: '🌟',
    color: 'from-pink-400 to-purple-500',
    features: ['Basic concepts', 'Fun games', 'Simple quizzes', 'Colorful interface']
  },
  {
    id: '11-13',
    range: '11-13',
    title: 'Smart Learners',
    description: 'Ready for more challenging content and deeper understanding!',
    emoji: '🚀',
    color: 'from-blue-400 to-cyan-500',
    features: ['Advanced topics', 'Critical thinking', 'Project-based learning', 'Peer challenges']
  },
  {
    id: '14-16',
    range: '14-16',
    title: 'Future Leaders',
    description: 'Preparing for advanced studies and real-world applications!',
    emoji: '🎓',
    color: 'from-green-400 to-teal-500',
    features: ['Complex problems', 'Research skills', 'Career guidance', 'Advanced analytics']
  }
];

export default function AgeSelection() {
  const [selectedAge, setSelectedAge] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAgeSelect = (ageGroupId: string) => {
    setSelectedAge(ageGroupId);
  };

  const handleContinue = async () => {
    if (!selectedAge) return;
    setIsLoading(true);

    // Save to localStorage
    localStorage.setItem('userAgeGroup', selectedAge);

    // Save to Firestore if user is logged in
    const user = auth.currentUser;
    if (user) {
      await updateAgeGroup(user.uid, selectedAge);
    }

    navigate(ROUTES.HOME);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Choose Your Learning Level
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your age group to get personalized content that matches your learning style and abilities!
          </p>
        </div>

        {/* Age Group Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {ageGroups.map((group) => (
            <div
              key={group.id}
              onClick={() => handleAgeSelect(group.id)}
              className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedAge === group.id 
                  ? 'ring-4 ring-blue-400 ring-opacity-50 scale-105' 
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full">
                {/* Age Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${group.color} text-white font-bold text-lg mb-4`}>
                  <span className="text-2xl mr-2">{group.emoji}</span>
                  Ages {group.range}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">What you'll get:</h4>
                  {group.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Selection Indicator */}
                {selectedAge === group.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedAge || isLoading}
            className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all transform ${
              selectedAge && !isLoading
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Setting up your learning journey...
              </div>
            ) : (
              <>
                Continue to EduQuest 🚀
              </>
            )}
          </button>
          
          {!selectedAge && (
            <p className="text-sm text-gray-500 mt-3">
              Please select an age group to continue
            </p>
          )}
        </div>

        {/* Fun Facts */}
        <div className="mt-12 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🎉 Fun Fact!</h3>
            <p className="text-gray-600">
              EduQuest adapts to your learning style with personalized quizzes, interactive games, 
              and progress tracking designed specifically for your age group!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}