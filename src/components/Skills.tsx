import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, EDUCATION } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-green-100 dark:bg-green-900/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-yellow-100 dark:bg-yellow-900/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Skills Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="text-blue-600 dark:text-cyan-400" />
              Technical Skills
            </h2>
          </motion.div>

          <div className="space-y-8">
            {SKILLS.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-zinc-200 mb-4 border-l-4 border-blue-500 pl-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-4 py-2 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg text-gray-700 dark:text-zinc-300 font-medium text-sm hover:-translate-y-1 transition-transform cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-purple-600 dark:text-purple-400" />
              Education
            </h2>
          </motion.div>

          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-gray-200 dark:border-zinc-800"
              >
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-purple-600 dark:bg-purple-500 rounded-full" />
                <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl hover:bg-white dark:hover:bg-zinc-900 transition-colors shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-sm px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-bold">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-zinc-400 text-sm mt-2 mb-2">
                    {edu.period}
                  </p>
                  {edu.details && (
                    <p className="text-gray-600 dark:text-zinc-300 text-sm italic border-t border-gray-100 dark:border-zinc-800 pt-2 mt-2">
                      {edu.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;