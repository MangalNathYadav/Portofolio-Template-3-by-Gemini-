import React, { useState, useEffect } from 'react'; // Added useState, useEffect for mobile menu
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a 
            href="#hero"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            aria-label="Navigate to Home Section"
            whileHover={{ scale: 1.05, color: '#2563EB' }} // Tailwind blue-600
            whileTap={{ scale: 0.95 }}
          >
            Mangal Nath
          </motion.a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={`Navigate to ${link.label} section`}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
            <ThemeToggle />
          </div>
          {/* Mobile Menu Button and ThemeToggle */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <motion.button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <motion.div 
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm shadow-lg pb-3 space-y-1 sm:px-3"
        >
          {navLinks.map((link) => (
            <motion.a
              key={`mobile-${link.label}`}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              aria-label={`Navigate to ${link.label} section`}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
