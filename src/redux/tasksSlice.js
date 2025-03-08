import { createSlice } from "@reduxjs/toolkit";

const loadTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: loadTasks(),
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      const updatedState = [...state, newTask];
      saveTasks(updatedState);
      return updatedState;
    },
    deleteTask: (state, action) => {
      const updatedState = state.filter((task) => task.id !== action.payload);
      saveTasks(updatedState);
      return updatedState;
    },
    toggleTask: (state, action) => {
      const updatedState = state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveTasks(updatedState);
      return updatedState;
    },
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
