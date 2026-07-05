import React, { useState, useEffect } from 'react';
import type { ComponentType } from 'react';
import { Home, Briefcase, Layers, User} from 'lucide-react';

interface NavItem {
  icon: ComponentType<{ size?: number | string; strokeWidth?: number | string }>;
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Briefcase, label: 'Projects', id: 'projects' },
  { icon: Layers, label: 'Stack', id: 'stack' },
  { icon: User, label: 'About', id: 'about' },
];

export const SidebarNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Manual smooth scroll click handler
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Configuration for the viewport intersection trigger zone
    const options = {
      root: null, // relative to document viewport
      rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the upper-middle area
      threshold: 0, // Trigger as soon as the edge enters the target zone
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // If a section enters our active viewport zone, update the active icon
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Watch each element that matches our sidebar IDs
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    // Cleanup observer connection when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1.5 p-2 rounded-full border border-white/10 bg-neutral-900/40 backdrop-blur-xl shadow-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`p-3 rounded-full transition-all duration-300 relative group outline-none ${
              isActive ? 'bg-white/10 text-white scale-110 border border-white/10' : 'text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.03]'
            }`}
            aria-label={item.label}
          >
            <Icon size={18} strokeWidth={1.8} />
            <span className="absolute right-14 top-1/2 -translate-y-1/2 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-neutral-900 border border-white/10 text-xs px-2.5 py-1 rounded-md pointer-events-none whitespace-nowrap text-white">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};