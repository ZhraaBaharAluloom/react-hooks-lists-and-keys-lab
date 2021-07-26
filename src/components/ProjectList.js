import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectList = projects.map((project) => (
    <ProjectItem
      name={project.name}
      about={project.about}
      key={project.id}
      technologies={project.technologies}
    />
  ));

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
