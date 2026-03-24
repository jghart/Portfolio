"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

const traits = [
  { key: "Full-Stack",      val: "Frontend to backend — I own the full picture." },
  { key: "Backend-Focused", val: "APIs, databases, and business logic done right." },
  { key: "Problem Solver",  val: "I build software that solves real-world problems." },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-40 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16 lg:mb-24"
        >
          <span className="font-display text-sm font-bold text-white/40 tracking-[0.2em]">02</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="font-display text-sm font-bold text-white/40 tracking-[0.2em] uppercase">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-12">
               Building software <br/><span className="text-white/40 italic font-light">that matters.</span>
            </h2>

            <div className="flex flex-col gap-6">
              {traits.map((t, i) => (
                <motion.div
                  key={t.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-6 border-b border-white/5"
                >
                  <span className="font-display text-sm font-bold uppercase tracking-widest text-white/50 min-w-[160px]">{t.key}</span>
                  <span className="text-white/80">{t.val}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 text-lg sm:text-xl leading-relaxed text-white/50 space-y-8"
          >
            <p className="text-white/90 font-medium">
              {resumeData.basics.summary.split('.')[0]}.
            </p>
            <p>
              I enjoy working across the full stack — from crafting polished
              interfaces to designing APIs and database schemas. I&apos;m
              especially interested in roles where I can ship meaningful software
              and keep growing fast.
            </p>
            <p>
              I am open to full-stack, backend, and software development
              opportunities where I can contribute, learn, and grow.
            </p>

            <a href="#contact" className="inline-block mt-8 pb-2 border-b border-white/30 text-white hover:border-white transition-colors uppercase tracking-widest text-sm font-bold font-display">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}