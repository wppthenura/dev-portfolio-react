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
            <h2 className="role">Software Engineer</h2>
        </div>

        <div className="computer-canvas-container">
          <ComputersCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
