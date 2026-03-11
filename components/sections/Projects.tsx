import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { resumeData } from "@/data/resumeData";

export default function Projects() {
  const [featuredProject, ...otherProjects] = resumeData.projects;

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Projects that showcase my technical skills
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              A selection of projects that reflect my experience in full-stack
              development, backend systems, database-driven applications, and
              practical software solutions.
            </p>
          </div>
        </Reveal>

        {featuredProject && (
          <Reveal delay={0.08}>
            <article className="mt-12 overflow-hidden rounded-3xl border border-border bg-card/80 shadow-sm backdrop-blur transition duration-300 hover:shadow-xl">
              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8 sm:p-10">
                  <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Featured Project
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                    {featuredProject.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {featuredProject.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
                      >
                        View GitHub
                      </a>
                    )}

                    {featuredProject.demo && (
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition duration-200 hover:scale-[1.02] hover:bg-muted active:scale-[0.98]"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative min-h-[260px] border-t border-border bg-gradient-to-br from-primary/10 via-transparent to-transparent lg:min-h-full lg:border-l lg:border-t-0">
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="w-full max-w-sm rounded-2xl border border-border bg-background/80 p-6 shadow-lg backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Project Spotlight
                      </p>
                      <h4 className="mt-3 text-lg font-semibold text-foreground">
                        {featuredProject.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        A highlighted project demonstrating practical
                        architecture, clean implementation, and recruiter-ready
                        presentation.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {featuredProject.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {otherProjects.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Reveal key={project.title} delay={0.1 + index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}