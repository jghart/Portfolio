import { resumeData } from "@/data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Technical Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I use to build modern applications
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            My toolkit includes frontend technologies, backend frameworks,
            databases, and development tools that help me build reliable and
            scalable software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resumeData.skills.map((skillGroup) => (
            <article
              key={skillGroup.category}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {skillGroup.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}