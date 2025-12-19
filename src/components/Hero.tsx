import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Download, ChevronDown, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-white dark:bg-black">
      {/* Background Decor with animation */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400 dark:bg-blue-600/20 rounded-full blur-3xl -z-10 opacity-40 animate-blob mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-40 right-40 w-96 h-96 bg-purple-400 dark:bg-purple-600/20 rounded-full blur-3xl -z-10 opacity-40 animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 dark:bg-pink-600/20 rounded-full blur-3xl -z-10 opacity-40 animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-full mb-6 uppercase">
              Web Developer & Consultant
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Hello, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                {CONTACT_INFO.name}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
              {CONTACT_INFO.tagline} Experienced in building responsive, user-friendly websites and delivering high-quality technical solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start items-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Sai_Kumar_Bandi_Resume.pdf"
                className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 flex items-center justify-center gap-2 transition-all"
              >
                <Download size={20} />
                Resume
              </motion.a>

              <div className="flex gap-3 mt-4 sm:mt-0">
                <a 
                  href={`https://${CONTACT_INFO.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-full shadow-md text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`https://${CONTACT_INFO.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-full shadow-md text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300 hover:-translate-y-1 transition-all"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center relative mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="relative"
          >
            {/* Visual Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] rotate-6 opacity-30 blur-lg transform scale-105" />
            
            {/* Image Container */}
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white dark:border-zinc-900 bg-zinc-900 group">
              <img 
                src="./profile.jpg" 
                alt="Sai Kumar Bandi" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold">Status</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Open to Work</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator - Hidden on mobile/tablet views */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-zinc-600 cursor-pointer"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;