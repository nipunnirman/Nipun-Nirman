import React from 'react';

export const ProjectCard = ({ project }) => (
  <div className="glow-box">
    <div className="glow-box-content p-6">
      <h3 className="text-xl font-bold mb-3 text-[#34c3eb]">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="mb-4">
        {project.highlights.map((highlight, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34c3eb] mt-2"></div>
            <span className="text-sm text-gray-300">{highlight}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full skill-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);