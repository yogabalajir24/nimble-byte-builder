
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechShowcase from "@/components/TechShowcase";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechShowcase />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
