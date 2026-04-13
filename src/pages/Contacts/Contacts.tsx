import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contacts() {
  const navigate = useNavigate();
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);

  // Mock data - contacts who have the app
  const contactsOnApp = [
    {
      id: 1,
      name: 'Sarah Johnson',
      username: '@sarah_j',
      avatar: '👧🏻',
      mutualFriends: 5,
      streak: 45,
    },
    {
      id: 2,
      name: 'Vedant Kumar',
      username: '@vedant_k',
      avatar: '🧑',
      mutualFriends: 3,
      streak: 120,
    },
    {
      id: 3,
      name: 'Priya Sharma',
      username: '@priya_s',
      avatar: '👩',
      mutualFriends: 8,
      streak: 67,
    },
    {
      id: 4,
      name: 'Alex Chen',
      username: '@alex_c',
      avatar: '👦',
      mutualFriends: 2,
      streak: 89,
    },
    {
      id: 5,
      name: 'Maya Patel',
      username: '@maya_p',
      avatar: '👧🏽',
      mutualFriends: 6,
      streak: 34,
    },
    {
      id: 6,
      name: 'Rahul Singh',
      username: '@rahul_s',
      avatar: '🧑🏽',
      mutualFriends: 4,
      streak: 156,
    },
  ];

  const handleFollow = (userId: number) => {
    if (followedUsers.includes(userId)) {
      setFollowedUsers(followedUsers.filter((id) => id !== userId));
    } else {
      setFollowedUsers([...followedUsers, userId]);
    }
  };

  const handleFollowAll = () => {
    const allUserIds = contactsOnApp.map((contact) => contact.id);
    setFollowedUsers(allUserIds);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">Contacts on EduQuest</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 pb-20">
        {/* Header with Follow All Button */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-600">
            <span className="font-bold text-gray-900">{contactsOnApp.length}</span> contacts on EduQuest
          </p>

          <button
            onClick={handleFollowAll}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span className="text-lg">✨</span>
            <span>Follow All</span>
          </button>
        </div>

        {/* Contacts List */}
        <div className="space-y-3">
          {contactsOnApp.map((contact) => {
            const isFollowed = followedUsers.includes(contact.id);
            return (
              <div
                key={contact.id}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                    {contact.avatar}
                  </div>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg truncate">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">{contact.username}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span>👥</span>
                        <span>{contact.mutualFriends} mutual</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-orange-600 font-semibold">
                        <span>🔥</span>
                        <span>{contact.streak} day streak</span>
                      </div>
                    </div>
                  </div>

                  {/* Follow Button */}
                  <button
                    onClick={() => handleFollow(contact.id)}
                    className={`px-6 py-2 rounded-xl font-bold transition-all flex-shrink-0 ${
                      isFollowed
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {isFollowed ? 'Following' : 'Follow'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State (if no contacts) */}
        {contactsOnApp.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No contacts on EduQuest yet</h3>
            <p className="text-gray-600">
              Invite your friends to join EduQuest and learn together!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
