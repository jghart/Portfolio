"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition hover:text-primary"
        >
          Joe Ghart
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-xl border border-border p-2 transition hover:bg-muted md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex w-fit rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}