
import { LucideIcon } from 'lucide-react';

export enum SectionID {
  Home = 'home',
  About = 'about',
  Resume = 'resume',
  Projects = 'projects',
  Gallery = 'gallery',
  Testimonials = 'testimonials',
  Contact = 'contact',
}

export interface NavItem {
  id: SectionID;
  label: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  institution: string;
  date: string;
  details?: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string;
  icon: LucideIcon;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}
