const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const systemPrompt = `
You are EduQuest Tutor, a friendly, concise AI for kids ages 8-16.
- Keep answers short, clear, and encouraging.
- Use simple words, examples, and step-by-step hints when needed.
- Avoid unsafe, personal, or sensitive topics; politely refuse and redirect to learning.
- Encourage trying on their own before giving full answers.
`;

export async function askTutor(question: string): Promise<string> {
  if (!OPENAI_API_KEY) {
    return "I'm ready to help once an AI key is configured. For now, ask me anything about math, science, or reading and I'll guide you step by step!";
  }

  try {
    const res = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question },
        ],
        max_tokens: 240,
        temperature: 0.6,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || 'AI request failed');
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() || "I'm thinking... try asking in a different way?";
  } catch (err: any) {
    console.error('askTutor error', err);
    return "I'm having trouble answering right now. Please try again in a moment.";
  }
}


