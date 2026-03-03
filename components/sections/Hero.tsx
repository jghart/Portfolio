"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { motion, Variants} from "framer-motion";

// Animation physics for the Hero section
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  const { name, label, profiles } = resumeData.basics;

  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center md:py-32 overflow-hidden bg-background/90"
    >
      {/* subtle tint to separate text from whatever background might appear */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-background/90 via-background/70 to-pop/10 mix-blend-multiply" />
      <motion.div 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Animates every time you scroll to the top
      >
        <div className="relative">
            {/* Subtle background glow for the name */}
            <div className="absolute -inset-10 bg-pop/10 blur-[100px] rounded-full opacity-50" />
                
            <motion.h1 
                variants={itemVariants} 
                className="relative text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl uppercase"
            >
                Hi, I am<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pop to-blue-400">
                {name}
                </span>
            </motion.h1>
        </div>
        
        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[700px] text-lg text-foreground drop-shadow-sm sm:text-xl"
        >
          A <span className="font-semibold text-foreground">{label}</span> building
          scalable, AI-integrated web applications with a focus on modern user
          experiences.
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