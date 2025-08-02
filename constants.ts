
import {
  Home,
  User,
  FileText,
  Briefcase,
  Camera,
  MessageSquare,
  Mail,
  Award,
  CheckCircle,
  Youtube,
  Users,
  GraduationCap,
  Trophy,
} from 'lucide-react';
import { NavItem, Skill, TimelineItem, Project, GalleryItem, Testimonial, SectionID } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: SectionID.Home, label: 'Home', icon: Home },
  { id: SectionID.About, label: 'About', icon: User },
  { id: SectionID.Resume, label: 'Resume', icon: FileText },
  { id: SectionID.Projects, label: 'Projects', icon: Briefcase },
  { id: SectionID.Gallery, label: 'Gallery', icon: Camera },
  { id: SectionID.Testimonials, label: 'Testimonials', icon: MessageSquare },
  { id: SectionID.Contact, label: 'Contact', icon: Mail },
];

export const ABOUT_SKILLS: Skill[] = [
  { name: 'Prompt Engineering', icon: Award },
  { name: 'Fashion Choreographer', icon: CheckCircle },
  { name: 'YouTube Content', icon: Youtube },
  { name: 'Leadership', icon: Users },
  { name: 'Public Relations', icon: MessageSquare },
];

export const RESUME_EDUCATION: TimelineItem[] = [
  {
    title: 'Master of Business Administration (MBA)',
    subtitle: 'HR Management Specialization',
    institution: 'DAV Business College',
    date: '2021 - 2023',
  },
  {
    title: 'Certified Prompt Engineer',
    subtitle: 'AI & Machine Learning',
    institution: 'Vanderbilt University',
    date: '2023',
  },
];

export const RESUME_EXPERIENCE: TimelineItem[] = [
  {
    title: 'Founder & CEO',
    subtitle: 'LPOFT Nepal',
    institution: '',
    date: '2022 - Present',
    details: [
      'Leading innovative initiatives in technology and education.',
      'Developing AI-driven solutions for business optimization.',
      'Managing cross-functional teams and strategic partnerships.',
    ],
  },
  {
    title: 'Fashion Choreographer & Trainer',
    subtitle: 'Freelance',
    institution: '',
    date: '2020 - Present',
    details: [
      'Choreographing high-profile fashion shows and cultural events.',
      'Training and mentoring aspiring models and performers.',
      'Collaborating with leading fashion brands and designers.',
    ],
  },
  {
    title: 'Content Creator',
    subtitle: 'YouTube & Digital Media',
    institution: '',
    date: '2019 - Present',
    details: [
      'Creating engaging educational and entertainment content.',
      'Building and nurturing online communities across multiple platforms.',
      'Leveraging AI tools for content strategy and optimization.',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Educational and Training',
    description: 'A review of my academic journey and specialized training.',
    image: 'https://picsum.photos/seed/project1/800/400',
    tags: 'MBA • Prompt Engineering • Leadership',
    icon: GraduationCap,
  },
  {
    title: 'Achievements and Recognitions',
    description: 'A showcase of my key achievements and industry awards.',
    image: 'https://picsum.photos/seed/project2/800/400',
    tags: 'Industry Awards • Certifications • Recognition',
    icon: Trophy,
  },
  {
    title: 'Leadership and Organizational Roles',
    description: 'Highlighting my leadership roles and impact.',
    image: 'https://picsum.photos/seed/project3/800/400',
    tags: 'LPOFT Nepal • Team Leadership • Innovation',
    icon: Users,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: 'https://picsum.photos/seed/gallery1/600/400', alt: 'Professional Networking Event', title: 'Professional Networking' },
  { src: 'https://picsum.photos/seed/gallery2/600/400', alt: 'AI Technology Innovation', title: 'AI Innovation' },
  { src: 'https://picsum.photos/seed/gallery3/600/400', alt: 'Leadership Team Building', title: 'Team Leadership' },
  { src: 'https://picsum.photos/seed/gallery4/600/400', alt: 'Content Creation Studio', title: 'Content Creation' },
  { src: 'https://picsum.photos/seed/gallery5/600/400', alt: 'Awards Recognition Event', title: 'Awards & Recognition' },
  { src: 'https://picsum.photos/seed/gallery6/600/400', alt: 'Fashion Choreography Training', title: 'Fashion Choreography' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Dr. Rajesh Sharma',
    role: 'Dean, DAV Business College',
    image: 'https://picsum.photos/seed/test1/150/150',
    text: "Keshav's innovative approach to integrating AI with traditional HR is commendable. He was an exceptional student with remarkable dedication.",
  },
  {
    name: 'Priya Adhikari',
    role: 'HR Director, Tech Solutions Inc.',
    image: 'https://picsum.photos/seed/test2/150/150',
    text: 'Working with Keshav on AI-driven HR solutions was incredible. His expertise in prompt engineering creates perfect synergy for modern challenges.',
  },
  {
    name: 'Arun Thapa',
    role: 'Fashion Designer',
    image: 'https://picsum.photos/seed/test3/150/150',
    text: "Keshav's choreography and creative vision have elevated our fashion shows. His ability to blend tradition with modern innovation is remarkable.",
  },
  {
    name: 'Sameer Ghimire',
    role: 'Tech Entrepreneur',
    image: 'https://picsum.photos/seed/test4/150/150',
    text: "Keshav's leadership at LPOFT Nepal is visionary. His work in AI and content creation is inspiring the next generation of entrepreneurs.",
  },
];
