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
    <div className=''>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <FAQs />

    </div>
  )
}

export default Home