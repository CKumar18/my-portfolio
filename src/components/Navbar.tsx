import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-cyan-400 dark:to-purple-500"
        >
          SKB.
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-yellow-400"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 dark:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;