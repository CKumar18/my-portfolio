import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-20 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 text-lg"
          >
            Actively pursuing opportunities to contribute to impactful projects.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.a 
            href={`mailto:${CONTACT_INFO.email}`}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 flex flex-col items-center text-center group hover:border-blue-500 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Me</h3>
            <p className="text-gray-400 break-all">{CONTACT_INFO.email}</p>
          </motion.a>

          {/* Card 2 */}
          <motion.a 
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 flex flex-col items-center text-center group hover:border-green-500 transition-colors"
          >
            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Me</h3>
            <p className="text-gray-400">{CONTACT_INFO.phone}</p>
          </motion.a>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 flex flex-col items-center text-center group hover:border-purple-500 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-400">{CONTACT_INFO.location}</p>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Sai Kumar Bandi. All rights reserved.
            </p>
            <div className="flex gap-6">
                <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href={`https://${CONTACT_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;