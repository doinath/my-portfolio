import React from 'react';
import type { ComponentType } from 'react'; 
// Using universal UI shapes that are fully supported in Lucide v1
import { Globe, User, Layers, Mail } from 'lucide-react'; 

interface ProfileCardProps {
  imageUrl?: string;
  fullName: string;
  displayName: string;
  roles: [string, string];
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ 
  imageUrl, 
  fullName, 
  displayName, 
  roles 
}) => {
  // Array updated with the active, un-deprecated icon components
  const socials: ComponentType<{ size?: number | string; strokeWidth?: number | string }>[] = [Globe, User, Layers, Mail];
  const defaultImage = "https://avatars.githubusercontent.com/u/143606848?v=4";

  return (
    <div className="flex flex-col items-center text-center max-w-xl w-full">
      <div className="relative group mb-6">
        {/* 1. Changed rounded-3xl to rounded-full here for the background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-600 to-amber-200 opacity-40 blur-xl transition duration-500 group-hover:opacity-60" />
        
        {/* 2. Added aspect-square and changed rounded-3xl to rounded-full here */}
        <div className="relative h-72 w-72 sm:h-80 sm:w-80 aspect-square overflow-hidden rounded-full border border-white/10 shadow-2xl bg-neutral-900">
          <img 
            src={imageUrl || defaultImage} 
            alt={`${fullName} Profile Artwork`} 
            className="h-full w-full object-cover grayscale-[20%] contrast-115 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-transparent mix-blend-color-burn" />
      </div>

        <h1 
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-6xl sm:text-7xl font-serif tracking-wide text-white font-normal select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" 
          style={{ fontFamily: "'Playfair Display', serif, cursive" }}
        >
          {displayName}
                                                     
        </h1>
      </div>

      <div className="mt-8 space-y-2">
        <p className="text-neutral-400 text-sm sm:text-base tracking-wide font-light">
          Hi, I'm <span className="text-white font-normal">{fullName}</span>,
        </p>
        <p className="text-neutral-400 text-sm sm:text-base tracking-wide font-light">
          Working to be an <span className="text-white border-b border-white/20 pb-0.5 font-medium">{roles[0]}</span> and <span className="text-white border-b border-white/20 pb-0.5 font-medium">{roles[1]}</span>
        </p>
      </div>

        <div className="mt-6 flex items-center gap-3">
          {socials.map((Icon, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="p-2.5 rounded-full border border-white/5 bg-white/[0.03] text-neutral-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>

    </div>
  );
};