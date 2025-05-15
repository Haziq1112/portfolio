import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Developer Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Showcasing my skills in React, Django, and WordPress development with a focus on responsive design and user experience.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a 
                href="#" 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              Made by Haziq Ahmad <Heart size={16} className="mx-1 text-red-500" /> © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;