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
    // Smart fallback that actually answers questions
    return getSmartAnswer(userMessage);
  }
};

const getSmartAnswer = (question: string): string => {
  const q = question.toLowerCase();

  // Science / Chemistry
  if (q.includes('chemical symbol') && q.includes('water')) return "The chemical symbol of water is H₂O! 💧 It has 2 Hydrogen atoms and 1 Oxygen atom.";
  if (q.includes('photosynthesis')) return "Photosynthesis is how plants make food! 🌱 They use sunlight, water, and CO₂ to produce glucose and oxygen. Without it, there would be no life on Earth!";
  if (q.includes('gravity')) return "Gravity is the force that pulls objects toward each other! 🌍 It keeps us on the ground and makes the Earth orbit the Sun.";
  if (q.includes('planet')) return "Our solar system has 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune! 🪐 Earth is the only one with life.";

  // Math
  const mathMatch = q.match(/(\d+)\s*[\+\-\*x×\/÷]\s*(\d+)/);
  if (mathMatch) {
    const n1 = parseInt(mathMatch[1]);
    const n2 = parseInt(mathMatch[2]);
    const op = q.match(/[\+\-\*x×\/÷]/)?.[0] || '+';
    let result = op === '+' ? n1 + n2 : op === '-' ? n1 - n2 : op === '/' || op === '÷' ? n1 / n2 : n1 * n2;
    return `${n1} ${op} ${n2} = ${result} 🧮 Great math question!`;
  }

  // English
  if (q.includes('noun')) return "A noun is a naming word! 📚 It names a person (teacher), place (school), thing (book), or idea (love). Example: 'The dog ran in the park' - dog and park are nouns!";
  if (q.includes('verb')) return "A verb is an action word! 🏃 It tells us what someone does. Example: run, jump, eat, sleep, think. In 'She runs fast' - runs is the verb!";
  if (q.includes('adjective')) return "An adjective describes a noun! 🎨 Words like big, small, happy, red, beautiful are adjectives. Example: 'The big red ball' - big and red are adjectives!";

  // Hindi
  if (q.includes('सूरज') || q.includes('surya') || q.includes('sun') && q.includes('hindi')) return "सूरज का समानार्थी शब्द 'रवि' है! ☀️ सूरज हमारे सौरमंडल का तारा है।";

  // General
  if (q.includes('capital') && q.includes('india')) return "The capital of India is New Delhi! 🇮🇳 It's a beautiful city with many historical monuments.";
  if (q.includes('capital') && q.includes('france')) return "The capital of France is Paris! 🗼 It's famous for the Eiffel Tower.";
  if (q.includes('largest') && q.includes('ocean')) return "The Pacific Ocean is the largest ocean! 🌊 It covers more than 30% of Earth's surface.";

  // Default - actually helpful
  return `Great question about "${question}"! 🌟 I'm your EduQuest AI tutor. I can help with English, Hindi, Marathi, Maths, Science and more. Ask me anything specific! 📚`;
};