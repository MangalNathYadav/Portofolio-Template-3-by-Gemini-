import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const About = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/MangalNathYadav', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/optimistic--thunder/', label: 'LinkedIn' },
    { icon: <FaHackerrank />, href: 'https://hackerrank.com/mangal_nath', label: 'HackerRank' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/mangal_nath', label: 'LeetCode' },
  ];

  const contactDetails = [
    { icon: <FaEnvelope />, text: 'mangalnath123k@gmail.com', href: 'mailto:mangalnath123k@gmail.com', label: 'Email Mangal Nath' },
    { icon: <FaPhone />, text: '+91 9125135581', href: 'tel:+919125135581', label: 'Call Mangal Nath' },
    { icon: <FaMapMarkerAlt />, text: 'Kanpur Nagar, India 208016', label: 'Location: Kanpur Nagar, India' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">About Me</h2>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <motion.div 
              className="md:col-span-1 flex justify-center"
            >
              <img 
                src="https://placehold.co/300x300/E2E8F0/4A5568.png?text=Profile+Pic" 
                alt="Mangal Nath - Profile" // Accessible alt text
                className="rounded-lg shadow-xl w-60 h-60 md:w-72 md:h-72 object-cover"
              />
            </motion.div>
            <motion.div 
              className="md:col-span-2 space-y-6"
            >
              <motion.p 
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Mangal is a self-taught full-stack developer & cybersecurity enthusiast, currently a Class 12 student balancing medical entrance exam (NEET 2025) preparation with deep dives into the tech world. He's passionate about elegant web design, the intricacies of ethical hacking, hands-on Arduino projects, and crafting immersive 3D UI/UX experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-8"
              >
                With a strong foundation in cybersecurity principles and a knack for web development (Python, JavaScript, C++), Mangal is adept at identifying vulnerabilities and building secure, user-friendly applications. He's always eager to learn and apply new technologies, constantly exploring the latest trends in cybersecurity and software development to enhance his skills and contribute to innovative projects.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {contactDetails.map((detail, index) => (
                  <motion.div key={detail.label} className="flex items-center">
                    {detail.href ? (
                      <a href={detail.href} aria-label={detail.label} className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center">
                        {detail.icon} {detail.text}
                      </a>
                    ) : (
                      <>{detail.icon} {detail.text}</> // For non-link items like location
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="flex space-x-6 pt-4 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-pink-500 transition-colors duration-300 text-3xl"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {React.cloneElement(social.icon, { size: 28 })}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
