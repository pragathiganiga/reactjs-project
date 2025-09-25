import React, { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Pragathi Ganiga",
    email: "pragathi.dev@anymail.com",
    phone: "9876543210",
    address: "Bangalore, India",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div style={{ padding: "50px 20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>👤 Profile</h1>
      <p style={{ color: "#555", marginBottom: "30px", fontSize: "1.1rem" }}>
        View and edit your profile information.
      </p>

      <div style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "30px",
        borderRadius: "16px",
        background: "#f8f9fa",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        textAlign: "left"
      }}>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          disabled={!editMode}
          onChange={handleChange}
          style={inputStyle(editMode)}
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          disabled={!editMode}
          onChange={handleChange}
          style={inputStyle(editMode)}
        />

        <label style={labelStyle}>Phone</label>
        <input
          type="text"
          name="phone"
          value={profile.phone}
          disabled={!editMode}
          onChange={handleChange}
          style={inputStyle(editMode)}
        />

        <label style={labelStyle}>Address</label>
        <input
          type="text"
          name="address"
          value={profile.address}
          disabled={!editMode}
          onChange={handleChange}
          style={inputStyle(editMode)}
        />

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {editMode ? (
            <button
              onClick={handleSave}
              style={buttonStyle("#61DBFB")}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              style={buttonStyle("#2ecc71")}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Styles
const labelStyle = {
  display: "block",
  marginBottom: "5px",
  marginTop: "15px",
  fontWeight: "bold",
  color: "#333",
};

const inputStyle = (editable) => ({
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  border: editable ? "1px solid #61DBFB" : "1px solid #ccc",
  background: editable ? "#fff" : "#e9ecef",
  fontSize: "1rem",
  outline: "none",
});

const buttonStyle = (bgColor) => ({
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: bgColor,
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
});

export default Profile;
