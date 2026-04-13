import { useState, useRef, useEffect } from 'react';
import { askChatGPT, ChatMessage } from '@/services/openai';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface AIVideoCallProps {
  onClose?: () => void;
}

interface Conversation {
  id: string;
  title: string;
  createdAt: Date;
}

export default function AIVideoCall({ onClose }: AIVideoCallProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [usingChatGPT, setUsingChatGPT] = useState(true);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI response function - uses real ChatGPT
  const getAIResponse = async (question: string): Promise<string> => {
    const ageGroup = localStorage.getItem('userAgeGroup') || '8-10';
    const response = await askChatGPT(question, ageGroup, chatHistory);
    // Update conversation history
    setChatHistory(prev => [
      ...prev,
      { role: 'user', content: question },
      { role: 'assistant', content: response }
    ]);
    return response;
  };



  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    const userQuestion = inputValue;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: userQuestion,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get real AI response
      const aiResponse = await getAIResponse(userQuestion);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      // Fallback response if AI fails
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "I'm having trouble connecting right now, but I'm here to help! Try asking me about math, science, or English topics! 🤖✨",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      const title = messages[0].content.substring(0, 30) + (messages[0].content.length > 30 ? '...' : '');
      setConversations([...conversations, { id: Date.now().toString(), title, createdAt: new Date() }]);
      setMessages([]);
    }
  };

  return (
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-gray-900 text-white flex flex-col overflow-hidden`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h1 className="font-bold text-lg">EduQuest AI</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* New Chat Button */}
        <button
          onClick={handleNewChat}
          className="m-4 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New chat
        </button>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto px-4 space-y-2">
          {conversations.length > 0 && (
            <>
              <p className="text-xs font-bold text-gray-500 uppercase mt-4 mb-2">Recent</p>
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  className="w-full text-left p-3 hover:bg-gray-800 rounded text-sm text-gray-300 truncate transition-colors"
                >
                  {conv.title}
                </button>
              ))}
            </>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-700 space-y-2">
          <button className="w-full p-2 hover:bg-gray-800 rounded flex items-center gap-2 text-sm transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="w-full p-2 hover:bg-gray-800 rounded flex items-center gap-2 text-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Close
            </button>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 border-b border-gray-200 flex items-center px-6 justify-between bg-gray-50">
          <div className="flex items-center gap-3">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-200 rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            <h1 className="text-xl font-semibold text-gray-800">EduQuest Assistant</h1>
            {usingChatGPT && (
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                🤖 ChatGPT Powered
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-500">
              {usingChatGPT ? '🟢 ChatGPT Active' : '🟡 Smart Mode'}
            </div>
            <button className="p-2 hover:bg-gray-200 rounded transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-4xl mx-auto">
                  🤖
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">How can I help you?</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl">
                I'm your AI Learning Assistant. Ask me anything about math, science, writing, history, or get homework help
              </p>
              
              {!usingChatGPT && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Want even smarter responses?</strong> Add your OpenAI API key to enable ChatGPT! 
                    Check the <code>CHATGPT_SETUP.md</code> file for instructions.
                  </p>
                </div>
              )}
              
              {/* Quick Suggestions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
                {[
                  { icon: '📚', title: 'Explain concepts', desc: 'Help me understand algebra' },
                  { icon: '🔬', title: 'Science help', desc: 'How does photosynthesis work?' },
                  { icon: '✍️', title: 'Writing help', desc: 'Check my essay grammar' },
                  { icon: '🧮', title: 'Solve problems', desc: 'What is 15 × 8?' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputValue(item.desc);
                    }}
                    className="text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <p className="font-semibold text-gray-900">{item.icon} {item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.type === 'ai' && (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                  🤖
                </div>
              )}
              <div
                className={`max-w-3xl px-4 py-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-900 rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                🤖
              </div>
              <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-gray-50 border-t border-gray-200 p-6">
          <form onSubmit={handleSendMessage} className="flex gap-3 max-w-4xl mx-auto">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Message EduQuest..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            EduQuest AI can make mistakes. Always double-check important information.
          </p>
        </div>
      </div>
    </div>
  );
}