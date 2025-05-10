import React, { useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaHackerrank,
  FaTwitter,
  FaCode,
  FaEnvelope,
} from 'react-icons/fa';
import { SiLeetcode, SiFiverr, SiGeeksforgeeks } from 'react-icons/si';

const contactLinks = {
  email: "iqrakhan.code@gmail.com",
  linkedin: "https://www.linkedin.com/in/iqra-khan-code/",
  github: "https://github.com/Iqrakhan-code/",
  leetcode: "https://leetcode.com/Iqrakhan-code",
  fiverr: "https://www.fiverr.com/Iqrakhan-code",
  hackerrank: "https://www.hackerrank.com/Iqrakhan-code",
  codeforces: "https://codeforces.com/profile/Iqrakhan-code",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/Iqrakhan-code",
  twitter: "https://twitter.com/Iqrakhan-code",
  portfolio: "https://portfolio-website-iota-six-38.vercel.app/",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Connect to a backend like EmailJS to make this work.)");
    setFormData({ name: "", email: "", message: "" });
  };

  const links = [
    { icon: <FaEnvelope />, label: 'Email', url: `mailto:${contactLinks.email}` },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: contactLinks.linkedin },
    { icon: <FaGithub />, label: 'GitHub', url: contactLinks.github },
    { icon: <SiLeetcode />, label: 'LeetCode', url: contactLinks.leetcode },
    { icon: <SiFiverr />, label: 'Fiverr', url: contactLinks.fiverr },
    { icon: <FaHackerrank />, label: 'HackerRank', url: contactLinks.hackerrank },
    { icon: <FaCode />, label: 'Codeforces', url: contactLinks.codeforces },
    { icon: <SiGeeksforgeeks />, label: 'GFG', url: contactLinks.geeksforgeeks },
    { icon: <FaTwitter />, label: 'Twitter', url: contactLinks.twitter },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-8">
        Contact Me
      </h2>

      
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Social Links */}
      <div className="grid grid-cols-2 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center mb-12">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-purple-700 hover:text-purple-900 transition"
          >
            <div className="text-3xl mb-1">{link.icon}</div>
            <p className="text-sm font-medium">{link.label}</p>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Contact;
