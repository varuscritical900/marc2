import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning-subtle">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand"><img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/LogoMakr-6pH7hG.png?alt=media&token=ce0e3617-fc29-47a4-aa54-43de2c7f76fc" alt="Marc" className="img-fluid" style={{width:50, height:50,opacity:0.9}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </div>
  </div>
</nav>
  )
  
}

export default Navbar