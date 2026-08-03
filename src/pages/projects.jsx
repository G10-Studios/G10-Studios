import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

import {
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import "./Projects.css";
import backgroundImage from "../assets/background.jpg";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, "projects")
      );

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(list);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "status-completed";

      case "In Progress":
        return "status-progress";

      case "Coming Soon":
        return "status-coming";

      default:
        return "";
    }
  };

  return (
    <div
      className="projects-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back Home
      </button>

      <div className="projects-header">

        <span>OUR PORTFOLIO</span>

        <h1>
          Projects That Define
          <br />
          G10 Studios
        </h1>

        <p>
          Every project represents our passion
          for creating high-quality software,
          web applications, automation systems,
          and immersive digital experiences.
        </p>

      </div>

      <div className="projects-grid">

        {projects.length === 0 ? (

          <div className="empty-projects">

            <FaLaptopCode />

            <h2>No Projects Yet</h2>

            <p>
              New projects will appear here soon.
            </p>

          </div>

        ) : (

          projects.map((project) => (

            <div
              key={project.id}
              className="project-card"
            >

              <div className="project-top">

                <div className="project-icon">

                  <FaCode />

                </div>

                <span
                  className={`project-status ${getStatusClass(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>

              </div>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">

                <span>
                  {project.category || "Software"}
                </span>

              </div>

              <div className="project-footer">

                <button
                  className="visit-btn"
                  onClick={() => {

                    if (project.liveDemo) {

                      window.open(
                        project.liveDemo,
                        "_blank"
                      );

                    }

                  }}
                >

                  Visit Project

                  <FaExternalLinkAlt />

                </button>

              </div>

            </div>

          ))

        )}

      </div>
    </div>
  );
}
