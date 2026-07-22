import "./Dashboard.css";
import {
  FaFolderOpen,
  FaCheckCircle,
  FaSpinner,
  FaClock,
  FaPlus,
  FaGlobe,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../firebase";

export default function Dashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    progress: 0,
    comingSoon: 0,
  });

  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {

    try {

      const snapshot = await getDocs(
        collection(db, "projects")
      );

      const projects = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRecentProjects(projects.slice(0, 5));

      setStats({

        total: projects.length,

        completed: projects.filter(
          p => p.status === "Completed"
        ).length,

        progress: projects.filter(
          p => p.status === "In Progress"
        ).length,

        comingSoon: projects.filter(
          p => p.status === "Coming Soon"
        ).length,

      });

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="admin-home">

      <div className="admin-hero">

        <h1>Welcome Back 👋</h1>

        <p>
          Manage your portfolio and website from one place.
        </p>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <FaFolderOpen />
          <h2>{stats.total}</h2>
          <p>Total Projects</p>
        </div>

        <div className="stat-card">
          <FaCheckCircle />
          <h2>{stats.completed}</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <FaSpinner />
          <h2>{stats.progress}</h2>
          <p>In Progress</p>
        </div>

        <div className="stat-card">
          <FaClock />
          <h2>{stats.comingSoon}</h2>
          <p>Coming Soon</p>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="recent-card">

          <h2>Recent Projects</h2>

          {
            recentProjects.length === 0 ?

            <p>No projects found.</p>

            :

            recentProjects.map(project => (

              <div
                key={project.id}
                className="project-row"
              >

                <span>{project.title}</span>

                <span>{project.status}</span>

              </div>

            ))
          }

        </div>

        <div className="action-card">

          <h2>Quick Actions</h2>

          <button
            onClick={() =>
              navigate("/admin/projects")
            }
          >
            <FaPlus />
            Manage Projects
          </button>

          <button
            onClick={() =>
              navigate("/admin/landing-page")
            }
          >
            <FaGlobe />
            Landing Page
          </button>

          <button
            onClick={() =>
              window.open("/", "_blank")
            }
          >
            Visit Website
          </button>

        </div>

      </div>

    </div>

  );

}