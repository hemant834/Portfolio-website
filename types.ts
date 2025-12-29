
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}
