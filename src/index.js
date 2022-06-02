import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/assets/fontawesome/css/all.min.css";
import App from "./App";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import DashboardLayout from "./layouts/dashboardLayout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
import Courses from "./pages/courses";
import Course from "./pages/course";
import NotFound from "./pages/notFound";
import Signup from "./pages/signup";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses"  >
              <Route index element={<Courses />} />
              <Route path=":id" element={<Course />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

