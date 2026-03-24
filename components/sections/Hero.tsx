"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { resumeData } from "@/data/resumeData";

const coreStack = ["React", "Next.js", "Laravel", "Java", "Spring Boot", "SQL"];

const SplitText = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: delayOffset + index * 0.05,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero() {
  const nameParts = resumeData.basics.name.split(" ");
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], ["-20px", "20px"]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], ["-20px", "20px"]);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const rx = (e.clientX / innerWidth) - 0.5;
      const ry = (e.clientY / innerHeight) - 0.5;
      mouseX.set(rx);
      mouseY.set(ry);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Animated glowing orbs for dynamic background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -80, 0],
          y: [0, 80, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"
      />

      <div className="hero-bg-glyph" aria-hidden="true" style={{ opacity: 0.03 }}>JG</div>

      <div className="container relative z-10 mx-auto px-6 py-24 flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center text-center">

          <motion.div 
            style={{ rotateX, rotateY, translateX, translateY, transformStyle: "preserve-3d" }} 
            className="w-full flex-col flex items-center justify-center [perspective:1000px]"
          >
            <h1 className="flex flex-col items-center text-[14vw] sm:text-[12vw] lg:text-[11rem] font-display font-black leading-[0.85] tracking-tighter mb-4">
              <span className="mb-2 text-white"><SplitText text={nameParts[0]} delayOffset={0.1} /></span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}><SplitText text={nameParts[1] || ""} delayOffset={0.4} /></span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.9, ease: "easeOut" }}
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.0, ease: "easeOut" }}
            className="font-display text-lg sm:text-2xl font-bold tracking-[0.2em] uppercase text-white/50 mb-6"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.1, ease: "easeOut" }}
            className="text-lg sm:text-2xl text-white/60 max-w-3xl leading-relaxed mx-auto mb-10"
          >
            I build robust web applications and backend-driven systems
            with clean architecture and practical, real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.2, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">Let&apos;s Talk</a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}