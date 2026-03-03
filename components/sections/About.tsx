"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const { summary } = resumeData.basics;

  return (
    <section id="about" className="py-20 overflow-hidden">
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
        
        {/* previously a 3‑column grid; simplified to a single block since the
            graduation card was removed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            {summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;