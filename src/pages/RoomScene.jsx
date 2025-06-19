// src/pages/RoomScene.jsx
import { Canvas } from "@react-three/fiber";
import Room from "../components/Room";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

// Camera helper to tilt upward
const CameraController = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0.5, 3, 0); // 👈 Y value controls the upward tilt
  }, [camera]);
  return null;
};

const RoomScene = () => {
  return (
    <Canvas
      camera={{ position: [2, 4, 10], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      <CameraController /> {/* 👈 Include this */}
      <Room />
    </Canvas>
  );
};

export default RoomScene;
