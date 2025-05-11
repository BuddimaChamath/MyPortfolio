import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface BackToTopProps {
  isVisible: boolean;
}
export const BackToTop = ({
  isVisible
}: BackToTopProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <AnimatePresence>
      {isVisible && <motion.button initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 20
    }} onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50" aria-label="Back to top">
          <ArrowUpIcon size={24} />
        </motion.button>}
    </AnimatePresence>;
};