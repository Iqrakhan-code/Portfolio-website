import React, { useState } from 'react';

const projectData = [
  {
    title: "Basic Portfolio Website",
    level: "Basic",
    description: "A personal portfolio using HTML, CSS, React, and Tailwind to showcase my skills and resume.",
    thumbnail: "https://themefisher.com/blog/bioxin.webp",
  
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Responsive Landing Page",
    level: "Basic",
    description: "A responsive and mobile-friendly landing page built using React and Tailwind CSS.",
    thumbnail: "https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/website-templates/Tailwind%20CSS%20Travel%20Agency%20Landing%20Page.png",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "To-Do List App",
    level: "Intermediate",
    description: "A React app for managing daily tasks with add, delete, and complete functionality.",
    thumbnail: "https://static.collectui.com/shots/2830899/task-list-dashboard-medium",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather App",
    level: "Intermediate",
    description: "A weather app using OpenWeather API to display current weather based on user location.",
    thumbnail: "https://i.pinimg.com/736x/96/ec/a7/96eca73cbc107fb62dcb0cc8edf8d74c.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Blog Website",
    level: "Intermediate",
    description: "A blog website with CRUD functionality using React and mock backend (JSON Server).",
    thumbnail: "https://cdn.dribbble.com/userupload/36761507/file/original-fe0ce54e444de376c2d0a7fc202c605f.png?resize=400x0",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce UI",
    level: "Intermediate",
    description: "Frontend design of an e-commerce store with product listing, cart, and responsive layout.",
    thumbnail: "https://yi-files.yellowimages.com/products/1816000/1816994/2925296-full.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Admin Dashboard",
    level: "Advanced",
    description: "An admin panel to manage users, products, and stats using charts and tables.",
    thumbnail: "https://s.tmimgcdn.com/scr/1200x627/353800/arise-bootstrap-5-admin-dashboard_353820-original.png",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Job Portal UI",
    level: "Advanced",
    description: "A job listing portal design with filters, job cards, and dark/light themes.",
    thumbnail: "https://market-resized.envatousercontent.com/previews/files/455140038/03_preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=bd3f6b5cf62e2083dec819ca433ee45e84fe7639764226ffedd0b9b365a74c75",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Real Estate App",
    level: "Advanced",
    description: "A property listing app with maps, filters, and advanced search options using APIs.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPoVrqep7HniiwYY54ofx0eIEfFf0xR_fXA&s",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Chat App UI",
    level: "Advanced",
    description: "A real-time messaging UI with React context and clean design using Tailwind.",
    thumbnail: "https://cdn.dribbble.com/userupload/8935866/file/original-2d47aeb9494c4779e9e3a264a72c5b4a.png?format=webp&resize=400x300&vertical=center",
    liveLink: "#",
    githubLink: "#",
  },
];


const filterOptions = ["All", "Basic", "Intermediate", "Advanced"];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projectData
      : projectData.filter((project) => project.level === selectedFilter);

  return (
    <section className="py-10 px-6 md:px-20 bg-gray-50 min-h-screen" initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-8">Projects</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedFilter(option)}
            className={`px-4 py-2 border rounded-md transition ${
              selectedFilter === option
                ? "bg-purple-700 text-white"
                : "bg-white text-purple-700 border-purple-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col justify-between"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover cursor-pointer"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-purple-700 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-md text-sm"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 border border-purple-600 hover:bg-purple-100 px-3 py-1 rounded-md text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
