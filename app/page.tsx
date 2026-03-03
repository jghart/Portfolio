import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import PrintView from "@/components/resume/PrintView";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* The Navigation */}
      <Navbar />

      {/* The Web Portfolio View (Hidden during printing) */}
      <div className="print:hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* The Print-Friendly Resume View (Hidden during web browsing) */}
      <PrintView />
    </main>
  );
}