import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import PrintView from "@/components/resume/PrintView";

export default function Home() {
  return (
    <>
      {/* Web Portfolio View */}
      <div className="print:hidden">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Print-Friendly Resume View */}
      <div className="hidden print:block">
        <PrintView />
      </div>
    </>
  );
}