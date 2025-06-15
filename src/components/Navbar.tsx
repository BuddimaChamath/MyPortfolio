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

  return (
    <nav className={`sticky top-0 z-50 ${
      theme === 'dark' 
        ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' 
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
    } shadow-lg transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-blue-400 via-purple-400 to-cyan-400'
                : 'from-blue-600 via-purple-600 to-cyan-600'
            } bg-clip-text text-transparent hover:scale-105 transition-transform duration-200`}>
              S.H.B.C. Kumara
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                  } before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-center`}
                >
                  {item}
                </a>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-3 ml-4 rounded-full transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 hover:text-yellow-300 hover:rotate-12'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 hover:rotate-12'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  theme === 'dark' ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 hover:text-yellow-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            theme === 'dark' 
              ? 'bg-gray-900/95 backdrop-blur-sm border-t border-gray-800' 
              : 'bg-white/95 backdrop-blur-sm border-t border-gray-200'
          }`}>
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all duration-200 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                } border-l-4 border-transparent hover:border-blue-500 transform hover:translate-x-1`}
                onClick={toggleMenu}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};