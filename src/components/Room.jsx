import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Edges, Text, Html } from "@react-three/drei";
import ComputerModel from "./canvas/ComputerModel";
import CanvasLoader from "./Loader";
import Chair from "./canvas/Chair";
import Palm from "./canvas/PalmPlant";
import DigitalClock from "./canvas/DigitalClock";
import AllTexts from './AllTexts';
import Cabinet from "./canvas/Cabinet";
import Techballs from './Techballs';
import './OverlayPanel.css';
import AboutMeContent from './AboutMeContent';
import SkillsContent from './SkillsContent';
import ProjectsContent from './ProjectsContent';
import RightWallWords from './RightWallWords';


const WoodenTileButton = ({ woodTexture, position, label, onClick, pressed, setPressed }) => {
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

  const handleClick = () => {
    setPressed(true);
    onClick?.();
  };

  return (
    <group ref={buttonRef} position={position} onClick={handleClick}>
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

const TVOverlay = ({ contentType, onClose }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.lerp(new THREE.Vector3(0, 2, 1), 0.1);
    }
  });

  return (
    <group ref={groupRef} position={[0, 10, 10]}>
      <mesh>
        <boxGeometry args={[4, 3, 0.2]} />
        <meshStandardMaterial color="#111" metalness={0.6} roughness={0.3} />
      </mesh>

      <Html
  position={[0, 0, 0.11]}
  transform
  occlude
  style={{
    width: '360px',
    height: '240px',
    background: 'white',
    borderRadius: '12px',
    overflowY: 'auto',
    padding: '1rem',
  }}
>
  <div>
    <button
      onClick={onClose}
      style={{
        position: 'absolute',
        top: 10,
        right: 20,
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer'
      }}
    >
      ✖
    </button>

    {contentType === "about" && <AboutMeContent />}
    {contentType === "skills" && <SkillsContent />}
    {contentType === "projects" && <ProjectsContent />}
  </div>
</Html>

    </group>
  );
};

const Room = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [chairRotation, setChairRotation] = useState(9.2);
  const [activeOverlay, setActiveOverlay] = useState(null);

  const [buttonStates, setButtonStates] = useState({
    projects: false,
    about: false,
    skills: false
  });

  const handleOpen = (key) => {
    setButtonStates(prev => ({ ...prev, [key]: true }));
    setActiveOverlay(key);
  };

  const handleClose = () => {
    setButtonStates(prev => ({ ...prev, [activeOverlay]: false }));
    setActiveOverlay(null);
  };

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
  const projectButtonPosition = [0, 0.5, 2.3];
  const aboutMePosition = [2.4, 0.5, 0.5];
  const skillsPosition = [-2.5, 0.5, 0.1];

  return (
    <>
      {activeOverlay && <TVOverlay contentType={activeOverlay} onClose={handleClose} />}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 25]} />
        <meshStandardMaterial map={woodTexture} roughness={0.6} metalness={0.2} />
      </mesh>

      <mesh rotation={[0, Math.PI / 4, 0]} position={[-2, 3, -3]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#F1D6B3" />
        <Edges scale={1.01} threshold={15} color="black" />
      </mesh>

      <mesh rotation={[0, -Math.PI / 4, 0]} position={[4, 2.5, -2]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#F1D6B3" />
        <Edges scale={1.01} threshold={15} color="black" />
      </mesh>

      <group rotation={[-0.005, -Math.PI / 4.5, -0.05]} position={[9.5, 4.7, 4.7]}>
        <mesh position={[-2.5, 0, 0.1]}>
          <planeGeometry args={[5, 3]} />
          <meshBasicMaterial map={windowTexture} />
        </mesh>
      </group>

      <mesh position={[0.5, 1, -5.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.1, 20, 0.1]} />
        <meshStandardMaterial color="grey" opacity={0.17} transparent />
      </mesh>

      <DigitalClock position={[-4.1, 5.9, 4.5]} rotation={[0, Math.PI / 4, 0.05]} color="black" />
      <AllTexts />

      <WoodenTileButton
        woodTexture={woodTexture}
        position={projectButtonPosition}
        label="Projects"
        pressed={buttonStates.projects}
        setPressed={(val) => setButtonStates(prev => ({ ...prev, projects: val }))}
        onClick={() => handleOpen("projects")}
      />

      <WoodenTileButton
        woodTexture={woodTexture}
        position={aboutMePosition}
        label="About me"
        pressed={buttonStates.about}
        setPressed={(val) => setButtonStates(prev => ({ ...prev, about: val }))}
        onClick={() => handleOpen("about")}
      />

      <WoodenTileButton
        woodTexture={woodTexture}
        position={skillsPosition}
        label="Skills"
        pressed={buttonStates.skills}
        setPressed={(val) => setButtonStates(prev => ({ ...prev, skills: val }))}
        onClick={() => handleOpen("skills")}
      />

      <Suspense fallback={<CanvasLoader />}>
        <ComputerModel isMobile={isMobile} />
        <RightWallWords isMobile={isMobile} />
        <Chair isMobile={isMobile} rotation={chairRotation} onRotate={setChairRotation} />
        <Palm isMobile={isMobile} />
        <Cabinet isMobile={isMobile} />
        <Techballs isMobile={isMobile} />
      </Suspense>
      
      <Html
  position={[3.4, 1, -2]}
  rotation={[0, -Math.PI / -0.57, 0.057]}
  transform
  occlude
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'transparent',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    minWidth: '220px'
  }}
>
  <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem' }}>
    <a href="https://github.com/wppthenura" target="_blank" rel="noopener noreferrer">
      <img src="/icons/github.png" alt="GitHub" width={30} height={30} style={{ cursor: 'pointer' }} />
    </a>
    <a href="https://www.linkedin.com/in/pulindu-thenura-01a70617a/" target="_blank" rel="noopener noreferrer">
      <img src="/icons/linkedin.png" alt="LinkedIn" width={30} height={30} style={{ cursor: 'pointer' }} />
    </a>
    <a href="https://www.instagram.com/pulindu.thenura/" target="_blank" rel="noopener noreferrer">
      <img src="/icons/instagram.png" alt="Instagram" width={30} height={30} style={{ cursor: 'pointer' }} />
    </a>
  </div>
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=wppulindum@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    fontSize: '0.9rem',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer'
  }}
>
  wppulindum@gmail.com
</a>


</Html>

    </>
    
  );
};

export default Room;
