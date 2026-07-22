import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import {
  FaHome,
  FaFolderOpen,
  FaGlobe,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { auth } from "../../firebase";

import "./Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <aside className="admin-sidebar">

      <div className="admin-logo">
        <h2>G10 Admin</h2>
      </div>

      <nav>

        <NavLink end to="/admin">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/projects">
          <FaFolderOpen />
          <span>Projects</span>
        </NavLink>

        

        <NavLink to="/admin/settings">
  <FaCog />
  <span>Website Settings</span>
</NavLink>

      </nav>

      <button
        className="logout-btn"
        onClick={logout}
      >
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}