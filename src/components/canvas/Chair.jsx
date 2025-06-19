// src/components/canvas/Chair.jsx
import React from "react";
import { useGLTF, Text } from "@react-three/drei";

const Chair = ({ isMobile }) => {
  const chair = useGLTF("./office_chair/scene.gltf");

  return (
    <mesh>
      <primitive
        object={chair.scene}
        scale={isMobile ? 0.7 : 0.125}
        position={isMobile ? [0, -7, -2.2] : [-3, 1, 5.3]}
        rotation={[0.05, 9, 0.1]}
      />
      <Text
        position={[-4, -1, 7.9]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={6}
        rotation={[1.53, Math.PI / 1.8, 0.03]}
      >
        I'm your creative companion 💡
      </Text>
    </mesh>
  );
};

export default Chair;
