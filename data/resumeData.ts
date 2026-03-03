export const resumeData = {
  basics: {
    name: "Joe Ghart", // Replace with your actual name
    label: "Full Stack Developer",
    email: "appiahjoe88@gmail.com",
    phone: "647-XXX-XXXX", // Toronto/GTA Area Code
    website: "https://yourportfolio.com",
    location: "Toronto, ON",
    summary: "Dedicated Full Stack Developer focused on building scalable web solutions and AI-integrated applications. Passionate about clean code, user-centric design, and solving complex problems with modern technology.",
    profiles: [
      {
        network: "LinkedIn",
        url: "www.linkedin.com/in/jg-devoloper",
      },
      {
        network: "GitHub",
        url: "https://github.com/jghart",
      }
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Laravel", "MongoDB", "MySQL", "PHP"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Postman", "Vercel", "AI APIs (Gemini/OpenAI)"]
    }
  ],
  projects: [
    {
      title: "AI-Powered Resume Analyzer",
      description: "Engineered a client-side application that parses user resumes and evaluates them against targeted job descriptions. Integrated Puter.js for seamless cloud execution and leveraged AI APIs to generate real-time, actionable ATS (Applicant Tracking System) optimization feedback, helping candidates improve their match rates.",
      tech: ["React", "React Router", "Puter.js", "Tailwind CSS", "Gemini AI"],
      link: "https://your-demo-link.com", // Replace with your Vercel/Puter link when ready
      github: "https://github.com/yourusername/resume-analyzer", // Replace with your GitHub URL
      featured: true,
      imageUrl: "/images/resume-analyzer.jpg" // Remember to add this image later!
    },
    {
      title: "Portfolio Website",
      description: "A high-performance, responsive portfolio featuring a data-driven architecture and a print-optimized resume engine.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/yourusername/portfolio",
      featured: true
    },
    {
      title: "Yoghurt E-Commerce Platform",
      description: "Developing a modern, high-performance business website for a local yoghurt brand. Architected with a component-driven React frontend to ensure a seamless and responsive user experience across all devices.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
      link: "#",
      github: "https://github.com/yourusername/yoghurt-app",
      featured: true,
      imageUrl: "/images/yoghurt-site.jpg"
    },
    {
      title: "Mobile Capstone Application",
      description: "Collaborating within an Agile team of 6 developers to build a comprehensive mobile application. Managing state, navigating complex UI challenges, and integrating cross-platform features.",
      tech: ["React Native", "TypeScript", "Git", "Agile/Scrum"],
      link: "#",
      github: "https://github.com/yourusername/capstone",
      featured: true,
      imageUrl: "/images/capstone-app.jpg"
    }
  ],
  education: [
    {
      institution: "College in Etobicoke",
      area: "Computer Programming",
      studyType: "Diploma",
      location: "Etobicoke, ON",
      endDate: "May 2026"
    }
  ]
};

export type ResumeDataType = typeof resumeData;