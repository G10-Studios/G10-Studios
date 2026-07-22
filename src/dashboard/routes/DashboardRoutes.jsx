import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/Layout/DashboardLayout";

import Home from "../pages/Home";
import StartProject from "../pages/StartProject";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

function DashboardRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="start-project" element={<StartProject />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;