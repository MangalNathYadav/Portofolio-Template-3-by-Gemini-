import React from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaGithub } from 'react-icons/fa';

const projectsData = [
  { title: 'Towers of Hanoi Game', live: 'https://towers-of-hanoi-game.netlify.app/', github: 'https://github.com/MangalNathYadav/Towers-of-Hanoi', description: 'Classic Towers of Hanoi puzzle game.', stack: ['HTML', 'CSS', 'JavaScript'], image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Hanoi' },
  { title: 'TrackFriend', live: 'https://trackfriend.netlify.app/', github: 'https://github.com/MangalNathYadav/TrackFriend', description: 'A friend tracking application.', stack: ['React', 'Firebase'], image: 'https://placehold.co/600x400/EC4899/FFFFFF?text=TrackFriend' },
  { title: 'Harnam Masale', live: 'https://harnam-masale.netlify.app/', github: 'https://github.com/MangalNathYadav/Harnam-Masale_Website', description: 'E-commerce concept for a spice brand.', stack: ['HTML', 'CSS', 'JavaScript'], image: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Harnam+Masale' },
  { title: 'Velvety Llama', live: 'https://velvety-llama-8f66a8.netlify.app/', github: 'https://github.com/MangalNathYadav/Portfolio-Mangal', description: 'A previous portfolio website.', stack: ['HTML', 'CSS', 'JS'], image: 'https://placehold.co/600x400/10B981/FFFFFF?text=Portfolio+V1' },
  { title: 'Photo Album', live: 'https://album-12d.netlify.app/', github: 'https://github.com/MangalNathYadav/photo-album', description: 'A simple photo album application.', stack: ['React', 'CSS'], image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Photo+Album' },
  { title: 'Lecture Area', live: 'https://lecture-area.netlify.app/', github: 'https://github.com/MangalNathYadav/Lecture-Area', description: 'Platform for accessing lectures.', stack: ['HTML', 'CSS', 'JS'], image: 'https://placehold.co/600x400/6366F1/FFFFFF?text=Lecture+Area' },
  { title: 'Notes Downloader', live: 'https://notes-downloader.netlify.app/', github: 'https://github.com/MangalNathYadav/Notes-Downloader', description: 'A tool for downloading notes.', stack: ['HTML', 'CSS', 'JS'], image: 'https://placehold.co/600x400/D946EF/FFFFFF?text=Notes+Downloader' },
  { title: 'LHWP', live: 'https://lhwp.netlify.app/', github: 'https://github.com/MangalNathYadav/LHWP', description: 'Learn Hacking With Passion website.', stack: ['HTML', 'CSS', 'JS'], image: 'https://placehold.co/600x400/EF4444/FFFFFF?text=LHWP' },
  { title: 'Linterex', live: 'https://linterex.netlify.app/', github: 'https://github.com/MangalNathYadav/Linterex', description: 'Website for Linterex.', stack: ['HTML', 'CSS', 'JS'], image: 'https://placehold.co/600x400/84CC16/FFFFFF?text=Linterex' },
  { title: 'Insta Clone MG', live: 'https://insta-clone-mg.netlify.app/', github: 'https://github.com/MangalNathYadav/insta-clone', description: 'A clone of Instagram.', stack: ['React', 'Firebase'], image: 'https://placehold.co/600x400/F97316/FFFFFF?text=Insta+Clone' },
  { title: 'HackDevs', live: 'https://hackdevs.netlify.app/', github: 'https://github.com/MangalNathYadav/hackdevs', description: 'Website for HackDevs community.', stack: ['HTML', 'CSS', 'JS'], image: 'https://placehold.co/600x400/0EA5E9/FFFFFF?text=HackDevs' },
  { title: 'WebEnum Tool', live: null, github: 'https://github.com/MangalNathYadav/WebEnum', description: 'A tool for web enumeration.', stack: ['Python'], image: 'https://placehold.co/600x400/78716C/FFFFFF?text=WebEnum' },
  { title: 'E-commerce (AI Gen)', live: 'https://e-commercemg.netlify.app/', github: null, description: 'AI-generated e-commerce site concept.', stack: ['AI Tool'], image: 'https://placehold.co/600x400/A855F7/FFFFFF?text=E-commerce' },
];

const ProjectCard = ({ title, description, stack, live, github, image }) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
        boxShadow: "0px 15px 25px rgba(0,0,0,0.15)",
        transition: { duration: 0.25, ease: "easeOut" }
      }}
    >
      <img src={image} alt={`${title} - Project Screenshot`} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <div className="mb-3">
          {stack && stack.map((tech, index) => (
            <span key={index} className="inline-block bg-purple-200 dark:bg-pink-700 text-purple-800 dark:text-pink-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{description}</p>
        <div className="mt-auto pt-4 flex justify-end space-x-3">
          {live && (
            <motion.a 
              href={live} target="_blank" rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-800 transition-colors duration-150"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLink className="mr-2" /> Live Demo
            </motion.a>
          )}
          {github && (
            <motion.a 
              href={github} target="_blank" rel="noopener noreferrer"
              aria-label={`View source code of ${title} on GitHub`}
              className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-700 bg-slate-200 hover:bg-slate-300 dark:text-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:focus:ring-offset-slate-800 transition-colors duration-150"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="mr-2" /> GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">Projects Showcase</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
