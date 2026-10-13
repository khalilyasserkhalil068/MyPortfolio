import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="reveal group flex flex-col bg-off-white rounded-2xl border border-slate-blue/20 overflow-hidden hover:border-soft-blue transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-dark-pine group-hover:text-soft-blue transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-charcoal-gray mb-6 leading-relaxed">
          {project.description}
        </p>

        {project.keyPoints && project.keyPoints.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-dark-pine uppercase tracking-wider mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start text-sm text-charcoal-gray">
                  <span className="text-soft-blue mr-2 mt-1">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="p-6 pt-0 mt-auto">
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-blue/20 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-soft-blue bg-slate-blue/10 px-3 py-1 rounded-full border border-slate-blue/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 border border-slate-blue/20 text-sm font-medium rounded-lg text-dark-pine bg-off-white hover:bg-slate-blue/20 hover:text-soft-blue transition-colors shadow-sm"
        >
          <FaGithub className="mr-2" size={18} />
          View Project on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
