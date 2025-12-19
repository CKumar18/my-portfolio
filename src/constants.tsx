import type { Project, Experience, Education, SkillCategory } from './types';

export const CONTACT_INFO = {
  name: "Sai Kumar Bandi",
  role: "Tech Professional & Web Developer",
  email: "saikumarmhop2404@gmail.com",
  phone: "+91 7893343900",
  location: "Hyderabad, India",
  linkedin: "linkedin.com/in/saikumarbandi7",
  github: "github.com/CKumar18",
  tagline: "Transforming ideas into interactive digital experiences."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Limitless Greenz",
    role: "Web Developer / Tech Consultant",
    period: "09/2024 - 09/2025",
    location: "Hyderabad",
    description: "Creative and marketing agency with a wide range of services including video production and event management.",
    achievements: [
      "Web Development: HTML5, CSS3, JavaScript, Wix (Advanced Customization), Responsive Design.",
      "UI/UX Design: Layout Planning, User-Centric Design, Cross-Browser Compatibility.",
      "Consulting: Client Requirement Analysis, Technical Consultation, Solution Planning.",
      "Website Optimization: Performance Optimization, SEO Basics, Mobile Optimization.",
      "Tools: VS Code, Browser DevTools."
    ]
  },
  {
    company: "Self-Employed",
    role: "Freelance (Website Development & Maintenance)",
    period: "10/2025 - Present",
    location: "Remote",
    description: "Providing independent web development solutions.",
    achievements: [
      "Delivering custom website development and ongoing maintenance for diverse clients.",
      "Managing full project lifecycles from requirement gathering to deployment."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Ecommerce Website (Nike Clone)",
    type: "Personal Project",
    description: "Developed a responsive Nike-inspired e-commerce clone. Implemented product listings and interactive UI components while applying modern UI/UX principles.",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "https://github.com/CKumar18/Ecommerce_website-Nike-"
  },
  {
    title: "Cyber-SafeNet",
    type: "Security Tool",
    description: "A Phishing Website Detector using Python for backend logic and machine learning, with a web interface. showcases phishing detection and full-stack integration.",
    techStack: ["Python", "HTML", "CSS", "JavaScript", "Machine Learning"],
    link: "https://github.com/CKumar18/CyberSafeNet"
  },
  {
    title: "Car Lane Detection",
    type: "Semi-Autonomous System",
    description: "Developed a semi-autonomous car lane detection system implementing image processing techniques to detect and visualize road lane markings from video streams.",
    techStack: ["Python", "NumPy", "OpenCV", "Image Processing"],
    link: "https://github.com/CKumar18/Car-Lane-Detection-using-OpenCV-Numpy"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Core Development",
    skills: ["HTML5", "CSS3", "JavaScript", "Python", "Wix"]
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "GitHub", "Jupyter Notebook", "Browser DevTools"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Client Communication", "Team Collaboration", "Time Management"]
  },
  {
    title: "Interests",
    skills: ["Sports", "Streaming", "Designing", "Video Editing", "Volunteering"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "St Peter's Engineering College",
    degree: "BTech in Computer Science",
    period: "06/2020 - 04/2024",
    grade: "7.74 GPA",
    details: "Data Structures, DBMS, OS, Computer Networks, ML, AI"
  },
  {
    institution: "Loyola Academy Junior College",
    degree: "Intermediate (10+2)",
    period: "06/2018 - 03/2020",
    grade: "6.97 GPA"
  },
  {
    institution: "Sat Gyan High School",
    degree: "10th Grade",
    period: "04/2018",
    grade: "8.5 GPA"
  }
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];