import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Edges, Text } from "@react-three/drei";
import ComputerModel from "./canvas/ComputerModel";
import CanvasLoader from "./Loader";
import Chair from "./canvas/Chair";
import Palm from "./canvas/PalmPlant";
import DigitalClock from "./canvas/DigitalClock";

const ProjectButton = ({ woodTexture }) => {
  const [pressed, setPressed] = useState(false);
  const buttonRef = useRef();

  useFrame(() => {
    if (buttonRef.current) {
      buttonRef.current.position.y = THREE.MathUtils.lerp(
        buttonRef.current.position.y,
        pressed ? 0.0 : 0.18,
        0.1
      );
    }
  });

  return (
    <group
      ref={buttonRef}
      position={[-1, 0, 2.7]} // Existing button position
      onClick={() => setPressed(!pressed)}
    >
      {/* Wooden Button */}
      <mesh>
        <boxGeometry args={[2, 0.35, 1]} />
        <meshStandardMaterial map={woodTexture} />
      </mesh>
      {/* Label */}
      <Text
        position={[0, 0.01, 0.5]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="black"
      >
        Projects
      </Text>
    </group>
  );
};

// New generic button component for reusability
const WoodenTileButton = ({ woodTexture, position, label }) => {
  const [pressed, setPressed] = useState(false);
  const buttonRef = useRef();

  useFrame(() => {
    if (buttonRef.current) {
      buttonRef.current.position.y = THREE.MathUtils.lerp(
        buttonRef.current.position.y,
        pressed ? 0.0 : 0.18,
        0.1
      );
    }
  });

  return (
    <group
      ref={buttonRef}
      position={position}
      onClick={() => setPressed(!pressed)}
    >
      <mesh>
        <boxGeometry args={[2, 0.35, 1]} />
        <meshStandardMaterial map={woodTexture} />
      </mesh>
      <Text
        position={[0, 0.01, 0.5]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="black"
      >
        {label}
      </Text>
    </group>
  );
};

const Room = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [chairRotation, setChairRotation] = useState(9.2); // initial Y rotation in radians

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

  const windowTexture = useLoader(
    THREE.TextureLoader,
    "/textures/spring_window_view.jpg"
  );

  // Positions: relative to the original ProjectButton at [0, 0.5, 2]
  // "Right back" means +x, +z (to the right and behind)
  // "Left front" means -x, -z (to the left and in front)

  const projectButtonPosition = [0, 0.5, 2];
  const aboutMePosition = [2, 0.5, 0.9]; // Right back
  const skillsPosition = [-2, 0.5, -0.5]; // Left front

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 25]} />
        <meshStandardMaterial
          map={woodTexture}
          roughness={0.6}
          metalness={0.2}
        />
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
        position={[-4, 6, 3.5]}
        rotation={[0, Math.PI / 4, 0.05]}
        color="black"
      />

      {/* Existing Projects Button */}
      <ProjectButton woodTexture={woodTexture} position={projectButtonPosition} />

      {/* New Buttons */}
      <WoodenTileButton
        woodTexture={woodTexture}
        position={aboutMePosition}
        label="About me"
      />
      <WoodenTileButton
        woodTexture={woodTexture}
        position={skillsPosition}
        label="Skills"
      />

      {/* Models */}
      <Suspense fallback={<CanvasLoader />}>
        <ComputerModel isMobile={isMobile} />
        <Chair
          isMobile={isMobile}
          rotation={chairRotation}
          onRotate={setChairRotation}
        />
        <Palm isMobile={isMobile} />
      </Suspense>
    </>
  );
};

export default Room;
