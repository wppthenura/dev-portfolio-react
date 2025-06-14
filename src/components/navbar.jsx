import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaEye } from "react-icons/fa";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${isMobile ? "mobile-navbar" : ""}`}>
      {isMobile ? (
        <div className="mobile-container">
          <button className="wanna-see-btn" onClick={() => setShowMenu(!showMenu)}>
            <FaEye style={{ marginRight: "8px" }} /> Wanna See
          </button>
          {showMenu && (
            <ul className="mobile-menu">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          )}
        </div>
      ) : (
        <div className="nav-links">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
