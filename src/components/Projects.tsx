
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Town Bus Tracking System (EasyGo)",
      description: "Real-time tracking system for improved urban mobility with live bus locations and route optimization.",
      technologies: ["Material UI", "Flutter", "Web Development"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Stock Market Learning Platform",
      description: "Educational platform designed to teach stock trading knowledge with interactive lessons and market simulations.",
      technologies: ["JavaScript", "HTML", "CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Application Tracking System",
      description: "HR management system with modern React.js UI for tracking job applications and candidate management.",
      technologies: ["React.js", "Bootstrap"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleGitHubRedirect = () => {
    window.open("https://github.com/yogabalajir24", "_blank");
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white text-6xl font-bold opacity-20">
                    {project.title.split(' ')[0].charAt(0)}
                  </span>
                </div>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={handleGitHubRedirect}
                    variant="outline"
                    size="sm"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    onClick={handleGitHubRedirect}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
