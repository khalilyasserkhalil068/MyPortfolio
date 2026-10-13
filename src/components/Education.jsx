import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-dark-pine sm:text-4xl">Education</h2>
          <div className="mt-2 w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
        </div>

        <div className="reveal bg-off-white rounded-3xl p-8 md:p-10 border border-slate-blue/20 relative overflow-hidden group hover:border-soft-blue transition-colors shadow-sm hover:shadow-md">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-slate-blue/10 rounded-full blur-2xl group-hover:bg-slate-blue/20 transition-colors"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="flex-shrink-0 bg-off-white p-4 rounded-2xl border border-slate-blue/20 text-soft-blue">
              <GraduationCap className="h-10 w-10" />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-dark-pine mb-2">{education.degree}</h3>
              <div className="text-xl text-soft-blue font-medium mb-6">{education.university}</div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center text-charcoal-gray">
                  <Calendar className="h-5 w-5 mr-3 text-soft-blue" />
                  Expected Graduation: {education.graduation}
                </div>
                <div className="flex items-center text-charcoal-gray">
                  <div className="h-5 w-5 mr-3 flex items-center justify-center font-bold text-soft-blue text-sm">GPA</div>
                  {education.gpa}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
