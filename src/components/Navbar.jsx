import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/tasks" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav style={{
      padding: "10px 20px",
      background: "linear-gradient(90deg, #4b6cb7, #182848)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <ul style={{
        display: "flex",
        gap: "20px",
        listStyle: "none",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? "#FFD700" : "#fff",
                padding: "8px 15px",
                borderRadius: "8px",
                transition: "all 0.3s",
                fontWeight: "500",
              })}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
