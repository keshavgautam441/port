import React from 'react';
import { SectionID, Skill } from '../../types';
import { ABOUT_SKILLS } from '../../constants';
import { SectionTitle, SectionDescription } from '../SectionElements';

interface AboutSectionProps {
  isActive: boolean;
  onNavigate: (sectionId: SectionID) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isActive }) => {
  const getTransitionClass = (baseClass: string, delay: number) => 
    `${baseClass} transition-all duration-700 ${isActive ? `opacity-100 translate-y-0 delay-${delay}` : 'opacity-0 translate-y-10'}`;

  return (
    <div className="w-full max-w-6xl">
      <div className={getTransitionClass('', 0)}>
        <SectionTitle>About Me</SectionTitle>
        <SectionDescription>A passionate professional driving innovation at the intersection of Human Resources and Artificial Intelligence.</SectionDescription>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        <div className={`lg:col-span-2 ${getTransitionClass('', 200)}`}>
          <img 
            src="https://picsum.photos/seed/about/800/800"
            alt="Keshav Gautam professional"
            className="rounded-lg shadow-2xl shadow-cyan-500/10 object-cover aspect-square"
          />
        </div>
        <div className={`lg:col-span-3 space-y-4 ${getTransitionClass('', 400)}`}>
          <h3 className="text-3xl font-bold text-white">HR Professional & AI Innovator</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            With a strong foundation in business administration and extensive expertise in HR, I am committed to making a meaningful impact. My achievements reflect my dedication to excellence, creativity, and continuous learning.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            As the founder of LPOFT Nepal, I strive to drive forward-thinking initiatives that inspire and transform. I am passionate about pushing boundaries and exploring new possibilities, whether through media, training, or AI.
          </p>
           <p className="text-slate-400 text-lg leading-relaxed">
            I invite you to connect with me. Together, we can create a future filled with innovation, creativity, and limitless potential.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className={`text-2xl font-bold text-white text-center mb-8 ${getTransitionClass('', 600)}`}>Core Competencies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ABOUT_SKILLS.map((skill: Skill, index: number) => (
            <div key={skill.name} className={`bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center flex flex-col items-center justify-center gap-3 ${getTransitionClass('', 700 + index * 100)}`}>
              <skill.icon className="w-8 h-8 text-cyan-400" />
              <h4 className="font-semibold text-white">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
