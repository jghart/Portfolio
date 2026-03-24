"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16 lg:mb-24"
        >
          <span className="font-display text-sm font-bold text-white/40 tracking-[0.2em]">04</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="font-display text-sm font-bold text-white/40 tracking-[0.2em] uppercase">Projects</span>
        </motion.div>

        <ul className="flex flex-col w-full relative z-10">
          {resumeData.projects.map((p, i) => (
            <motion.li 
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="group py-12 sm:py-16 flex flex-col md:flex-row md:items-center justify-between border-t border-white/5 first:border-t-0"
            >
              <div className="flex flex-col">
                <h3 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white/30 group-hover:text-white group-hover:translate-x-4 lg:group-hover:translate-x-8 transition-all duration-500 cursor-default">
                  {p.title}
                </h3>
                <p className="mt-4 text-white/40 hover:text-white/80 transition-colors duration-500 max-w-xl text-lg lg:text-xl">
                  {p.description}
                </p>
                <div className="mt-6 flex items-center gap-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm font-bold tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors">
                      Live Demo ↗
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-sm font-bold tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors">
                      Preview Code ↗
                    </a>
                  )}
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 flex flex-wrap gap-2 md:justify-end shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                {p.techStack.map(t => (
                  <span key={t} className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:border-white/20 hover:text-white transition-all duration-500">
                    {t}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
        
      </div>
    </section>
  );
}