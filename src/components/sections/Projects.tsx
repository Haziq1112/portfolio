import { useState } from 'react';
import { Github, ExternalLink, ChevronRight, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "On-Demand Services App",
      description: "An app connecting users with service providers for various needs. Features include real-time tracking, bookings, and secure payments.",
      image: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Flutter", "Firebase", "RESTful API"],
      github: "https://github.com/Haziq1112/On-Demand-Services-App",
      featured: true
    },
    {
      id: 2,
      title: "Food Ordering System",
      description: "A comprehensive mobile application developed as part of academic curriculum, showcasing various Flutter capabilities.",
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/Haziq1112/Flutter-Semester-",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website designed to showcase projects and skills.",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Haziq1112/portfolio.git",
      featured: false
    },

  ];

  // Get unique technologies for filter
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my recent work and personal projects
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white dark:bg-gray-700 py-2 px-4 rounded-full text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 mb-4 md:mb-0"
            >
              <Filter size={16} />
              <span>Filter Projects</span>
            </button>
            
            {showFilters && (
              <div className="w-full flex flex-wrap justify-center gap-2 mt-4 animate-fadeIn">
                <button
                  onClick={() => setFilter('all')}
                  className={`py-1.5 px-4 rounded-full text-sm font-medium transition-colors duration-300
                    ${filter === 'all' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('featured')}
                  className={`py-1.5 px-4 rounded-full text-sm font-medium transition-colors duration-300
                    ${filter === 'featured' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                >
                  Featured
                </button>
                {allTechnologies.map(tech => (
                  <button
                    key={tech}
                    onClick={() => setFilter(tech)}
                    className={`py-1.5 px-4 rounded-full text-sm font-medium transition-colors duration-300
                      ${filter === tech 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={`${project.id}-${tech}`}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <a 
                    href={project.github || project.demo || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    View Project <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400">No projects found with the selected filter.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/Haziq1112"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;