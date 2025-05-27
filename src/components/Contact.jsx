import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Replace with your Formspree endpoint ID
    const formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT_ID'; 
    // Example: 'https://formspree.io/f/xxyyzzqq'
    // IMPORTANT: User must replace 'YOUR_FORMSPREE_ENDPOINT_ID' with their actual Formspree form ID.

    if (formspreeEndpoint === 'YOUR_FORMSPREE_ENDPOINT_ID') {
        setSubmitMessage('Formspree endpoint not configured. Please set it up in Contact.jsx.');
        setIsSubmitting(false);
        return;
    }
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully! Thank you.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setSubmitMessage(data.errors.map(error => error.message).join(', '));
        } else {
          setSubmitMessage('Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/mangalnath', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/mangal-nath', label: 'LinkedIn' },
    { icon: <FaHackerrank />, href: 'https://hackerrank.com/mangal_nath', label: 'HackerRank' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/mangal_nath', label: 'LeetCode' },
    { icon: <FaEnvelope />, href: 'mailto:mangalnth@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT_ID" // User needs to replace this
              method="POST"
              className="space-y-6 bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  aria-required="true"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  aria-required="true"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  required 
                  aria-required="true"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <motion.button
                type="submit"
                aria-label="Send message"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-800 disabled:opacity-50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : (<><FaPaperPlane className="ml-2" /> Send Message</>)}
              </motion.button>
              {submitMessage && (
                <p className={`mt-4 text-center ${submitMessage.includes('success') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {submitMessage}
                </p>
              )}
            </motion.form>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Connect with me</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect with Mangal Nath on ${link.label}`}
                      title={link.label} // Tooltip for sighted users
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-3xl text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
               <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Contact Information</h3>
                 <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center">
                    <FaEnvelope className="mr-3 text-xl text-blue-500" />
                    <a href="mailto:mangalnth@gmail.com" aria-label="Email Mangal Nath" className="hover:text-blue-500 dark:hover:text-blue-400">mangalnth@gmail.com</a>
                  </li>
                  {/* Add other contact info like phone or location if desired, with appropriate ARIA labels */}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
