"use client";

import { useEffect } from "react";
// We import lenis core directly and wrap it manually if lenis/react fails, but lenis/react is standard for latest.
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
