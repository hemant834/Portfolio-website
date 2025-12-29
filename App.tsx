
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />
      <main>
        <AnimatePresence>
          <Hero />
          <About />
          <Skills />
          <Certificates />

          <Projects />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
