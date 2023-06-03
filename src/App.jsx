import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import ProjectDisplay from './pages/ProjectDisplay';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Career from './pages/Career';

import './App.css'

function App() {

  return (
    <div className="App">

      <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/career" element={<Career/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
