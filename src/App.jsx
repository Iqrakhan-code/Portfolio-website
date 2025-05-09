import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
