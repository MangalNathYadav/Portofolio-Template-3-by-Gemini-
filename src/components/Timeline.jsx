import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUserGraduate, FaBriefcase, FaRocket, FaBrain, FaChalkboardTeacher, FaShieldAlt, FaMicrochip } from 'react-icons/fa';

const timelineEvents = [
  {
    date: "Early 2020-2021",
    title: "Ignited Passion for Coding",
    description: "Embarked on the self-learning journey into the world of programming, exploring various languages and web technologies.",
    icon: <FaCode />,
    color: "bg-sky-500",
  },
  {
    date: "Aug 2021 - Mar 2022",
    title: "Python Instructor, LHWP",
    description: "Shared knowledge and passion for Python by instructing students, helping them understand programming concepts and problem-solving techniques.",
    icon: <FaChalkboardTeacher />,
    color: "bg-green-500",
  },
  {
    date: "Sep 2021 - Apr 2023",
    title: "Pentester at Hack Devs & TryHackMe Enthusiast",
    description: "Dived deep into cybersecurity, performing penetration testing and actively participating in TryHackMe, achieving Top 2% ranking.",
    icon: <FaShieldAlt />,
    color: "bg-red-500",
  },
  {
    date: "Jan 2023",
    title: "Completed Class 10",
    description: "Successfully completed Class 10 with a focus on Computer Applications, building a strong foundational knowledge.",
    icon: <FaUserGraduate />,
    color: "bg-indigo-500",
  },
  {
    date: "Early 2023 (Conceptual)",
    title: "Developed First Major Project (CMS Concept)",
    description: "Applied learned skills to conceptualize and begin development on a Content Management System, gaining practical full-stack experience.",
    icon: <FaRocket />,
    color: "bg-purple-500",
  },
  {
    date: "Mar 2023 - Mar 2024",
    title: "Junior Web Developer, Hack Devs",
    description: "Contributed to designing and sustaining flexible web interfaces, optimizing cross-device interaction using JavaScript, HTML, and CSS.",
    icon: <FaBriefcase />,
    color: "bg-yellow-500",
  },
  {
    date: "Mid 2023 (Exploration)",
    title: "Embedded Systems Hobbyist (GPS + ESP Project)",
    description: "Ventured into hardware with projects like a GPS + ESP based ambulance tracking system concept, exploring Arduino and ESP microcontrollers.",
    icon: <FaMicrochip />,
    color: "bg-teal-500",
  },
  {
    date: "2023 - 2025 (Ongoing)",
    title: "Balancing Academics & Tech",
    description: "Currently navigating Class 12 (CBSE Boards & NEET 2025) while passionately pursuing advanced topics in full-stack development and cybersecurity.",
    icon: <FaBrain />,
    color: "bg-pink-500",
  },
];

const TimelineItem = ({ event, isLeft }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="mb-8 flex justify-between items-center w-full"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`order-1 w-5/12 ${isLeft ? 'text-right pr-4' : 'pl-4'}`}></div>
      <div className="z-20 flex items-center order-1 ${event.color} shadow-xl w-12 h-12 rounded-full md:w-16 md:h-16">
        <span className="mx-auto font-semibold text-lg text-white" role="img" aria-label={event.title}>{event.icon}</span>
      </div>
      <div className={`order-1 ${isLeft ? 'md:pl-4' : 'md:pr-4'} bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4`}>
        <p className="mb-2 text-sm font-medium text-purple-600 dark:text-pink-400">{event.date}</p>
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">{event.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-300 text-opacity-100">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};


const Timeline = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-blue-600 dark:text-blue-400">My Journey</h2>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute border-opacity-20 border-slate-700 dark:border-slate-400 h-full border" style={{left: '50%'}}></div>
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index} 
                className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 ${event.color} shadow-xl w-12 h-12 rounded-full">
                  <div role="img" aria-label={event.title} className="mx-auto text-white text-2xl">
                    {event.icon}
                  </div>
                </div>
                <div className={`order-1 bg-white dark:bg-slate-700 rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-300">{event.title}</h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{event.date}</p>
                  <p className="text-sm leading-snug tracking-wide text-slate-600 dark:text-slate-300 mt-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
