import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const fontURL = "/fonts/Quicksand.ttf";

const words = [
  { text: "DEVELOPER", position: [-2.4, 2, 0] },
  { text: "LOGICAL", position: [-1.5, 2.3, 0] },
  { text: "FULLSTACK", position: [-2, 2.7, 0] },
  { text: "DESIGNER", position: [-0.5, 2.62, 0] },
  { text: "INITIATOR", position: [-1, 1.8, 0] },
  { text: "THINKER", position: [0, 2.1, 0] }
];

const RightWallWords = () => {
  const groupRef = useRef();
  const textRefs = useRef([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    textRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const delay = i * 1; 
      const scaleFactor = 1 + 0.3 * Math.sin((t - delay) * 1); 
      ref.scale.setScalar(scaleFactor);
    });
  });

  return (
    <group
      ref={groupRef}
      position={[-0.1, 0.25, 2.7]}
      scale={[1, 1, 1]}
      rotation={[0, -Math.PI / 0.56, 0.057]}
    >
      {words.map((item, index) => (
        <Text
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          position={item.position}
          fontSize={0.2}
          font={fontURL}
          color="black"
          anchorX="center"
          anchorY="middle"
          castShadow
        >
          {item.text}
        </Text>
      ))}
    </group>
  );
};

export default RightWallWords;
