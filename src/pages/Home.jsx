import React from "react";
import { FaReact, FaTasks, FaUser, FaChartLine, FaCogs, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const features = [
    { icon: <FaChartLine size={40} color="#61DBFB" />, title: "Dashboard", path: "/dashboard", desc: "Explore real-time data & charts" },
    { icon: <FaTasks size={40} color="#f39c12" />, title: "Tasks", path: "/tasks", desc: "Manage your todos using useReducer" },
    { icon: <FaUser size={40} color="#2ecc71" />, title: "Profile", path: "/profile", desc: "Edit and validate your profile info" },
    { icon: <FaCogs size={40} color="#9b59b6" />, title: "Settings", path: "/settings", desc: "Switch themes using Context API" },
    { icon: <FaInfoCircle size={40} color="#e74c3c" />, title: "About", path: "/about", desc: "Learn more about this project" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      <FaReact size={80} color="#61DBFB" />
      <h1 style={{ marginTop: "20px", fontSize: "3rem" }}>React Dev Dashboard </h1>
      <p style={{ maxWidth: "600px", margin: "10px auto", fontSize: "1.2rem", color: "#555" }}>
        A complete React learning project covering components, state, hooks, context, routing, reducers, Redux, API integration, and more — all in one place.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "50px",
          padding: "0 20px",
        }}
      >
        {features.map((f, index) => (
          <Link
            to={f.path}
            key={index}
            style={{
              textDecoration: "none",
              border: "1px solid #ddd",
              borderRadius: "16px",
              padding: "30px 20px",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            }}
          >
            <div>{f.icon}</div>
            <h2 style={{ marginTop: "15px", color: "#333" }}>{f.title}</h2>
            <p style={{ marginTop: "10px", color: "#666", fontSize: "1rem" }}>{f.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
