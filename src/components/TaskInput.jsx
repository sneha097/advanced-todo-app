import React, { useState } from "react";
import "./TaskInput.css";
import { FaBell, FaSyncAlt, FaCalendarAlt } from "react-icons/fa";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div className="task-input-container">
      <form onSubmit={handleSubmit} className="task-input-form">
        <input
          type="text"
          placeholder="Add A Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input-field"
        />
        <div className="task-icons">
          <FaBell className="icon" title="Reminder" />
          <FaSyncAlt className="icon" title="Repeat Task" />
          <FaCalendarAlt className="icon" title="Set Due Date" />
        </div>
        <button type="submit" className="add-task-btn">
          ADD TASK
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
