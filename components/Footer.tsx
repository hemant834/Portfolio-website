
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 dark:text-zinc-600 text-sm transition-colors">
          © {new Date().getFullYear()} Hemant Kumar. All rights reserved.
        </p>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors text-sm font-medium">Twitter</a>
          <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors text-sm font-medium">LinkedIn</a>
          <a href="https://github.com/hemant834" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors text-sm font-medium">GitHub</a>
          <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors text-sm font-medium">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
