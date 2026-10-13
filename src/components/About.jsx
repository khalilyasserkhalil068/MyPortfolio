import React from 'react';

import { Database, Code2, LineChart, Search } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative border-t border-slate-blue/20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-dark-pine sm:text-4xl">About Me</h2>
          <div className="mt-2 w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-charcoal-gray text-lg leading-relaxed">
            <p>
              I am passionate about Data Analysis and Data Science, with hands-on experience building practical projects using Python, SQL, Pandas, NumPy, Matplotlib, and web scraping tools. I enjoy transforming raw data into meaningful insights and developing data-driven solutions to practical problems.
            </p>
            <p>
              My expertise lies in using Python and SQL to uncover insights from complex datasets. I specialize in data cleaning, exploratory data analysis (EDA), and creating compelling data visualizations that tell a story.
            </p>
            <p>
              I enjoy tackling practical, data-driven projects, from building automated web scrapers to developing machine learning pipelines. My goal is to leverage data to solve real-world problems and drive informed decision-making.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="reveal bg-off-white p-6 rounded-2xl border border-slate-blue/20 hover:border-soft-blue transition-colors group shadow-sm hover:shadow-md">
              <Code2 className="h-8 w-8 text-soft-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-dark-pine font-medium mb-2">Python & SQL</h3>
              <p className="text-sm text-charcoal-gray">Strong foundation in programming and database querying.</p>
            </div>
            <div className="reveal bg-off-white p-6 rounded-2xl border border-slate-blue/20 hover:border-soft-blue transition-colors group shadow-sm hover:shadow-md">
              <Search className="h-8 w-8 text-soft-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-dark-pine font-medium mb-2">Data Cleaning & EDA</h3>
              <p className="text-sm text-charcoal-gray">Transforming messy data into structured, analyzable formats.</p>
            </div>
            <div className="reveal bg-off-white p-6 rounded-2xl border border-slate-blue/20 hover:border-soft-blue transition-colors group shadow-sm hover:shadow-md">
              <LineChart className="h-8 w-8 text-soft-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-dark-pine font-medium mb-2">Data Visualization</h3>
              <p className="text-sm text-charcoal-gray">Creating clear, impactful visual representations of data.</p>
            </div>
            <div className="reveal bg-off-white p-6 rounded-2xl border border-slate-blue/20 hover:border-soft-blue transition-colors group shadow-sm hover:shadow-md">
              <Database className="h-8 w-8 text-soft-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-dark-pine font-medium mb-2">Machine Learning</h3>
              <p className="text-sm text-charcoal-gray">Applying ML algorithms for predictive modeling and analysis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
