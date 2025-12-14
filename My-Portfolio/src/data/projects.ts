// Project data - Edit this file to update your projects
// Images are stored in src/assets/images/projects/

import evotingImage from '../../assets/images/projects/evoting-system.png';
import solarImage from '../../assets/images/projects/solar-monitor.png';
import snapAttendImage from '../../assets/images/projects/snap-attend.png';
import foodDeliveryImage from '../../assets/images/projects/food-delivery.png';
import schedulerImage from '../../assets/images/projects/scheduler.png';
import activePlateImage from '../../assets/images/projects/active-plate.png';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: 'Completed' | 'In Progress';
  featured: boolean;
  // TODO: Add your GitHub and demo links here
  github?: string; // Example: 'https://github.com/your-username/project-repo'
  demo?: string;   // Example: 'https://your-project-demo.com'
}

export const projects: Project[] = [
  {
    title: 'Electronic Voting System using Blockchain',
    description: 'Blockchain-based voting system with real-time dashboard ensuring transparency and security. Final year project with advanced cryptographic implementations.',
    image: evotingImage,
    tags: ['React', 'Node.js', 'Blockchain', 'MongoDB', 'Real-time'],
    status: 'Completed',
    featured: true,
    // TODO: Add your links
    github: '', // Add your GitHub link here
    demo: '',   // Add your demo link here
  },
  {
    title: 'Snap Attend',
    description: 'Cross-platform mobile attendance application built with React Native for seamless attendance tracking and management.',
    image: snapAttendImage,
    tags: ['React Native', 'Firebase', 'Mobile App'],
    status: 'Completed',
    featured: false,
    github: '',
    demo: '',
  },
  {
    title: 'Smart Solar Energy Monitor',
    description: 'Real-time MERN-based energy dashboard for homeowners to monitor and optimize their solar panel efficiency.',
    image: solarImage,
    tags: ['MERN Stack', 'Real-time', 'IoT', 'Dashboard'],
    status: 'In Progress',
    featured: true,
    github: '',
    demo: '',
  },
  {
    title: 'Food Delivery Platform',
    description: 'Full-stack food delivery application with real-time order tracking and secure payment integration.',
    image: foodDeliveryImage,
    tags: ['React', 'Node.js', 'Express', 'Firebase'],
    status: 'Completed',
    featured: false,
    github: '',
    demo: '',
  },
  {
    title: 'The Scheduler',
    description: 'Full CRUD scheduling system showcasing REST API proficiency with intuitive user interface.',
    image: schedulerImage,
    tags: ['React', 'REST API', 'Node.js', 'MongoDB'],
    status: 'Completed',
    featured: false,
    github: '',
    demo: '',
  },
  {
    title: 'Active Plate',
    description: 'Culinary web platform with beautiful UI design focused on healthy recipes and meal planning.',
    image: activePlateImage,
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
    status: 'Completed',
    featured: false,
    github: '',
    demo: '',
  },
];
