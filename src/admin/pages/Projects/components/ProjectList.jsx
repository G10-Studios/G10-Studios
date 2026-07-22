import "./ProjectList.css";

import ProjectCard from "./ProjectCard";

export default function ProjectList({

  projects,

  refreshProjects,

}) {

  if (projects.length === 0) {

    return (

      <div className="project-list">

        <h2>No Projects Found</h2>

      </div>

    );

  }

  return (

    <div className="project-list">

      {projects.map((project) => (

        <ProjectCard

          key={project.id}

          project={project}

          refreshProjects={refreshProjects}

        />

      ))}

    </div>

  );

}