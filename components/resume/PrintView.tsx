import React from "react";
import { resumeData } from "@/data/resumeData";

const PrintView = () => {
  const { basics, skills, projects, education } = resumeData;

  return (
    <div className="hidden print:block bg-white text-black p-8 max-w-4xl mx-auto font-sans text-sm">
      {/* Header section */}
      <header className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-1">{basics.name}</h1>
        <h2 className="text-xl font-medium text-gray-700 mb-3">{basics.label}</h2>
        <div className="flex flex-wrap gap-x-4 text-xs text-gray-600">
          <span>{basics.email}</span>
          <span>•</span>
          <span>{basics.phone}</span>
          <span>•</span>
          <span>{basics.location}</span>
          <span>•</span>
          <span>{basics.profiles.find(p => p.network === 'LinkedIn')?.url.replace('https://', '')}</span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">Professional Summary</h3>
        <p className="leading-relaxed text-gray-800">{basics.summary}</p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">Technical Skills</h3>
        <div className="grid grid-cols-1 gap-2">
          {skills.map((skillGroup, index) => (
            <div key={index} className="flex">
              <span className="font-bold w-32 shrink-0">{skillGroup.category}:</span>
              <span className="text-gray-800">{skillGroup.items.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">Featured Projects</h3>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-base">{project.title}</h4>
                {project.link !== "#" && (
                  <span className="text-xs text-gray-500">{project.link.replace('https://', '')}</span>
                )}
              </div>
              <p className="text-gray-800 mb-1">{project.description}</p>
              <p className="text-xs text-gray-600 font-medium">
                <span className="font-bold text-black">Tech Stack:</span> {project.tech.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 pb-1">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="flex justify-between items-baseline">
            <div>
              <h4 className="font-bold">{edu.studyType} in {edu.area}</h4>
              <p className="text-gray-800">{edu.institution}, {edu.location}</p>
            </div>
            <span className="text-sm font-medium text-gray-600">Expected: {edu.endDate}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PrintView;