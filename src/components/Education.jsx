import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const educationData = [
  {
    title: "Master of Technology - M.Tech, Computer Science",
    institute: "Barkatullah University Institute of Technology (BUIT), Bhopal",
    duration: "Jul 2023 – Jun 2025",
    grade: "Grade: 7.2",
    description:
      "Pursuing M.Tech with a focus on software development and core computer science subjects like DSA, DBMS, and OS. Currently working on a research paper and enhancing skills in frontend development.",
  },
  {
    title: "Bachelor of Technology - B.Tech, Computer Science",
    institute: "Barkatullah University Institute of Technology (BUIT), Bhopal",
    duration: "2019 – 2023",
    grade: null,
    description: null,
  },
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="education"
      className="p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-8">
        Education
      </h2>

      <div className="space-y-4" initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="border border-purple-300 dark:border-purple-600 rounded-xl shadow-md transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700 rounded-t-xl text-left"
            >
              <div>
                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300">
                  {edu.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{edu.institute}</p>
              </div>
              <div className="text-purple-700 dark:text-purple-300">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>

            {activeIndex === index && (
              <div className="p-5  dark:bg-gray-800 rounded-b-xl space-y-2 text-sm">
                <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.duration}</p>
                {edu.grade && (
                  <p className="text-gray-600 dark:text-gray-400 italic">{edu.grade}</p>
                )}
                {edu.description && (
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
