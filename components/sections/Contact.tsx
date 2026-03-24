"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Contact() {
  const linkedin = resumeData.basics.profiles.find((p) => p.network === "LinkedIn");
  const github   = resumeData.basics.profiles.find((p) => p.network === "GitHub");

  return (
    <section id="contact" className="py-24 sm:py-40 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-purple-500/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
         
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16 lg:mb-24"
        >
          <span className="font-display text-sm font-bold text-white/40 tracking-[0.2em]">05</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="font-display text-sm font-bold text-white/40 tracking-[0.2em] uppercase">Contact</span>
        </motion.div>
         
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] sm:text-[10vw] md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter uppercase leading-[0.9] mb-12 text-white/10 hover:text-white transition-colors duration-700 cursor-default"
          >
              Let&apos;s Work <br/> Together.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-white/50 mb-16 max-w-3xl leading-relaxed"
          >
              I&apos;m open to software development opportunities where I can contribute and grow fast. 
              My inbox is always open.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={`mailto:${resumeData.basics.email}`} 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold pb-4 border-b-2 border-white/20 hover:border-white transition-all duration-300 mb-20 md:mb-32"
          >
              {resumeData.basics.email}
          </motion.a>

          {/* Other links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-12"
          >
            {github && (
              <a href={github.url} target="_blank" rel="noreferrer" className="text-sm font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors">
                GitHub ↗
              </a>
            )}
            {linkedin && (
              <a href={linkedin.url} target="_blank" rel="noreferrer" className="text-sm font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors">
                LinkedIn ↗
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}