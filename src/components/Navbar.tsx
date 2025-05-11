import { useState } from 'react';
import { MenuIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react';
interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}
export const Navbar = ({
  theme,
  toggleTheme
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">S.H.B.C. Kumara</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#home" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#projects" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="#skills" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </a>
              <a href="#about" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#contact" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none" aria-label="Toggle theme">
                {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none" aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none" aria-label="Toggle menu">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <a href="#home" className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Home
            </a>
            <a href="#projects" className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#about" className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              About
            </a>
            <a href="#contact" className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>}
    </nav>;
};