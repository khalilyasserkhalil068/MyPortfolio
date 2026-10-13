import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only form handling as requested
    alert("Thank you for your message! (Note: This is a frontend-only demo)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative bg-off-white border-t border-slate-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-dark-pine sm:text-4xl">Get In Touch</h2>
          <div className="mt-2 w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
          <p className="mt-4 text-charcoal-gray max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="reveal space-y-8">
            <div className="reveal bg-off-white rounded-2xl p-8 border border-slate-blue/20 shadow-sm">
              <h3 className="text-2xl font-bold text-dark-pine mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-start group">
                  <div className="flex-shrink-0 bg-off-white p-3 rounded-xl border border-slate-blue/20 group-hover:border-soft-blue group-hover:bg-slate-blue/10 transition-colors">
                    <Mail className="h-6 w-6 text-soft-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-soft-blue mb-1">Email</p>
                    <p className="text-dark-pine group-hover:text-soft-blue transition-colors">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-off-white p-3 rounded-xl border border-slate-blue/20 group-hover:border-soft-blue group-hover:bg-slate-blue/10 transition-colors">
                    <Phone className="h-6 w-6 text-soft-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-soft-blue mb-1">Phone</p>
                    <p className="text-dark-pine group-hover:text-soft-blue transition-colors">+{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-off-white p-3 rounded-xl border border-slate-blue/20 group-hover:border-soft-blue group-hover:bg-slate-blue/10 transition-colors">
                    <MapPin className="h-6 w-6 text-soft-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-soft-blue mb-1">Location</p>
                    <p className="text-dark-pine group-hover:text-soft-blue transition-colors">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-blue/20 flex gap-4">
                {personalInfo.github && (
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-off-white p-3 rounded-xl border border-slate-blue/20 hover:border-soft-blue hover:bg-slate-blue/10 text-charcoal-gray hover:text-soft-blue transition-all shadow-sm">
                    <FaGithub className="h-6 w-6" />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-off-white p-3 rounded-xl border border-slate-blue/20 hover:border-soft-blue hover:bg-slate-blue/10 text-charcoal-gray hover:text-soft-blue transition-all shadow-sm">
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal bg-off-white rounded-2xl p-8 border border-slate-blue/20 shadow-sm">
            <h3 className="text-2xl font-bold text-dark-pine mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-pine mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-off-white border border-slate-blue/20 rounded-xl px-4 py-3 text-dark-pine focus:outline-none focus:ring-2 focus:ring-soft-blue focus:border-soft-blue transition-colors placeholder:text-soft-blue"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-pine mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-off-white border border-slate-blue/20 rounded-xl px-4 py-3 text-dark-pine focus:outline-none focus:ring-2 focus:ring-soft-blue focus:border-soft-blue transition-colors placeholder:text-soft-blue"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-pine mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-off-white border border-slate-blue/20 rounded-xl px-4 py-3 text-dark-pine focus:outline-none focus:ring-2 focus:ring-soft-blue focus:border-soft-blue transition-colors resize-none placeholder:text-soft-blue"
                  placeholder="What would you like to discuss?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-dark-pine hover:bg-olive-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-off-white focus:ring-dark-pine transition-all shadow-sm"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
