import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home";
import Profile from "./pages/dashboard/profile";
import Index from "./pages/dashboard";
import Courses from "./pages/dashboard/courses";
import Course from "./pages/dashboard/course";
import NotFound from "./pages/notFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Index />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<Courses />} />
            <Route path="course/:id" element={<Course />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
