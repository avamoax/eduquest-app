import { Layout } from '@/components/layout';
import { useState } from 'react';

interface Pet {
  id: string;
  name: string;
  emoji: string;
  rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';
  levelRequired: number;
  unlocked: boolean;
  description: string;
  backgroundColor: string;
  borderColor: string;
}

// 8 Adorable Pets for Kids to Collect!
const pets: Pet[] = [
  {
    id: '1',
    name: 'Buddy',
    emoji: '🐶',
    rarity: 'COMMON',
    levelRequired: 1,
    unlocked: true,
    description: 'Your loyal learning companion! Buddy loves to study with you.',
    backgroundColor: 'bg-orange-100',
    borderColor: 'border-orange-300',
  },
  {
    id: '2',
    name: 'Whiskers',
    emoji: '🐱',
    rarity: 'COMMON',
    levelRequired: 3,
    unlocked: false,
    description: 'A curious cat who purrs when you get answers right!',
    backgroundColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
  },
  {
    id: '3',
    name: 'Hoppy',
    emoji: '🐰',
    rarity: 'COMMON',
    levelRequired: 5,
    unlocked: false,
    description: 'This energetic bunny hops with joy for every correct answer!',
    backgroundColor: 'bg-green-100',
    borderColor: 'border-green-300',
  },
  {
    id: '4',
    name: 'Splash',
    emoji: '🐠',
    rarity: 'RARE',
    levelRequired: 8,
    unlocked: false,
    description: 'A colorful fish who swims happily in the sea of knowledge!',
    backgroundColor: 'bg-blue-100',
    borderColor: 'border-blue-300',
  },
  {
    id: '5',
    name: 'Chirpy',
    emoji: '🐦',
    rarity: 'RARE',
    levelRequired: 12,
    unlocked: false,
    description: 'This cheerful bird sings beautiful songs when you learn new things!',
    backgroundColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
  },
  {
    id: '6',
    name: 'Panda',
    emoji: '🐼',
    rarity: 'EPIC',
    levelRequired: 18,
    unlocked: false,
    description: 'A wise panda who teaches you the importance of balance in learning!',
    backgroundColor: 'bg-gray-100',
    borderColor: 'border-gray-400',
  },
  {
    id: '7',
    name: 'Sparkle',
    emoji: '🦄',
    rarity: 'EPIC',
    levelRequired: 25,
    unlocked: false,
    description: 'A magical unicorn that brings wonder and creativity to your studies!',
    backgroundColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
  },
  {
    id: '8',
    name: 'Roary',
    emoji: '🦁',
    rarity: 'LEGENDARY',
    levelRequired: 35,
    unlocked: false,
    description: 'The king of learning! Roary roars with pride for your achievements!',
    backgroundColor: 'bg-amber-100',
    borderColor: 'border-amber-400',
  },
];

const rarityColors = {
  COMMON: 'text-green-600 bg-green-100',
  RARE: 'text-blue-600 bg-blue-100',
  EPIC: 'text-purple-600 bg-purple-100',
  LEGENDARY: 'text-yellow-600 bg-yellow-100',
};

const rarityGlow = {
  COMMON: 'shadow-green-200',
  RARE: 'shadow-blue-200',
  EPIC: 'shadow-purple-200',
  LEGENDARY: 'shadow-yellow-200',
};

export default function Pets() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [currentLevel] = useState(1); // This would come from user progress
  
  const unlockedPets = pets.filter(pet => pet.levelRequired <= currentLevel);
  const currentPet = unlockedPets[0] || pets[0];

  const handlePetSelect = (pet: Pet) => {
    if (pet.levelRequired <= currentLevel) {
      setSelectedPet(pet);
    }
  };

  const closeModal = () => {
    setSelectedPet(null);
  };

  return (
    <Layout>
      <div className="p-4 space-y-6 pb-20">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            🐾 Pet Collection
          </h1>
          <p className="text-gray-600">Collect adorable pets as you level up!</p>
          <div className="mt-2 inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
            <span className="text-blue-600 font-semibold">Level {currentLevel}</span>
            <span className="text-blue-500">•</span>
            <span className="text-blue-600">{unlockedPets.length}/{pets.length} pets unlocked</span>
          </div>
        </div>

        {/* Current Pet Showcase */}
        <div className={`${currentPet.backgroundColor} ${currentPet.borderColor} border-2 rounded-3xl p-6 shadow-lg relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="text-center relative z-10">
            <div className="text-8xl mb-4 animate-bounce">{currentPet.emoji}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentPet.name}</h2>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${rarityColors[currentPet.rarity]}`}>
              {currentPet.rarity}
            </div>
            <p className="text-gray-700 mt-3 text-sm">{currentPet.description}</p>
          </div>
        </div>

        {/* Pet Collection Grid */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>🏆</span>
            Your Pet Collection
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {pets.map((pet) => {
              const isUnlocked = pet.levelRequired <= currentLevel;
              const isComingSoon = pet.levelRequired > currentLevel;
              
              return (
                <div
                  key={pet.id}
                  onClick={() => handlePetSelect(pet)}
                  className={`
                    ${isUnlocked ? pet.backgroundColor : 'bg-gray-100'} 
                    ${isUnlocked ? pet.borderColor : 'border-gray-300'}
                    border-2 rounded-2xl p-4 text-center transition-all duration-300 cursor-pointer
                    ${isUnlocked ? 'hover:scale-105 hover:shadow-lg' : 'opacity-60'}
                    ${isUnlocked ? `hover:${rarityGlow[pet.rarity]}` : ''}
                    relative overflow-hidden
                  `}
                >
                  {/* Rarity Glow Effect */}
                  {isUnlocked && (
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl`}></div>
                  )}
                  
                  <div className="relative z-10">
                    {/* Pet Emoji */}
                    <div className={`text-5xl mb-3 ${isUnlocked ? 'animate-pulse' : 'grayscale'}`}>
                      {isUnlocked ? pet.emoji : '🔒'}
                    </div>
                    
                    {/* Pet Name */}
                    <h3 className="font-bold text-gray-800 mb-1">
                      {isUnlocked ? pet.name : '???'}
                    </h3>
                    
                    {/* Rarity Badge */}
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mb-2 ${
                      isUnlocked ? rarityColors[pet.rarity] : 'text-gray-500 bg-gray-200'
                    }`}>
                      {pet.rarity}
                    </div>
                    
                    {/* Unlock Requirement */}
                    {isComingSoon && (
                      <div className="text-xs text-gray-500">
                        Unlock at Level {pet.levelRequired}
                      </div>
                    )}
                    
                    {/* Unlocked Badge */}
                    {isUnlocked && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📈</span>
            Level Up Progress
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current Level</span>
              <span className="font-bold text-blue-600">Level {currentLevel}</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '20%' }}></div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Keep learning to unlock more pets!</span>
              <span className="text-gray-500">Next: Level {currentLevel + 1}</span>
            </div>
          </div>
        </div>

        {/* Next Pet Preview */}
        {currentLevel < 35 && (
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-200">
            <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
              <span>🎯</span>
              Next Pet to Unlock
            </h3>
            
            {(() => {
              const nextPet = pets.find(pet => pet.levelRequired > currentLevel);
              return nextPet ? (
                <div className="flex items-center gap-4">
                  <div className="text-4xl opacity-50">{nextPet.emoji}</div>
                  <div>
                    <h4 className="font-bold text-purple-800">{nextPet.name}</h4>
                    <p className="text-purple-600 text-sm">Unlock at Level {nextPet.levelRequired}</p>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mt-1 ${rarityColors[nextPet.rarity]}`}>
                      {nextPet.rarity}
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        )}
      </div>

      {/* Pet Detail Modal */}
      {selectedPet && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div 
            className={`${selectedPet.backgroundColor} ${selectedPet.borderColor} border-2 rounded-3xl p-6 max-w-sm w-full shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-8xl mb-4 animate-bounce">{selectedPet.emoji}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedPet.name}</h2>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 ${rarityColors[selectedPet.rarity]}`}>
                {selectedPet.rarity}
              </div>
              <p className="text-gray-700 mb-6">{selectedPet.description}</p>
              
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Unlocked at:</span>
                  <span className="font-semibold">Level {selectedPet.levelRequired}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rarity:</span>
                  <span className="font-semibold">{selectedPet.rarity}</span>
                </div>
              </div>
              
              <button
                onClick={closeModal}
                className="w-full bg-white/80 hover:bg-white text-gray-800 font-semibold py-3 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}