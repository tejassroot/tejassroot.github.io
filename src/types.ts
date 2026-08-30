export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface ExperienceRole {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Independent / Freelance';
  description?: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  id: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Core';
    highlight?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  cliCommand?: string;
  cliOutput?: string[];
  metrics: { label: string; value: string }[];
}

export interface MethodologyStep {
  step: string;
  title: string;
  summary: string;
  details: string[];
  deliverable: string;
  icon: string;
}

export interface HallOfFameCompany {
  name: string;
  domain: string;
  category: string;
  description: string;
  verified: boolean;
  type: 'Responsible Disclosure' | 'Bug Bounty' | 'VDP';
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress';
  description: string;
  badgeCode?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}
