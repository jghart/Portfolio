import { resumeData } from "@/data/resumeData";

export default function PrintView() {
  const { basics, skills, projects, education } = resumeData;

  const linkedin = basics.profiles.find(
    (profile) => profile.network === "LinkedIn"
  );

  const github = basics.profiles.find(
    (profile) => profile.network === "GitHub"
  );

  return (
    <main className="mx-auto max-w-4xl bg-white px-8 py-10 text-black print:px-0 print:py-0">
      <header className="border-b border-gray-300 pb-6">
        <h1 className="text-3xl font-bold">{basics.name}</h1>
        <p className="mt-2 text-lg">{basics.title}</p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
          <span>{basics.email}</span>
          <span>{basics.location}</span>
          {linkedin && <span>{linkedin.url.replace("https://", "")}</span>}
          {github && <span>{github.url.replace("https://", "")}</span>}
        </div>
      </header>

      <section className="mt-8">
        <h2 className="border-b border-gray-200 pb-2 text-xl font-semibold">
          Professional Summary
        </h2>
        <p className="mt-3 text-sm leading-6 text-gray-800">{basics.summary}</p>
      </section>

      <section className="mt-8">
        <h2 className="border-b border-gray-200 pb-2 text-xl font-semibold">
          Technical Skills
        </h2>

        <div className="mt-4 space-y-3">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-sm font-semibold">{skillGroup.category}</h3>
              <p className="mt-1 text-sm text-gray-800">
                {skillGroup.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="border-b border-gray-200 pb-2 text-xl font-semibold">
          Featured Projects
        </h2>

        <div className="mt-4 space-y-6">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{project.title}</h3>

                <div className="flex gap-3 text-sm text-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-2 text-sm leading-6 text-gray-800">
                {project.description}
              </p>

              <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-gray-800">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <p className="mt-2 text-sm text-gray-700">
                <span className="font-semibold">Tech Stack:</span>{" "}
                {project.techStack.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="border-b border-gray-200 pb-2 text-xl font-semibold">
          Education
        </h2>

        <div className="mt-4 space-y-4">
          {education.map((edu) => (
            <article key={`${edu.institution}-${edu.area}-${edu.endDate}`}>
              <h3 className="text-base font-semibold">
                {edu.studyType} in {edu.area}
              </h3>
              <p className="mt-1 text-sm text-gray-800">{edu.institution}</p>
              <p className="mt-1 text-sm text-gray-700">
                {edu.startDate} - {edu.endDate}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}