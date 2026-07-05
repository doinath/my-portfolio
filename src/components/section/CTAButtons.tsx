import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CTAButtonsProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryLabel: string;
  secondaryLabel: string;
}

export const CTAButtons: React.FC<CTAButtonsProps> = ({ 
  onPrimaryClick, 
  onSecondaryClick, 
  primaryLabel, 
  secondaryLabel 
}) => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-xl">
      {/* Primary Filled Callout */}
      <button 
        onClick={onPrimaryClick}
        className="group flex items-center justify-between gap-6 w-full sm:w-auto bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm transition-all duration-300 active:scale-98 hover:bg-neutral-100"
      >
        {primaryLabel}
        <div className="bg-black text-white p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </div>
      </button>

      {/* Secondary Outlined Action */}
      <button 
        onClick={onSecondaryClick}
        className="w-full sm:w-auto border border-white/10 bg-white/[0.01] hover:bg-white/[0.05] hover:border-white/20 px-8 py-3.5 rounded-full font-medium text-sm text-neutral-300 hover:text-white transition-all duration-300"
      >
        {secondaryLabel}
      </button>
    </div>
  );
};
