import "./ProjectForm.css";

import { useState } from "react";

import { db } from "../../../../firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function ProjectForm({ refreshProjects }) {

  const [project, setProject] = useState({
    title: "",
    category: "",
    status: "Coming Soon",
    technologies: "",
    github: "",
    liveDemo: "",
    description: "",
    featured: false,
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setProject({

      ...project,

      [name]:
        type === "checkbox"
          ? checked
          : value,

    });

  };

  const addProject = async (e) => {

    e.preventDefault();

    try {

      await addDoc(
        collection(db, "projects"),
        {
          ...project,
          createdAt: serverTimestamp(),
        }
      );

      alert("✅ Project Added");

      setProject({
        title: "",
        category: "",
        status: "Coming Soon",
        technologies: "",
        github: "",
        liveDemo: "",
        description: "",
        featured: false,
      });

      refreshProjects();

    } catch (err) {

      console.log(err);

      alert("Failed");

    }

  };

  return (

    <form
      className="project-form-card"
      onSubmit={addProject}
    >

      <h2>Add Project</h2>

      <input
        name="title"
        placeholder="Project Title"
        value={project.title}
        onChange={handleChange}
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={project.category}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={project.description}
        onChange={handleChange}
      />

      <input
        name="technologies"
        placeholder="React, Firebase..."
        value={project.technologies}
        onChange={handleChange}
      />

      <input
        name="github"
        placeholder="GitHub URL"
        value={project.github}
        onChange={handleChange}
      />

      <input
        name="liveDemo"
        placeholder="Live Demo URL"
        value={project.liveDemo}
        onChange={handleChange}
      />

      <select
        name="status"
        value={project.status}
        onChange={handleChange}
      >
        <option>Completed</option>
        <option>In Progress</option>
        <option>Coming Soon</option>
      </select>

      <label>

        <input
          type="checkbox"
          name="featured"
          checked={project.featured}
          onChange={handleChange}
        />

        Featured Project

      </label>

      <button type="submit">

        Save Project

      </button>

    </form>

  );

}