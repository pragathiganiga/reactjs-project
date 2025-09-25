import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Settings() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div style={{ padding: "50px 20px", textAlign: "center" }}>
      <h1>⚙️ Settings</h1>
      <p>Toggle dark mode for the entire app:</p>
      <button
        onClick={toggleDarkMode}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: darkMode ? "#f5f5f5" : "#1e1e2f",
          color: darkMode ? "#1e1e2f" : "#f5f5f5",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default Settings;
