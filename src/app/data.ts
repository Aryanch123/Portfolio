import { Github, Linkedin } from "lucide-react";
import ArchitectureImg from "./Architecture.png";
import NovaImg from "./nova1.png";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const INTRO = {
  headline: "Aryan Chauhan",
  subheadline: "Full Stack Developer | AI & Data Science | Cloud Automation",
};

export const ABOUT = {
  title: "About Me",
  text: "I am a Full Stack Developer with hands-on experience in React, Next.js, Azure, Python, and AI workflows. I build user-focused web applications, automated backend systems, and data-driven AI tools that solve real problems and improve operational efficiency. \n I enjoy bringing together cloud infrastructure, modern frontend experiences, and intelligent automation to deliver scalable projects from concept to deployment.",
};

export const EXPERIENCE = [
  {
    company: "Milestone Global Money Mart Pvt. Ltd. (MNivesh)",
    designation: "Full Stack Developer (Intern → Full-Time)",
    timeline: "Feb 2025 – Present",
    location: "Rithala, India",
    details: [
      "Developed a full-fledged HR Onboarding System and built multi-step forms with OTP verification and real-time validation using React, Bootstrap, and FastAPI with Azure Blob integration, improving onboarding efficiency by 40% through automation and secure data handling.",
      "Designed and deployed a Leaderboard & Contact Management Dashboard, aggregating MongoDB data and improving reporting speed by 50%.",
      "Developed an Operations Dashboard to track performance metrics of relationship managers across financial years.",
      "Implemented an Asset Management System with real-time synchronization to Azure storage.",
      "Created automation pipelines using Python (Azure Functions) to push data from SQL to Zoho API.",
      "Built an Insurance Lead Update Portal (MERN stack) with automatic header detection, reducing data entry time by 60%.",
      "Contributed to AI-powered Azure Function Apps integrating APIs with ML modules for improved decision-making.",
      "Collaborated with cross-functional teams and deployed scalable applications using Azure DevOps CI/CD pipelines.",
    ],
  },
  {
    company: "Prodigal AI",
    designation: "AI Agentic Intern (LLM Deployment)",
    timeline: "Mar 2025 – May 2025",
    location: "Remote",
    details: [
      "Collaborated on research publications, peer reviews, and open-source contributions.",
      "Conducted research on LLM architectures, fine-tuning, and Retrieval-Augmented Generation (RAG).",
      "Developed tokenization strategies, evaluation metrics, and efficient fine-tuning techniques.",
      "Implemented LLM-based AI agents with multimodal capabilities and bias mitigation strategies.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "TravelNest",
    description: "High-performance booking platform built with server components and modern web tooling.",
    details: [
      "Built a high-performance web application using server components architecture.",
      "Integrated authentication using NextAuth and implemented map & calendar-based booking features.",
      "Optimized UI/UX for a seamless and engaging user experience.",
    ],
    stack: ["React", "Next.js 13", "Prisma", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Aryanch123/Travel-nest",
    image: "project-1",
    featured: false,
  },
  {
    name: "NovaExpress – Microservices E-Commerce Platform",
    description: "Production-style microservices architecture for e-commerce with event-driven workflows.",
    details: [
      "Built a production-style microservices architecture with API Gateway, Auth, Product, Order, and Payment services.",
      "Implemented event-driven communication using RabbitMQ for asynchronous order and payment processing.",
      "Integrated Redis caching for high-speed product retrieval and improved system performance.",
      "Containerized services using Docker Compose, enabling scalable and resilient deployments.",
    ],
    stack: ["Node.js", "React", "MongoDB", "Redis", "RabbitMQ", "Docker"],
    github: "https://github.com/Aryanch123/NovaExpress-Microservices-E-Commerce-Platform",
    image: NovaImg,
    featured: true,
  },
  {
    name: "LangChain Data Analysis AI System",
    description: "Agent-based data analysis system with RAG and semantic retrieval for context-aware insights.",
    details: [
      "Developed an agent-based data analysis system combining autonomous workflows with RAG for context-aware insights.",
      "Implemented data exploration, statistical analysis, and multi-step reasoning pipelines using AI agents.",
      "Built semantic retrieval with vector stores to enhance analysis using external knowledge.",
    ],
    stack: ["Python", "LangChain", "RAG", "Pandas"],
    github: "https://github.com/Aryanch123/LangChain-Data-Analysis-AI-System",
    image: "project-3",
    featured: false,
  },
];

export const SKILLS = [
  { name: "Programming Languages", description: "Python, JavaScript, HTML, CSS" },
  { name: "Frameworks", description: "React, React Native, Next.js, Tailwind CSS" },
  { name: "Cloud, Backend & DB", description: "Azure, PostgreSQL, MySQL, MongoDB" },
  { name: "Tools", description: "Figma, UI/UX, Git, GitHub Actions, Linux, Docker, Kubernetes" },
  { name: "AI & Data Science", description: "Scikit-learn, Pandas, NumPy, Matplotlib, LangChain, RAG, ML, LLMs, Data Analysis" },
];

export const EDUCATION = [
  {
    institute: "UNIVERSITY SCHOOL OF AUTOMATION & ROBOTICS, GGSIPU",
    degree: "B.Tech (Artificial Intelligence and Data Science) | CGPA: 8.4",
    timeline: "2021 - 2025",
    location: "Delhi, India",
    highlights: [
      "Major: Artificial Intelligence and Data Science",
      "Relevant coursework: Machine Learning, NLP, Data Structures, Database Systems",
    ],
    keyCoursework: ["Artificial Intelligence", "Machine Learning", "Data Science", "DBMS"],
  },
  {
    institute: "DHRUVA PUBLIC SCHOOL, JAI VIHAR",
    degree: "Class 12 (CBSE) | 87%",
    timeline: "2019 - 2021",
    location: "Delhi, India",
    highlights: [
      "Completed CBSE Class 12 with 87% overall.",
    ],
  },
];

export const CERTIFICATIONS = [
  { title: "IBM SkillsBuild Summer Intern Certificate" },
  { title: "100 Days Badge on LeetCode" },
  { title: "Completed DSA Course from Coding Blocks (Feb ’24 – Aug ’24)" },
  { title: "Intercollege Dramatics Winner at GGSIPU Fest - ANUGOONJ" },
  { title: "Conducted Machine Learning Workshops as ML Head at GGSIPUEDC" },
];

export const CONTACT = {
  title: "Get In Touch",
  text: "My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
  email: "rajaryagautam@gmail.com",
  phone: "+91 7827511944",
  socials: [
    { name: "GitHub", url: "https://github.com/Aryanch123", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aryan-chauhan-b43584153/", icon: Linkedin },
  ],
};
