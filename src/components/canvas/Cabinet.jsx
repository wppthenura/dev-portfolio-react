import React from "react";
import { useGLTF } from "@react-three/drei";

const Cabinet = ({ isMobile }) => {
  const cabinet = useGLTF("./Cabinet/scene.gltf");

  return (
    <primitive
  object={cabinet.scene}
  scale={isMobile ? [0.7, 1.4, ] : [4, 4, 2]} // Increase only height
  position={isMobile ? [0, -7, -2.2] : [5.5, 0, 1]} // Adjust position for mobil
  rotation={[0.07, Math.PI / 0.564, -0.008 ]} // Adjust rotation for mobile
/>
  );
};

export default Cabinet;
