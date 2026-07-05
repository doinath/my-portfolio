import React from 'react';
import Hero from './components/section/Hero';
import { Projects } from './components/section/Projects';
import { Stack } from './components/section/Stack';
import { About } from './components/section/About';
import { SidebarNav } from './components/section/SidebarNav';

function App(): React.JSX.Element {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 selection:text-white">
      {/* 1. Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* 2. Projects Section */}
      <section id="projects" className="min-h-screen bg-neutral-950 flex items-center border-b border-white/5 py-12">
        <Projects />
      </section>

      {/* 3. Tech Stack Section */}
      <section id="stack" className="min-h-screen bg-black flex items-center border-b border-white/5 py-12">
        <Stack />
      </section>

      {/* 4. About Section */}
      <section id="about" className="min-h-screen bg-neutral-950 flex items-center py-12">
        <About />
      </section>

      {/* The navigation dock floating on the side */}
      <SidebarNav />
    </div>
  );
}

export default App;