import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVite, SiNetlify, SiFirebase, SiExpress, SiMongodb ,SiPostman } from 'react-icons/si';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Figma", icon: <SiPostman className="text-orange-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-500" /> },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-14 px-6 md:px-20 bg-white" initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-10">Skills</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((skillGroup, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-purple-600 mb-4">{skillGroup.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillGroup.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
