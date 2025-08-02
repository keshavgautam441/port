
import React from 'react';
import { SectionID, NavItem } from '../types';
import { NAVIGATION_ITEMS } from '../constants';
import { Linkedin, Youtube, Twitter, Instagram } from 'lucide-react';

interface SidebarProps {
  activeSection: SectionID;
  onSectionChange: (sectionId: SectionID) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, isMobileOpen, setIsMobileOpen }) => {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-slate-700/50 z-40 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center p-8 border-b border-slate-700/50">
          <img
            src="https://picsum.photos/seed/profile/200/200"
            alt="Keshav Gautam"
            className="w-32 h-32 rounded-full object-cover border-4 border-slate-700 shadow-lg shadow-cyan-500/10"
          />
          <h1 className="text-2xl font-bold text-white mt-4">Keshav Gautam</h1>
          <p className="text-sm text-cyan-400">HR Manager & AI Innovator</p>
        </div>

        <nav className="flex-grow p-6">
          <ul className="space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                    activeSection === item.id
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <div className="w-1 h-6 bg-transparent rounded-full transition-all duration-300 group-hover:bg-cyan-400/50" style={{backgroundColor: activeSection === item.id ? 'rgb(34 211 238)' : ''}}></div>
                  <item.icon className={`w-5 h-5 transition-colors ${activeSection === item.id ? 'text-cyan-400' : 'text-slate-500 group-hover:text-white'}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-8 border-t border-slate-700/50">
           <div className="flex justify-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><Youtube size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
           </div>
           <p className="text-center text-xs text-slate-500 mt-4">&copy; {new Date().getFullYear()} Keshav Gautam. All Rights Reserved.</p>
        </div>
      </aside>
      {isMobileOpen && <div onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-black/50 z-30 lg:hidden"></div>}
    </>
  );
};

export default Sidebar;
