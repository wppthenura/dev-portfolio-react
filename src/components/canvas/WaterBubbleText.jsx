import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const WaterBubbleText = () => {
  const bubbleRef = useRef();

  // Animate the bubble (juggle up and down)
  useFrame(({ clock }) => {
    if (bubbleRef.current) {
      bubbleRef.current.position.y = 6.2 + Math.sin(clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={bubbleRef} position={[1, 0, 1]} rotation={[0.1, Math.PI / 10, 0]}>
      {/* Water Bubble */}
      <mesh>
        <sphereGeometry args={[1, 104, 50]} />
        <MeshDistortMaterial
          color="#9ecfff"
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.3}
          distort={0.3}
          speed={2}
        />
      </mesh>

      {/* Text lines stacked vertically */}
      <Text
        fontSize={0.25}
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, 0.4, 1]}  // top line
      > I am
      </Text>

      <Text
        fontSize={0.35}
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 1]}  // middle line (name)
      >
        Pulindu Thenura
      </Text>

      {/* Horizontal line under the name */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[1.6, 0.02, 0.01]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <Text
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, -0.6, 0]}  // bottom line (title)
      >
        SOFTWARE ENGINEER
      </Text>
    </group>
  );
};

export default WaterBubbleText;
