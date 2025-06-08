import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <button className="chat-button">Let’s Chat</button>
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
