import React from 'react'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import About from '../components/About'
import Education from '../components/Education'
import FAQs from '../components/FAQs'


const Home = () => {
  return (
    <div>
      <section id="home"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <section id="faqs"><FAQs /></section>
    </div>
  );
};


export default Home