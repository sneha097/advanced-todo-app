import React, { useState } from "react";
import "./Sidebar.css";
import { FaCalendarAlt, FaStar, FaTasks, FaPlus } from "react-icons/fa";
import { MdAssignment, MdToday } from "react-icons/md";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Sidebar = ({ onSelectCategory, tasks = [] }) => {
  console.log("Sidebar Props:", { onSelectCategory, tasks });

  const [activeItem, setActiveItem] = useState("Today");

  const handleItemClick = (category) => {
    setActiveItem(category);
    onSelectCategory(category);
  };

  // Pie chart data
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  const data = {
    labels: ["Done", "Pending"],
    datasets: [
      {
        data: [completedTasks, totalTasks - completedTasks],
        backgroundColor: ["#4CAF50", "#ccc"],
        hoverBackgroundColor: ["#45a049", "#aaa"],
      },
    ],
  };

  console.log("Tasks:", tasks);
  console.log("Completed:", completedTasks);
  console.log("Total:", totalTasks);

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-name">Hey, ABCD</div>
      </div>

      {/* Menu Items */}
      <ul className="menu">
        <li
          className={`menu-item ${activeItem === "All Tasks" ? "active" : ""}`}
          onClick={() => handleItemClick("All Tasks")}
        >
          <FaTasks />
          All Tasks
        </li>
        <li
          className={`menu-item ${activeItem === "Today" ? "active" : ""}`}
          onClick={() => handleItemClick("Today")}
        >
          <MdToday />
          Today
        </li>
        <li
          className={`menu-item ${activeItem === "Important" ? "active" : ""}`}
          onClick={() => handleItemClick("Important")}
        >
          <FaStar />
          Important
        </li>
        <li
          className={`menu-item ${activeItem === "Planned" ? "active" : ""}`}
          onClick={() => handleItemClick("Planned")}
        >
          <FaCalendarAlt />
          Planned
        </li>
        <li
          className={`menu-item ${activeItem === "Assigned" ? "active" : ""}`}
          onClick={() => handleItemClick("Assigned")}
        >
          <MdAssignment />
          Assigned to me
        </li>
      </ul>

      {/* Add List Section */}
      <div className="add-list">
        <FaPlus /> Add List
      </div>

      {/* Task Summary with Progress Chart */}
      <div className="task-summary">
        <h5>Today Tasks</h5>
        <div className="task-count">{totalTasks}</div>
        {totalTasks > 0 ? (
          <>
            <div className="chart-container">
              <Pie data={data} />
            </div>
            <div className="legend">
              <div className="legend-item">
                <span className="done-indicator"></span> Done
              </div>
              <div className="legend-item">
                <span className="pending-indicator"></span> Pending
              </div>
            </div>
          </>
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
