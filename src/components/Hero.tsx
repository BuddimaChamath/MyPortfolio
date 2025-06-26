import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, Mail, Award } from 'lucide-react';
import Typewriter from 'typewriter-effect/dist/core';

// Import the image directly
import profilePic from '../photos/profilePic.jpeg';
import cvFile from '../photos/cv.pdf';

export const Hero = () => {
  const typewriterRef = useRef(null);
  
  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ['Software Engineering Undergraduate', 'Flutter Developer', 'Java Enthusiast', 'Mobile App Developer'],
        autoStart: true,
        loop: true,
        delay: 75
      });
    }
  }, []);
  
  // Button action handlers
  const handleViewCV = () => {
    // Open CV in a new tab or download it
    window.open(cvFile, '_blank');
  };
  
  const handleContactScroll = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleGithubVisit = () => {
    // Open GitHub profile in a new tab
    window.open('https://github.com/BuddimaChamath', '_blank');
  };

  return <section id="home" className="min-h-screen flex items-center py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Animated particles - moved to a lower z-index */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {/* Code brackets particle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }} 
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="absolute top-20 right-1/4 text-7xl font-mono text-blue-600 dark:text-blue-600"
        >
          {"{ }"}
        </motion.div>
        
        {/* Circuit board lines */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className={`${i % 2 === 0 ? 'h-1 w-full' : 'h-full w-1'} rounded-full absolute ${i % 2 === 0 ? 'top-1/4' : 'left-1/4'}`}
              style={{
                left: i % 2 === 0 ? '0' : `${(i * 10) % 100}%`,
                top: i % 2 !== 0 ? '0' : `${(i * 10) % 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Binary digits floating */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              y: [0, -100, -200],
              x: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: i * 1.2,
            }}
            className="absolute text-lg font-mono font-bold text-blue-600 dark:text-blue-400"
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${50 + (i * 5)}%`
            }}
          >
            {i % 2 === 0 ? '1' : '0'}
          </motion.div>
        ))}
        
        {/* Main animated geometric shape */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }} 
          transition={{
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity
          }} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-4 border-dashed border-blue-500 dark:border-blue-700 rounded-lg"
        />

        {/* Additional tech elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
          className="absolute bottom-1/4 left-1/4 text-5xl font-mono text-blue-500 dark:text-blue-600"
        >
          {"</>"}
        </motion.div>

        {/* Code comment animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            x: [-100, 100]
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5
          }}
          className="absolute top-2/6 left-0 text-lg font-mono text-green-600 dark:text-green-500"
        >
          // Software Engineer Undergraduate
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "100" }}
          animate={{ 
            opacity: [0, 0.6, 0.8,0],
            x: [100, -100]
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5
          }}
          className="absolute top-1/3 right-0 text-lg font-mono text-green-600 dark:text-green-500 whitespace-nowrap"
        >
          // Flutter Developer | Java Enthusiast
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.5
            }} 
            className="md:w-3/5 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              S.H. Buddima Chamath Kumara
            </h1>
            <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4" ref={typewriterRef} />

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              BSc (Hons) Computer Science - Software Engineering
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              Kingston University, London | Graduation will be in August 2025
            </p>
            
            <div className="flex flex-wrap gap-4 relative z-10">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewCV}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2"
              >
                <FileText size={20} />
                View CV
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactScroll}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGithubVisit}
                className="px-6 py-3 bg-gray-800 text-white dark:bg-gray-700 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors shadow-md flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{
              opacity: 0,
              scale: 0.5
            }} 
            animate={{
              opacity: 1,
              scale: 1
            }} 
            transition={{
              duration: 0.5,
              delay: 0.2
            }} 
            className="md:w-2/5 flex justify-center relative z-20"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-hidden">
                  <img 
                    src={profilePic} 
                    alt="Buddima Chamath Kumara - Software Engineering Graduate"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};