
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech/B.E. in Information Technology",
      institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
      period: "Expected ~2026",
      status: "Current",
      icon: <GraduationCap className="h-6 w-6 text-blue-400" />
    },
    {
      degree: "Class XII",
      institution: "Tamil Nadu State Board",
      period: "2022",
      percentage: "77.5%",
      achievement: "Top 10 in class, Department Topper",
      icon: <Award className="h-6 w-6 text-purple-400" />
    },
    {
      degree: "Class X",
      institution: "Tamil Nadu State Board",
      period: "2020",
      percentage: "90.4%",
      icon: <Award className="h-6 w-6 text-green-400" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-4">
                  {edu.icon}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.status && (
                      <span className="inline-block mt-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {edu.percentage && (
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Percentage:</span>
                      <span className="text-white font-semibold">{edu.percentage}</span>
                    </div>
                  )}
                  {edu.achievement && (
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Achievement:</span>
                      <span className="text-green-400 font-semibold">{edu.achievement}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
