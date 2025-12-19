import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Code2, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A selection of my technical projects ranging from e-commerce to machine learning applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800 flex flex-col group"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-black relative overflow-hidden flex items-center justify-center">
                {/* Abstract visualization for project */}
                <div className="absolute inset-0 opacity-10 dark:opacity-20 pattern-grid-lg" />
                <div className="z-10 text-gray-400 dark:text-zinc-600 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500">
                  {index === 0 ? <Layers size={64} /> : <Code2 size={64} />}
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/90 dark:bg-purple-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm">
                  <a 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-bold tracking-wider border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
                  >
                    VIEW DETAILS <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-zinc-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;