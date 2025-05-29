
const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 92 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Material UI", level: 85 },
        { name: "Bootstrap", level: 88 }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", level: 80 }
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "Other Skills",
      skills: [
        { name: "Fullstack Development", level: 87 },
        { name: "Web Development", level: 90 },
        { name: "Video Editing", level: 75 }
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
