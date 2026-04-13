import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from '@/components/layout';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

interface Story {
  id: string;
  title: string;
  preview: string;
  fullStory: string;
  image: string;
  readTime: string;
}

export default function SubjectContent() {
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  // Subject configuration
  const subjects: Record<string, { name: string; emoji: string; color: string }> = {
    english: { name: 'English', emoji: '📚', color: 'from-pink-400 to-pink-600' },
    hindi: { name: 'Hindi', emoji: '🇮🇳', color: 'from-orange-400 to-orange-600' },
    marathi: { name: 'Marathi', emoji: '📝', color: 'from-yellow-400 to-yellow-600' },
    maths: { name: 'Maths', emoji: '🔢', color: 'from-blue-400 to-blue-600' },
    science: { name: 'Science', emoji: '🔬', color: 'from-green-400 to-green-600' },
    reading: { name: 'Reading', emoji: '📖', color: 'from-purple-400 to-purple-600' },
  };

  const currentSubject = subjects[subjectId || 'english'];

  // Sample videos
  const videos: Video[] = [
    {
      id: '1',
      title: `${currentSubject.name} Basics - Lesson 1`,
      thumbnail: '🎬',
      duration: '5:30',
      views: '1.2K',
    },
    {
      id: '2',
      title: `Fun with ${currentSubject.name}`,
      thumbnail: '🎥',
      duration: '8:15',
      views: '856',
    },
    {
      id: '3',
      title: `${currentSubject.name} Practice`,
      thumbnail: '📹',
      duration: '6:45',
      views: '2.1K',
    },
  ];

  // Sample stories (for reading subject)
  const stories: Story[] = [
    {
      id: '1',
      title: 'The Magical Garden',
      preview: 'Once upon a time, there was a little girl named Lily who discovered a secret garden behind her house. The garden was full of colorful flowers that could talk...',
      fullStory: 'Once upon a time, there was a little girl named Lily who discovered a secret garden behind her house. The garden was full of colorful flowers that could talk and sing beautiful songs. Every day after school, Lily would visit the garden and listen to the flowers tell amazing stories. One day, the oldest rose told her about a hidden treasure buried under the big oak tree. Lily dug carefully and found a golden key. The key opened a tiny door in the tree trunk, revealing a room full of magical books. Each book could transport her to different worlds. Lily spent her summer reading and going on incredible adventures. She learned that the real treasure was not gold, but the joy of reading and imagination.',
      image: '🌺',
      readTime: '3 min',
    },
    {
      id: '2',
      title: 'The Brave Little Robot',
      preview: 'In a city of the future, there lived a small robot named Bolt. Unlike other robots, Bolt was curious about everything...',
      fullStory: 'In a city of the future, there lived a small robot named Bolt. Unlike other robots, Bolt was curious about everything. One day, the city\'s power plant broke down, and all the lights went out. The big robots tried to fix it but couldn\'t reach the tiny control panel deep inside. Bolt volunteered to help. He was small enough to squeeze through the narrow passages. Inside, he found the problem - a loose wire. Using his tiny tools, Bolt reconnected the wire. The lights came back on! Everyone cheered for the brave little robot. Bolt learned that being small doesn\'t mean you can\'t do big things. His courage and determination saved the entire city.',
      image: '🤖',
      readTime: '4 min',
    },
    {
      id: '3',
      title: 'The Friendly Dragon',
      preview: 'High up in the mountains lived a dragon named Spark. Everyone was afraid of him because he was big and could breathe fire...',
      fullStory: 'High up in the mountains lived a dragon named Spark. Everyone was afraid of him because he was big and could breathe fire. But Spark was actually very lonely and kind. He loved to bake cookies with his fire breath! One day, a little boy got lost in the mountains. Spark found him and instead of being scary, he offered the boy warm cookies and hot chocolate. The boy wasn\'t afraid at all. They became best friends. The boy told everyone in the village how nice Spark was. Soon, children would visit Spark every weekend for cookie parties. Spark was never lonely again, and everyone learned not to judge others by their appearance.',
      image: '🐉',
      readTime: '5 min',
    },
  ];

  const toggleStory = (storyId: string) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
        {/* Header */}
        <div className={`bg-gradient-to-r ${currentSubject.color} shadow-lg`}>
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-5xl">{currentSubject.emoji}</span>
              <h1 className="text-2xl font-bold text-white">{currentSubject.name}</h1>
            </div>
            <div className="w-10" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-w-4xl mx-auto space-y-8">
          {/* Videos Section */}
          {subjectId !== 'reading' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                🎬 Video Lessons
              </h2>
              <div className="grid gap-4">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4 p-4">
                      {/* Thumbnail */}
                      <div className="w-32 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-5xl flex-shrink-0">
                        {video.thumbnail}
                      </div>
                      
                      {/* Video Info */}
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{video.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            ⏱️ {video.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            👁️ {video.views} views
                          </span>
                        </div>
                      </div>

                      {/* Play Button */}
                      <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
                        ▶️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stories Section (for Reading subject) */}
          {subjectId === 'reading' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                📚 Short Stories
              </h2>
              <div className="space-y-6">
                {stories.map((story) => {
                  const isExpanded = expandedStory === story.id;
                  return (
                    <div
                      key={story.id}
                      className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    >
                      {/* Story Header */}
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6">
                        <div className="flex items-center gap-4">
                          <div className="text-6xl">{story.image}</div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.title}</h3>
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              ⏱️ {story.readTime} read
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Story Content */}
                      <div className="p-6">
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                          {isExpanded ? story.fullStory : story.preview}
                        </p>

                        {/* Read More Button */}
                        <button
                          onClick={() => toggleStory(story.id)}
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                        >
                          {isExpanded ? '📖 Show Less' : '📖 Read More'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
