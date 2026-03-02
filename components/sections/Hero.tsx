"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import { MapPin, ArrowRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Animation physics for the Hero section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  const { name, label, location, profiles } = resumeData.basics;

  return (
    <section id="hero" className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center md:py-32 overflow-hidden">
      <motion.div 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Animates every time you scroll to the top
      >
        {/* Local Badge */}
        <motion.div variants={itemVariants} className="mx-auto flex w-fit items-center space-x-2 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:bg-muted">
          <MapPin size={12} className="text-primary" />
          <span>Available for roles in {location}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi,I am <span className="text-primary">{name}</span>
        </motion.h1>
        
        {/* Summary */}
        <motion.p variants={itemVariants} className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          A <span className="font-semibold text-foreground">{label}</span> building scalable, 
          AI-integrated web applications with a focus on modern user experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center space-y-3 pt-6 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href="#projects"
            className="flex items-center space-x-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <span>View My Work</span>
            <ArrowRight size={16} />
          </a>
          
          <div className="flex space-x-2">
            {profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border p-3 text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
                aria-label={profile.network}
              >
                {profile.network === "GitHub" ? <Github size={20} /> : <Linkedin size={20} />}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;