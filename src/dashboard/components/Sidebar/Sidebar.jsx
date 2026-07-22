import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaRocket,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>G10 Studios</h2>
      </div>

      <nav>

        <NavLink to="/dashboard" end>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/request-project">
          <FaRocket />
          <span>Request Project</span>
        </NavLink>
        

        <NavLink to="/dashboard/profile">
          <FaUser />
          <span>Profile</span>
        </NavLink>

      

      </nav>

      <button className="logout">
        <FaSignOutAlt />
        <span>Logout</span>
      </button>

    </aside>
  );
}

export default Sidebar;