"use client"; // Required for Framer Motion

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tech, link, github, imageUrl }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Animates every time 20% of the card is visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col overflow-hidden bg-background border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Image Container */}
      {imageUrl && (
        <div className="relative w-full h-48 border-b overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow p-6 space-y-4">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-6 mt-auto">
          {link && link !== "#" && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              <Github size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;