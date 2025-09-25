import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const [stats, setStats] = useState({ users: 0, tasks: 0, projects: 0 });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch users
    const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

    // Fetch tasks (todos)
    const fetchTasks = fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json());

    // Fetch projects (simulate with posts)
    const fetchProjects = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

    Promise.all([fetchUsers, fetchTasks, fetchProjects])
      .then(([users, tasks, projects]) => {
        const newStats = {
          users: users.length,
          tasks: tasks.length,
          projects: projects.length,
        };
        setStats(newStats);
        setChartData([
          { name: "Users", value: newStats.users },
          { name: "Tasks", value: newStats.tasks },
          { name: "Projects", value: newStats.projects },
        ]);
      })
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "50px 20px", textAlign: "center" }}>
      <h1>📊 Dashboard</h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Welcome! Here you can monitor your stats with live data from a public API.
      </p>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        <div style={cardStyle("#61DBFB")}>
          <h2>Users</h2>
          <p style={statStyle}>{stats.users}</p>
        </div>
        <div style={cardStyle("#f39c12")}>
          <h2>Tasks</h2>
          <p style={statStyle}>{stats.tasks}</p>
        </div>
        <div style={cardStyle("#2ecc71")}>
          <h2>Projects</h2>
          <p style={statStyle}>{stats.projects}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Reusable card style
const cardStyle = (bgColor) => ({
  padding: "20px",
  minWidth: "150px",
  borderRadius: "12px",
  background: bgColor,
  color: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
});

// Reusable stat text style
const statStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};

export default Dashboard;
