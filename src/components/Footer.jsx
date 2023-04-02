import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span className="mb-3 mb-md-0 text-muted">© Marc James Montero</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="https://github.com/varuscritical900" target="_blank"><svg className="bi" width="24" height="24"><FaGithub/></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/marc-james-montero-853119172/" target="_blank"><svg className="bi" width="24" height="24"><FaLinkedin/></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/marcmontero07" target="_blank"><svg className="bi" width="24" height="24"><FaFacebook/></svg></a></li>
    </ul>
    

  </footer>
  )
}

export default Footer