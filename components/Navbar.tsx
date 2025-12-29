import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT : NAME */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-lg font-semibold text-zinc-900 dark:text-white">
            Hemant Kumar
          </span>
        </motion.div>

        {/* RIGHT : MENU + THEME */}
        <div className="flex items-center gap-4">

          {/* MENU (DESKTOP ONLY) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className={`
              hidden lg:flex items-center
              px-10 py-4
              rounded-full
              border border-zinc-300 dark:border-zinc-700
              bg-white dark:bg-zinc-900
              transition-all
              ${isScrolled ? 'shadow-md' : ''}
            `}
          >
            <div className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-sm font-bold tracking-widest
                    text-zinc-900 dark:text-zinc-200
                    hover:text-emerald-500
                    transition-colors
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* THEME BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700
                       flex items-center justify-center
                       bg-white dark:bg-zinc-900
                       text-zinc-900 dark:text-zinc-100"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/></svg>
            )}
          </motion.button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
