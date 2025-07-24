import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Github, ExternalLink, Calendar, Tag, 
  Users, Code, Check, Laptop, Smartphone, Globe,
  UserCircle, ChevronLeft, ChevronRight, Camera
} from 'lucide-react';

// Define Project interface (since we can't import from external files)
interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  category: 'mobile' | 'desktop' | 'web';
  github?: string;
  demo?: string;
  image?: string;
  screenshots?: string[];
  features?: string[];
  team?: string;
  duration?: string;
  challenges?: string[];
  solutions?: string[];
  myContribution?: string[];
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  isOpen, 
  onClose,
  theme
}) => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [showScreenshots, setShowScreenshots] = useState(false);

  // Body scroll lock effect
  useEffect(() => {
    if (isOpen) {
      // Store original overflow style
      const originalOverflow = document.body.style.overflow;
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore scroll when modal closes
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!project) return null;

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'mobile': return <Smartphone size={20} className="text-blue-500" />;
      case 'desktop': return <Laptop size={20} className="text-green-500" />;
      case 'web': return <Globe size={20} className="text-purple-500" />;
      default: return null;
    }
  };

  const nextScreenshot = () => {
    if (project.screenshots && project.screenshots.length > 0) {
      setCurrentScreenshot((prev) => (prev + 1) % (project.screenshots?.length || 1));
    }
  };

  const prevScreenshot = () => {
    if (project.screenshots && project.screenshots.length > 0) {
      setCurrentScreenshot((prev) => 
        prev === 0 ? (project.screenshots?.length || 1) - 1 : prev - 1
      );
    }
  };

  // Handle backdrop click while preventing event bubbling
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <div 
            className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8"
            style={{ overscrollBehavior: 'contain' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-6xl max-h-full overflow-y-auto rounded-2xl shadow-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ 
                marginTop: '2vh',
                marginBottom: '2vh'
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black/80 text-white transition-all duration-200 backdrop-blur-sm hover:scale-105"
              >
                <X size={20} />
              </button>
              
              {/* Project header/image */}
              <div className="relative h-64 md:h-80 rounded-t-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryIcon(project.category)}
                      <span className="text-white text-sm font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                      {project.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      <Tag size={14} />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {project.duration && (
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-600 dark:text-blue-400">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h3>
                        <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.team && (
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full text-purple-600 dark:text-purple-400">
                        <Users size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Team</h3>
                        <p className="font-medium text-gray-900 dark:text-white">{project.team}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                      <Code size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Type</h3>
                      <p className="font-medium text-gray-900 dark:text-white capitalize">{project.category} Application</p>
                    </div>
                  </div>
                </div>

                {/* Screenshots Section */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Camera size={20} className="text-blue-500" />
                        Screenshots
                      </h2>
                      <button
                        onClick={() => setShowScreenshots(!showScreenshots)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        {showScreenshots ? 'Hide' : 'View'} Screenshots
                      </button>
                    </div>
                    
                    {showScreenshots && (
                      <div className="space-y-4">
                        {/* Main Screenshot Display */}
                        <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                          <img
                            src={project.screenshots[currentScreenshot]}
                            alt={`${project.title} screenshot ${currentScreenshot + 1}`}
                            className="w-full h-96 md:h-[500px] object-contain"
                          />
                          
                          {/* Navigation Arrows */}
                          {project.screenshots.length > 1 && (
                            <>
                              <button
                                onClick={prevScreenshot}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                              >
                                <ChevronLeft size={24} />
                              </button>
                              <button
                                onClick={nextScreenshot}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                              >
                                <ChevronRight size={24} />
                              </button>
                            </>
                          )}
                          
                          {/* Screenshot Counter */}
                          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                            {currentScreenshot + 1} / {project.screenshots.length}
                          </div>
                        </div>
                        
                        {/* Thumbnail Navigation */}
                        {project.screenshots.length > 1 && (
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {project.screenshots.map((screenshot, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentScreenshot(index)}
                                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                                  index === currentScreenshot
                                    ? 'border-blue-500'
                                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                                }`}
                              >
                                <img
                                  src={screenshot}
                                  alt={`Thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {project.fullDescription || project.description}
                  </p>
                  
                  {project.features && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1 text-green-500">
                              <Check size={16} />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* My Contribution Section */}
                {project.myContribution && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                      <UserCircle size={20} className="text-blue-500" />
                      My Contribution
                    </h3>
                    <ul className="space-y-2">
                      {project.myContribution.map((contribution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="min-w-5 text-blue-500">•</div>
                          <span className="text-gray-700 dark:text-gray-300">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(project.challenges && project.solutions) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Challenges</h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="min-w-5 text-red-500">•</div>
                            <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Solutions</h3>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="min-w-5 text-green-500">•</div>
                            <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={20} />
                      View Source Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};