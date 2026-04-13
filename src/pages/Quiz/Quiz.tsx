import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RobotHelper from '@/components/common/RobotHelper';
import { getQuizQuestions, age8Questions } from '@/data/questionBank';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: string;
  emoji: string;
  type: 'multiple-choice' | 'true-false';
}

export default function Quiz() {
  const { subject, topic, level } = useParams<{ subject?: string; topic?: string; level?: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [celebrationEmojis, setCelebrationEmojis] = useState<string[]>([]);
  const [robotMood, setRobotMood] = useState<'happy' | 'excited' | 'thinking' | 'encouraging' | 'celebrating'>('happy');
  const [robotMessage, setRobotMessage] = useState<string>('');
  const [showHint, setShowHint] = useState(false);

  // Mixed daily challenge questions from all subjects
  const dailyChallengeQuestions: Question[] = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      subject: 'Maths',
      emoji: '🔢',
      type: 'multiple-choice',
    },
    {
      id: 2,
      question: 'Pick the noun: dog, run, happy, quickly',
      options: ['dog', 'run', 'happy', 'quickly'],
      correctAnswer: 0,
      subject: 'English',
      emoji: '📚',
      type: 'multiple-choice',
    },
    {
      id: 3,
      question: 'What color is the sky?',
      options: ['🔴 Red', '🔵 Blue', '🟢 Green', '🟡 Yellow'],
      correctAnswer: 1,
      subject: 'Science',
      emoji: '🌈',
      type: 'multiple-choice',
    },
    {
      id: 4,
      question: 'How many legs does a spider have?',
      options: ['6', '8', '10', '12'],
      correctAnswer: 1,
      subject: 'Science',
      emoji: '🕷️',
      type: 'multiple-choice',
    },
    {
      id: 5,
      question: 'Opposite of big:',
      options: ['small', 'huge', 'large', 'tall'],
      correctAnswer: 0,
      subject: 'Vocabulary',
      emoji: '📝',
      type: 'multiple-choice',
    },
    {
      id: 6,
      question: 'Choose the verb:',
      options: ['jump', 'tall', 'happy', 'slow'],
      correctAnswer: 0,
      subject: 'Grammar',
      emoji: '✏️',
      type: 'multiple-choice',
    },
    {
      id: 7,
      question: 'The sun rises in the morning',
      options: ['True ☀️', 'False 🌙'],
      correctAnswer: 0,
      subject: 'Reading',
      emoji: '☀️',
      type: 'true-false',
    },
    {
      id: 8,
      question: 'Which animal says "Meow"?',
      options: ['🐶 Dog', '🐱 Cat', '🐮 Cow', '🐷 Pig'],
      correctAnswer: 1,
      subject: 'Fun',
      emoji: '🐱',
      type: 'multiple-choice',
    },
  ];

  // Load questions based on topic and level
  useEffect(() => {
    if (topic && level) {
      // Load from question bank based on subject
      let loadedQuestions: Question[] = [];
      
      if (subject === 'hindi') {
        // Hindi questions - use topic directly as category
        const hindiQuestions = age8Questions.filter(q => 
          q.subject === "Hindi" && 
          q.category === topic && 
          q.level === (parseInt(level) || 1)
        );
        loadedQuestions = hindiQuestions.slice(0, 5);
      } else if (subject === 'marathi') {
        // Marathi questions - use topic directly as category
        const marathiQuestions = age8Questions.filter(q => 
          q.subject === "Marathi" && 
          q.category === topic && 
          q.level === (parseInt(level) || 1)
        );
        loadedQuestions = marathiQuestions.slice(0, 5);
      } else {
        // English questions - use category mapping
        const categoryMap: Record<string, string> = {
          'grammar': 'Grammar',
          'reading': 'Reading',
          'vocabulary': 'Vocabulary',
          'writing': 'Writing',
        };
        
        const category = categoryMap[topic] || 'Grammar';
        const levelNum = parseInt(level) || 1;
        loadedQuestions = getQuizQuestions(category, 8, levelNum, 5);
      }
      
      setQuestions(loadedQuestions);
    } else {
      // Daily challenge - use mixed questions
      setQuestions(dailyChallengeQuestions);
    }
  }, [topic, level, subject]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Don't render until questions are loaded
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">📚</div>
          <p className="text-xl font-bold text-gray-700">Loading questions...</p>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    setShowHint(false);

    if (correct) {
      setScore(score + 1);
      setRobotMood('celebrating');
      const messages = [
        'Wow! You\'re amazing! 🌟',
        'Perfect! You got it right! 🎉',
        'Brilliant! Keep it up! ⭐',
        'You\'re a superstar! 🏆',
      ];
      setRobotMessage(messages[Math.floor(Math.random() * messages.length)]);
      
      // Show celebration emojis
      const emojis = ['🎉', '⭐', '🌟', '✨', '🎊', '🏆', '👏', '🎈'];
      setCelebrationEmojis(Array(8).fill(0).map(() => emojis[Math.floor(Math.random() * emojis.length)]));
    } else {
      setRobotMood('encouraging');
      const messages = [
        'That\'s okay! Try again next time! 💪',
        'Good try! You\'re learning! 😊',
        'Don\'t worry! Keep going! 🌈',
        'Nice effort! You can do it! ⭐',
      ];
      setRobotMessage(messages[Math.floor(Math.random() * messages.length)]);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setCelebrationEmojis([]);
    setRobotMessage('');
    setShowHint(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setRobotMood('thinking');
        setRobotMessage('Think carefully! You can do it! 🤔');
        setTimeout(() => {
          setShowHint(true);
        }, 3000);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 300);
    }
  };

  const handleHintClick = () => {
    setRobotMood('excited');
    const hints = [
      'Read the question carefully! 📖',
      'Take your time to think! ⏰',
      'Look at all the options! 👀',
      'You know this! Trust yourself! 💪',
    ];
    setRobotMessage(hints[Math.floor(Math.random() * hints.length)]);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowFeedback(false);
    setCelebrationEmojis([]);
  };

  // Results Screen
  if (showResult) {
    const accuracy = Math.round((score / questions.length) * 100);
    const passed = accuracy >= 60;
    const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;

    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-pink-100 to-purple-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center relative overflow-hidden">
          {/* Floating emojis animation */}
          <div className="absolute inset-0 pointer-events-none">
            {['🎉', '⭐', '🌟', '✨', '🎊', '🏆'].map((emoji, i) => (
              <div
                key={i}
                className="absolute text-4xl animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {emoji}
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <div className="text-9xl mb-4 animate-bounce">{passed ? '🎉' : '💪'}</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {passed ? 'Amazing!' : 'Good Try!'}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              You got {score} out of {questions.length} correct!
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3].map((star) => (
                <div
                  key={star}
                  className={`text-6xl transition-all ${
                    star <= stars ? 'scale-100' : 'scale-75 opacity-30'
                  }`}
                >
                  ⭐
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {accuracy}%
              </div>
              <div className="text-gray-700 font-semibold text-lg">Accuracy Score</div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                🔄 Try Again
              </button>
              <button
                onClick={() => {
                  window.location.href = '/home';
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                🏠 Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => {
              window.location.href = '/home';
            }}
            className="p-3 hover:bg-gray-100 rounded-full transition-all transform hover:scale-110 active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-3xl animate-bounce">{currentQuestion.emoji}</span>
            <span className="font-bold text-gray-900 text-lg">{currentQuestion.subject}</span>
          </div>
          <div className="bg-purple-100 px-4 py-2 rounded-full">
            <span className="text-sm font-bold text-purple-600">
              {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-3 bg-gray-200 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-all duration-500 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Celebration Emojis */}
      {celebrationEmojis.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {celebrationEmojis.map((emoji, i) => (
            <div
              key={i}
              className="absolute text-6xl animate-celebration"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-6 max-w-2xl mx-auto pb-32">
        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6 transform transition-all">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4 animate-bounce">{currentQuestion.emoji}</div>
            <h2 className="text-3xl font-bold text-gray-900 leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              
              let buttonClass = 'w-full p-6 rounded-2xl font-bold text-xl text-left transition-all transform border-4 ';
              
              if (showFeedback) {
                if (isCorrect) {
                  buttonClass += 'bg-green-100 border-green-500 text-green-700 scale-105 shadow-xl';
                } else if (isSelected && !isCorrect) {
                  buttonClass += 'bg-red-100 border-red-500 text-red-700 shake';
                } else {
                  buttonClass += 'bg-gray-100 border-gray-300 text-gray-500 opacity-50';
                }
              } else if (isSelected) {
                buttonClass += 'bg-purple-100 border-purple-500 text-purple-700 scale-105';
              } else {
                buttonClass += 'bg-white border-gray-300 text-gray-700 hover:border-purple-400 hover:bg-purple-50 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center font-black text-white text-xl shadow-lg">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                    {showFeedback && isCorrect && (
                      <span className="text-4xl animate-bounce">✓</span>
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <span className="text-4xl animate-shake">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Message */}
        {showFeedback && (
          <div className={`text-center mb-6 p-6 rounded-2xl ${
            isCorrect ? 'bg-green-100' : 'bg-yellow-100'
          } animate-scale-in`}>
            <div className="text-5xl mb-2">{isCorrect ? '🎉' : '💪'}</div>
            <p className="text-2xl font-bold text-gray-900">
              {isCorrect ? 'Awesome! You got it!' : 'Good try! Keep learning!'}
            </p>
          </div>
        )}
      </div>

      {/* Next Button - Fixed at bottom */}
      {showFeedback && (
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
          <button
            onClick={handleNextQuestion}
            className="w-full max-w-2xl mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-bold py-5 rounded-2xl shadow-2xl transform hover:scale-105 active:scale-95 transition-all text-xl"
          >
            {currentQuestionIndex < questions.length - 1 ? '➡️ Next Question' : '🏁 Finish Quiz'}
          </button>
        </div>
      )}

      {/* Robot Helper */}
      <RobotHelper 
        mood={robotMood}
        message={robotMessage}
        showHint={showHint && !showFeedback}
        onHintClick={handleHintClick}
        variant="quiz-mascot"
      />
    </div>
  );
}
