import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Sparkles, Terminal, Database, Globe, Download } from "lucide-react";
const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const downloadResume = () => {
    // Convert Google Drive view link to direct download link
    const resumeUrl = "https://drive.google.com/uc?export=download&id=156ukUtn1C9E7HRB1I_3jnfUyS3Xm4bnY";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Yogabalaji_Ramesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Enhanced 3D animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional 3D geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl transform rotate-45 animate-float"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-green-400/25 to-blue-600/25 rounded-2xl transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full animate-pulse delay-700"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-blue-400/30 transform rotate-45 animate-spin" style={{
        animationDuration: '15s'
      }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-purple-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/5 w-8 h-8 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 transform rotate-12 animate-bounce delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-neutral-100">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Yogabalaji</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">Ramesh</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
                Fullstack Developer
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Java</span>
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm border border-green-500/30">Python</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Web Development</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Passionate about crafting innovative digital solutions and enhancing user experiences through cutting-edge technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToAbout} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                <Code2 className="mr-2 h-5 w-5" />
                Explore My Work
              </Button>
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 transform hover:scale-105 transition-all duration-300" onClick={() => document.querySelector("#projects")?.scrollIntoView({
              behavior: "smooth"
            })}>
                <Terminal className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              <Button onClick={downloadResume} size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right side - Professional Photo & Tech Graphics */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Circular Photo with proper sizing */}
              <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-gradient-to-br from-blue-400 to-purple-600 bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img alt="Yogabalaji R - Fullstack Developer" src="/lovable-uploads/b3d8f13e-81eb-4fad-ac76-49a8066afe9e.png" className="w-full h-full object-cover object-center scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-sm"></div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Code2 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>;
};
export default Hero;