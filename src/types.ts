export interface Project {
  title: string;
  description: string;
  techStack: string[];
  type: string;
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}