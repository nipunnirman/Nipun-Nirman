import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Sparkles } from 'lucide-react';
import profileDark from '../assets/profile-dark.png';
import profileBlue from '../assets/profile-blue.png';

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="glow-box w-48 h-48 rounded-full">
            <div
              className="glow-box-content w-full h-full rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={isHovered ? profileBlue : profileDark}
                alt="Nipun Nirman Rathnayaka"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-6xl font-bold mb-4 cyber-text">Nipun Nirman Rathnayaka</h2>
          <p className="text-2xl text-gray-400 mb-6">Machine Learning Engineer | Full-Stack Developer</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Passionate about building intelligent, scalable applications that solve real-world problems through AI and modern web technologies.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href="/Nipun_Nirman_CV.pdf"
            download
            className="px-6 py-3 bg-[#34c3eb]/10 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/20 transition-all flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
          <button className="px-6 py-3 bg-[#34c3eb]/10 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/20 transition-all flex items-center gap-2">
            <Sparkles size={20} />
            Current Projects
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <a href="https://github.com/nipunnirman" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full border border-[#34c3eb] hover:bg-[#34c3eb]/20 transition-all">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nipun-rathnayaka-889714250/" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full border border-[#34c3eb] hover:bg-[#34c3eb]/20 transition-all">
            <Linkedin size={24} />
          </a>
          <a href="mailto:nipunnirman999@gmail.com"
            className="p-3 rounded-full border border-[#34c3eb] hover:bg-[#34c3eb]/20 transition-all">
            <Mail size={24} />
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>0757105455</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Badulla, Sri Lanka</span>
          </div>
        </div>
      </div>
    </section>
  );
};