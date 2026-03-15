import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Restaurant Website',
    description: 'A fully responsive Restaurant Website with stripe integration and a custom CMS.',
    tags: [, 'CSS3', 'JavaScript', 'HTML5'],
    liveUrl: 'https://rangilorajwadounlimited.netlify.app/',
    githubUrl: 'https://github.com/hemant834/Rangilo_RajwadoUnlimited',
    image: "/certificates/website.jpg",
  },
  {
    id: '2',
    title: 'MultiMart-Ecommerce-Website',
    description: 'Analytics dashboard for a subscription-based service with real-time data visualization.',
    tags: ['React', 'HTML5', 'CSS3', 'FrameWork'],
    liveUrl: 'https://multimart-ecommerce.onrender.com/',
    githubUrl: 'https://github.com/hemant834/MultiMart-Ecommerce-Website?tab=readme-ov-file',
    image: "/certificates/Multimart.jpg",
  },
  {
    id: '3',
    title: 'Hemant Kumar(ME) | React Developer Portfolio',
    description: 'Portfolio of Hemant Kumar(ME), a React frontend developer creating responsive websites, eCommerce applications, and modern user interfaces.',
    tags: ['REACT.js', 'OpenAI', 'JavaScript', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
    image: "/certificates/portfolio.jpg",
  },
 
];

export const SKILL_GROUPS = {
  FRONTEND: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'bg-[#61DAFB]' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'bg-[#F7DF1E]' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'bg-[#06B6D4]' },
    { name: 'Vue.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s', color: 'bg-[#764ABC]' },
  ],
  BACKEND: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-[#339933]' },
    { name: 'core Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'bg-[#3776AB]' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'bg-[#47A248]' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'bg-[#4479A1]' },  ],
  DEVOPS: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'bg-[#F05032]' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', color: 'bg-[#FF6C37]' }
  ]
};

export const NAV_LINKS = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CERTIFICATE', href: '#certificate' },
  { name: 'CONTACT', href: '#contact' }
];
