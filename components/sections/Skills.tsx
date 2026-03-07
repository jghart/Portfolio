"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import { Wrench } from "lucide-react";
import { motion, Variants } from "framer-motion";
// Importing the specific monochromatic SVG icons for your tech stack
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiLaravel, SiMongodb, SiMysql, SiPhp,
  SiGit,SiPostman, SiVercel, SiOpenai
} from "react-icons/si";

// 1. A dictionary to match your data strings to the actual icon components
const iconMap: Record<string, React.ReactNode> = {
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  "Express": <SiExpress />,
  "Laravel": <SiLaravel />,
  "MongoDB": <SiMongodb />,
  "MySQL": <SiMysql />,
  "PHP": <SiPhp />,
  "Git": <SiGit />,
  "Postman": <SiPostman />,
  "Vercel": <SiVercel />,
  "AI APIs (Gemini/OpenAI)": <SiOpenai />
};

// 2. Framer Motion Animation Variants
const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Skills = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }} // once: false triggers it every time you scroll past
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-2"
        >
          <Wrench className="text-primary" />
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className="space-y-4"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-lg font-semibold border-b pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    variants={itemVariant}
                    className="flex items-center gap-2 px-3 py-1.5 bg-background border rounded-full text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:border-primary hover:text-foreground"
                  >
                    {/* Render the icon if it exists in our map, styled to match the text color automatically */}
                    {iconMap[item] && <span className="text-lg">{iconMap[item]}</span>}
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;