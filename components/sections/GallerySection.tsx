import React from 'react';
import { SectionID } from '../../types';
import { GALLERY_ITEMS } from '../../constants';
import { SectionTitle, SectionDescription } from '../SectionElements';

interface GallerySectionProps {
  isActive: boolean;
  onNavigate: (sectionId: SectionID) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ isActive }) => {
  const getTransitionClass = (delay: number) => 
    `transition-all duration-700 ${isActive ? `opacity-100 scale-100 delay-${delay}` : 'opacity-0 scale-95'}`;
  
  return (
    <div className="w-full max-w-7xl">
      <div className={`transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle>Gallery</SectionTitle>
        <SectionDescription>A visual journey through professional moments, achievements, and memorable experiences in HR, AI, and content creation.</SectionDescription>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY_ITEMS.map((item, index) => (
          <div key={index} className={`relative group overflow-hidden rounded-lg shadow-lg ${getTransitionClass(200 + index * 50)}`}>
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
