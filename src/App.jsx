import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <Home/>
      <Footer></Footer>
    </>
  )
}

export default App
