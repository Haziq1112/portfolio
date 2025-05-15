import { Code, Layers, PenTool, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <Code className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Clean Code</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">Writing clean, maintainable, and efficient code</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <Layers className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Modern Stack</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">Using the latest technologies and best practices</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <PenTool className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">UI/UX Design</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">Creating beautiful and intuitive user interfaces</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <Database className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Database Design</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">Building efficient and scalable database solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;