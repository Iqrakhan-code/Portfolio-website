import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black px-6 md:px-20 py-6 text-white shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-purple-700 font-normal h-8 w-8 p-1 text-white flex items-center justify-center">
            I
          </div>
          <div className="text-2xl font-bold">IqraKhan</div>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap gap-4 text-sm text-[#c9c9c9] justify-center">
          <li className="hover:text-purple-500 cursor-pointer">Home</li>
          <li className="hover:text-purple-500 cursor-pointer">Project</li>
          <li className="hover:text-purple-500 cursor-pointer">Experience</li>
          <li className="hover:text-purple-500 cursor-pointer">About</li>
          <li className="hover:text-purple-500 cursor-pointer">Contact</li>
        </ul>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          &copy; 2025 Iqra Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
