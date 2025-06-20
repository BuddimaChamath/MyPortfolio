import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Github, Heart, Code } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [initialViewportHeight, setInitialViewportHeight] = useState(0);

  useEffect(() => {
    // Store initial viewport height - use visual viewport on iOS if available
    const initialHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const initialScreenHeight = window.screen.height;
    setInitialViewportHeight(initialHeight);

    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Don't trigger footer animation if keyboard is open
      if (isKeyboardOpen) return;
      
      // Get contact section position
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start sliding when contact section is 50% visible from bottom
        const triggerPoint = windowHeight * -0.2;
        setIsVisible(contactRect.top < triggerPoint);
      }
    };

    const checkKeyboardStatus = () => {
      let currentHeight;
      
      if (window.visualViewport) {
        // Use visual viewport API (more accurate for iOS)
        currentHeight = window.visualViewport.height;
      } else {
        currentHeight = window.innerHeight;
      }
      
      const heightDifference = initialHeight - currentHeight;
      
      // Different thresholds for iOS vs Android
      const threshold = isIOS ? 100 : 150;
      
      if (heightDifference > threshold) {
        setIsKeyboardOpen(true);
      } else {
        setIsKeyboardOpen(false);
      }
    };

    const handleResize = () => {
      checkKeyboardStatus();
    };

    const handleVisualViewportChange = () => {
      if (window.visualViewport) {
        checkKeyboardStatus();
      }
    };

    // Handle focus events on form inputs - more aggressive for iOS
    const handleFocusIn = (e: FocusEvent) => {
      if (
        (e.target as HTMLElement).tagName === 'INPUT' ||
        (e.target as HTMLElement).tagName === 'TEXTAREA'
      ) {
        // Immediately hide footer on focus for iOS
        if (isIOS) {
          setIsKeyboardOpen(true);
        }
        
        // Multiple checks with different delays for iOS
        const delays = isIOS ? [100, 200, 300, 500, 800] : [300];
        
        delays.forEach(delay => {
          setTimeout(() => {
            checkKeyboardStatus();
          }, delay);
        });
      }
    };

    const handleFocusOut = () => {
      // Multiple delays for iOS keyboard close detection
      const delays = isIOS ? [100, 300, 500, 800] : [300];
      
      delays.forEach(delay => {
        setTimeout(() => {
          checkKeyboardStatus();
        }, delay);
      });
    };

    // iOS specific: Listen for visual viewport changes
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleVisualViewportChange);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    // iOS specific: Additional orientation change handler
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        const newInitialHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        setInitialViewportHeight(newInitialHeight);
        checkKeyboardStatus();
      }, 500);
    });
    
    handleScroll(); // Call once to set initial state
    
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleVisualViewportChange);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      window.removeEventListener('orientationchange', () => {});
    };
  }, [isKeyboardOpen, initialViewportHeight]);

  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Email button clicked');
    window.location.href = 'mailto:buddimachamathlive@gmail.com';
  };

  const handleLinkedInClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('LinkedIn button clicked');
    window.open('https://linkedin.com/in/buddima-chamath', '_blank', 'noopener,noreferrer');
  };

  const handleGitHubClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('GitHub button clicked');
    window.open('https://github.com/buddimachamath', '_blank', 'noopener,noreferrer');
  };

  // Calculate transform based on scroll position
  const getTransform = () => {
    // Hide footer completely if keyboard is open
    if (isKeyboardOpen) return 'translateY(100%)';
    
    if (!isVisible) return 'translateY(100%)';
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const contactRect = contactSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // More precise calculation for smoother animation
      const contactBottom = contactRect.bottom;
      const contactHeight = contactRect.height;
      
      // Start animation when contact section is 50% visible
      const triggerStart = windowHeight * 1;
      
      // Calculate progress based on how much contact section has scrolled past trigger point
      const progress = Math.max(0, Math.min(1, (triggerStart - contactRect.top) / (contactHeight * 0.3)));
      
      // Transform from 100% (hidden) to 0% (fully visible)
      const translateY = (1 - progress) * 100;
      return `translateY(${translateY}%)`;
    }
    
    return 'translateY(100%)';
  };

  return (
    <>
      {/* Main Footer - Fixed position with sliding animation */}
      <footer 
        className="fixed bottom-0 left-0 right-0 w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-20 transition-transform duration-700 ease-out"
        style={{ 
          transform: getTransform(),
          height: '100vh',
          maxHeight: '100vh'
        }}
      >
        {/* Enhanced connection line */}
        <div className={`absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-700 ${
          isVisible && !isKeyboardOpen ? 'opacity-100' : 'opacity-70'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse"></div>
          {/* Add glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-sm"></div>
        </div>
        
        <div className="w-full h-full px-4 sm:px-6 md:px-8 py-8 flex items-center justify-center overflow-hidden">
          <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible && !isKeyboardOpen ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-80'
          }`}>
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              
              {/* Brand/Logo Section with enhanced animation */}
              <div className="text-center">
                <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2 sm:mb-4 transition-all duration-700 ${
                  isVisible && !isKeyboardOpen ? 'md:text-5xl lg:text-6xl transform scale-105' : ''
                }`}>
                  S.H.Buddima Chamath Kumara
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base md:text-lg">
                  BSc (Hons) Computer Science - Software Engineering
                </p>
              </div>

              {/* Social Links with enhanced hover effects */}
              <div className={`flex space-x-4 sm:space-x-6 md:space-x-8 transition-all duration-700 relative z-50 ${
                isVisible && !isKeyboardOpen ? 'space-x-6 sm:space-x-8 md:space-x-10 transform scale-110' : ''
              }`}>
                <button 
                  onClick={handleEmailClick}
                  className="group relative p-3 sm:p-4 md:p-5 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-600"
                  aria-label="Send Email"
                  type="button"
                >
                  <Mail 
                    size={24} 
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-600 dark:text-gray-300 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300 pointer-events-none" 
                  />
                  <div className="absolute -top-12 sm:-top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                    Send Email
                  </div>
                </button>
                
                <button 
                  onClick={handleLinkedInClick}
                  className="group relative p-3 sm:p-4 md:p-5 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
                  aria-label="Visit LinkedIn Profile"
                  type="button"
                >
                  <Linkedin 
                    size={24} 
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 pointer-events-none" 
                  />
                  <div className="absolute -top-12 sm:-top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                    LinkedIn
                  </div>
                </button>
                
                <button 
                  onClick={handleGitHubClick}
                  className="group relative p-3 sm:p-4 md:p-5 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-500"
                  aria-label="Visit GitHub Profile"
                  type="button"
                >
                  <Github 
                    size={24} 
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 pointer-events-none" 
                  />
                  <div className="absolute -top-12 sm:-top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                    GitHub
                  </div>
                </button>
              </div>

              {/* Animated divider */}
              <div className={`w-full max-w-sm sm:max-w-md md:max-w-lg h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent transition-all duration-700 ${
                isVisible && !isKeyboardOpen ? 'max-w-lg sm:max-w-xl md:max-w-2xl' : ''
              }`}></div>

              {/* Footer Text */}
              <div className="text-center space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                  <span>&copy; {currentYear} S.H. Buddima Chamath Kumara.</span>
                  <span>All rights reserved.</span>
                </p>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 flex items-center justify-center gap-2">
                  <span>Made with</span>
                  <Heart size={14} className="sm:w-4 sm:h-4 text-red-500 animate-pulse" />
                  <span>and</span>
                  <Code size={14} className="sm:w-4 sm:h-4 text-blue-500" />
                  <span>in Sri Lanka</span>
                </p>
              </div>

              {/* Tech Stack Badge with scroll animation */}
              <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm transition-all duration-700 ${
                isVisible && !isKeyboardOpen ? 'gap-3 sm:gap-4 md:gap-5 transform scale-105' : ''
              }`}>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium hover:scale-110 transition-transform duration-200 shadow-md">
                  React
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium hover:scale-110 transition-transform duration-200 shadow-md">
                  TypeScript
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full font-medium hover:scale-110 transition-transform duration-200 shadow-md">
                  Tailwind CSS
                </span>
              </div>

              {/* Additional decorative elements */}
              <div className="hidden md:block mt-8">
                <div className="flex items-center justify-center space-x-8">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating particles effect */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          isVisible && !isKeyboardOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-16 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-24 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-20 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/5 dark:to-white/5 pointer-events-none"></div>
      </footer>
    </>
  );
};