import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
  <div className="brand-and-links">
    <a className="brand">W P P Thenura  |  More than Coding</a>
    <div className="nav-links">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
