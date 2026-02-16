import { Project, Skill, Experience, Education, Testimonial } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Gallery App",
    description: "Supabase, JavaScript, Tailwind CSS",
    image: "/images/image1.avif",
    category: "Full Stack",
    tags: ["Supabase", "JavaScript", "Tailwind CSS"],
    link: "https://image-gallety.vercel.app/",
    github: "https://github.com/SaraNaveed02/image-gallety",
  },
  {
    id: 2,
    title: "Weather App",
    description: "API, JavaScript, CSS, HTML",
    image: "/images/image2.avif",
    category: "Frontend",
    tags: ["API", "JavaScript", "CSS", "HTML"],
    link: "https://mmy-weather-app.netlify.app/",
    github: "https://github.com/SaraNaveed02/weather-app",
  },
  {
    id: 3,
    title: "Ramazan Calendar",
    description: "API, Tailwind, React",
    image: "/images/image3.jpg",
    category: "Frontend",
    tags: ["API", "Tailwind CSS", "React"],
    link: "https://ramzazn-calender.vercel.app/",
    github: "https://github.com/SaraNaveed02/Ramzazn_Calender",
  },
  {
    id: 4,
    title: "Kababjees",
    description: "HTML, CSS, JavaScript",
    image: "/images/image.jpg",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://my-kababjees.netlify.app/",
    github: "https://github.com/SaraNaveed02/my-kababjees",
  },
  {
    id: 5,
    title: "Password Generator",
    description: "HTML, CSS, JavaScript",
    image: "/images/image3.jpg",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://saranaveed02.github.io/Password-Generator/",
    github: "https://github.com/SaraNaveed02/Password-Generator",
  },
  {
    id: 6,
    title: "My Practice",
    description: "React, Tailwind, JavaScript",
    image: "/images/image5.png",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://react-assigment-4.vercel.app/",
    github: "https://github.com/SaraNaveed02/react-assigment-4",
  },
];


export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React", level: 95, category: "Frontend" },
  { id: 2, name: "Next.js", level: 95, category: "Frontend" },
  { id: 3, name: "TypeScript", level: 90, category: "Frontend" },
  { id: 4, name: "Tailwind CSS", level: 95, category: "Frontend" },
  { id: 5, name: "Framer Motion", level: 90, category: "Frontend" },
  { id: 6, name: "JavaScript", level: 95, category: "Frontend" },
  { id: 7, name: "BootStrap", level: 95, category: "Frontend" },

  // Backend
  { id: 8, name: "Supabase", level: 80, category: "Backend" },
  

  // Tools
  { id: 9, name: "Git", level: 90, category: "Tools" },


 
];

export const experience: Experience[] = [
  {
    id: 1,
    title: "Frontend Developmer",
    company: "Contract",
    duration: "2026 - Present",
    description:
      "Leading frontend development team and architecting scalable UI solutions",
    achievements: [
      "Improved page load time by 40%",
      "Led redesign of core platform UI",
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor's in Software Engineering",
    school: "Virtual University of Pakistan",
    year: "2026 - present",
  },
  {
    id: 2,
    degree: "Mordern Web and App Development",
    school: "Saylani (SMIT)",
    year: "2025 - persent",
    description: "Full-stack web development certification ",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Product Manager",
    company: "Tech Startup",
    message:
      "Exceptional developer with outstanding attention to detail. Delivered a perfect UI that exceeded our expectations.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Design Lead",
    company: "Creative Agency",
    message:
      "Brilliant collaboration between design and development. Brought our vision to life with amazing animations.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "CTO",
    company: "Enterprise Corp",
    message:
      "Professional, reliable, and incredibly talented. A joy to work with on complex projects.",
  },
];

export const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];
