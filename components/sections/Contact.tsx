"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const { email, phone, profiles } = resumeData.basics;

  return (
    <section id="contact" className="py-20 border-t border-muted bg-muted/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-2">
          <Send className="text-primary" />
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {/* Email Card */}
          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center justify-center p-6 bg-background border rounded-xl shadow-sm hover:border-primary hover:shadow-md transition-all group"
          >
            <Mail className="mb-3 text-muted-foreground group-hover:text-primary transition-colors" size={28} />
            <span className="font-medium">{email}</span>
            <span className="text-xs text-muted-foreground mt-1">Send an Email</span>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="flex flex-col items-center justify-center p-6 bg-background border rounded-xl shadow-sm hover:border-primary hover:shadow-md transition-all group"
          >
            <Phone className="mb-3 text-muted-foreground group-hover:text-primary transition-colors" size={28} />
            <span className="font-medium">{phone}</span>
            <span className="text-xs text-muted-foreground mt-1">Give me a call</span>
          </a>
        </div>

        {/* Social Links Footer */}
        <div className="flex justify-center space-x-6 pb-8">
          {profiles.map((profile) => (
            <a
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={profile.network}
            >
              {profile.network === "GitHub" ? <Github size={24} /> : <Linkedin size={24} />}
            </a>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground mt-8">
          Designed & Built by {resumeData.basics.name} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Contact;