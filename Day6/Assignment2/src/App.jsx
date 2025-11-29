import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UserDetails from "./pages/UserDetails";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Login route */}
        <Route path="/" element={<Login />} />

        {/* Dashboard route + nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/user/:id" element={<UserDetails />} />

      </Routes>
    </Router>
  );
}
