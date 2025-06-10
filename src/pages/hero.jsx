// hero.jsx
import React, { useEffect, useState, Suspense } from 'react';
import './hero.css';
import { ComputersCanvas } from '../components/canvas';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Human from '../components/canvas/Human'; // make sure path is correct

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));
    return () => mediaQuery.removeEventListener("change", () => {});
  }, []);

  return (
    <section className="hero-container" id="hero">
      <div className="computer-canvas-container">
        <ComputersCanvas />
      </div>

      <div className="human-canvas-container">
        <Canvas gl={{ alpha: true }} camera={{ position: [2, 1, 25], fov: 25 }}>
          <Suspense fallback={null}>
            <Human isMobile={isMobile} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      <div className="hero-3d">
        {[...Array(11)].map((_, i) => (
          <div key={i} className={`panel panel-${i + 1}`}></div>
        ))}
      </div>

      <div className="hero-text">
        <h1>W P P Thenura</h1>
        <h2>Full Stack Developer | UI/UX Engineer</h2>
      </div>
    </section>
  );
};

export default Hero;
