import React from 'react';
import { SectionID } from '../../types';
import ContactForm from '../ContactForm';
import { MapPin, Mail, Phone, Linkedin, Youtube, Twitter, Instagram } from 'lucide-react';
import { SectionTitle, SectionDescription } from '../SectionElements';

interface ContactSectionProps {
  isActive: boolean;
  onNavigate: (sectionId: SectionID) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isActive }) => {
  const getTransitionClass = (delay: number) => 
    `transition-all duration-700 ${isActive ? `opacity-100 translate-y-0 delay-${delay}` : 'opacity-0 translate-y-10'}`;

  return (
    <div className="w-full max-w-6xl">
      <div className={getTransitionClass(0)}>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionDescription>Have a project in mind, a question, or just want to say hello? I'd love to hear from you. Let's connect and explore opportunities.</SectionDescription>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 md:p-12">
        <div className={getTransitionClass(200)}>
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/10 p-3 rounded-lg"><MapPin className="w-6 h-6 text-cyan-400" /></div>
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-slate-400">Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/10 p-3 rounded-lg"><Mail className="w-6 h-6 text-cyan-400" /></div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-slate-400">keshav.gautam@lpoftnepal.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/10 p-3 rounded-lg"><Phone className="w-6 h-6 text-cyan-400" /></div>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-slate-400">+977 98XXXXXXXX</p>
              </div>
            </div>
          </div>
          <h4 className="text-lg font-bold text-white mt-10 mb-4">Follow Me</h4>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-cyan-600 transition-all"><Linkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-cyan-600 transition-all"><Youtube /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-cyan-600 transition-all"><Twitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-cyan-600 transition-all"><Instagram /></a>
          </div>
        </div>
        <div className={getTransitionClass(400)}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
