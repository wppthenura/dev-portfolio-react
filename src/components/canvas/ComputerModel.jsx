// src/components/canvas/ComputerModel.jsx
import { useGLTF, Text } from "@react-three/drei";

const ComputerModel = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); 
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
        position={isMobile ? [0, -7, -2.2] : [-3.7, 3, 1.55]}
        rotation={[0.05, 5.57, -0.005]}
      />
    </mesh>
  );
};

export default ComputerModel;
