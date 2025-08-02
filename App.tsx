
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SectionID, NavItem } from './types';
import { NAVIGATION_ITEMS } from './constants';
import Sidebar from './components/Sidebar';
import SectionIndicators from './components/SectionIndicators';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ResumeSection from './components/sections/ResumeSection';
import ProjectsSection from './components/sections/ProjectsSection';
import GallerySection from './components/sections/GallerySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionID>(SectionID.Home);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isWheeling = useRef<boolean>(false);
  const touchStartY = useRef<number>(0);
  const appRef = useRef<HTMLDivElement>(null);

  const sections: { id: SectionID; component: React.FC<{ isActive: boolean; onNavigate: (sectionId: SectionID) => void }> }[] = [
    { id: SectionID.Home, component: HomeSection },
    { id: SectionID.About, component: AboutSection },
    { id: SectionID.Resume, component: ResumeSection },
    { id: SectionID.Projects, component: ProjectsSection },
    { id: SectionID.Gallery, component: GallerySection },
    { id: SectionID.Testimonials, component: TestimonialsSection },
    { id: SectionID.Contact, component: ContactSection },
  ];

  const activeIndex = sections.findIndex(s => s.id === activeSection);

  const handleSectionChange = useCallback((sectionId: SectionID) => {
    if (sectionId === activeSection) return;
    setActiveSection(sectionId);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [activeSection, isMobileMenuOpen]);

  const handleScrollNavigation = useCallback((direction: 'up' | 'down') => {
    if (isWheeling.current) return;

    const currentIdx = sections.findIndex(s => s.id === activeSection);
    let nextIdx = currentIdx;

    if (direction === 'down' && currentIdx < sections.length - 1) {
      nextIdx = currentIdx + 1;
    } else if (direction === 'up' && currentIdx > 0) {
      nextIdx = currentIdx - 1;
    }

    if (nextIdx !== currentIdx) {
      isWheeling.current = true;
      setActiveSection(sections[nextIdx].id);
      setTimeout(() => {
        isWheeling.current = false;
      }, 1200); // Corresponds to animation duration + buffer
    }
  }, [activeSection, sections]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleScrollNavigation(e.deltaY > 0 ? 'down' : 'up');
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      if (Math.abs(diff) > 50) { // Threshold
        handleScrollNavigation(diff > 0 ? 'down' : 'up');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleScrollNavigation('down');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleScrollNavigation('up');
      }
    };

    const currentAppRef = appRef.current;
    if (currentAppRef) {
      currentAppRef.addEventListener('wheel', handleWheel, { passive: false });
      currentAppRef.addEventListener('touchstart', handleTouchStart, { passive: false });
      currentAppRef.addEventListener('touchend', handleTouchEnd, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (currentAppRef) {
        currentAppRef.removeEventListener('wheel', handleWheel);
        currentAppRef.removeEventListener('touchstart', handleTouchStart);
        currentAppRef.removeEventListener('touchend', handleTouchEnd);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScrollNavigation]);

  return (
    <div ref={appRef} className="h-screen w-full overflow-hidden relative">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-slate-800/50 text-white backdrop-blur-sm lg:hidden transition-transform hover:scale-110"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isMobileOpen={isMobileMenuOpen}
        setIsMobileOpen={setIsMobileMenuOpen}
      />
      
      <SectionIndicators
        sections={NAVIGATION_ITEMS}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="lg:ml-80 h-full w-full transition-all duration-300">
        <div
          className="h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
        >
          {sections.map(({ id, component: Component }) => (
            <div key={id} id={id} className="h-screen w-full flex items-center justify-center p-4 sm:p-8 lg:p-12">
               <Component isActive={id === activeSection} onNavigate={handleSectionChange} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
