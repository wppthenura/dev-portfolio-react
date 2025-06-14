// hero.jsx
import React, { useEffect, useState, Suspense } from 'react';
import './about.css';
import { ComputersCanvas } from '../components/canvas';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';
import Human from '../components/canvas/Human';

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

      <div className="human-canvas-container">
        <Canvas gl={{ alpha: true }} camera={{ position: [2, 1, 25], fov: 25 }}>
          <Suspense fallback={null}>
            <Human isMobile={isMobile} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </Canvas>
      </div>

    </section>
  );
};

export default About;
