// hero.jsx
import React, { useEffect, useState, Suspense } from 'react';
import './about.css';
import { ComputersCanvas } from '../components/canvas';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));
    return () => mediaQuery.removeEventListener("change", () => {});
  }, []);

  return (
    <section className="about-container" id="about">
      <div className="computer-canvas-container">
        <ComputersCanvas />
      </div>


    </section>
  );
};

export default About;
