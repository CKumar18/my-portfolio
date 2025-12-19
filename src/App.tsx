import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Update HTML class when state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 overflow-x-hidden font-sans">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Contact />
    </div>
  );
};

export default App;