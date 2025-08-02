import React from 'react';
import { SectionID } from '../../types';
import { PROJECTS_DATA } from '../../constants';
import { ArrowRight } from 'lucide-react';
import { SectionTitle, SectionDescription } from '../SectionElements';

interface ProjectsSectionProps {
  isActive: boolean;
  onNavigate: (sectionId: SectionID) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isActive, onNavigate }) => {
  const getTransitionClass = (delay: number) => 
    `transition-all duration-700 ${isActive ? `opacity-100 scale-100 delay-${delay}` : 'opacity-0 scale-90'}`;

  return (
    <div className="w-full max-w-7xl">
       <div className={`transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle>Projects & Achievements</SectionTitle>
        <SectionDescription>A glimpse into my professional endeavors and accomplishments that define my journey.</SectionDescription>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={project.title}
            className={`bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden group ${getTransitionClass(200 + index * 100)}`}
          >
            <div className="overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                <project.icon className="w-4 h-4" />
                <span>{project.tags}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-16 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-slate-700/50 p-8 rounded-lg ${getTransitionClass(500)}`}>
        <h3 className="text-2xl font-bold text-white">Ready to Collaborate?</h3>
        <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative vision. Let's create something amazing together.
        </p>
        <button
          onClick={() => onNavigate(SectionID.Contact)}
          className="mt-6 inline-flex items-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-transform hover:scale-105"
        >
          Get In Touch <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
