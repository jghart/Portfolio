"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import ProjectCard from "@/components/ui/ProjectCard";
import { FolderGit2 } from "lucide-react";

const Projects = () => {
  // We only want to map through projects marked as "featured"
  const featuredProjects = resumeData.projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 border-t border-muted">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-10 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <FolderGit2 className="text-primary" />
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of recent applications ve engineered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;