import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackToTopProps {
  isVisible: boolean;
  showProgress?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'gray';
}

export const BackToTop = ({
  isVisible,
  showProgress = true,
  position = 'bottom-right',
  size = 'md',
  color = 'blue',
}: BackToTopProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(scrolled, 0), 100));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-center': 'bottom-8 left-1/2 transform -translate-x-1/2',
  };

  const sizeConfig = {
    sm: { button: 40, icon: 18, ring: 50 },
    md: { button: 48, icon: 22, ring: 62 },
    lg: { button: 56, icon: 26, ring: 74 },
  };

  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    gray: 'bg-gray-600 hover:bg-gray-700',
  };

  const buttonSize = sizeConfig[size].button;
  const ringSize = sizeConfig[size].ring;
  const radius = (ringSize - 4) / 2; // 2px padding
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed ${positionClasses[position]} z-50`}
        >
          <div className="relative flex items-center justify-center text-gray-800 dark:text-white">
            {showProgress && (
              <svg
                width={ringSize}
                height={ringSize}
                className="absolute"
                style={{ pointerEvents: 'none' }}
              >
                <circle
                  cx={ringSize / 2}
                  cy={ringSize / 2}
                  r={radius}
                  stroke="currentColor"
                  opacity="0.2"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx={ringSize / 2}
                  cy={ringSize / 2}
                  r={radius}
                  stroke="currentColor"
                  opacity="0.9"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.2s ease' }}
                />
              </svg>
            )}

            <button
              onClick={scrollToTop}
              className={`w-[${buttonSize}px] h-[${buttonSize}px] ${colorClasses[color]} 
                text-white rounded-full flex items-center justify-center 
                shadow-lg transition hover:scale-110 relative`}
              aria-label="Back to top"
              style={{ width: buttonSize, height: buttonSize }}
            >
              <ArrowUpIcon size={sizeConfig[size].icon} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
