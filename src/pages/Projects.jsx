import React from 'react'
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../../src/styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
    <h1> My Projects</h1>
    <div className="projectList">
      {ProjectList.map((project, idx) => {
        return (
          <ProjectItem id={idx} name={project.name} image={project.image} />
        );
      })}
    </div>
  </div>
  )
}

export default Projects