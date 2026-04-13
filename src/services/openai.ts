// OpenAI API Service for ChatGPT Integration

interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export class OpenAIService {
  private apiKey: string;
  private baseURL = 'https://api.openai.com/v1/chat/completions';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getChatResponse(userMessage: string): Promise<string> {
    try {
      const messages: OpenAIMessage[] = [
        {
          role: 'system',
          content: `You are EduBot, a friendly AI tutor for kids aged 8-12. Your responses should be:
- Educational and age-appropriate
- Fun and engaging with emojis
- Under 200 words
- Encouraging and positive
- Safe for children
- Include examples when explaining concepts
- Use simple language they can understand

Always try to teach something while answering their question. If they ask something inappropriate, gently redirect to educational topics.`
        },
        {
          role: 'user',
          content: userMessage
        }
      ];

      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 300,
          temperature: 0.7,
          presence_penalty: 0.1,
          frequency_penalty: 0.1
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data: OpenAIResponse = await response.json();
      return data.choices[0]?.message?.content || 'I had trouble understanding that. Could you ask me something else?';

    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  }
}

// Environment variable helper
export const getOpenAIApiKey = (): string | null => {
  // Try different environment variable names
  return (
    process.env.REACT_APP_OPENAI_API_KEY ||
    process.env.VITE_OPENAI_API_KEY ||
    process.env.OPENAI_API_KEY ||
    null
  );
};

// Create OpenAI service instance
export const createOpenAIService = (): OpenAIService | null => {
  const apiKey = getOpenAIApiKey();
  if (!apiKey) {
    console.warn('OpenAI API key not found. Using fallback responses.');
    return null;
  }
  return new OpenAIService(apiKey);
};