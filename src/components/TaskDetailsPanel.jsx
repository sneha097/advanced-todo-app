import React from "react";
import "./TaskDetailsPanel.css";
import { FaPlus, FaBell, FaCalendarAlt, FaSyncAlt } from "react-icons/fa";

const TaskDetailsPanel = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <div className="task-details-panel">
      {/* Task Title and Importance */}
      <div className="task-details-header">
        <input type="checkbox" checked={task.completed} readOnly />
        <span className="task-title">{task.text}</span>
        <span className="star-icon">{task.important ? "⭐" : "☆"}</span>
      </div>

      {/* Task Options */}
      <div className="task-options">
        <div className="task-option">
          <FaPlus /> <span>Add Step</span>
        </div>
        <div className="task-option">
          <FaBell /> <span>Set Reminder</span>
        </div>
        <div className="task-option">
          <FaCalendarAlt /> <span>Add Due Date</span>
        </div>
        <div className="task-option">
          <FaSyncAlt /> <span>Repeat</span>
        </div>
      </div>

      {/* Notes Section */}
      <div className="task-notes">
        <span>Add Notes</span>
      </div>

      {/* Close Button */}
      <button className="close-btn" onClick={onClose}>
        ✖
      </button>
    </div>
  );
};


export default TaskDetailsPanel;
