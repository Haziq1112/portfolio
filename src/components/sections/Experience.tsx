import { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education'>('all');

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Frontend Developer",
      organization: "Modern Web Solutions",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Develop responsive and user-friendly web applications using React and Tailwind CSS",
        "Collaborate with UX/UI designers to implement pixel-perfect designs",
        "Optimize web performance and accessibility for an improved user experience",
        "Integrate web applications with backend APIs and services"
      ],
      type: 'work'
    },
    {
      id: 2,
      title: "Mobile App Developer",
      organization: "App Innovations Inc.",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Built cross-platform mobile applications using Flutter",
        "Created intuitive user interfaces following material design principles",
        "Implemented RESTful API integration for data exchange",
        "Coordinated with backend developers to ensure smooth application functionality"
      ],
      type: 'work'
    },
    {
      id: 3,
      title: "WordPress Developer",
      organization: "Digital Solutions Agency",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Designed and developed custom WordPress websites for various clients",
        "Implemented e-commerce functionality using WooCommerce",
        "Optimized website performance and SEO",
        "Provided technical support and maintenance services"
      ],
      type: 'work'
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      organization: "Self-employed",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Developed custom websites for small businesses and individuals",
        "Created responsive layouts and user interfaces",
        "Implemented content management systems for client content updates",
        "Provided ongoing maintenance and support services"
      ],
      type: 'work'
    },
    {
      id: 5,
      title: "Bachelor's Degree in (IET) Information Engineering Technology",
      organization: "The University of Lahore ",
      location: "Lahore, Pakistan",
      period: "2022 - 2026",
      description: [
        "Focused on development, algorithms, and data structures",
        "Completed coursework in web development, mobile applications, and database design",
        "Participated in programming competitions and hackathons",
        "Graduated with honors and distinction"
      ],
      type: 'education'
    }
  ];

  // Filter timeline items
  const filteredItems = activeFilter === 'all' 
    ? timelineItems 
    : timelineItems.filter(item => item.type === activeFilter);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300
                ${activeFilter === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('work')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300
                ${activeFilter === 'work' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveFilter('education')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300
                ${activeFilter === 'education' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2 md:block hidden"></div>
                
                {/* Content */}
                <div className="md:w-1/2 md:px-10 px-0">
                  <div 
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-full mr-4 
                        ${item.type === 'work' 
                          ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-500' 
                          : 'bg-purple-100 dark:bg-purple-900/30 text-purple-500'
                        }`}>
                        {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-blue-500 dark:text-blue-400">{item.organization}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                      <span className="mx-2">•</span>
                      <span>{item.location}</span>
                    </div>
                    
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight size={16} className="mt-1 mr-2 text-blue-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills acquired */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Skills Acquired</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Full-stack web development
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Mobile app development
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  UI/UX implementation
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  API integration
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Responsive design
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Management</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Agile methodology
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Requirements gathering
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Sprint planning
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Task prioritization
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Team collaboration
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Problem solving
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Communication
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Attention to detail
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Adaptability
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <ChevronRight size={16} className="mr-2 text-blue-500" />
                  Time management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;