import { useState, useEffect } from 'react';

interface RobotHelperProps {
  mood?: 'happy' | 'excited' | 'thinking' | 'encouraging' | 'celebrating' | 'angry';
  message?: string;
  showHint?: boolean;
  onHintClick?: () => void;
  variant?: 'default' | 'quiz-mascot';
}

export default function RobotHelper({ 
  mood = 'happy', 
  message,
  showHint = false,
  onHintClick,
  variant = 'default',
}: RobotHelperProps) {
  const [isTalking, setIsTalking] = useState(false);

  // Talking animation when message changes
  useEffect(() => {
    if (message) {
      setIsTalking(true);
      const timer = setTimeout(() => setIsTalking(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Get robot character and expression based on mood + variant
  const getRobotDisplay = () => {
    if (variant === 'quiz-mascot') {
      const moodKey = mood === 'celebrating' || mood === 'excited' ? 'celebrating' : 'happy';
      const imageMap: Record<'happy' | 'celebrating', string> = {
        happy: '/mascots/robot-happy.svg',
        celebrating: '/mascots/robot-heart.svg',
      };

      return {
        type: 'image' as const,
        src: imageMap[moodKey],
        emoji: moodKey === 'celebrating' ? '✨' : '💙',
      };
    }

    switch (mood) {
      case 'excited':
        return {
          type: 'emoji' as const,
          robot: '🤖',
          expression: '😃',
          emoji: '✨',
        };
      case 'thinking':
        return {
          type: 'emoji' as const,
          robot: '🤖',
          expression: '🤔',
          emoji: '💭',
        };
      case 'angry':
        return {
          type: 'emoji' as const,
          robot: '🤖',
          expression: '😡',
          emoji: '⭐',
        };
      case 'celebrating':
        return {
          type: 'emoji' as const,
          robot: '🤖',
          expression: '🎉',
          emoji: '⭐',
        };
      default: // happy (and encouraging uses same as happy)
        return {
          type: 'emoji' as const,
          robot: '🤖',
          expression: '😊',
          emoji: '💙',
        };
    }
  };

  const display = getRobotDisplay();
  const isImage = display.type === 'image';
  const containerClass = isImage
    ? 'relative p-0 shadow-none'
    : 'relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-6 shadow-2xl border-4 border-white';

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Speech Bubble */}
      {message && (
        <div className="absolute bottom-full right-0 mb-4 animate-scale-in">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs relative border-4 border-blue-200">
            <p className="text-sm font-bold text-gray-800">{message}</p>
            {/* Tail */}
            <div className="absolute -bottom-4 right-8">
              <div className="w-8 h-8 bg-white transform rotate-45 border-r-4 border-b-4 border-blue-200" />
            </div>
          </div>
        </div>
      )}

      {/* Robot Character */}
      <div className={`relative ${isTalking ? 'animate-bounce' : 'animate-float'}`}>
        {/* Main Robot Container */}
        <div className={containerClass}>
          {!isImage && (
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-3xl opacity-50 blur-xl" />
          )}
          
          {/* Robot Body */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            {display.type === 'image' ? (
              <>
                <img
                  src={display.src}
                  alt="Quiz mascot"
                  className="w-44 h-44 object-contain drop-shadow-2xl animate-scale-in"
                />
                <div className="text-3xl animate-pulse mt-1">{display.emoji}</div>
              </>
            ) : (
              <>
                {/* Antenna */}
                <div className="flex justify-center mb-2">
                  <div className="w-1 h-6 bg-blue-400 rounded-full" />
                  <div className="absolute -top-2">
                    <span className="text-2xl animate-pulse">💡</span>
                  </div>
                </div>

                {/* Robot Face - Large Emoji */}
                <div className="text-7xl filter drop-shadow-2xl transform transition-all duration-300 hover:scale-110">
                  {display.robot}
                </div>

                {/* Expression Overlay */}
                <div className="absolute top-12 text-4xl animate-bounce">
                  {display.expression}
                </div>

                {/* Heart/Emoji on chest */}
                <div className="text-3xl animate-pulse mt-2">
                  {display.emoji}
                </div>
              </>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-2 right-2 text-xl opacity-70">✨</div>
          <div className="absolute bottom-2 left-2 text-xl opacity-70">⭐</div>
        </div>

        {/* Hint Button */}
        {showHint && (
          <button
            onClick={onHintClick}
            className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 hover:from-yellow-500 hover:via-orange-500 hover:to-pink-500 text-white font-black px-6 py-3 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 text-sm whitespace-nowrap border-4 border-white animate-pulse"
          >
            💡 Need Help?
          </button>
        )}
      </div>
    </div>
  );
}
