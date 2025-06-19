// src/components/canvas/Chair.jsx
import React from "react";
import { useGLTF, Text } from "@react-three/drei";

const Palm = ({ isMobile }) => {
  const palm = useGLTF("./3D_palm/scene.gltf");

  return (
    <mesh>
      <primitive
        object={palm.scene}
        scale={isMobile ? 0.7 : 4}
        position={isMobile ? [0, -7, -2.2] : [0.5, 0, -3.7]}
        rotation={[0.01, 15, 0.0]}
      />
    </mesh>
  );
};

export default Palm;
