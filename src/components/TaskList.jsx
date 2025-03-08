import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskDetailsPanel from "./TaskDetailsPanel";
import "./TaskList.css";
import { FaBell, FaSyncAlt, FaCalendarAlt } from "react-icons/fa";

// Dummy task data
const tasks = [
  { id: 1, text: "Buy groceries", completed: false, important: false },
  { id: 2, text: "Finish project report", completed: false, important: true },
  { id: 3, text: "Call the bank", completed: false, important: false },
  { id: 4, text: "Schedule dentist appointment", completed: false, important: false },
  { id: 5, text: "Plan weekend trip", completed: false, important: false },
];

const completedTasks = [
  { id: 6, text: "Read a book", completed: true },
  { id: 7, text: "Clean the house", completed: true },
  { id: 8, text: "Prepare presentation", completed: true },
];

// TaskList component
const TaskList = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task); // Open task details on click
  };

  const handleClosePanel = () => {
    setSelectedTask(null); // Close panel when clicking 'X'
  };

  return (
    <div className="task-list-container">
      {/* Main Task List Section */}
      <div className="task-list">
        {/* Header */}
        <div className="task-list-header">
          <h2>To Do</h2>
          <div className="task-list-icons">
            <FaBell className="icon" />
            <FaSyncAlt className="icon" />
            <FaCalendarAlt className="icon" />
          </div>
        </div>

        {/* Add Task Section */}
        <div className="add-task">
          <input type="text" placeholder="Add A Task" className="form-control" />
          <button className="btn btn-success">ADD TASK</button>
        </div>

        {/* To Do Tasks */}
        <div className="to-do-tasks">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} onClick={() => handleTaskClick(task)}>
                <TaskItem task={task} />
              </div>
            ))
          ) : (
            <p>No tasks to show!</p>
          )}
        </div>

        {/* Completed Tasks */}
        <h5 className="mt-4">Completed</h5>
        <div className="completed-tasks">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <div key={task.id} onClick={() => handleTaskClick(task)}>
                <TaskItem task={task} completed />
              </div>
            ))
          ) : (
            <p>No completed tasks yet!</p>
          )}
        </div>
      </div>

      {/* Task Details Panel */}
      {selectedTask && <TaskDetailsPanel task={selectedTask} onClose={handleClosePanel} />}
    </div>
  );
};

export default TaskList;
