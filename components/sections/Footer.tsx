import { resumeData } from "@/data/resumeData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const github = resumeData.basics.profiles.find(
    (profile) => profile.network === "GitHub"
  );

  const linkedin = resumeData.basics.profiles.find(
    (profile) => profile.network === "LinkedIn"
  );

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-medium text-foreground">
            © {currentYear} {resumeData.basics.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              GitHub
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              LinkedIn
            </a>
          )}

          <a
            href={`mailto:${resumeData.basics.email}`}
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}