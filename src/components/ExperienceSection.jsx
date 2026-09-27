import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export const ExperienceCard = ({ experience }) => (
  <div className="glow-box">
    <div className="glow-box-content p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#34c3eb]">{experience.role}</h3>
          <div className="flex flex-wrap items-center gap-3 text-gray-300 font-medium mt-1">
            <span className="flex items-center gap-1.5 text-white">
              <Briefcase size={16} className="text-[#34c3eb]" />
              {experience.company}
            </span>
            {experience.location && (
              <span className="flex items-center gap-1 text-gray-400 text-sm">
                <MapPin size={14} className="text-[#34c3eb]" />
                {experience.location}
              </span>
            )}
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#34c3eb]/10 border border-[#34c3eb]/40 text-[#34c3eb] text-xs font-semibold self-start">
          <Calendar size={13} />
          <span>{experience.period}</span>
        </div>
      </div>

      <p className="text-gray-400 mb-5 leading-relaxed">{experience.description}</p>

      <div className="mb-6 space-y-2">
        {experience.highlights.map((highlight, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34c3eb] mt-2 flex-shrink-0"></div>
            <span className="text-sm text-gray-300 leading-relaxed">{highlight}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-800">
        {experience.tech.map((tech, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full skill-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const ExperienceSection = ({ experiences }) => (
  <section className="py-20 px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center cyber-text">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </div>
  </section>
);
