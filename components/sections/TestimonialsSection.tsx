import React from 'react';
import { SectionID, Testimonial } from '../../types';
import { TESTIMONIALS_DATA } from '../../constants';
import { Star } from 'lucide-react';
import { SectionTitle, SectionDescription } from '../SectionElements';

interface TestimonialsSectionProps {
  isActive: boolean;
  onNavigate: (sectionId: SectionID) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isActive }) => {
  const getTransitionClass = (delay: number) => 
    `transition-all duration-700 ${isActive ? `opacity-100 translate-y-0 delay-${delay}` : 'opacity-0 translate-y-10'}`;

  return (
    <div className="w-full max-w-6xl">
       <div className={getTransitionClass(0)}>
        <SectionTitle>Testimonials</SectionTitle>
        <SectionDescription>Discover what colleagues, clients, and collaborators say about their experience working with me.</SectionDescription>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {TESTIMONIALS_DATA.map((testimonial, index) => (
          <div key={index} className={`bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 ${getTransitionClass(200 + index * 100)}`}>
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-slate-600" />
              <div>
                <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                <p className="text-sm text-cyan-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-slate-400 italic mb-4">"{testimonial.text}"</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
