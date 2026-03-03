"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import { motion } from "framer-motion";

const Footer = () => {
  const { name } = resumeData.basics;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          {/* Copyright & Name */}
          <div className="text-sm text-muted-foreground font-medium tracking-tight">
            © {currentYear} <span className="text-foreground font-bold">{name}</span>. 
            All rights reserved.
          </div>

          {/* Location / Built-with Credits */}
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
            <span>Built with Next.js & Tailwind</span>
            <span className="h-1 w-1 rounded-full bg-pop" />
          </div>
        </motion.div>
        
        {/* Subtle decorative element to anchor the page */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-[1px] w-12 bg-pop/30 mx-auto mt-8 rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer;