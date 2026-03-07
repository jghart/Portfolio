import { resumeData } from "@/data/resumeData";

export default function Contact() {
  const linkedin = resumeData.basics.profiles.find(
    (profile) => profile.network === "LinkedIn"
  );

  const github = resumeData.basics.profiles.find(
    (profile) => profile.network === "GitHub"
  );

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s connect
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              I am open to software development opportunities, internships, and
              collaborations where I can contribute to building practical,
              high-quality applications.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="mt-2 break-words text-sm font-semibold text-foreground">
                {resumeData.basics.email}
              </p>
            </a>

            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  LinkedIn
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  View Profile
                </p>
              </a>
            )}

            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  GitHub
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  View Projects
                </p>
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Send Email
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border px-5 py-3 text-sm font-medium transition hover:bg-muted"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}