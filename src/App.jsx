import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: darkMode ? "#1e1e2f" : "#f5f5f5",
      color: darkMode ? "#f5f5f5" : "#1e1e2f",
      transition: "all 0.3s"
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
