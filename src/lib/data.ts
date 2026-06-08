import { Project, Skill, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'A productivity app for managing tasks with drag-and-drop and real-time sync.',
    tech: ['React', 'TypeScript', 'Firebase'],
    link: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Displays live weather data with charts and multi-city support.',
    tech: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    link: '#',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS / Tailwind', level: 85 },
  { name: 'SQL / NoSQL', level: 70 },
  { name: 'Git & DevOps', level: 72 },
];
