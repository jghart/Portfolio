"use client";

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
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Updated: Changed rounded-none to rounded-2xl for that floating feel
      // Added: Subtle shadow-xl on hover to emphasize the "floating" effect
      className="flex flex-col overflow-hidden bg-background/40 backdrop-blur-xl border border-foreground/5 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-pop/10 hover:-translate-y-2 transition-all duration-500 group relative h-full"
    >
      {/* Subtle internal glow that activates on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pop/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Project Image - Now with rounded top corners to match the card */}
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow p-8 space-y-6 relative z-10">
        <h3 className="text-2xl font-bold tracking-tight group-hover:text-pop transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Softer, rounded tags to match the card shape */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-foreground/5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-6 pt-6 mt-auto">
          {link && link !== "#" && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[12px] font-bold hover:text-pop transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[12px] font-bold hover:text-pop transition-colors"
            >
              <Github size={14} /> Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;