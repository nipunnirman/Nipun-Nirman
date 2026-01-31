import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = ({ projects }) => (
  <section className="py-20 px-6 bg-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center cyber-text">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  </section>
);