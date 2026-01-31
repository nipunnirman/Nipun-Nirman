import React from 'react';
import { Brain, Code, Cloud } from 'lucide-react';

export const AboutSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center cyber-text">About Me</h2>
      <div className="glow-box">
        <div className="glow-box-content p-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate Computer Science undergraduate at the University of Westminster, specializing in Machine Learning and Full-Stack Development. With hands-on experience in building production-ready AI systems and scalable web applications, I thrive on solving complex real-world problems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My expertise spans from developing sophisticated ML models with 94%+ accuracy to building end-to-end applications with modern frameworks. I've worked on diverse projects including healthcare AI, space data analysis, and cricket analytics, always focusing on delivering impactful solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <Brain className="w-12 h-12 mx-auto mb-3 text-[#34c3eb]" />
              <h3 className="font-bold mb-2">ML Engineer</h3>
              <p className="text-sm text-gray-400">Advanced models with XGBoost, TensorFlow, and LLMs</p>
            </div>
            <div className="text-center p-4">
              <Code className="w-12 h-12 mx-auto mb-3 text-[#34c3eb]" />
              <h3 className="font-bold mb-2">Full-Stack Dev</h3>
              <p className="text-sm text-gray-400">React, FastAPI, and modern web technologies</p>
            </div>
            <div className="text-center p-4">
              <Cloud className="w-12 h-12 mx-auto mb-3 text-[#34c3eb]" />
              <h3 className="font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-sm text-gray-400">Docker, Azure, AWS deployment experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);