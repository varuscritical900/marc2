import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "../../src/styles/ProjectDisplay.css";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project">
    <h1> {project.name}</h1>
    <a href={project.liveLink} target="_blank"><img src={project.image} /></a>
    <p>
      <b>Skills:</b> {project.skills}
      
    </p>
    {/* <a href={project.sourceCode} target="_blank"><GitHubIcon /></a> */}
  </div>
  )
}

export default ProjectDisplay