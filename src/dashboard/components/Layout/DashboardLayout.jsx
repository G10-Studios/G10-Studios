import { Routes, Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

import Home from "../../pages/Home";
import RequestProject from "../../pages/RequestProject";
import Profile from "../../pages/Profile";
import Settings from "../../pages/Settings";

import dashboardBg from "../../../assets/dashboard-bg.jpg";

import "./DashboardLayout.css";

export default function DashboardLayout() {
    return (
        <div
            className="dashboard-layout"
            style={{
                backgroundImage: `url(${dashboardBg})`,
            }}
        >
            <Sidebar />

            <div className="dashboard-main">
                <Topbar />

                <div className="dashboard-content">
                    <Routes>
                        <Route index element={<Home />} />

                        <Route
                            path="request-project"
                            element={<RequestProject />}
                        />

                        <Route
                            path="profile"
                            element={<Profile />}
                        />

                        <Route
                            path="settings"
                            element={<Settings />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}