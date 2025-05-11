import React from 'react';
import { LinkedinIcon, MailIcon, GithubIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              &copy; {new Date().getFullYear()} S.H. Buddima Chamath Kumara. All
              rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:buddimachamathlive@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" aria-label="Email">
              <MailIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/buddima-chamath" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};