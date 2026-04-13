import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from '@/components/common';
import { ROUTES } from '@/config/routes';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-blob animation-delay-4000" />

      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="text-white text-center mb-6">
          <h1 className="text-3xl font-heading font-bold">Welcome to EduQuest</h1>
          <p className="text-white/90">Learn, play, and shine — kawaii style</p>
        </div>

        <Card className="max-w-2xl w-full bg-white/90 backdrop-blur-md border-0 shadow-xl">
          {step === 1 && (
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-56 h-56 mb-4">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="bookGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="100%" stopColor="#FBCFE8" />
                      </linearGradient>
                    </defs>
                    <rect x="30" y="40" width="140" height="110" rx="18" fill="url(#bookGrad)" />
                    <rect x="40" y="50" width="120" height="90" rx="12" fill="#FFFFFF" opacity="0.9" />
                    <circle cx="85" cy="95" r="8" fill="#4B5563" />
                    <circle cx="115" cy="95" r="8" fill="#4B5563" />
                    <path d="M80 120 Q100 130 120 120" stroke="#EF4444" strokeWidth="4" fill="none" />
                    <circle cx="60" cy="70" r="4" fill="#F59E0B" />
                    <circle cx="140" cy="70" r="4" fill="#F59E0B" />
                    <circle cx="100" cy="60" r="3" fill="#8B5CF6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Smiling Book Mascot</h2>
                <p className="text-gray-600">Floating stars, sparkles, and rounded shapes in a dreamy pastel scene.</p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-56 h-56 mb-4">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="kidsGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#BFDBFE" />
                        <stop offset="100%" stopColor="#C7D2FE" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="70" fill="url(#kidsGrad)" />
                    <rect x="55" y="120" width="90" height="14" rx="7" fill="#93C5FD" />
                    <circle cx="75" cy="100" r="18" fill="#FDE68A" />
                    <circle cx="125" cy="100" r="18" fill="#FBCFE8" />
                    <circle cx="70" cy="98" r="3" fill="#4B5563" />
                    <circle cx="80" cy="98" r="3" fill="#4B5563" />
                    <path d="M70 107 Q75 112 80 107" stroke="#EF4444" strokeWidth="3" fill="none" />
                    <circle cx="120" cy="98" r="3" fill="#4B5563" />
                    <circle cx="130" cy="98" r="3" fill="#4B5563" />
                    <path d="M120 107 Q125 112 130 107" stroke="#EF4444" strokeWidth="3" fill="none" />
                    <rect x="90" y="70" width="20" height="14" rx="7" fill="#FFFFFF" />
                  </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Learn with Magic</h2>
                <p className="text-gray-600">Kids learning with floating books and pastel sparkles all around.</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-56 h-56 mb-4">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="rewardGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="100%" stopColor="#C7D2FE" />
                      </linearGradient>
                    </defs>
                    <rect x="40" y="90" width="120" height="60" rx="12" fill="url(#rewardGrad)" />
                    <rect x="50" y="80" width="100" height="20" rx="10" fill="#F59E0B" />
                    <circle cx="70" cy="70" r="6" fill="#F59E0B" />
                    <circle cx="130" cy="70" r="6" fill="#F59E0B" />
                    <circle cx="100" cy="60" r="5" fill="#FDE68A" />
                    <circle cx="85" cy="50" r="3" fill="#FFFFFF" />
                    <circle cx="115" cy="50" r="3" fill="#FFFFFF" />
                    <path d="M60 120 q40 -40 80 0" stroke="#FDE68A" strokeWidth="6" opacity="0.7" />
                    <circle cx="60" cy="140" r="8" fill="#FDE68A" />
                    <circle cx="140" cy="140" r="8" fill="#FDE68A" />
                    <circle cx="100" cy="145" r="10" fill="#F59E0B" />
                  </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Daily Rewards</h2>
                <p className="text-gray-600">Coins, stars, badges, and a glowing treasure chest bursting with light.</p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" onClick={() => navigate(ROUTES.AUTH)}>Skip</Button>
            <div className="flex gap-2">
              {step > 1 && <Button variant="outline" onClick={prev}>Back</Button>}
              {step < 3 ? (
                <Button variant="primary" onClick={next}>Next</Button>
              ) : (
                <Button variant="primary" onClick={() => navigate(ROUTES.HOME)}>Start Learning</Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}