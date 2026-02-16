// Data types for the portfolio

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
  category: "Frontend" | "Backend" | "Tools" | "Design";
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  year: string;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  image?: string;
}
