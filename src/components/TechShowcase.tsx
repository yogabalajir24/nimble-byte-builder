
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Database, Code, Globe } from "lucide-react";

const TechShowcase = () => {
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing real-world applications and technical solutions I've built
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Dashboard Mock 1 - Analytics */}
          <Card className="bg-gray-900 border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Bus Tracking Analytics</h3>
                <BarChart3 className="h-6 w-6 text-blue-400" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Active Routes</span>
                  <span className="text-green-400 font-bold">24</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-3/4 animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Real-time Updates</span>
                  <span className="text-blue-400 font-bold">98.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Mock 2 - Stock Platform */}
          <Card className="bg-gray-900 border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Stock Learning Platform</h3>
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Active Learners</span>
                  <span className="text-green-400 font-bold">1,247</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-4/5 animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Course Completion</span>
                  <span className="text-green-400 font-bold">89.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Mock 3 - HR System */}
          <Card className="bg-gray-900 border-gray-700 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">HR Tracking System</h3>
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Applications</span>
                  <span className="text-purple-400 font-bold">342</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-2/3 animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Processing Time</span>
                  <span className="text-purple-400 font-bold">2.3 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack Visual */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Database className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Backend Development</h4>
            <p className="text-gray-400 text-sm">Java, Python, Database Design</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Code className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Frontend Development</h4>
            <p className="text-gray-400 text-sm">React.js, Material UI, Bootstrap</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Full Stack Solutions</h4>
            <p className="text-gray-400 text-sm">End-to-end Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
