import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Input } from '@/components/common';
import RobotHelper from '@/components/common/RobotHelper';
import { ROUTES } from '@/config/routes';
import { getQuizQuestions } from '@/data/questionBank';

type Message = { role: 'user' | 'tutor'; text: string };

export default function Tutor() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState<'english' | 'reading' | 'maths' | 'science'>('english');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [mood, setMood] = useState<'happy' | 'excited' | 'thinking' | 'encouraging' | 'celebrating' | 'angry'>('happy');
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setMessages([{ role: 'tutor', text: 'Hi! I am your AI tutor. What would you like to learn today?' }]);
    setMood('happy');
  }, []);

  const subjectChip = useMemo(() => (
    <div className="flex gap-2 mb-4">
      {['english','reading','maths','science'].map((s) => (
        <button
          key={s}
          onClick={() => setSubject(s as any)}
          className={`px-3 py-2 rounded-full text-sm ${subject===s? 'bg-primary text-white' : 'bg-white text-gray-700 border border-gray-200'}`}
        >
          {s}
        </button>
      ))}
    </div>
  ), [subject]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() } as Message;
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setMood('thinking');
    const reply = generateResponse(userMsg.text, subject);
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'tutor', text: reply }]);
      setMood('encouraging');
      setShowHint(true);
    }, 500);
  };

  const handleHint = () => {
    const hint = generateHint(subject);
    setMessages((m) => [...m, { role: 'tutor', text: hint }]);
    setMood('happy');
    setShowHint(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 pb-24">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-lg">←</button>
          <div className="text-lg font-bold">AI Tutor</div>
          <button onClick={() => navigate(ROUTES.HOME)} className="p-2 hover:bg-gray-100 rounded-lg">🏠</button>
        </div>
      </div>

      <div className="p-4 max-w-3xl mx-auto">
        {subjectChip}
        <Card className="bg-white">
          <div className="space-y-3 max-h-[60vh] overflow-y-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role==='tutor' ? 'justify-start' : 'justify-end'}`}>
                <div className={`rounded-2xl px-4 py-3 shadow ${msg.role==='tutor' ? 'bg-blue-50 text-gray-800' : 'bg-primary text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <Input
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={handleSend} variant="primary">Send</Button>
          </div>
        </Card>
      </div>

      <RobotHelper mood={mood} message={messages[messages.length-1]?.role==='tutor'?messages[messages.length-1]?.text:undefined} showHint={showHint} onHintClick={handleHint} />
    </div>
  );
}

function generateResponse(text: string, subject: 'english'|'reading'|'maths'|'science') {
  const t = text.toLowerCase();
  if (subject==='maths') {
    const m = t.match(/(\d+)\s*([+\-*/])\s*(\d+)/);
    if (m) {
      const a = parseFloat(m[1]);
      const op = m[2];
      const b = parseFloat(m[3]);
      const val = op==='+'?a+b:op==='-'?a-b:op==='*'?a*b:a/b;
      return `Let’s solve it step by step. First number ${a}, operator ${op}, second number ${b}. The answer is ${Number.isFinite(val)?val.toString():'not a number'} 🎉`;
    }
    const qs = getQuizQuestions('Grammar', 8, 1, 3);
    return `Try these: ${qs.map(q=>q.question).join(' | ')}.`;
  }
  if (subject==='english') {
    if (t.includes('noun') || t.includes('verb') || t.includes('adjective')) {
      return 'A noun names, a verb acts, an adjective describes. Give me a sentence and I’ll label each!';
    }
    return 'Let’s build a sentence together: Subject + Verb + Object. Try: “The bright star twinkles.”';
  }
  if (subject==='reading') {
    return 'Reading tip: identify who, where, and what happened. Ask: “Who is the main character?” “What is the setting?” “What is the problem?”';
  }
  return 'Science idea: ask me about animals, plants, or space, and I’ll explain in simple steps!';
}

function generateHint(subject: 'english'|'reading'|'maths'|'science') {
  if (subject==='maths') return 'Break problems into parts. Estimate first, then compute carefully.';
  if (subject==='english') return 'Look for the action word (verb) and the thing being named (noun).';
  if (subject==='reading') return 'Skim first, then re-read the important lines. Summarize in one sentence.';
  return 'Observe, measure, and test. Turn curiosity into mini experiments!';
}