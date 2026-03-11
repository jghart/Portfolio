import Reveal from "@/components/ui/Reveal";
import { resumeData } from "@/data/resumeData";

const techBadges = ["React", "Next.js", "Laravel", "Java", "SQL"];

const metrics = [
  "Full-Stack Development",
  "Backend-Focused Solutions",
  "Responsive Web Applications",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-36"
    >
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">

          <Reveal delay={0}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {resumeData.basics.name}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-4 text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
              Full-Stack Developer
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              I build robust web applications and backend-driven systems with a
              focus on clean architecture, performance, and practical user
              experiences that solve real business problems.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              {techBadges.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-border bg-background/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition duration-200 hover:scale-[1.02] hover:bg-muted active:scale-[0.98]"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {metrics.map((item, index) => (
              <Reveal key={item} delay={0.4 + index * 0.08}>
                <div className="rounded-2xl border border-border bg-card/70 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}