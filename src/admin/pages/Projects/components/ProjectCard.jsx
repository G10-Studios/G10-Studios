import "./ProjectCard.css";

import {
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../../../firebase";

export default function ProjectCard({

  project,

  refreshProjects,

}) {

  const deleteProject = async () => {

    const confirmDelete = window.confirm(
      `Delete "${project.title}"?`
    );

    if (!confirmDelete) return;

    try {

      await deleteDoc(
        doc(
          db,
          "projects",
          project.id
        )
      );

      alert("✅ Project Deleted");

      refreshProjects();

    } catch (err) {

      console.log(err);

      alert("❌ Failed to delete project");

    }

  };

  return (

    <div className="project-card">

      <h3>{project.title}</h3>

      <p>{project.category}</p>

      <span>{project.status}</span>

      <small>

        {project.technologies}

      </small>

      <div className="card-buttons">

        <button>

          Edit

        </button>

        <button
          onClick={deleteProject}
        >

          Delete

        </button>

      </div>

    </div>

  );

}