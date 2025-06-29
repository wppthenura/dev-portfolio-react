import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Chair = ({ isMobile }) => {
  const chair = useGLTF("./office_chair/scene.gltf");
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  // === [1] DEFAULT ORBIT ROTATION AROUND ROOM ===
  const defaultOrbitRotation = 0;
  const orbitRotation = useRef(defaultOrbitRotation);
  const currentOrbit = useRef(defaultOrbitRotation);

  // === [2] DEFAULT CHAIR DIRECTION (which way it's facing) ===
  const defaultChairFacing = 9.2;

  const minOrbit = -Math.PI / 1000;
  const maxOrbit = Math.PI / 8.7;

  useFrame(() => {
    if (groupRef.current) {
      currentOrbit.current = THREE.MathUtils.lerp(
        currentOrbit.current,
        orbitRotation.current,
        0.1
      );
      const radius = 5.1;
      const x = radius * Math.sin(currentOrbit.current);
      const z = radius * Math.cos(currentOrbit.current);
      groupRef.current.position.set(-3.7 + x, 1, z);
    }
  });

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
        position={isMobile ? [0, -7, -2.2] : [0, 0, 0]}
        rotation={[0, defaultChairFacing, 0.05]}
      />

      {/* Scroll instruction text */}
      {hovered && (
        <>
          <Text
            position={[1, 1.45, 0.3]}
            rotation={[0.15, Math.PI / 2, 1.4]}
            fontSize={0.1}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.01}
            outlineColor="black"
          >
            Scroll  to  move
          </Text>
          <mesh position={[0, 3, 0]}>
            <planeGeometry args={[5, 1]} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>
        </>
      )}
    </group>
  );
};

export default Chair;
