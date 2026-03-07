import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const resumeData = {
  basics: {
    name: "Joe Ghart",
    title: "Full-Stack Developer",
    description:
      "Full-Stack Developer focused on building responsive web applications, backend systems, and practical business solutions using React, Next.js, Laravel, Java, and SQL.",
    email: "your-email@example.com",
    location: "Toronto, Ontario, Canada",
    website: "https://your-real-portfolio-url.com",
    summary:
      "I am a Full-Stack Developer with experience building modern web applications and backend-driven systems. My work includes responsive frontend development, REST API integration, database design, and full project implementation using technologies such as React, Next.js, Laravel, Java, Spring Boot, and SQL. I enjoy creating clean, efficient, and user-focused solutions that solve real business problems.",
    profiles: [
      {
        network: "GitHub",
        username: "jghart",
        url: "https://github.com/jghart",
        icon: Github,
      },
      {
        network: "LinkedIn",
        username: "jg-developer",
        url: "https://www.linkedin.com/in/jg-developer",
        icon: Linkedin,
      },
      {
        network: "Email",
        username: "appiahjoe88@gmail.com",
        url: "mailto:your-email@example.com",
        icon: Mail,
      },
    ],
  },

  education: [
    {
      institution: "Humber Polytechnic",
      area: "Software Development",
      studyType: "Diploma",
      startDate: "2024",
      endDate: "2026",
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
      category: "Backend",
      items: ["Laravel", "Java", "Spring Boot", "REST APIs", "PHP"],
    },
    {
      category: "Database",
      items: ["MySQL", "Oracle", "SQL Server", "PostgreSQL"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "Figma"],
    },
  ],

  projects: [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase projects, technical skills, and contact information in a clean recruiter-friendly layout.",
      highlights: [
        "Built with App Router and reusable UI components",
        "Responsive design optimized for desktop and mobile",
        "Improved presentation of projects and technical profile",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/jghart/Portfolio",
      demo: "https://your-live-site-url.com",
      image: "/images/portfolio.png",
    },
    {
      title: "Student Program Management System",
      description:
        "A Laravel-based system for managing students and programs with relational models, migrations, seeders, and structured CRUD operations.",
      highlights: [
        "Designed Student and Program models with relationships",
        "Implemented database migrations and seeders",
        "Built maintainable backend structure for academic data management",
      ],
      techStack: ["Laravel", "PHP", "MySQL", "Blade"],
      github: "https://github.com/your-real-repo",
      demo: "",
      image: "/images/student-program.png",
    },
    {
      title: "Vehicle Maintenance & Service Management System",
      description:
        "A business-oriented service management platform for handling customer records, vehicle servicing, scheduling, invoicing, payments, inventory, and reporting.",
      highlights: [
        "Designed modules for customer, vehicle, and service management",
        "Integrated backend APIs and database workflows",
        "Focused on real-world business process automation",
      ],
      techStack: ["JavaFX", "Spring Boot", "Oracle", "Spring Security"],
      github: "https://github.com/your-real-repo",
      demo: "",
      image: "/images/vehicle-system.png",
    },
  ],
};