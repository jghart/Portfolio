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
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {project.highlights.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-full bg-muted px-3 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}