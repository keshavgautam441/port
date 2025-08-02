import React from 'react';
import { SectionID, TimelineItem as TimelineItemType } from '../../types';
import { RESUME_EDUCATION, RESUME_EXPERIENCE } from '../../constants';
import { GraduationCap, Briefcase } from 'lucide-react';
import { SectionTitle } from '../SectionElements';

interface ResumeSectionProps {
  isActive: boolean;
  onNavigate: (sectionId: SectionID) => void;
}

const TimelineItem: React.FC<{ item: TimelineItemType; isActive: boolean; delay: number }> = ({ item, isActive, delay }) => (
  <div className={`pl-12 relative border-l-2 border-slate-700 transition-all duration-700 ${isActive ? `opacity-100 translate-y-0 delay-${delay}` : 'opacity-0 translate-y-10'}`}>
    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-slate-900 border-2 border-cyan-400 rounded-full"></div>
    <p className="text-sm text-cyan-400 mb-1">{item.date}</p>
    <h4 className="text-xl font-bold text-white">{item.title}</h4>
    <p className="text-md text-slate-300 font-medium">{item.subtitle}</p>
    <p className="text-sm text-slate-500 mb-2">{item.institution}</p>
    {item.details && (
      <ul className="mt-2 space-y-1 list-disc list-inside">
        {item.details.map((detail, i) => (
          <li key={i} className="text-slate-400">{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

const ResumeSection: React.FC<ResumeSectionProps> = ({ isActive }) => {
  const getTransitionClass = (delay: number) => 
    `transition-all duration-700 ${isActive ? `opacity-100 translate-y-0 delay-${delay}` : 'opacity-0 translate-y-10'}`;

  return (
    <div className="w-full max-w-6xl">
      <div className={getTransitionClass(0)}>
        <SectionTitle className="mb-12">My Resume</SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className={`flex items-center gap-3 text-2xl font-bold text-white mb-8 ${getTransitionClass(200)}`}>
            <GraduationCap className="text-cyan-400" />
            Education
          </h3>
          <div className="space-y-8">
            {RESUME_EDUCATION.map((item, index) => (
              <TimelineItem key={index} item={item} isActive={isActive} delay={300 + index * 100} />
            ))}
          </div>
        </div>
        <div>
          <h3 className={`flex items-center gap-3 text-2xl font-bold text-white mb-8 ${getTransitionClass(200)}`}>
            <Briefcase className="text-cyan-400" />
            Experience
          </h3>
          <div className="space-y-8">
            {RESUME_EXPERIENCE.map((item, index) => (
              <TimelineItem key={index} item={item} isActive={isActive} delay={300 + index * 100} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
