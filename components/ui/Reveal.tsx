"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  inView?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  once = true,
  inView = false,
}: RevealProps) {
  if (inView) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount: 0.2 }}
        transition={{ duration: 0.55, delay, ease: "easeOut" as const }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" as const }}
    >
      {children}
    </motion.div>
  );
}