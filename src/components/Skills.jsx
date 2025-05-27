import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaLinux, FaWindows, FaFigma, FaNodeJs, FaPhp, FaJava, FaDatabase, FaServer, FaShieldAlt, FaCodeBranch, FaTools, FaMicrochip, FaNetworkWired, FaFire, FaBug, FaUserSecret, FaPalette, FaMobileAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiVite, SiArduino, SiEspressif, SiCplusplus, SiTypescript, SiSass, SiGnubash, SiKalilinux, SiWireshark, SiBurpsuite, SiNodedotjs } from 'react-icons/si';

const skillCategories = [
	{
		name: 'Frontend Development',
		icon: <FaCodeBranch className="mr-2" />,
		skills: [
			{ name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 95 },
			{ name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
			{ name: 'SASS', icon: <SiSass className="text-pink-500" />, level: 80 },
			{ name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, level: 90 },
			{ name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, level: 85 },
			{ name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 70 },
			{ name: 'React', icon: <FaReact className="text-sky-500" />, level: 80 },
			{ name: 'Vite', icon: <SiVite className="text-purple-500" />, level: 85 },
			{ name: 'UI/UX Principles', icon: <FaPalette className="text-purple-400" />, level: 80 },
		],
	},
	{
		name: 'Backend Development',
		icon: <FaServer className="mr-2" />,
		skills: [
			{ name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, level: 75 },
			{ name: 'Python (Flask/Django)', icon: <FaPython className="text-blue-400" />, level: 80 },
			{ name: 'PHP', icon: <FaPhp className="text-indigo-500" />, level: 60 },
			{ name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 75 },
			{ name: 'SQL', icon: <FaDatabase className="text-sky-600" />, level: 70 },
		],
	},
	{
		name: 'Programming & Scripting',
		icon: <FaCodeBranch className="mr-2" />,
		skills: [
			{ name: 'Python', icon: <FaPython className="text-yellow-400" />, level: 90 },
			{ name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, level: 85 },
			{ name: 'C++', icon: <SiCplusplus className="text-blue-700" />, level: 70 },
			{ name: 'Bash Scripting', icon: <SiGnubash className="text-gray-500" />, level: 75 },
			{ name: 'Scratch', icon: <FaCodeBranch className="text-orange-400" />, level: 80 }, // Generic icon
			{ name: 'MIT App Inventor', icon: <FaMobileAlt className="text-orange-600" />, level: 75 },
		],
	},
	{
		name: 'Cybersecurity & Ethical Hacking',
		icon: <FaShieldAlt className="mr-2" />,
		skills: [
			{ name: 'Ethical Hacking', icon: <FaUserSecret className="text-red-500" />, level: 85 },
			{ name: 'Vulnerability Assessment', icon: <FaBug className="text-red-600" />, level: 80 },
			{ name: 'Web App Security (XSS, SQLi, CSRF)', icon: <FaShieldAlt className="text-red-700" />, level: 75 },
			{ name: 'Metasploit', icon: <FaFire className="text-red-800" />, level: 70 }, // Generic icon
			{ name: 'Burp Suite', icon: <SiBurpsuite className="text-orange-600" />, level: 75 },
			{ name: 'Nmap', icon: <FaNetworkWired className="text-gray-400" />, level: 80 },
			{ name: 'Wireshark', icon: <SiWireshark className="text-sky-700" />, level: 70 },
			{ name: 'Kali Linux', icon: <SiKalilinux className="text-blue-900" />, level: 85 },
			{ name: 'Cryptography', icon: <FaUserSecret className="text-green-500" />, level: 65 },
			{ name: 'TryHackMe (Top 2%)', icon: <FaShieldAlt className="text-red-400" />, level: 90 },
		],
	},
	{
		name: 'Tools & Platforms',
		icon: <FaTools className="mr-2" />,
		skills: [
			{ name: 'Git & GitHub', icon: <FaGitAlt className="text-gray-700" />, level: 90 },
			{ name: 'Linux', icon: <FaLinux className="text-yellow-300" />, level: 80 },
			{ name: 'Windows', icon: <FaWindows className="text-sky-600" />, level: 85 },
			{ name: 'Figma (UI/UX Design)', icon: <FaFigma className="text-pink-500" />, level: 70 },
		],
	},
	{
		name: 'Hardware & Embedded Systems',
		icon: <FaMicrochip className="mr-2" />,
		skills: [
			{ name: 'Arduino', icon: <SiArduino className="text-teal-600" />, level: 75 },
			{ name: 'ESP (ESP32/8266)', icon: <SiEspressif className="text-red-600" />, level: 70 },
		],
	},
];

const SkillBar = ({ name, level, icon }) => (
	<motion.div
		className="mb-4"
		initial={{ opacity: 0, x: -20 }}
		whileInView={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.5 }}
		viewport={{ once: true, amount: 0.5 }}
	>
		<div className="flex items-center justify-between mb-1 text-gray-700 dark:text-gray-300">
			<span className="text-base font-medium flex items-center">
				{icon && <span className="mr-2 text-2xl">{icon}</span>}
				{name}
			</span>
			<span className="text-sm font-medium">{level}%</span>
		</div>
		<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<motion.div
				className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
				style={{ width: `${level}%` }}
				initial={{ width: 0 }}
				whileInView={{ width: `${level}%` }}
				transition={{ duration: 1, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.8 }}
				role="progressbar" // ARIA role
				aria-valuenow={level} // ARIA value
				aria-valuemin="0" // ARIA min value
				aria-valuemax="100" // ARIA max value
				aria-label={`${name} proficiency`} // ARIA label
			/>
		</div>
	</motion.div>
);

const Skills = () => {
	return (
		<section id="skills" className="min-h-screen py-20 px-4 md:px-10 bg-white dark:bg-gray-900">
			<div className="container mx-auto">
				<motion.h2
					className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7 }}
				>
					My Technical Skills
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{skillCategories.map((category, index) => (
						<motion.div
							key={index}
							className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ 
								y: -6, 
								boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
								transition: { duration: 0.2, ease: "easeInOut" }
							}}
						>
							<h3 className="text-2xl font-semibold mb-6 text-purple-600 dark:text-pink-500 flex items-center">
								{category.icon} {category.name}
							</h3>
							<div>
								{category.skills.map((skill, skillIndex) => (
									<SkillBar key={skillIndex} name={skill.name} level={skill.level} icon={skill.icon} />
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
