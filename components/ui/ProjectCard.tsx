type Project = {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
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
  );
}