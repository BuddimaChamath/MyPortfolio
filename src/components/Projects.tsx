import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Laptop, Globe, Smartphone } from 'lucide-react';
import { Project, projectsData } from './projectsData.ts'; // Import from the new file

interface ProjectsProps {
  onProjectSelect: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'desktop' | 'web'>('all');

  // Convert the Record object to an array
  const projects: Project[] = Object.values(projectsData);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'mobile': return <Smartphone size={18} className="text-blue-500" />;
      case 'desktop': return <Laptop size={18} className="text-green-500" />;
      case 'web': return <Globe size={18} className="text-purple-500" />;
      default: return null;
    }
  };

  const handleProjectClick = (projectId: string) => {
    onProjectSelect(projectId);
  };

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Projects
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Here are some of the projects I've worked on during my software
          engineering journey.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'mobile', 'desktop', 'web'].map(filter => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter as typeof activeFilter)} 
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                ${activeFilter === filter 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                }
              `}
            >
              {filter !== 'all' && getCategoryIcon(filter)}
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleProjectClick(project.id)}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full p-1.5 shadow">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                      >
                        <Tag size={12} />
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};