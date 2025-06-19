// src/components/canvas/Chair.jsx
import React from "react";
import { useGLTF, Text } from "@react-three/drei";

const Chair = ({ isMobile }) => {
  const chair = useGLTF("./office_chair/scene.gltf");

  return (
    <mesh>
      <primitive
        object={chair.scene}
        scale={isMobile ? 0.7 : 0.12}
        position={isMobile ? [0, -7, -2.2] : [-3.7, 1, 5.3]}
        rotation={[0.01, 9.2, 0.15]}
      />
    </mesh>
  );
};

export default Chair;
