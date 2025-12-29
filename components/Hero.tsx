
import React from 'react';
import { motion } from 'framer-motion';
import CodingIllustration from "./CodingIllustration";


const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 items-center gap-12 pt-20">
        
        {/* Left Content */}
        <div className="relative z-10 space-y-8">
          <div className="relative inline-block">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[100px] md:text-[140px] lg:text-[160px] font-black leading-none tracking-tighter text-zinc-900 dark:text-white"
            >
              Hello<span className="text-emerald-500">.</span>
            </motion.h1>
            {/* Hand-drawn circle effect */}
            <motion.div 
              className="absolute -top-4 -left-6 w-[calc(100%+48px)] h-[calc(100%+16px)] pointer-events-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <svg viewBox="0 0 240 120" className="w-full h-full drop-shadow-sm">
                <motion.ellipse 
                  cx="120" cy="60" rx="110" ry="50" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="2" 
                  strokeDasharray="15 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[3px] bg-emerald-500 rounded-full" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors">I am Hemant Kumar</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-zinc-400 dark:text-zinc-500 text-lg md:text-xl font-medium"
            >
              Web Developer
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
        <a
  href="/cv.pdf"
  download="Hemant_Kumar_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 px-8 py-4 bg-[#10b981] text-white rounded-lg font-bold
             hover:bg-[#059669] transition-all hover:scale-[1.02]
             shadow-lg shadow-emerald-500/20 active:scale-95"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
  Download CV
</a>

          </motion.div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-[650px]"
          >
            <div className="relative z-10 flex flex-col items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[80px] -z-10" />
              
           <CodingIllustration />


              {/* Skill Bubbles matching Hemant's CV */}
              <div className="absolute -top-10 inset-x-0 h-full pointer-events-none">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-0 bg-[#4FC08D] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xs border-4 border-white dark:border-zinc-800 shadow-xl"
                >
                  Vue
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E34F26] text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-xl border-4 border-white dark:border-zinc-800 shadow-2xl"
                >
                  HTML
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-5 left-[70%] bg-[#1572B6] text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-base border-4 border-white dark:border-zinc-800 shadow-xl"
                >
                  CSS
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-24 right-0 bg-[#00599C] text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-zinc-800 shadow-xl"
                >
                  C++
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="group w-14 h-14 rounded-full bg-emerald-50 dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-800 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all shadow-lg shadow-black/5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform"><path d="m7 15 5 5 5-5"/></svg>
        </a>
      </motion.div>

     
    </section>
  );
};

export default Hero;
