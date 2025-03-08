import React from "react";
import { FaBars, FaSearch, FaTh, FaRegMoon } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBars className="icon" />
        <img src="./image.png"
          alt="Logo"
          className="logo"
        />
        <span className="logo-text">DoIt</span>
      </div>
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaTh className="icon" />
        <FaRegMoon className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
