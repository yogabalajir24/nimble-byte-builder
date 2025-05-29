
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">YR</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Yogabalaji</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              R
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Fullstack Developer | Java | Python | Web Development
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about crafting innovative digital solutions and enhancing user experiences through technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Learn More About Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
