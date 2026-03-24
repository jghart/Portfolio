"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

const categoryMeta: Record<string, { icon: string; accent: string }> = {
  Frontend:  { icon: "🎨", accent: "var(--accent-amber)" },
  Backend:   { icon: "⚙️",  accent: "var(--primary)" },
  Database:  { icon: "🗄️",  accent: "var(--accent-teal)" },
  Tools:     { icon: "🛠️",  accent: "var(--accent-purple)" },
};

export default function TechStack() {
  return (
    <section id="techstack" className="techstack-section py-24 sm:py-32">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="eyebrow-number">05</span>
          <span className="eyebrow-text">Tech Stack</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="techstack-headline"
        >
          Tools I use to<br />
          <span className="techstack-headline-em">build & ship.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="techstack-sub"
        >
          A full breakdown of my technical toolkit — from frontend frameworks
          to backend systems, databases, and the tools I rely on daily.
        </motion.p>

        <div className="techstack-grid">
          {resumeData.skills.map((group, i) => {
            const meta = categoryMeta[group.category] ?? { icon: "💡", accent: "var(--primary)" };
            return (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="techstack-card"
                style={{ "--card-accent": meta.accent } as React.CSSProperties}
              >
                <div className="techstack-card-accent" />
                <div className="techstack-card-inner">
                  <div className="techstack-category">
                    <span className="techstack-category-icon" aria-hidden="true">
                      {meta.icon}
                    </span>
                    <span className="techstack-category-name">{group.category}</span>
                  </div>
                  <div className="techstack-items">
                    {group.items.map((item) => (
                      <span key={item} className="techstack-chip">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}