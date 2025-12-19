import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-zinc-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 dark:bg-cyan-500 rounded-full -translate-x-1/2 top-0 md:top-6 hidden md:block ring-4 ring-white dark:ring-black" />

                {/* Content Box */}
                <div className="flex-1">
                  <div className={`bg-gray-50 dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-300 ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-left'
                  }`}>
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Briefcase size={18} className="text-blue-600 dark:text-cyan-400" />
                        {exp.role}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-cyan-400 font-semibold">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-zinc-300 mb-4 italic">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-zinc-400 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;