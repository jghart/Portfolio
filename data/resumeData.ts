import { Github, Linkedin, Mail } from "lucide-react";

export const resumeData = {
  basics: {
    name: "Joe Ghart",
    title: "Full-Stack Developer",
    description:
      "I build responsive web applications, backend systems, and practical business solutions using React, Next.js, Laravel, Java, and SQL.",
    email: "your-email@example.com",
    location: "Toronto, Ontario, Canada",
    website: "https://your-portfolio-url.com",
    summary:
           "I am a Full-Stack Developer focused on building clean, reliable, and user-friendly software. My experience includes frontend development, REST API integration, database design, and backend-driven applications using technologies such as React, Next.js, Laravel, Java, Spring Boot, and SQL. I enjoy creating practical solutions that solve real business problems and deliver a polished user experience.",
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
        username: "your-email@example.com",
        url: "mailto:your-email@example.com",
        icon: Mail,
      },
    ],
  },

  education: [
    {
      institution: "Humber Polytechnic",
      area: "Computer Programming / Software Development",
      studyType: "Diploma",
      startDate: "2023",
      endDate: "2026",
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Laravel", "Java", "Spring Boot", "PHP", "REST APIs"],
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
        "A modern personal portfolio built to showcase projects, technical skills, and contact information in a clean and recruiter-friendly layout.",
      highlights: [
        "Built with reusable components and responsive layouts",
        "Designed for strong readability and polished presentation",
        "Focused on performance, clarity, and modern UI structure",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/jghart/Portfolio",
      demo: "https://your-live-portfolio-url.com",
      image: "/images/portfolio.png",
    },
    {
      title: "Student Program Management System",
      description:
        "A Laravel-based academic management application for handling students, programs, relationships, and structured CRUD operations.",
      highlights: [
        "Designed Student and Program models with proper relationships",
        "Implemented migrations and seeders for database setup",
        "Built a structured backend workflow for managing academic records",
      ],
      techStack: ["Laravel", "PHP", "MySQL", "Blade"],
      github: "https://github.com/your-real-repo",
      demo: "",
      image: "/images/student-program.png",
    },
    {
      title: "Vehicle Maintenance & Service Management System",
      description:
        "A business-oriented platform for managing customer records, vehicle servicing, scheduling, invoicing, payments, and reporting.",
      highlights: [
        "Designed modules for customer, vehicle, and service management",
        "Integrated backend APIs with database workflows",
        "Focused on real-world business process automation and usability",
      ],
      techStack: ["JavaFX", "Spring Boot", "Oracle", "Spring Security"],
      github: "https://github.com/your-real-repo",
      demo: "",
      image: "/images/vehicle-system.png",
    },
  ],
} as const;