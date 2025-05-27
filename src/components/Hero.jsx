import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 dark:from-slate-800 dark:via-slate-900 dark:to-black text-white p-4">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.img
            src="https://placehold.co/150x150/ffffff/3B82F6.png?text=MN" // Placeholder for avatar
            alt="Mangal Nath - Avatar" // Accessible alt text
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl mx-auto border-4 border-white dark:border-gray-700" 
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Hi, I&apos;m Mangal Nath
        </motion.h1>
        <TypeAnimation
          sequence={[
            'Full-Stack Developer',
            2000,
            'Cybersecurity Researcher',
            2000,
            'NEET Aspirant',
            2000,
            '3D UI/UX Enthusiast',
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-3xl text-white dark:text-gray-300 font-medium mb-8"
          repeat={Infinity}
        />
        <motion.a
          href="#contact"
          aria-label="Scroll to Contact Me section"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 dark:bg-gray-800 dark:text-pink-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 dark:hover:bg-opacity-90 transition duration-300"
        >
          Contact Me <FaArrowDown className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
