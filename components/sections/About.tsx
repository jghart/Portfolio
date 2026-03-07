import { resumeData } from "@/data/resumeData";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Building practical software with clean design and solid backend
              logic
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-muted-foreground">
            <p>{resumeData.basics.summary}</p>

            <p>
              My work focuses on building applications that are responsive,
              maintainable, and useful in real-world scenarios. I enjoy working
              across both frontend and backend layers, from creating polished
              interfaces to structuring APIs, databases, and business logic.
            </p>

            <p>
              I am especially interested in opportunities where I can contribute
              to full-stack development, backend systems, and business-focused
              software solutions while continuing to grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}