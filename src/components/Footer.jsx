import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/mangalnath', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/mangal-nath', label: 'LinkedIn' },
  { icon: <FaHackerrank />, href: 'https://hackerrank.com/mangal_nath', label: 'HackerRank' },
  { icon: <SiLeetcode />, href: 'https://leetcode.com/mangal_nath', label: 'LeetCode' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0" role="contentinfo">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm">&copy; {currentYear} Mangal Nath. All rights reserved.</p>
          <p className="text-xs mt-1">
            Crafted with <span role="img" aria-label="heart">❤️</span> using React, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        <div className="flex space-x-6" aria-label="Social media links">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Mangal Nath on ${link.label}`}
              title={link.label} // Tooltip for sighted users
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
