// src/components/canvas/ComputerModel.jsx
import { useGLTF, Text } from "@react-three/drei";

const ComputerModel = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // ✅ path from public/

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.45}
        position={isMobile ? [0, -7, -2.2] : [-2, 3, -2]}
        rotation={[0.05, 5.5, 0]}
      />

      {/* Floating Text */}
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

export default ComputerModel;
