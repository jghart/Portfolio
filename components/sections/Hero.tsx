import { resumeData } from "@/data/resumeData";

export default function Hero() {
  return (
    <section id="hero" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {resumeData.basics.name}
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-primary sm:text-2xl">
            {resumeData.basics.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {resumeData.basics.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "Next.js", "Laravel", "Java", "SQL"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-border px-5 py-3 text-sm font-medium transition hover:bg-muted"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}