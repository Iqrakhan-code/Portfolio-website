import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="px-6 md:px-20 py-4 shadow-sm shadow-slate-200 bg-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-purple-700 font-normal h-8 w-8 p-1 text-white text-center flex items-center justify-center">
            I
          </div>
          <div className="text-2xl font-bold text-purple-700">IqraKhan</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-lg text-[#333]">
  <li><a href="#home" className="hover:text-purple-600">Home</a></li>
  <li><a href="#projects" className="hover:text-purple-600">Project</a></li>
  <li><a href="#experience" className="hover:text-purple-600">Experience</a></li>
  <li><a href="#about" className="hover:text-purple-600">About</a></li>
  <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
</ul>

          <button className="hover:bg-purple-600 bg-purple-700 text-white py-1 px-3 rounded-md">
            Download CV
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="absolute top-16 left-0 w-full bg-white p-6 flex flex-col gap-4 text-[#333] shadow-md z-10">
    <ul className="flex flex-col gap-4 text-lg">
      
  <li><a href="#home" className="hover:text-purple-600">Home</a></li>
  <li><a href="#projects" className="hover:text-purple-600">Project</a></li>
  <li><a href="#experience" className="hover:text-purple-600">Experience</a></li>
  <li><a href="#about" className="hover:text-purple-600">About</a></li>
  <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>


    </ul>
    <button className="hover:bg-purple-600 bg-purple-700 text-white py-1 px-3 rounded-md w-fit">
      Download CV
    </button>
  </div>
)}

    </nav>
  );
};

export default Navbar;
