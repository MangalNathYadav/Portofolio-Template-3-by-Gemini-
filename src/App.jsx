import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));

// Fallback loading component
const SectionLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
    <p className="text-xl text-slate-700 dark:text-slate-300">Loading section...</p>
  </div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
           (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Pass isDarkMode and setIsDarkMode to Navbar if it needs them (e.g., for ThemeToggle)
  // Or manage theme state within ThemeToggle itself if preferred and App only sets initial body class

  return (
    <div className={`min-h-screen font-sans antialiased ${isDarkMode ? 'dark' : ''}`}>
      <CustomCursor />
      <Navbar />
      <Suspense fallback={<SectionLoadingFallback />}>
        <main className="pt-16"> {/* Add padding-top to offset fixed Navbar height */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
