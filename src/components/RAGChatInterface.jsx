import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export const RAGChatInterface = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m Nipun\'s AI assistant. Ask me anything about his projects, skills, or experience!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setMessages([...messages, { role: 'user', content: userMessage }]);
    setInput('');
    
    // TODO: Replace with your RAG API endpoint
    // Example:
    // const response = await fetch('YOUR_RAG_API_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message: userMessage })
    // });
    // const data = await response.json();
    
    // Placeholder response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'This is a placeholder response. Connect your RAG system API here to get intelligent responses about Nipun\'s projects and experience.' 
      }]);
    }, 1000);
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