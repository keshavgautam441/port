
import React from 'react';
import { SectionID, NavItem } from '../types';

interface SectionIndicatorsProps {
  sections: NavItem[];
  activeSection: SectionID;
  onSectionChange: (sectionId: SectionID) => void;
}

const SectionIndicators: React.FC<SectionIndicatorsProps> = ({ sections, activeSection, onSectionChange }) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className="relative group flex items-center"
          aria-label={`Go to ${section.label} section`}
        >
          <span className="absolute right-full mr-4 px-2 py-1 bg-slate-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {section.label}
          </span>
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-cyan-400 border-cyan-400 scale-125'
                : 'border-slate-500 group-hover:border-cyan-400'
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default SectionIndicators;
