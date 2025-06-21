import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import ComputerModel from "./canvas/ComputerModel";
import CanvasLoader from "./Loader";
import { Edges } from "@react-three/drei";
import Chair from "./canvas/Chair";
import Palm from "./canvas/PalmPlant";
import DigitalClock from "./canvas/DigitalClock"; // ✅ NEW

const Room = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const woodTexture = useLoader(THREE.TextureLoader, "/textures/wood.jpg");
  woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
  woodTexture.repeat.set(1, 1);

  const windowTexture = useLoader(THREE.TextureLoader, "/textures/spring_window_view.jpg");

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 25]} />
        <meshStandardMaterial map={woodTexture} roughness={0.6} metalness={0.2} />
      </mesh>

      {/* Left Wall */}
      <mesh rotation={[0, Math.PI / 4, 0]} position={[-2, 3, -3]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#F1D6B3" />
        <Edges scale={1.01} threshold={15} color="black" />
      </mesh>

      {/* Right Wall */}
      <mesh rotation={[0, -Math.PI / 4, 0]} position={[4, 2.5, -2]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#F1D6B3" />
        <Edges scale={1.01} threshold={15} color="black" />
      </mesh>

      {/* Window on Right Wall */}
      <group rotation={[-0.005, -Math.PI / 4.5, -0.05]} position={[9.5, 4.7, 4.7]}>
        <mesh position={[-2.5, 0, 0.1]}>
          <planeGeometry args={[5, 3]} />
          <meshBasicMaterial map={windowTexture} />
        </mesh>
      </group>

      {/* Corner Shadow */}
      <mesh position={[0.5, 1, -5.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.1, 20, 0.1]} />
        <meshStandardMaterial color="grey" opacity={0.17} transparent />
      </mesh>

      <DigitalClock
        position={[-4, 6, 3.5]} // Move this wherever you want
        rotation={[0, Math.PI / 4, 0.05]} // Match wall angle
        color="black"
      />

      {/* Models */}
      <Suspense fallback={<CanvasLoader />}>
        <ComputerModel isMobile={isMobile} />
        <Chair isMobile={isMobile} />
        <Palm isMobile={isMobile} />
      </Suspense>
    </>
  );
};

export default Room;
