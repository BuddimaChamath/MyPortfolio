import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
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
  const [imageLoading, setImageLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Store original body styles to restore them properly
  const originalBodyStyle = useRef({
    overflow: '',
    paddingRight: '',
    position: '',
    top: '',
    width: ''
  });
  
  // Touch/swipe handling
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Reset screenshot index when project changes
  useEffect(() => {
    if (project) {
      setCurrentScreenshot(0);
      setShowScreenshots(false);
    }
  }, [project]);

  // Body scroll lock effect - MOBILE-OPTIMIZED VERSION
  useEffect(() => {
    if (isOpen) {
      // Store original styles on first open
      originalBodyStyle.current = {
        overflow: document.body.style.overflow || '',
        paddingRight: document.body.style.paddingRight || '',
        position: document.body.style.position || '',
        top: document.body.style.top || '',
        width: document.body.style.width || ''
      };
      
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // For mobile devices, use position fixed to prevent scroll issues
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Mobile-specific scroll lock
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
      } else {
        // Desktop scroll lock
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      
      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-y', scrollY.toString());
    }
    
    // Cleanup function - this is crucial
    return () => {
      if (originalBodyStyle.current) {
        const scrollY = parseInt(document.body.getAttribute('data-scroll-y') || '0');
        
        // Restore original styles
        document.body.style.overflow = originalBodyStyle.current.overflow;
        document.body.style.paddingRight = originalBodyStyle.current.paddingRight;
        document.body.style.position = originalBodyStyle.current.position;
        document.body.style.top = originalBodyStyle.current.top;
        document.body.style.width = originalBodyStyle.current.width;
        
        // Restore scroll position on mobile
        if (scrollY > 0) {
          window.scrollTo(0, scrollY);
        }
        
        // Clean up attribute
        document.body.removeAttribute('data-scroll-y');
      }
    };
  }, [isOpen]);

  // Additional cleanup on component unmount - MOBILE SAFE
  useEffect(() => {
    return () => {
      // Ensure body scroll is restored on component unmount
      const scrollY = parseInt(document.body.getAttribute('data-scroll-y') || '0');
      
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (scrollY > 0) {
        window.scrollTo(0, scrollY);
      }
      
      document.body.removeAttribute('data-scroll-y');
    };
  }, []);

  // Enhanced onClose function to ensure proper cleanup
  const handleClose = useCallback(() => {
    const scrollY = parseInt(document.body.getAttribute('data-scroll-y') || '0');
    
    // Force restore body styles immediately
    document.body.style.overflow = originalBodyStyle.current.overflow;
    document.body.style.paddingRight = originalBodyStyle.current.paddingRight;
    document.body.style.position = originalBodyStyle.current.position;
    document.body.style.top = originalBodyStyle.current.top;
    document.body.style.width = originalBodyStyle.current.width;
    
    // Restore scroll position on mobile
    if (scrollY > 0) {
      window.scrollTo(0, scrollY);
    }
    
    // Clean up attribute
    document.body.removeAttribute('data-scroll-y');
    
    // Reset modal state
    setShowScreenshots(false);
    setCurrentScreenshot(0);
    setImageLoading(false);
    
    // Call parent onClose
    onClose();
  }, [onClose]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen || !project?.screenshots?.length || !showScreenshots) {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
      return;
    }
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevScreenshot();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextScreenshot();
        break;
      case 'Escape':
        handleClose();
        break;
    }
  }, [isOpen, project, showScreenshots]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

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
      setImageLoading(true);
    }
  };

  const prevScreenshot = () => {
    if (project.screenshots && project.screenshots.length > 0) {
      setCurrentScreenshot((prev) => 
        prev === 0 ? (project.screenshots?.length || 1) - 1 : prev - 1
      );
      setImageLoading(true);
    }
  };

  // Touch handlers for swipe gestures - MOBILE OPTIMIZED
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartX.current);
    const deltaY = Math.abs(touch.clientY - touchStartY.current);
    
    // Only consider horizontal swipes (more horizontal than vertical)
    if (deltaX > deltaY && deltaX > 10) {
      setIsDragging(true);
      e.preventDefault(); // Prevent scrolling
      e.stopPropagation(); // Prevent event bubbling
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !project.screenshots?.length) {
      touchStartX.current = 0;
      touchStartY.current = 0;
      setIsDragging(false);
      return;
    }
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = Math.abs(touch.clientY - touchStartY.current);
    
    // Minimum swipe distance and ensure it's more horizontal than vertical
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
      if (deltaX > 0) {
        prevScreenshot();
      } else {
        nextScreenshot();
      }
    }
    
    touchStartX.current = 0;
    touchStartY.current = 0;
    setIsDragging(false);
  };

  // Framer Motion drag handlers
  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    
    if (Math.abs(info.offset.x) > threshold && project.screenshots?.length) {
      if (info.offset.x > 0) {
        prevScreenshot();
      } else {
        nextScreenshot();
      }
    }
  };

  // Handle backdrop click while preventing event bubbling
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
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
          
          {/* Modal Container - MOBILE OPTIMIZED */}
          <div 
            className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8"
            style={{ 
              overscrollBehavior: 'contain',
              WebkitOverflowScrolling: 'touch' // iOS smooth scrolling
            }}
          >
            <motion.div
              ref={modalRef}
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
                onClick={handleClose}
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

                {/* Enhanced Screenshots Section */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Camera size={20} className="text-blue-500" />
                        Screenshots
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                          ({project.screenshots.length} images)
                        </span>
                      </h2>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowScreenshots(!showScreenshots)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
                        >
                          <Camera size={16} />
                          {showScreenshots ? 'Hide' : 'View'} Gallery
                        </button>
                      </div>
                    </div>
                    
                    {showScreenshots && (
                      <div className="space-y-4">
                        {/* Navigation Instructions */}
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                          <span className="hidden md:flex items-center gap-1">
                            <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">←→</kbd> 
                            Navigate
                          </span>
                          <span className="md:hidden">Swipe left/right to navigate</span>
                          <span className="flex items-center gap-1">
                            <Camera size={12} />
                            Drag or use arrows to browse images
                          </span>
                        </div>
                        
                        {/* Main Screenshot Display - MOBILE OPTIMIZED */}
                        <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden group touch-pan-x">
                          <motion.div
                            className="relative select-none"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            whileTap={{ scale: 0.98 }}
                            style={{ touchAction: 'pan-x' }} // Allow only horizontal panning
                          >
                            <div className="relative">
                              {imageLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                </div>
                              )}
                              <img
                                src={project.screenshots[currentScreenshot]}
                                alt={`${project.title} screenshot ${currentScreenshot + 1}`}
                                className="w-full h-96 md:h-[500px] object-contain transition-opacity duration-300"
                                onLoad={handleImageLoad}
                                style={{ opacity: imageLoading ? 0 : 1 }}
                              />
                            </div>
                          </motion.div>
                          
                          {/* Navigation Arrows */}
                          {project.screenshots.length > 1 && (
                            <>
                              <button
                                onClick={prevScreenshot}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
                              >
                                <ChevronLeft size={24} />
                              </button>
                              <button
                                onClick={nextScreenshot}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
                              >
                                <ChevronRight size={24} />
                              </button>
                            </>
                          )}
                          
                          {/* Screenshot Counter */}
                          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
                            {currentScreenshot + 1} / {project.screenshots.length}
                          </div>
                          
                          {/* Swipe indicator for mobile */}
                          {isDragging && (
                            <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Swipe to navigate
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Enhanced Thumbnail Navigation */}
                        {project.screenshots.length > 1 && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                All Screenshots
                              </h4>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                Click thumbnails to jump to image
                              </div>
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                              {project.screenshots.map((screenshot, index) => (
                                <motion.button
                                  key={index}
                                  onClick={() => {
                                    setCurrentScreenshot(index);
                                    setImageLoading(true);
                                  }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 relative ${
                                    index === currentScreenshot
                                      ? 'border-blue-500 shadow-lg ring-2 ring-blue-200 dark:ring-blue-800'
                                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 hover:shadow-md'
                                  }`}
                                >
                                  <img
                                    src={screenshot}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                  {index === currentScreenshot && (
                                    <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    </div>
                                  )}
                                </motion.button>
                              ))}
                            </div>
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