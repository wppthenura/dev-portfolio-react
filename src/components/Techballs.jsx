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
      {/* Glowing Hologram Sphere */}
      <mesh>
        <sphereGeometry args={[0.7, 64, 64]} />
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.5}
          emissive="#00ffff"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Logo plane INSIDE the sphere */}
      {texture && (
        <mesh position={[0, 0, 0]} scale={[0.45, 0.45, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} transparent toneMapped={false} />
        </mesh>
      )}
    </group>
  );
};

const Techballs = () => {
  return (
    <>
      {techLogos.map((logo, index) => {
        const spacing = 1.7;
        const x = index * spacing - ((techLogos.length - 1) * spacing) / 2;
        const y = 1.2;
        const z = 0;

        return (
          <HologramBall
            key={`${logo}-${index}`}
            texturePath={logo}
            position={[x, y, z]}
            rotationSpeed={0.004 + index * 0.001}
          />
        );
      })}
    </>
  );
};

export default Techballs;
