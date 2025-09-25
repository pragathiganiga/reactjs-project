import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => { state.tasks = action.payload; },
    addTask: (state, action) => { state.tasks.push(action.payload); },
    removeTask: (state, action) => { state.tasks = state.tasks.filter(t => t.id !== action.payload); },
    toggleTask: (state, action) => {
      state.tasks = state.tasks.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t);
    },
  },
});

export const { setTasks, addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
