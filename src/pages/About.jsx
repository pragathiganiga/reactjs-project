import React from "react";

function About() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js", "MySQL"];

  return (
    <div style={{ 
      padding: "50px 20px", 
      fontFamily: "Arial, sans-serif", 
      textAlign: "center" 
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>👩‍💻 About Me</h1>
      <p style={{ color: "#555", marginBottom: "30px", fontSize: "1.1rem" }}>
        Hi! I'm Pragathi, a passionate web developer. I love building interactive and responsive web applications using modern technologies.
      </p>

      {/* Skills */}
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>🛠 Skills</h2>
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        gap: "15px" 
      }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            padding: "10px 20px",
            borderRadius: "12px",
            background: "#61DBFB",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Fun Fact / Experience */}
      <div style={{
        marginTop: "50px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px",
        borderRadius: "16px",
        background: "#f8f9fa",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        textAlign: "left"
      }}>
        <h3 style={{ marginBottom: "15px" }}>🎯 Fun Facts</h3>
        <ul style={{ lineHeight: "1.8", color: "#333" }}>
          <li>Completed multiple web development internships.</li>
          <li>Experienced in building responsive dashboards and apps.</li>
          <li>Always learning new technologies and frameworks.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
