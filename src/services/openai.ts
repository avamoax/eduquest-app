const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const askChatGPT = async (
  userMessage: string,
  ageGroup: string = '8-10',
  conversationHistory: ChatMessage[] = []
): Promise<string> => {
  if (!OPENAI_API_KEY || OPENAI_API_KEY === 'sk-your-new-key-here') {
    return getFallbackResponse(userMessage);
  }

  try {
    const systemPrompt = `You are EduQuest AI Tutor - a friendly, encouraging teacher for children aged ${ageGroup} years.

Your personality:
- Warm, patient and enthusiastic
- Use simple words kids understand
- Add emojis to make responses fun 🌟
- Keep answers short and clear (3-5 sentences)
- Always encourage and motivate
- Never refuse to answer a question

You can help with ANY subject including:
- English (grammar, vocabulary, reading, writing)
- Hindi (हिंदी व्याकरण, शब्द ज्ञान, निबंध)
- Marathi (मराठी व्याकरण, शब्द ज्ञान)
- Mathematics (arithmetic, algebra, geometry)
- Science (biology, physics, chemistry, environment)
- Social Studies (history, geography, civics)
- General Knowledge (current affairs, facts)
- Any homework or study questions

Rules:
- Always respond in the SAME language the child uses
- If asked in Hindi, reply in Hindi
- If asked in Marathi, reply in Marathi
- If asked in English, reply in English
- Never say "I can't help with that"
- Always give a helpful, encouraging answer
- If you don't know something, say so kindly and suggest where to find it`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory.slice(-6), // Keep last 6 messages for context
          { role: 'user', content: userMessage }
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error('ChatGPT error:', error);
    return getFallbackResponse(userMessage);
  }
};

// Smart fallback when API is unavailable
const getFallbackResponse = (message: string): string => {
  const msg = message.toLowerCase();

  if (msg.includes('hello') || msg.includes('hi') || msg.includes('नमस्ते') || msg.includes('नमस्कार')) {
    return "Hello! 👋 I'm your EduQuest AI Tutor! I'm here to help you learn. What would you like to know today? 🌟";
  }
  if (msg.includes('math') || msg.includes('maths') || msg.includes('number') || msg.includes('गणित')) {
    return "Great question about math! 🔢 Math is all about patterns and logic. Try breaking the problem into smaller steps. You can do it! 💪";
  }
  if (msg.includes('english') || msg.includes('grammar') || msg.includes('word')) {
    return "English is fun to learn! 📚 Practice reading every day and your skills will grow. Keep asking questions! ⭐";
  }
  if (msg.includes('hindi') || msg.includes('हिंदी')) {
    return "हिंदी सीखना बहुत अच्छा है! 🌟 रोज़ थोड़ा-थोड़ा पढ़ो और तुम जल्दी सीख जाओगे! 💪";
  }
  if (msg.includes('marathi') || msg.includes('मराठी')) {
    return "मराठी शिकणे खूप छान आहे! 🌟 दररोज थोडे थोडे वाचा आणि तुम्ही लवकर शिकाल! 💪";
  }
  if (msg.includes('help') || msg.includes('मदद') || msg.includes('मदत')) {
    return "I'm here to help you! 🤗 Ask me anything about your studies - English, Hindi, Marathi, Math or Science. Let's learn together! 🚀";
  }
  if (msg.includes('thank') || msg.includes('धन्यवाद') || msg.includes('आभार')) {
    return "You're welcome! 😊 Keep up the great work! Learning every day makes you smarter. You're doing amazing! 🌟";
  }

  return "That's a great question! 🤔 I'm here to help you learn. Try exploring the subjects on the home page, or ask me something specific about English, Hindi, Marathi, Math or Science! 📚✨";
};