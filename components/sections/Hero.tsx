import FadeIn from "@/components/ui/FadeIn";
import { resumeData } from "@/data/resumeData";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <FadeIn>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {resumeData.basics.location}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {resumeData.basics.name}
          </h1>

          <h2 className="mt-4 text-xl font-medium text-primary sm:text-2xl">
            {resumeData.basics.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {resumeData.basics.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-muted"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}