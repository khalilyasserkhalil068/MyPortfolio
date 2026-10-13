import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/khalil-profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-slate-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-dark-pine tracking-tight mb-4">
            Hi, I'm <span className="text-soft-blue">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-charcoal-gray mb-6">
            {personalInfo.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg text-charcoal-gray mb-10 leading-relaxed">
            {personalInfo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-dark-pine hover:bg-olive-green transition-colors shadow-lg shadow-soft-blue/30"
            >
              View My Projects
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-soft-blue text-base font-medium rounded-full text-dark-pine hover:text-white hover:bg-dark-pine transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-6">
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-charcoal-gray hover:text-soft-blue transition-colors" aria-label="GitHub">
                <FaGithub className="h-7 w-7" />
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-charcoal-gray hover:text-soft-blue transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-7 w-7" />
              </a>
            )}
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="text-charcoal-gray hover:text-soft-blue transition-colors" aria-label="Email">
                <Mail className="h-7 w-7" />
              </a>
            )}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <img 
              src={profilePhoto} 
              alt={`${personalInfo.name} profile photo`} 
              className="w-full h-full object-cover object-center rounded-[2rem] border-4 border-white shadow-xl shadow-soft-blue/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
