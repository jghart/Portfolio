"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-xl"
          : "border-b border-border bg-background/70 backdrop-blur"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition hover:text-primary"
        >
          Joe Ghart
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl border border-border bg-background/70 p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <span className="block h-4 w-4" />
            )}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl border border-border bg-background/70 p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <span className="block h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-xl border border-border p-2 transition hover:bg-muted"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background/95 shadow-lg backdrop-blur md:hidden">
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
              className="mt-3 inline-flex w-fit rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}