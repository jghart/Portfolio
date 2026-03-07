import { resumeData } from "@/data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects That Showcase My Skills
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            A selection of projects that highlight my experience in full-stack
            development, backend systems, database design, and practical
            business-focused applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resumeData.projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-full flex-col">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-primary transition hover:underline"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-primary transition hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}