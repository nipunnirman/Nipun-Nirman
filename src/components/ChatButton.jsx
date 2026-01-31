import React from 'react';
import { MessageCircle } from 'lucide-react';

export const ChatButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 w-16 h-16 bg-[#34c3eb] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#34c3eb]/50 hover:scale-110 transition-all z-40"
  >
    <MessageCircle size={28} className="text-black" />
  </button>
);