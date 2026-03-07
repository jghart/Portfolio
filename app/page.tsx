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
    <>
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

      <div className="hidden print:block">
        <PrintView />
      </div>
    </>
  );
}