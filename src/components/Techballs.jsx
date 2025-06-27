// src/components/Techballs.jsx

import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader, AdditiveBlending } from 'three';

const techLogos = [
  'reactjs.png',
  'nodejs.png',
  'javascript.png',
  'threejs.png',
  'typescript.png',
  'mongodb.png',
  'css.png',
];

const HologramDisplay = ({ texturePath, position, rotationSpeed = 0.01 }) => {
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

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;

      const flicker = 0.9 + Math.sin(clock.elapsedTime * 12) * 0.05;
      groupRef.current.children.forEach((child) => {
        if (child.material?.emissiveIntensity !== undefined) {
          child.material.emissiveIntensity = flicker;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Glowing base ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[0.4, 0.6, 8]} />
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.35}
          blending={AdditiveBlending}
        />
      </mesh>

      {/* Volumetric light beam */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.2, 0.01, 0.5, 40, 1, true]} />
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.14}
          roughness={0.1}
          metalness={0.6}
          emissive="#00ffff"
          emissiveIntensity={1.5}
          side={2} // DoubleSide
        />
      </mesh>

      {/* Floating logo in hologram */}
      {texture && (
        <mesh position={[0, 1.1, 0]} scale={[0.8, 0.8, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.9}
            color="#00ffff"
            blending={AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      )}
    </group>
  );
};

const Techballs = () => {
  return (
    <>
      {techLogos.map((logo, index) => {
        const spacing = 2.5;
        const x = index * spacing - ((techLogos.length - 1) * spacing) / 2;
        return (
          <HologramDisplay
            key={`${logo}-${index}`}
            texturePath={logo}
            position={[x, 0, 0]}
            rotationSpeed={0.002 + index * 0.001}
          />
        );
      })}
    </>
  );
};

export default Techballs;
