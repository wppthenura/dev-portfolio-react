import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Pulindu</h2>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
