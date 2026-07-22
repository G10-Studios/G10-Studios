import "./AdminDashboard.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects/Projects";
import WebsiteSettings from "./pages/WebsiteSettings";

export default function AdminDashboard() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-main">

        <Topbar />

        <div className="admin-content">

          <Routes>

            <Route index element={<Dashboard />} />

            <Route
              path="dashboard"
              element={<Dashboard />}
            />

            <Route
              path="projects"
              element={<Projects />}
            />

            <Route
              path="settings"
              element={<WebsiteSettings />}
            />

            <Route
              path="*"
              element={<Navigate to="/admin" replace />}
            />

          </Routes>

        </div>

      </div>

    </div>
  );
}