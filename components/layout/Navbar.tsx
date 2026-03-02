"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Printer } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand/Logo */}
        <div className="text-xl font-bold tracking-tight">
          <a href="#">{resumeData.basics.name}</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary/80 text-foreground/60"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center pl-4 border-l space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-accent"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs hover:bg-primary/90 transition-all"
            >
              <Printer size={14} />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden border-t bg-background px-4 py-6 space-y-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium py-2 border-b border-accent"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              window.print();
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-center space-x-2 py-3 bg-primary text-primary-foreground rounded-md"
          >
            <Printer size={18} />
            <span>Print Resume (PDF)</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;