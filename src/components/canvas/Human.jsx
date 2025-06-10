import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Human = ({ 
  position = [-0.24, -2.75, 0], 
  scale = [0.45, 0.45, 0.45], 
  rotation = [0, 0.12, -0.02]

  }) => {
  const { scene } = useGLTF('/connor/scene.gltf');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003; // Adjust speed here
    }
  });

  if (!scene) {
    console.warn('GLTF model failed to load or is empty.');
    return null;
  }

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
};

export default Human;
