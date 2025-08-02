
import React from 'react';
import { SectionID } from '../../types';
import { ArrowRight, Bot, ChevronDown, GraduationCap, Users } from 'lucide-react';

interface HomeSectionProps {
  isActive: boolean;
  onNavigate: (sectionId: SectionID) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ isActive, onNavigate }) => {
  const getTransitionClass = (delay: number) => 
    `transition-all duration-700 ${isActive ? `opacity-100 translate-y-0 delay-${delay}` : 'opacity-0 translate-y-10'}`;

  return (
    <div className="w-full max-w-5xl text-center">
      <div className={getTransitionClass(100)}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          I'm <span className="text-cyan-400">Keshav Gautam</span>
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-slate-400">
          A Journey of Passion, Dedication, and Innovation
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400">
          Welcome! I am an accomplished professional with an MBA in HR Management and a Certified Prompt Engineer, dedicated to merging human expertise with artificial intelligence.
        </p>
      </div>

      <div className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ${getTransitionClass(300)}`}>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
          <GraduationCap className="w-10 h-10 mx-auto text-cyan-400 mb-3" />
          <h3 className="text-lg font-semibold text-white">Educational Excellence</h3>
          <p className="text-sm text-slate-400 mt-1">MBA in HR Management & modern business practices.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
          <Bot className="w-10 h-10 mx-auto text-cyan-400 mb-3" />
          <h3 className="text-lg font-semibold text-white">AI Innovation</h3>
          <p className="text-sm text-slate-400 mt-1">Certified Prompt Engineer driving tech advancement.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
          <Users className="w-10 h-10 mx-auto text-cyan-400 mb-3" />
          <h3 className="text-lg font-semibold text-white">Leadership</h3>
          <p className="text-sm text-slate-400 mt-1">Founder of LPOFT Nepal, inspiring transformation.</p>
        </div>
      </div>

      <div className={`mt-12 ${getTransitionClass(500)}`}>
        <button
          onClick={() => onNavigate(SectionID.About)}
          className="inline-flex items-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-transform hover:scale-105"
        >
          Learn More About Me <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden lg:block animate-bounce">
        <ChevronDown size={24} />
      </div>
    </div>
  );
};

export default HomeSection;
