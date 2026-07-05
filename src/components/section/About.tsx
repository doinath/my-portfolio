import React, { useState } from 'react';
import { profileInfo, education, values } from '../../data/info';
import { GraduationCap, Mail, Copy, Check, MapPin, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <span className="text-orange-500 font-medium tracking-widest text-xs uppercase block mb-2">Get To Know Me</span>
        <h2 className="text-4xl sm:text-5xl font-serif text-white font-normal">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Bio & Values */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white font-normal">My Journey</h3>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              I am an aspiring software developer and leader based in Minglanilla, Cebu, Philippines. 
              Currently studying Computer Science at the Cebu Institute of Technology - University, I focus on building robust, modular web systems and refining my technical skills.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              As a developer who values leadership, I believe in empowering teams, maintaining high code quality standards, and building user-centric interfaces that make a real-world difference.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-white font-normal">Core Values</h3>
            <div className="space-y-4">
              {values.map((val) => (
                <div 
                  key={val.title}
                  className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors duration-300"
                >
                  <h4 className="text-sm font-medium text-white flex items-center gap-2 mb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {val.title}
                  </h4>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Education & Contact Panel */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Box */}
          <div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/20 backdrop-blur-sm space-y-6">
            <h3 className="text-xl font-serif text-white font-normal flex items-center gap-2">
              <GraduationCap className="text-orange-500" size={20} />
              Education
            </h3>
            
            {education.map((edu) => (
              <div key={edu.institution} className="space-y-2">
                <h4 className="text-sm font-medium text-white">{edu.degree}</h4>
                <p className="text-neutral-400 text-xs font-light">{edu.institution}</p>
                <div className="flex items-center gap-4 text-[10px] text-neutral-500 font-medium">
                  <span>{edu.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} />
                    {edu.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm space-y-6 relative overflow-hidden group">
            {/* Subtle light leak */}
            <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl pointer-events-none group-hover:bg-orange-500/15 transition-all duration-500" />

            <h3 className="text-xl font-serif text-white font-normal flex items-center gap-2">
              <Sparkles className="text-orange-500" size={18} />
              Start A Project
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              I am open to projects, internships, and collaborative software development. Let's build something exceptional together.
            </p>

            <div className="space-y-3">
              {/* Copyable Email Field */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-white/5 bg-black/40 text-neutral-300">
                <span className="text-xs truncate font-mono select-all">
                  {profileInfo.email}
                </span>
                
                <button 
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Direct Mail Button */}
              <a 
                href={`mailto:${profileInfo.email}`}
                className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-medium text-xs hover:bg-neutral-200 transition-colors duration-300"
              >
                <Mail size={14} />
                Send Email Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
