
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest text-xs mb-4 block">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors">Selected Projects</h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm transition-colors">
            A collection of my recent work, ranging from complex web applications to minimalist landing pages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 flex flex-col h-full shadow-sm hover:shadow-xl dark:hover:shadow-emerald-500/5 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 dark:brightness-90"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-950 px-2 py-1 rounded-full border border-zinc-100 dark:border-zinc-800 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow transition-colors">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.liveUrl}
                    className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all group/link text-zinc-900 dark:text-zinc-100"
                  >
                    Live Preview 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-sm font-bold text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                  >
                    GitHub
                  </a>
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
