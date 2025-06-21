import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Chair = ({ isMobile }) => {
  const chair = useGLTF("./office_chair/scene.gltf");
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  // === [1] DEFAULT ORBIT ROTATION AROUND ROOM ===
  const defaultOrbitRotation = 0; // ← this rotates the CHAIR'S POSITION around a circle
  const orbitRotation = useRef(defaultOrbitRotation);
  const currentOrbit = useRef(defaultOrbitRotation);

  // === [2] DEFAULT CHAIR DIRECTION (which way it's facing) ===
  const defaultChairFacing = 9.2; // ← this makes the CHAIR rotate around its own axis

  // Orbit bounds
  const minOrbit = -Math.PI / 1000;
  const maxOrbit = Math.PI / 8.7;

  // Smooth orbit movement
  useFrame(() => {
    if (groupRef.current) {
      currentOrbit.current = THREE.MathUtils.lerp(
        currentOrbit.current,
        orbitRotation.current,
        0.1
      );

      // Apply orbit rotation (around y)
      const radius = 5.1;
      const x = radius * Math.sin(currentOrbit.current);
      const z = radius * Math.cos(currentOrbit.current);
      groupRef.current.position.set(-3.7 + x, 1, z); // You can adjust -3.7 to move the orbit center
    }
  });

  // Scroll affects orbit only when hovered
  useEffect(() => {
    const handleWheel = (e) => {
      if (!hovered) return;
      const delta = e.deltaY > 0 ? 1 : -1;
      const next = orbitRotation.current + delta * 0.15;
      orbitRotation.current = THREE.MathUtils.clamp(next, minOrbit, maxOrbit);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [hovered]);

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <primitive
        object={chair.scene}
        scale={isMobile ? 0.7 : 0.12}
        position={isMobile ? [0, -7, -2.2] : [0, 0, 0]} // center of group, actual position is handled above
        rotation={[0, defaultChairFacing, 0.05]} // facing direction of the chair itself
      />
      {hovered && (
        <mesh position={[0, 3, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      )}
    </group>
  );
};

export default Chair;
