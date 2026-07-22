import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaUser,
  FaCog,
  FaEnvelope,
} from "react-icons/fa";



export default function Home() {
  return (
    <div className="dashboard-home">

      {/* Hero */}
      <section className="hero-card">

        <div className="hero-left">
          <p className="tag">WELCOME TO</p>

          <h1>G10 Studios Dashboard</h1>

          <p className="subtitle">
            Manage your projects, submit new ideas,
            monitor development and communicate with
            the studio from one place.
          </p>

          <div className="quick-actions">

  <Link to="/dashboard/request-project" className="action-card">
    <FaRocket className="action-icon" />
    <h3>Start Project</h3>
    <p>Submit your project idea to G10 Studios.</p>
  </Link>

  <Link to="/dashboard/profile" className="action-card">
    <FaUser className="action-icon" />
    <h3>My Profile</h3>
    <p>View and edit your personal information.</p>
  </Link>

  

  <a
    href="mailto:g10studios@gmail.com"
    className="action-card"
  >
    <FaEnvelope className="action-icon" />
    <h3>Contact Studio</h3>
    <p>Reach us directly through email.</p>
  </a>

</div>
        </div>

      </section>

    </div>
  );
}
