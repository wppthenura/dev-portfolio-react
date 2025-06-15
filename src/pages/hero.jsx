// hero.jsx
import React, { useEffect, useState, Suspense } from 'react';
import './hero.css';
import { ComputersCanvas } from '../components/canvas';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';
import Human from '../components/canvas/Human';
import LineGrid from '../components/LineGrid'; // Adjust path if needed


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
      <div className="brand-and-links">
      <a className="brand">W P P Thenura  |  More than Coding</a>
      </div>

      <div className="human-canvas-container">
        <Canvas gl={{ alpha: true }} camera={{ position: [2, 1, 25], fov: 25 }}>
          <Suspense fallback={null}>
            <Human isMobile={isMobile} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </Canvas>
      </div>
      <div className="grid-overlay">
       <LineGrid />
      </div>

      <div className="hero-text">
        <h1>Pulindu Thenura</h1>
        <h2>Full Stack Developer | UI/UX Engineer</h2>
      </div>

    </section>
  );
};

export default Hero;
