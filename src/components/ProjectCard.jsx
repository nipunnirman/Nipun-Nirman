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
      {project.link && (
        <div className="mt-4 border-t border-gray-800 pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#34c3eb] hover:text-[#28a0c4] flex items-center gap-2 transition-colors duration-200"
          >
            <span>View Live Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  </div>
);