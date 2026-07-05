import React, { useState } from 'react';
import { projects } from '../../data/info';
import type { Project } from '../../data/info';
import { Code, ExternalLink, Folder } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured) 
    : projects;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-orange-500 font-medium tracking-widest text-xs uppercase block mb-2">My Work</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-white font-normal">Selected Projects</h2>
        </div>
        
        {/* Toggle Filters */}
        <div className="mt-6 md:mt-0 flex items-center bg-neutral-900/80 border border-white/5 p-1 rounded-full w-fit">
          <button 
            onClick={() => setFilter('all')}
            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${filter === 'all' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'}`}
          >
            All Projects ({projects.length})
          </button>
          <button 
            onClick={() => setFilter('featured')}
            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${filter === 'featured' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'}`}
          >
            Featured ({projects.filter(p => p.featured).length})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project: Project) => (
          <div 
            key={project.id}
            className="group relative rounded-2xl border border-white/5 bg-neutral-900/20 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-orange-500/20 hover:bg-neutral-900/40 transition-all duration-500"
          >
            {/* Subtle Gradient Glow inside the card on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-white/[0.02] border border-white/10 rounded-xl text-orange-500">
                  <Folder size={20} strokeWidth={1.5} />
                </div>
                
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white p-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
                      title="View Codebase"
                    >
                      <Code size={18} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white p-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-white font-normal group-hover:text-orange-400 transition-colors duration-300 mb-3">
                {project.title}
              </h3>
              
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium border border-white/5 bg-white/[0.02] text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
