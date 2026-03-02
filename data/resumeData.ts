export const resumeData = {
  basics: {
    name: "Your Name", // Replace with your actual name
    label: "Full Stack Developer",
    email: "your.email@example.com",
    phone: "647-XXX-XXXX", // Toronto/GTA Area Code
    website: "https://yourportfolio.com",
    location: "Toronto, ON",
    summary: "Dedicated Full Stack Developer focused on building scalable web solutions and AI-integrated applications. Passionate about clean code, user-centric design, and solving complex problems with modern technology.",
    profiles: [
      {
        network: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
      },
      {
        network: "GitHub",
        url: "https://github.com/yourusername",
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
      title: "AI Resume Analyzer",
      description: "An AI-powered tool that parses resumes and provides optimization feedback using Gemini AI. Helps candidates optimize for Applicant Tracking Systems (ATS).",
      tech: ["Next.js", "TypeScript", "Gemini AI", "Puter.js", "Tailwind"],
      link: "https://your-demo-link.com",
      github: "https://github.com/yourusername/resume-analyzer",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A high-performance, responsive portfolio featuring a data-driven architecture and a print-optimized resume engine.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/yourusername/portfolio",
      featured: true
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