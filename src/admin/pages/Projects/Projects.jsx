import "./Projects.css";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase";

import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    loadProjects();

  }, []);

  const loadProjects = async () => {

    try {

      const snapshot = await getDocs(
        collection(db, "projects")
      );

      const projectList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(projectList);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="projects-page">

      <div className="projects-header">

        <h1>Project Manager</h1>

        <p>
          Create, edit and manage all portfolio projects.
        </p>

      </div>

      <SearchBar />

      <ProjectForm
        refreshProjects={loadProjects}
      />

      <ProjectList
        projects={projects}
        refreshProjects={loadProjects}
      />

    </div>

  );

}