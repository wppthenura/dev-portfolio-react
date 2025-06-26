// src/components/Techballs.jsx

import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const techLogos = [
  'reactjs.png',
  'nodejs.png',
  'javascript.png',
  'threejs.png',
  'typescript.png',
  'mongodb.png',
  'css.png'
];

const HologramBall = ({ texturePath, position, rotationSpeed = 0.01 }) => {
  const groupRef = useRef();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      `/tech/${texturePath}`,
      (loadedTexture) => setTexture(loadedTexture),
      undefined,
      (err) => console.error(`❌ Could not load ${texturePath}`, err)
    );
  }, [texturePath]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Glowing bubble */}
      <mesh>
        <sphereGeometry args={[0.6, 64, 64]} /> {/* ⬅️ Smaller */}
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.15}
          emissive="#00ffff"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Logo */}
      {texture && (
        <mesh position={[0, 0, 0.61]} scale={[0.45, 0.45, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>
      )}
    </group>
  );
};

const Techballs = () => {
  return (
    <>
      {techLogos.map((logo, index) => {
        const angle = (index / techLogos.length) * Math.PI * 2;
        const radius = 2.5; // ⬅️ Smaller and more centered
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <HologramBall
            key={`${logo}-${index}`}
            texturePath={logo}
            position={[x, 1.2, z]} // ⬅️ Lowered height a bit
            rotationSpeed={0.004 + index * 0.001}
          />
        );
      })}
    </>
  );
};

export default Techballs;
