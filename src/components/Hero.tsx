import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Download, ChevronDown, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-blue-600 dark:text-cyan-400 bg-blue-100 dark:bg-zinc-900 border dark:border-zinc-800 rounded-full mb-4">
              WEB DEVELOPER & CONSULTANT
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-gray-900 dark:text-white leading-tight">
              Hello, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {CONTACT_INFO.name}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              {CONTACT_INFO.tagline} Experienced in building responsive, user-friendly websites and delivering high-quality technical solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Mail size={18} />
                Contact Me
              </a>

              <a 
                href="/resume.pdf"
                download="Sai_Kumar_Bandi_Resume.pdf"
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-zinc-900 hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
              >
                <Download size={18} />
                Download Resume
              </a>

              <div className="flex items-center gap-4 px-4">
                <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-full shadow-md hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={`https://${CONTACT_INFO.github}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-full shadow-md hover:text-gray-900 dark:hover:text-white hover:-translate-y-1 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Visual Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] rotate-6 opacity-20 blur-sm transform scale-105" />
            
            {/* Image Container */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white dark:border-zinc-900 bg-zinc-900">
              <img 
                src="./profile.jpg" 
                alt="Sai Kumar Bandi" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Current Status</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Open to Work</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-zinc-600"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;