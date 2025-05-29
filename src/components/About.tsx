
import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, Calendar, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I am a passionate Fullstack Developer with expertise in Java, Python, and Web Development. 
              I specialize in crafting innovative digital solutions such as a Town Bus Tracking System 
              and a Stock Market Learning Platform. With a strong commitment to enhancing user experiences 
              through technology, I aim to contribute to impactful and dynamic tech projects.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white font-medium">Madurai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Date of Birth</p>
                      <p className="text-white font-medium">August 24, 2004</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-700 border-gray-600 sm:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Languages</p>
                      <p className="text-white font-medium">Tamil, Telugu, English</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-2xl">
              <span className="text-8xl font-bold text-white">YR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
