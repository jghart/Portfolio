"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import { GraduationCap, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const { summary } = resumeData.basics;
  const education = resumeData.education[0];

  return (
    <section id="about" className="py-20 border-t border-muted overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Title sliding in from the left */}
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-2"
        >
          <Code2 className="text-primary" />
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Main text block fading up */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {summary}
            </p>
          </motion.div>

          {/* Education Card sliding in from the right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-muted/30 p-6 rounded-lg border space-y-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <GraduationCap size={20} className="text-primary" />
              <h3>Education</h3>
            </div>
            <div>
              <p className="font-medium text-sm">{education.institution}</p>
              <p className="text-xs text-muted-foreground">
                {education.studyType} in {education.area}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-primary mt-2">
                Graduating {education.endDate}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;