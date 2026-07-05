import React from 'react';
import { Header } from './Header';
import { ProfileCard } from './ProfileCard';
import { CTAButtons } from './CTAButtons';
import { profileInfo, projects } from '../../data/info';

export default function Hero(): React.JSX.Element {
  const handleScrollToWork = (): void => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans antialiased selection:bg-orange-500/30">
      
      {/* Background Fluid Light Plumes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-orange-600/20 to-amber-700/10 blur-[120px] transform -rotate-12 animate-pulse duration-[8000ms]" />
        
        <div className="absolute -right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-orange-500/10 to-transparent blur-[150px] animate-pulse duration-[10000ms]" />
      </div>

      <Header 
        name={profileInfo.fullName} 
        numOfProjects={projects.length} 
        location={profileInfo.location} 
        country={profileInfo.country} 
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 min-h-[calc(100vh-89px)] flex flex-col items-center justify-center py-12">
        <ProfileCard 
          fullName={profileInfo.fullName}
          displayName={profileInfo.displayName}
          roles={profileInfo.roles} 
        />
        
        <CTAButtons 
          primaryLabel="Contact Me"
          secondaryLabel="View My Work"
          onPrimaryClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          onSecondaryClick={handleScrollToWork}
        />
      </div>
    </section>
  );
}