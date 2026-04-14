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
  try {
    const systemPrompt = `You are EduQuest AI Tutor for children aged ${ageGroup}. Answer ANY question directly and helpfully. Use simple words, add emojis, keep answers to 3-4 sentences. Always respond in the same language the child uses (English/Hindi/Marathi).`;

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
          ...conversationHistory.slice(-6),
          { role: 'user', content: userMessage }
        ],
        max_tokens: 200,
        temperature: 0.7
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data.choices[0].message.content;
    }

    throw new Error(`API error: ${response.status}`);

  } catch (error) {
    console.error('ChatGPT error:', error);
    return `Sorry, I'm having trouble connecting right now. Please try again! 🤖`;
  }
};