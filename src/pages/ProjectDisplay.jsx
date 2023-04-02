import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { FaGithub } from "react-icons/fa";
import "../../src/styles/ProjectDisplay.css";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
  return (

    <div className="project">
          <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 mt-2">
  <Link className="navbar-brand" href="#scrollspyHeading1"><h2>{project.name}</h2></Link>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading1"><h3>About</h3></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2"><h3>Live Link</h3></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading3"><h3>Source Code</h3></a>
    </li>
    
  </ul>
</nav>

<Link to={project.sourceCode} target="_blank" className="mb-3"><FaGithub/></Link>
    {/* <h1> {project.name}</h1> */}
    <a href={project.liveLink} target="_blank"><img src={project.image} /></a>
    <p>
      <b>Skills:</b> {project.skills}
      
    </p>


<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2 container" tabindex="0">
  <h4 id="scrollspyHeading1">About</h4>
  <p className="fs-3">{project.description}</p>
  <h4 id="scrollspyHeading2">Live Link</h4>
  <Link to={project.liveLink} target="_blank" className="text-decoration-none"><p className="text-size">{project.liveLink} </p></Link>
  <h4 id="scrollspyHeading3">Source Code</h4>
  <Link to={project.sourceCode} target="_blank" className="text-decoration-none"><p className="text-size">{project.sourceCode}</p></Link>
</div>
  </div>
  )
}

export default ProjectDisplay