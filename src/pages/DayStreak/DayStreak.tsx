import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DayStreak() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'personal' | 'friends'>('personal');
  const [showFindFriendsModal, setShowFindFriendsModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showStreakFreezeModal, setShowStreakFreezeModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  
  // Calendar state - start with current month
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth()); // 0-11
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  // Mock data - will be replaced with actual data from store/API
  const streakData = {
    currentStreak: 0,
    streakFreezes: 1,
    maxStreakFreezes: 2,
    streakGoal: 300,
    streakMilestones: [250, 275, 300],
    currentMilestone: 0,
    freezeRefillDays: 68,
    gems: 0, // User's gem count - will change based on accuracy/progress
  };

  // Friends data
  const friendSuggestions = [
    { id: 1, name: 'swara shir...', avatar: '👧🏻', status: 'Follows you' },
    { id: 2, name: 'Vedant K', avatar: '🧑', status: 'Followed by SYCS26 Ashi...' },
    { id: 3, name: 'Subh...', avatar: '👦', status: 'Followed by Man...' },
  ];

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get days in month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Calendar navigation
  const goToPreviousMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  // Calendar data
  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const completedDays: number[] = []; // Empty array - no completed days yet

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
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
          <h1 className="text-xl font-bold text-gray-900">Streak</h1>
          <button 
            onClick={() => setShowShareModal(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('personal')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${
              activeTab === 'personal'
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            PERSONAL
            {activeTab === 'personal' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab('friends');
            }}
            className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${
              activeTab === 'friends'
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            FRIENDS
            {activeTab === 'friends' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6 pb-20">
        {activeTab === 'personal' ? (
          <>
            {/* Streak Display */}
            <div className="relative">
              <div className="absolute top-0 right-8 opacity-20">
                <div className="text-9xl">🔥</div>
              </div>
              <div className="relative z-10">
                <div className="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  STREAK SOCIETY
                </div>
                <div className="text-8xl font-bold text-amber-600 mb-2 leading-none">
                  {streakData.currentStreak}
                </div>
                <div className="text-3xl font-semibold text-amber-700">day streak!</div>
              </div>
            </div>

            {/* Streak Freezes */}
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <div className="flex items-center gap-4">
                <div className="text-5xl">❄️</div>
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold mb-1">
                    You only have {streakData.streakFreezes}/{streakData.maxStreakFreezes} Streak Freezes!
                  </p>
                  <button 
                    onClick={() => setShowStreakFreezeModal(true)}
                    className="text-blue-600 font-bold text-sm hover:text-blue-700"
                  >
                    GET MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Streak Calendar */}
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Streak Calendar</h2>
              
              <div className="bg-gray-50 rounded-xl p-4">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-4">
                  <button 
                    onClick={goToPreviousMonth}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-lg font-semibold text-gray-900">
                    {monthNames[selectedMonth]} {selectedYear}
                  </span>
                  <button 
                    onClick={goToNextMonth}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <div key={day} className="text-center text-sm font-semibold text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((day) => {
                    const isCompleted = completedDays.includes(day);
                    return (
                      <div
                        key={day}
                        className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                          isCompleted
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'bg-white text-gray-400'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Streak Goal */}
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Streak Goal</h2>
              
              <div className="bg-gray-50 rounded-xl p-4">
                {/* Progress Bar */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex-1 relative h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-orange-500 rounded-full transition-all"
                      style={{ width: `${(streakData.currentMilestone / streakData.streakGoal) * 100}%` }}
                    />
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm font-medium">
                  {streakData.currentMilestone} / {streakData.streakGoal} DAYS
                </p>
              </div>
            </div>

            {/* Streak Society */}
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Streak Society</h2>
              
              {/* Extra Freeze */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">❄️</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">1 Extra Freeze</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Additional protection for your streak if you miss a day of practice.
                    </p>
                    <p className="text-sm font-semibold">
                      <span className="text-gray-500">REFILLS IN</span>{' '}
                      <span className="text-orange-600">{streakData.freezeRefillDays} DAYS</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 365 Days Achievement */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-start gap-4">
                  <div className="text-5xl opacity-50">🔒</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">365 days</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Reach a streak of 365 days to unlock this reward.
                    </p>
                    <p className="text-sm font-semibold text-gray-400">LOCKED</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Friends Tab Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Find your friends</h2>
              
              {/* Find Friends Options */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setShowFindFriendsModal(false);
                    navigate('/contacts');
                  }}
                  className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                >
                  <div className="text-4xl">📒</div>
                  <span className="text-lg font-semibold text-gray-900">Choose from contacts</span>
                </button>

                <button
                  onClick={() => setShowInviteModal(true)}
                  className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                >
                  <div className="text-4xl">🔍</div>
                  <span className="text-lg font-semibold text-gray-900">Search by name</span>
                </button>

                <button
                  onClick={() => {}}
                  className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                >
                  <div className="text-4xl">🐻</div>
                  <span className="text-lg font-semibold text-gray-900">Share follow link</span>
                </button>
              </div>

              {/* Friend Suggestions */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Friend suggestions</h3>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                    VIEW ALL
                  </button>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2">
                  {friendSuggestions.map((friend) => (
                    <div
                      key={friend.id}
                      className="flex-shrink-0 w-44 bg-white rounded-2xl p-4 shadow-md relative"
                    >
                      <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div className="text-center mb-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-3xl">
                          {friend.avatar}
                        </div>
                        <div className="font-bold text-gray-900 mb-1 truncate">{friend.name}</div>
                        <div className="text-xs text-gray-500 truncate">{friend.status}</div>
                      </div>
                      <button className="w-full bg-blue-500 text-white font-bold py-2 rounded-xl hover:bg-blue-600 transition-colors">
                        FOLLOW
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Find Friends Modal */}
      {showFindFriendsModal && (
        <div className="fixed inset-0 bg-white z-50 animate-slide-up">
          {/* Header */}
          <div className="bg-white shadow-sm sticky top-0 z-10">
            <div className="flex items-center justify-between p-4">
              <button
                onClick={() => {
                  setShowFindFriendsModal(false);
                  setActiveTab('personal');
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Find your friends</h2>

            {/* Find Friends Options */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowFindFriendsModal(false);
                  navigate('/contacts');
                }}
                className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="text-4xl">📒</div>
                <span className="text-lg font-semibold text-gray-900">Choose from contacts</span>
              </button>

              <button
                onClick={() => setShowInviteModal(true)}
                className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="text-4xl">🔍</div>
                <span className="text-lg font-semibold text-gray-900">Search by name</span>
              </button>

              <button
                onClick={() => setShowInviteModal(true)}
                className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="text-4xl">🐻</div>
                <span className="text-lg font-semibold text-gray-900">Share follow link</span>
              </button>
            </div>

            {/* Friend Suggestions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Friend suggestions</h3>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  VIEW ALL
                </button>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {friendSuggestions.map((friend) => (
                  <div
                    key={friend.id}
                    className="flex-shrink-0 w-44 bg-white rounded-2xl p-4 shadow-md relative"
                  >
                    <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-3xl">
                        {friend.avatar}
                      </div>
                      <div className="font-bold text-gray-900 mb-1 truncate">{friend.name}</div>
                      <div className="text-xs text-gray-500 truncate">{friend.status}</div>
                    </div>
                    <button className="w-full bg-blue-500 text-white font-bold py-2 rounded-xl hover:bg-blue-600 transition-colors">
                      FOLLOW
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invite Friends Modal */}
      {showInviteModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setShowInviteModal(false);
            setActiveTab('personal');
          }}
        >
          <div 
            className="bg-white rounded-3xl max-w-md w-full p-6 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setShowInviteModal(false);
                setActiveTab('personal');
              }}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors z-10 cursor-pointer"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Heart Icon */}
            <div className="absolute top-4 left-4 text-2xl">❤️</div>

            {/* Clouds Illustration */}
            <div className="relative h-64 mb-6 flex items-center justify-center">
              <div className="absolute left-8 top-12 text-8xl animate-float">
                ☁️
              </div>
              <div className="absolute right-8 bottom-12 text-8xl animate-float-delayed" style={{ filter: 'hue-rotate(45deg)' }}>
                ☁️
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
                💬✨
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Share the vibe
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-center mb-6">
              It's much more fun with friends. Invite them to try Minj today ✨
            </p>

            {/* Friend Avatars */}
            <div className="flex justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-3xl">
                👧
              </div>
              <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center text-3xl">
                👦🏿
              </div>
              <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center text-3xl">
                👶🏽
              </div>
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-3xl">
                🦸
              </div>
            </div>

            {/* Invite Button */}
            <button
              onClick={() => {
                setShowInviteModal(false);
                setShowFindFriendsModal(true);
              }}
              className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <span className="text-xl">+</span>
              <span>Invite friends</span>
            </button>
          </div>
        </div>
      )}

      {/* Streak Freeze Bottom Sheet Modal */}
      {showStreakFreezeModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          onClick={() => setShowStreakFreezeModal(false)}
        >
          <div 
            className="bg-white rounded-t-3xl w-full max-h-[70vh] animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle Bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Gems Badge */}
              <div className="flex justify-end">
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <span className="text-2xl">💎</span>
                  <span className="text-xl font-bold text-blue-600">{streakData.gems}</span>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  You protected your {streakData.currentStreak} day streak with a{' '}
                  <span className="text-blue-500">Streak Freeze!</span>
                </h2>
              </div>

              {/* Freeze Icons */}
              <div className="flex justify-center items-center gap-8 py-4">
                {/* Active Freeze */}
                <div className="relative">
                  <div className="text-8xl">❄️</div>
                  <div className="absolute -bottom-2 -right-2 text-3xl">✨</div>
                </div>

                {/* Empty Freeze Slot */}
                <div className="w-32 h-32 border-4 border-dashed border-gray-300 rounded-3xl flex items-center justify-center">
                  <span className="text-5xl text-gray-300 font-bold">2</span>
                </div>
              </div>

              {/* Refill Button */}
              <button className="w-full bg-blue-500 text-white font-bold py-4 rounded-2xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-3 text-lg">
                <span>REFILL</span>
                <div className="flex items-center gap-1">
                  <span className="text-2xl">💎</span>
                  <span>200</span>
                </div>
              </button>

              {/* No Thanks Button */}
              <button 
                onClick={() => setShowStreakFreezeModal(false)}
                className="w-full text-blue-500 font-bold py-3 hover:text-blue-600 transition-colors text-lg"
              >
                NO THANKS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Streak Modal */}
      {showShareModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          onClick={() => setShowShareModal(false)}
        >
          <div 
            className="bg-white rounded-t-3xl w-full animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Streak Card Preview */}
            <div className="p-6">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 mb-6 relative overflow-hidden shadow-lg">
                {/* Decorative flame */}
                <div className="absolute top-4 right-4 text-8xl opacity-50">🔥</div>
                
                <div className="relative z-10">
                  <p className="text-orange-600 font-bold text-lg mb-2">I'm on a</p>
                  <div className="text-7xl font-black text-orange-500 mb-2 leading-none" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                    {streakData.currentStreak}
                  </div>
                  <p className="text-orange-600 font-bold text-xl mb-6">
                    day learning<br />streak!
                  </p>
                  <p className="text-green-600 font-bold text-lg">EduQuest</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Share Title */}
              <h3 className="text-center text-gray-500 font-semibold mb-6 uppercase text-sm">
                Share Your Streak
              </h3>

              {/* Share Options */}
              <div className="grid grid-cols-4 gap-6 mb-6">
                {/* WhatsApp */}
                <button
                  onClick={() => {
                    const text = `I'm on a ${streakData.currentStreak} day learning streak on EduQuest! 🔥`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">WhatsApp</span>
                </button>

                {/* Instagram */}
                <button
                  onClick={() => {
                    const text = `I'm on a ${streakData.currentStreak} day learning streak on EduQuest! 🔥`;
                    // Instagram doesn't have direct web share, so we'll use the native share API
                    if (navigator.share) {
                      navigator.share({
                        title: 'My EduQuest Streak',
                        text: text,
                      }).catch(() => {});
                    } else {
                      alert('Please share via Instagram app by saving the image first!');
                    }
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Instagram</span>
                </button>

                {/* Messages */}
                <button
                  onClick={() => {
                    const text = `I'm on a ${streakData.currentStreak} day learning streak on EduQuest! 🔥`;
                    window.open(`sms:?body=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 bg-[#34C759] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.31-3.83-.86l-.27-.15-2.83.48.48-2.83-.15-.27A7.93 7.93 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M8 9h8v2H8zm0 4h6v2H8z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Messages</span>
                </button>

                {/* Messenger */}
                <button
                  onClick={() => {
                    const text = `I'm on a ${streakData.currentStreak} day learning streak on EduQuest! 🔥`;
                    // Try to open Messenger app, fallback to web
                    const messengerUrl = `fb-messenger://share/?link=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`;
                    window.location.href = messengerUrl;
                    // Fallback after a delay
                    setTimeout(() => {
                      window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(window.location.href)}&app_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(window.location.href)}`, '_blank');
                    }, 1000);
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00B2FF] to-[#006AFF] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.13.12.21.28.22.46l.04 1.48c.01.44.49.72.87.51l1.65-.87c.14-.07.3-.1.46-.07.53.1 1.08.16 1.65.16 5.64 0 10.22-4.13 10.22-9.22C20.25 6.13 17.64 2 12 2zm.95 12.3l-2.54-2.7-4.96 2.7 5.45-5.78 2.6 2.7 4.9-2.7-5.45 5.78z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Messenger</span>
                </button>
              </div>

              {/* Additional Options */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                {/* Save Image */}
                <button
                  onClick={async () => {
                    try {
                      // Create canvas to capture the streak card
                      const canvas = document.createElement('canvas');
                      canvas.width = 400;
                      canvas.height = 400;
                      const ctx = canvas.getContext('2d');
                      
                      if (ctx) {
                        // Draw gradient background
                        const gradient = ctx.createLinearGradient(0, 0, 400, 400);
                        gradient.addColorStop(0, '#FFF7ED');
                        gradient.addColorStop(1, '#FEF3C7');
                        ctx.fillStyle = gradient;
                        ctx.fillRect(0, 0, 400, 400);
                        
                        // Draw text
                        ctx.fillStyle = '#EA580C';
                        ctx.font = 'bold 24px Arial';
                        ctx.fillText("I'm on a", 40, 80);
                        
                        ctx.font = 'bold 100px Arial';
                        ctx.fillText(streakData.currentStreak.toString(), 40, 180);
                        
                        ctx.font = 'bold 28px Arial';
                        ctx.fillText('day learning', 40, 230);
                        ctx.fillText('streak!', 40, 270);
                        
                        ctx.fillStyle = '#16A34A';
                        ctx.font = 'bold 24px Arial';
                        ctx.fillText('EduQuest', 40, 340);
                        
                        // Convert to blob and download
                        canvas.toBlob((blob) => {
                          if (blob) {
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `eduquest-streak-${streakData.currentStreak}.png`;
                            a.click();
                            URL.revokeObjectURL(url);
                          }
                        });
                      }
                    } catch (error) {
                      console.error('Error saving image:', error);
                      alert('Could not save image. Please try again.');
                    }
                  }}
                  className="flex flex-col items-center gap-2 py-3"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Save image</span>
                </button>

                {/* More Options */}
                <button
                  onClick={async () => {
                    const shareText = `I'm on a ${streakData.currentStreak} day learning streak on EduQuest! 🔥`;
                    const shareData = {
                      title: 'My EduQuest Streak',
                      text: shareText,
                      url: window.location.href,
                    };
                    
                    // Check if Web Share API is supported
                    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                      try {
                        await navigator.share(shareData);
                      } catch (error: unknown) {
                        // User cancelled or error occurred
                        if (error instanceof Error && error.name !== 'AbortError') {
                          console.error('Error sharing:', error);
                          // Fallback to clipboard
                          try {
                            await navigator.clipboard.writeText(shareText);
                            alert('✓ Text copied to clipboard!');
                          } catch {
                            alert('Unable to share. Please try another method.');
                          }
                        }
                      }
                    } else {
                      // Fallback: copy to clipboard
                      try {
                        await navigator.clipboard.writeText(shareText);
                        alert('✓ Text copied to clipboard! You can now paste it anywhere.');
                      } catch {
                        // If clipboard also fails, show the text
                        prompt('Copy this text to share:', shareText);
                      }
                    }
                  }}
                  className="flex flex-col items-center gap-2 py-3"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform hover:bg-gray-300">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
