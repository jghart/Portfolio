"use client";

import React from "react";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

const Contact = () => {
  const { email, profiles } = resumeData.basics;
  const [copied, setCopied] = React.useState(false);

  return (
    <section id="contact" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-2"
        >
          <MessageSquare size={28} className="text-pop" />
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-muted-foreground mb-12 max-w-md mx-auto"
        >
          I am currently looking for new opportunities in full-stack development. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </motion.p>

        {/* Updated: Two-column grid for Email and Socials */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Email Card */}
          {/* using a button so we can intercept clicks and copy the address */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(email)
                .then(() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                })
                .catch(() => {});
              // after copying, open mail client
              window.location.href = `mailto:${email}`;
            }}
            type="button"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative flex flex-col items-center p-8 bg-background/40 backdrop-blur-xl border border-foreground/5 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-pop/5 hover:-translate-y-1 transition-all duration-500 group"
          >
            <div className="p-4 bg-pop/10 rounded-full text-pop mb-4 group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-lg">Email Me</h3>
            <p className="text-muted-foreground text-sm mt-2">{email}</p>
            {copied && (
              <span className="absolute top-2 right-2 text-xs text-pop font-semibold">
                Copied!
              </span>
            )}
          </motion.button>

          {/* Social Presence Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center p-8 bg-background/40 backdrop-blur-xl border border-foreground/5 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-pop/5 hover:-translate-y-1 transition-all duration-500 group"
          >
            <div className="flex gap-4 mb-4">
              {profiles.map((profile) => (
                <a
                  key={profile.network}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-foreground/5 rounded-full text-muted-foreground hover:text-pop hover:bg-pop/10 transition-all"
                >
                  {profile.network === "GitHub" ? <Github size={24} /> : <Linkedin size={24} />}
                </a>
              ))}
            </div>
            <h3 className="font-bold text-lg">Social Presence</h3>
            <p className="text-muted-foreground text-sm mt-2">GitHub & LinkedIn</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;