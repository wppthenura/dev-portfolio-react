import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader, AdditiveBlending, DoubleSide } from 'three';

const techItems = [
  { texture: 'reactjs.png', position: [-4.5, 0, 1.5] },
  { texture: 'nodejs.png', position: [-0.1, 0, 2] },
  { texture: 'typescript.png', position: [4, 0, 3] },
  { texture: 'mongodb.png', position: [-5.5, 0, 4] },
  { texture: 'css.png', position: [2, 0, -2] },
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
    <group ref={groupRef} position={position} frustumCulled={false}>
      {/* Volumetric light beam */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.15, 0.01, 0.4, 40, 1, true]} />
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.14}
          roughness={0.1}
          metalness={0.6}
          emissive="#00ffff"
          emissiveIntensity={1.5}
          side={DoubleSide}
        />
      </mesh>

      {/* Floating logo */}
      {texture && (
        <mesh
          position={[0, 1.15, 0]}
          scale={[0.7, 0.7, 0.7]}
          frustumCulled={false}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={2}
            color="#00ffff"
            blending={AdditiveBlending}
            depthWrite={true}
            toneMapped={false}
            side={DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
};

const Techballs = () => {
  return (
    <>
      {techItems.map((item, index) => (
        <HologramDisplay
          key={`${item.texture}-${index}`}
          texturePath={item.texture}
          position={item.position}
          rotationSpeed={0.003 + index * 0.001}
        />
      ))}
    </>
  );
};

export default Techballs;
