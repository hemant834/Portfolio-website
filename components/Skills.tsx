
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants';

const OrbitGroup = ({ label, skills, rotationDuration = 20, reverse = false }: { label: string, skills: any[], rotationDuration?: number, reverse?: boolean }) => {
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      {/* Central Hub */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="z-10 w-32 h-32 rounded-full bg-white dark:bg-zinc-900 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-center p-4 transition-all hover:scale-105 cursor-default"
      >
        <span className="text-[10px] font-black tracking-[0.2em] text-zinc-900 dark:text-zinc-100">{label}</span>
      </motion.div>

      {/* Orbiting Container */}
      <motion.div
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full"
      >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 360;
          const radius = 120; // Fixed distance from center as requested ("same duri par")
          
          return (
            <div
              key={skill.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
              }}
            >
              {/* Counter-rotating icon to keep it upright */}
              <motion.div
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-12 h-12 rounded-full p-2.5 shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-2 border-white dark:border-zinc-800 flex items-center justify-center transition-all cursor-pointer bg-white dark:bg-zinc-800 overflow-hidden`}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain filter drop-shadow-sm dark:brightness-110" 
                  />
                </motion.div>
                
                {/* Tooltip on hover */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] py-1 px-2 rounded font-bold pointer-events-none whitespace-nowrap z-50">
                  {skill.name}
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      
      {/* Decorative orbit ring */}
      <div className="absolute inset-0 border border-zinc-50 dark:border-zinc-900 rounded-full scale-[0.85] -z-0 pointer-events-none" />
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-40 px-6 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-24 relative">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            TECH STACK
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-zinc-900 dark:text-zinc-100 transition-colors"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="w-1 h-14 bg-emerald-500 mx-auto rounded-full origin-top"
          />
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-0">
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <OrbitGroup label="FRONTEND" skills={SKILL_GROUPS.FRONTEND} rotationDuration={25} />
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <OrbitGroup label="BACKEND" skills={SKILL_GROUPS.BACKEND} rotationDuration={35} reverse={true} />
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <OrbitGroup label="DEVOPS" skills={SKILL_GROUPS.DEVOPS} rotationDuration={30} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
