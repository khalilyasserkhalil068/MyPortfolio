import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="py-10 relative bg-off-white border-t border-slate-blue/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certifications */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Award className="h-8 w-8 text-soft-blue mr-4" />
            <h2 className="text-2xl font-bold text-dark-pine">Certifications & Training</h2>
          </div>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="reveal bg-off-white rounded-2xl p-6 border border-slate-blue/20 hover:border-soft-blue transition-colors flex items-start shadow-sm hover:shadow-md">
                <div className="w-2 h-2 bg-soft-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-dark-pine mb-1">{cert.title}</h3>
                  <p className="text-charcoal-gray">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
