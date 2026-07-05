import React from 'react';
import { skills } from '../../data/info';
import { Terminal, Database, Layout, Settings } from 'lucide-react';

export const Stack: React.FC = () => {
  const categories = [
    { name: 'Languages', icon: Terminal, color: 'text-orange-500' },
    { name: 'Frontend', icon: Layout, color: 'text-amber-500' },
    { name: 'Backend & DB', icon: Database, color: 'text-orange-400' },
    { name: 'Tools & DevOps', icon: Settings, color: 'text-amber-400' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16 text-center md:text-left">
        <span className="text-orange-500 font-medium tracking-widest text-xs uppercase block mb-2">My Toolkit</span>
        <h2 className="text-4xl sm:text-5xl font-serif text-white font-normal">Technical Stack</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const CatIcon = cat.icon;
          const catSkills = skills.filter((s) => s.category === cat.name);

          return (
            <div 
              key={cat.name}
              className="rounded-2xl border border-white/5 bg-neutral-900/10 backdrop-blur-sm p-6 flex flex-col hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <CatIcon className={cat.color} size={20} strokeWidth={1.8} />
                <h3 className="text-lg font-medium text-white tracking-wide">{cat.name}</h3>
              </div>

              <div className="flex flex-col gap-3">
                {catSkills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="group flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/[0.01] border border-white/[0.02] hover:bg-white/[0.04] hover:border-white/5 transition-all duration-300"
                  >
                    <span className="text-sm font-light text-neutral-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover:bg-orange-500 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
