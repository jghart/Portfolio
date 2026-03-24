"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="font-display text-sm font-bold text-white/40 tracking-[0.2em]">03</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="font-display text-sm font-bold text-white/40 tracking-[0.2em] uppercase">Skills</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-20 lg:mb-32 text-center"
        >
            Tools I use to <br/><span className="text-white/40 italic font-light">build great software.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.skills.map((group, i) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-8 sm:p-10 rounded-3xl hover:bg-white/[0.04] transition-colors group"
            >
              <h3 className="text-2xl font-display font-bold mb-8 text-white/60 group-hover:text-white transition-colors">{group.category}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}