import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput"; // Adjust the path if needed

import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Today");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete React project", completed: false },
    { id: 2, text: "Read documentation", completed: true },
    { id: 3, text: "Workout", completed: false },
  ]);

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Sidebar onSelectCategory={setSelectedCategory} tasks={tasks} />
        <div className="content">
          <TaskList category={selectedCategory} />
        </div>
      </div>
    </div>
  );
}

export default App;
