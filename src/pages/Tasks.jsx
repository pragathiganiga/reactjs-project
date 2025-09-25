import React, { useReducer, useState } from "react";
import { tasksReducer, initialState } from "../reducers/tasksReducer";

function Tasks() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewTask("");
  };

  return (
    <div style={{ padding: "50px 20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>📝 Tasks</h1>

      {/* Add new task */}
      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px",
            marginRight: "10px",
            outline: "none",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#61DBFB",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Task list */}
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "400px", margin: "0 auto" }}>
        {state.tasks.map((task) => (
          <li
            key={task.id}
            style={{
              padding: "15px 20px",
              marginBottom: "10px",
              borderRadius: "12px",
              background: task.completed ? "#2ecc71" : "#f8f9fa",
              color: task.completed ? "#fff" : "#333",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            >
              {task.title}
            </span>
            <button
              onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
              style={{
                padding: "5px 10px",
                borderRadius: "6px",
                border: "none",
                background: "#e74c3c",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
