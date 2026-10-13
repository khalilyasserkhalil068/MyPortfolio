import React from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-off-white border-t border-slate-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-dark-pine sm:text-4xl">Featured Projects</h2>
          <div className="mt-2 w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
          <p className="mt-4 text-charcoal-gray max-w-2xl mx-auto">
            A selection of my recent data analysis and machine learning projects, demonstrating practical applications of my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
