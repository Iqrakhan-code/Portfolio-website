import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: "Frontend Developer",
    company: "BhopalOne - Internship",
    duration: "Aug 2023 – Dec 2023 · 5 mos",
    location: "Bhopal, Madhya Pradesh, India · On-site",
    description:
      "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and React.js. Actively collaborated with team members to plan and implement features, and communicated directly with clients to understand requirements.",
    skills: ["Front-End Development", "HTML", "CSS", "JavaScript", "React.js", "Team Collaboration"],
  },
  {
    role: "Java Intern",
    company: "SimptionTech Pvt Ltd - Internship",
    duration: "Jun 2021 – Sep 2021 · 4 mos",
    location: "Bhopal, Madhya Pradesh, India · Hybrid",
    description:
      "Completed a Java development internship where I learned core backend concepts, worked on basic CRUD operations, and collaborated with a team using Git. Gained hands-on experience with debugging, data handling, and version control.",
    skills: ["Java", "Team Management", "CRUD Operations", "Git", "Backend Basics"],
  },
];

const Experience = () => {
  return (
    <section className="py-14 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-10">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-purple-600 p-6 rounded-md shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaBriefcase className="text-purple-600 text-lg" />
              <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
            </div>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="text-sm text-gray-500 italic">{exp.location}</p>
            <p className="mt-3 text-gray-700">{exp.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 px-2 py-1 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
