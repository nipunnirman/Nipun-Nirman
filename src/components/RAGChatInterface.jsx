import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { certificationsData } from '../data/certifications';

export const RAGChatInterface = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m Nipun\'s AI assistant. Ask me anything about his projects, skills, or experience!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setInput('');

    try {
      const systemPrompt = `You are Nipun Nirman's AI portfolio assistant. Your job is to answer questions about his skills, projects, and certifications based ONLY on the following context. If you don't know the answer, say "I don't have information about that, but you can contact Nipun directly at nipunnirman1@gmail.com".

Projects:
${projectsData.map(p => `- ${p.title}: ${p.description}\n  Highlights: ${p.highlights.join(', ')}\n  Technologies: ${p.tech.join(', ')}${p.link ? `\n  Link: ${p.link}` : ''}`).join('\n\n')}

Skills:
Programming: ${skillsData.programming.join(', ')}
Machine Learning: ${skillsData.ml.join(', ')}
Frameworks: ${skillsData.frameworks.join(', ')}
Tools: ${skillsData.tools.join(', ')}
Databases: ${skillsData.databases.join(', ')}

Certifications:
${certificationsData.map(c => `- ${c}`).join('\n')}

Be friendly, concise, and professional.`;

      const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...newMessages.map(msg => ({ role: msg.role, content: msg.content }))
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: apiMessages,
          temperature: 0.7
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices.length > 0) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
      } else {
        throw new Error('No response from API');
      }
    } catch (error) {
      console.error("Error fetching from OpenAI:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error connecting to the AI. Please try again later.' }]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] z-50">
      <div className="glow-box h-full">
        <div className="glow-box-content h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#34c3eb]">Ask About My Work</h3>
              <p className="text-xs text-gray-500">Powered by RAG System</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-[#34c3eb]/20 border border-[#34c3eb]/50'
                      : 'bg-gray-800/50 border border-gray-700'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          <div className="px-4 py-2 border-t border-gray-800">
            <p className="text-xs text-gray-500 mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {['Tell me about the Dementia project', 'What ML skills do you have?', 'Show recent projects'].map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInput(q)}
                  className="text-xs px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full hover:border-[#34c3eb]/50 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my projects..."
                className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#34c3eb]/50 text-sm"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-[#34c3eb]/20 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/30 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};