import { resumeData } from "@/data/resumeData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-medium text-white/60">
            © {currentYear} {resumeData.basics.name}
          </p>
          <p className="mt-1 text-xs text-white/30">
            Built with Next.js, Framer Motion & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-6 sm:gap-8">
          <a href="#hero" className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 hover:text-white transition-colors">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}