export const initialState = {
  tasks: [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build Dashboard", completed: true },
  ],
};

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), title: action.payload, completed: false }],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};
