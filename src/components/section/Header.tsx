import React from 'react';

interface HeaderProps {
    name: string;
    numOfProjects: number;
    location: string;
    country: string;
}

export const Header: React.FC<HeaderProps> = ({
    name,
    numOfProjects,
    location,
    country
}) => {
    return (

        <header className="relative z-10 mx-auto max-w-1xl px-6 py-1 flex items-center justify-between border-b border-white/1">
            
            {/* Logo Mark */}
            <div className="flex items-center gap-2 font-default text-l tracking-tight">
                <div className="h-6 w-6 rotate-45 border-2 border-white bg-transparent rounded-sm flex items-center justify-center">
                    <div className="h-2 w-2 bg-white rounded-sm" />
                </div>
                <span>{name}</span>
            </div>

            {/* Operational Pulse Badge */}
            <div className="hidden sm:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-neutral-400">
                    Available for <span className="text-white font-semibold">{numOfProjects} projects</span>
                </span>
            </div>

            {/* Origin Geolocation */}
            <div className="text-right text-xs tracking-wider text-neutral-400">
                <p className="font-medium text-white">{location}</p>
                <p className="text-[10px] opacity-60">{country}</p>
            </div>
        </header>
    );
};