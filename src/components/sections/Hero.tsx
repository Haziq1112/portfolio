import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = ['React Developer', 'Django Developer', 'UI/UX Designer', 'WordPress Expert'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Profile Image */}
          <div className="mb-6">
            <img
              src="/Images/1.jpg" // <-- Update this to your image path
              alt="image"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover mx-auto"
            />
          </div>

          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-4 animate-fadeIn">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Muhammad Haziq Ahmad
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            A passionate Full Stack Developer focused on crafting elegant, efficient, and user-friendly digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-200 dark:bg-blue-900/20 opacity-30 top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-purple-200 dark:bg-purple-900/20 opacity-30 bottom-10 -right-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
