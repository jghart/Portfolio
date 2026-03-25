export const resumeData = {
  basics: {
    name: "Joe Ghart",
    title: "Full-Stack Developer",
    description:
      "I build responsive web applications, backend systems, and practical business solutions.",
    email: "appiahjoe88@gmail.com",
    summary:
      "I am a Full-Stack Developer focused on building clean, reliable, and user-friendly software. My experience includes frontend development, REST API integration, database design, and backend-driven applications using technologies such as React, Next.js, Laravel, Java, Spring Boot, and SQL. I enjoy creating practical solutions that solve real business problems and deliver a polished user experience.",
    profiles: [
      {
        network: "GitHub",
        username: "jghart",
        url: "https://github.com/jghart",
      },
      {
        network: "LinkedIn",
        username: "jg-developer",
        url: "https://www.linkedin.com/in/jg-developer",
      },
      {
        network: "Email",
        username: "appiahjoe88@gmail.com",
        url: "mailto:appiahjoe88@gmail.com",
      },
    ],
  },

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
      demo: "https://joeghart.vercel.app/",
      image: "/images/portfolio.png",
    },
    {
      title: "Resumind — AI Resume Analyzer",
      description:
        "An AI-powered platform that provides instant, structured feedback on resumes against specific job descriptions, featuring ATS scoring, actionable insights, and an integrated Kanban job application tracker.",
      highlights: [
        "Engineered a fully serverless, client-side architecture leveraging Puter.js for authentication, cloud file storage, and Claude AI integration",
        "Implemented real-time client-side PDF processing and automated thumbnail generation using pdfjs-dist",
        "Built an interactive drag-and-drop Kanban board for tracking job applications using Zustand for state management",
      ],
      techStack: ["React Router v7", "TypeScript", "Tailwind CSS", "Zustand", "Puter.js", "Claude AI"],
      github: "https://github.com/jghart/ai-resume-analyzer",
      demo: "https://ai-resume-analyzer-eight-kohl.vercel.app/",
      image: "/images/resumind.png",
    }
    ,
  ],
} as const;