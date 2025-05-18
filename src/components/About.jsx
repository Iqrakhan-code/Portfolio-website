import React from "react";

const About = () => {
  return (
    <section className="px-6 md:px-20 py-10 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-purple-700 mb-6" initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }}>About Me</h2>
      <p className="text-lg mb-4"  initial={{ scale: 0.5 }}
  animate={{ scale: 1 }}>
        I'm a passionate and dedicated frontend developer with a strong foundation in web technologies. I specialize in building responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.
      </p>
      <p className="text-lg" initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}>
        I take pride in creating clean, efficient, and accessible code, ensuring that the user experience is always at the forefront of my work. Whether it's developing a personal portfolio, a dynamic to-do list app, or an advanced admin dashboard, I approach each project with enthusiasm and a problem-solving mindset.
      </p>
    </section>
  );
};

export default About;