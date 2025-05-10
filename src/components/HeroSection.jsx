import React from 'react';
import profile from '../assets/profile.png'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-white via-purple-50 to-purple-100">
      {/* Left Text Area */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Hello, I’m <span className="text-purple-700">Iqra Khan</span>
        </h1>
        <p className="text-gray-600 text-md md:text-lg">
  I’m a passionate <span className="font-semibold">Frontend Developer</span> dedicated to building <span className="font-semibold">fully responsive, user-friendly, and high-performance websites</span> using <span className="font-semibold">React.js</span> and <span className="font-semibold">Tailwind CSS</span>.  
 </p>

        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md shadow-md transition">
         Resume
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={profile} // replace with your image
          alt="Profile"
          className="rounded-2xl shadow-lg w-40 md:w-96 object-cover"
        />
      </div>

      {/* Stats - Below on Mobile, Right on Desktop */}
      {/* <div className="w-full mt-10 flex justify-center md:absolute bottom-10 left-0 px-6">
        <div className="grid grid-cols-3 gap-6 bg-white shadow-md rounded-xl p-4 text-center text-sm md:text-base max-w-md w-full">
          <div>
            <p className="text-purple-700 font-bold text-xl">15 Y.</p>
            <p className="text-gray-500">Experience</p>
          </div>
          <div>
            <p className="text-purple-700 font-bold text-xl">250+</p>
            <p className="text-gray-500">Projects</p>
          </div>
          <div>
            <p className="text-purple-700 font-bold text-xl">58</p>
            <p className="text-gray-500">Clients</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
