import React from 'react';
import { Code, Brain, Database, Cloud } from 'lucide-react';

export const SkillsSection = ({ skills }) => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center cyber-text">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glow-box">
          <div className="glow-box-content p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code className="text-[#34c3eb]" />
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-full skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="glow-box">
          <div className="glow-box-content p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="text-[#34c3eb]" />
              Machine Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.ml.map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-full skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="glow-box">
          <div className="glow-box-content p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Database className="text-[#34c3eb]" />
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-full skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="glow-box">
          <div className="glow-box-content p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Cloud className="text-[#34c3eb]" />
              Tools & Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {[...skills.tools, ...skills.databases].map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-full skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);