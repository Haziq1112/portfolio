import { useState } from 'react';
import { 
  Code2, Layers, PenLine, Database, Monitor, Smartphone, 
  Server, Blocks, GitBranch, Terminal, Wrench, Globe
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: {
    name: string;
    level: number; // 1 to 5
  }[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: "HTML5", level: 5 },
        { name: "CSS3", level: 5 },
        { name: "JavaScript", level: 4 },
        { name: "React", level: 4 },
        { name: "Tailwind CSS", level: 4 },
        { name: "Responsive Design", level: 5 }
      ]
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "Flutter", level: 4 },
        { name: "Dart", level: 3 },
        { name: "Mobile UI Design", level: 4 },
        { name: "Responsive Layouts", level: 4 }
      ]
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Django", level: 4 },
        { name: "Python", level: 4 },
        { name: "RESTful APIs", level: 4 },
        { name: "Database Design", level: 3 }
      ]
    },
    {
      name: "CMS",
      icon: <Blocks className="h-6 w-6" />,
      skills: [
        { name: "WordPress", level: 5 },
        { name: "Theme Development", level: 4 },
        { name: "Plugin Development", level: 3 },
        { name: "WP Customization", level: 4 }
      ]
    },
    {
      name: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 4 },
        { name: "GitHub", level: 4 },
        { name: "VS Code", level: 5 },
        { name: "Chrome DevTools", level: 4 }
      ]
    },
    {
      name: "Other",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "UI/UX Principles", level: 3 },
        { name: "Problem Solving", level: 4 },
        { name: "Team Collaboration", level: 4 }
      ]
    }
  ];

  // Find active category
  const activeSkills = skillCategories.find(cat => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive collection of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white p-4 border-b border-gray-200 dark:border-gray-700">
                Categories
              </h3>
              <ul>
                {skillCategories.map(category => (
                  <li key={category.name}>
                    <button
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full text-left px-4 py-3 flex items-center space-x-3 transition-colors duration-200
                        ${activeCategory === category.name 
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                        }`}
                    >
                      <span className={`${activeCategory === category.name ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>
                        {category.icon}
                      </span>
                      <span>{category.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-8">
                <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-500">
                  {skillCategories.find(cat => cat.name === activeCategory)?.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeCategory} Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeSkills.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level === 1 && 'Basic'}
                        {skill.level === 2 && 'Intermediate'}
                        {skill.level === 3 && 'Good'}
                        {skill.level === 4 && 'Advanced'}
                        {skill.level === 5 && 'Expert'}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { name: "HTML5", bg: "bg-orange-100 dark:bg-orange-900/20", text: "text-orange-500" },
                  { name: "CSS3", bg: "bg-blue-100 dark:bg-blue-900/20", text: "text-blue-500" },
                  { name: "JavaScript", bg: "bg-yellow-100 dark:bg-yellow-900/20", text: "text-yellow-500" },
                  { name: "React", bg: "bg-cyan-100 dark:bg-cyan-900/20", text: "text-cyan-500" },
                  { name: "Tailwind CSS", bg: "bg-teal-100 dark:bg-teal-900/20", text: "text-teal-500" },
                  { name: "Flutter", bg: "bg-blue-100 dark:bg-blue-900/20", text: "text-blue-500" },
                  { name: "Django", bg: "bg-green-100 dark:bg-green-900/20", text: "text-green-500" },
                  { name: "Python", bg: "bg-yellow-100 dark:bg-yellow-900/20", text: "text-yellow-500" },
                  { name: "WordPress", bg: "bg-blue-100 dark:bg-blue-900/20", text: "text-blue-500" },
                  { name: "Git", bg: "bg-orange-100 dark:bg-orange-900/20", text: "text-orange-500" },
                  { name: "RESTful APIs", bg: "bg-purple-100 dark:bg-purple-900/20", text: "text-purple-500" },
                  { name: "VS Code", bg: "bg-blue-100 dark:bg-blue-900/20", text: "text-blue-500" }
                ].map(tech => (
                  <div 
                    key={tech.name}
                    className={`${tech.bg} ${tech.text} py-2 px-4 rounded-lg text-center font-medium transition-transform duration-300 hover:-translate-y-1`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;