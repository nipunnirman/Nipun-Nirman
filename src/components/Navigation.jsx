import React from 'react';

export const Navigation = ({ activeSection, setActiveSection }) => (
  <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-900">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold cyber-text">NR</h1>
        <div className="flex gap-6">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item.toLowerCase());
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`hover:text-[#34c3eb] transition-colors ${activeSection === item.toLowerCase() ? 'text-[#34c3eb]' : ''
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);