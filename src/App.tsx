import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ProjectDetailModal } from './components/ProjectDetailModal'; 
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, Project } from './components/projectsData'; // Import from the new file

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Toggle theme function
  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  // Function to handle project selection
  const handleProjectSelect = (projectId: string): void => {
    const project = projectsData[projectId];
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };
  
  // Function to close modal
  const closeModal = (): void => {
    setIsModalOpen(false);
  };
  
  // Check scroll position for back to top button
  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);
  
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className={`min-h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Projects onProjectSelect={handleProjectSelect} />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
        <BackToTop isVisible={isVisible} />
        
        {/* Project Detail Modal */}
        <ProjectDetailModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
          theme={theme}
        />
      </motion.div>
    </AnimatePresence>
  );
}