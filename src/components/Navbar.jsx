import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning-subtle">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand"><h1 style={{color:'#242D49'}}>Marc</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
        <Link to="/projects" className="nav-link"></Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </div>
    </div>
  </div>
</nav>
  )
  
}

export default Navbar