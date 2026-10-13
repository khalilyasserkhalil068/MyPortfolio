import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-dark-pine sm:text-4xl">Technical Skills</h2>
          <div className="mt-2 w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div 
              key={category} 
              className="reveal bg-off-white rounded-2xl p-6 border border-slate-blue/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-dark-pine mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-slate-blue/20 text-soft-blue flex items-center justify-center mr-3 text-sm">
                  0{index + 1}
                </span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-off-white text-charcoal-gray rounded-lg text-sm font-medium border border-slate-blue/20 hover:border-soft-blue hover:text-soft-blue transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
