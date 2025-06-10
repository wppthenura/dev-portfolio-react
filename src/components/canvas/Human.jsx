import { useGLTF } from '@react-three/drei';

const Human = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const { scene, error } = useGLTF('/connor/scene.gltf');
  
  if (error) {
    console.error("Model error:", error);
    return null;
  }
  
  return scene ? <primitive object={scene} position={position} scale={scale} /> : null;
};

export default Human;