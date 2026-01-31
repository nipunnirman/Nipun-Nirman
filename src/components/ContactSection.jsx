import React from 'react';

export const ContactSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 cyber-text">Let's Connect</h2>
      <div className="glow-box">
        <div className="glow-box-content p-8">
          <p className="text-lg text-gray-300 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="mailto:nipunnirman999@gmail.com" 
               className="px-6 py-3 bg-[#34c3eb]/10 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/20 transition-all">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/nipun-rathnayaka-889714250/" 
               target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 bg-[#34c3eb]/10 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/20 transition-all">
              LinkedIn
            </a>
            <a href="https://github.com/nipunnirman" 
               target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 bg-[#34c3eb]/10 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/20 transition-all">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);