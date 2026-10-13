import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-off-white border-t border-slate-blue/20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="text-xl font-bold text-dark-pine mb-2">{personalInfo.name}</h3>
        <p className="text-charcoal-gray mb-6">{personalInfo.title}</p>
        
        <div className="flex space-x-6 mb-8">
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-soft-blue hover:text-soft-blue transition-colors" aria-label="GitHub">
              <FaGithub className="h-6 w-6" />
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-soft-blue hover:text-soft-blue transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="h-6 w-6" />
            </a>
          )}
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} className="text-soft-blue hover:text-soft-blue transition-colors" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          )}
        </div>
        
        <p className="text-soft-blue text-sm">
          &copy; 2026 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
