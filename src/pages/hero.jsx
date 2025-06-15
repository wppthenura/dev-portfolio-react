import React, { useEffect, useState, useRef } from 'react';
import './hero.css';
import { ComputersCanvas } from '../components/canvas';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const roleRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));
    return () => mediaQuery.removeEventListener("change", () => {});
  }, []);

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "UI/UX Engineer",
      "Product Designer"
    ];

    let index = 0;
    const cycleRoles = () => {
      if (!roleRef.current) return;
      roleRef.current.style.opacity = 0;
      setTimeout(() => {
        roleRef.current.innerText = roles[index].toUpperCase();
        roleRef.current.style.opacity = 1;
        index = (index + 1) % roles.length;
      }, 400);
    };

    const interval = setInterval(cycleRoles, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container" id="hero">
      <div className="brand-and-links">
        <a className="brand">More than Coding</a>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h2 className="intro-line">Hi I am,</h2>
          <h1 className="name-line">Pulindu Thenura</h1>
          <h2 className="intro-line">and I am a</h2>
          <div className="role-wrapper">
            <h2 className="typewriter-text" ref={roleRef}></h2>
          </div>
        </div>

        <div className="computer-canvas-container">
          <ComputersCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
