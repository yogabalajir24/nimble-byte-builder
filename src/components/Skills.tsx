
const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "HTML", "CSS", "Material UI", "Bootstrap"],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Mobile Development",
      skills: ["Flutter"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "Other Skills",
      skills: ["Fullstack Development", "Web Development", "Video Editing"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
