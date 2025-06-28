import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader, AdditiveBlending, DoubleSide } from 'three';

const allLogos = [
  'reactjs.png', 'nodejs.png', 'typescript.png', 'mongodb.png', 'css.png',
  'docker.png', 'figma.png', 'git.png', 'html.png', 'javascript.png',
  'redux.png', 'tailwind.png',
];

const fixedPositions = [
  [6.67, -0.2, 3.5],
];

const getRandomLogo = (exclude = []) => {
  const available = allLogos.filter((logo) => !exclude.includes(logo));
  return available[Math.floor(Math.random() * available.length)];
};

const HologramDisplay = ({ position, initialTexture, onChangeRequest, sharedUsed, updateUsed }) => {
  const groupRef = useRef();
  const [texture, setTexture] = useState(null);
  const [logo, setLogo] = useState(initialTexture);
  const [angle, setAngle] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [phase, setPhase] = useState('showing'); 

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(`/tech/${logo}`, setTexture, undefined, (err) =>
      console.error(`❌ Failed to load: ${logo}`, err)
    );
  }, [logo]);

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += 0.01;
    setAngle((prev) => prev + 0.01);

    if (angle >= Math.PI * 2 && phase === 'showing') {
      setPhase('fadingOut');
      setAngle(0);
    }

    if (phase === 'fadingOut') {
      setYOffset((y) => y - 0.02);
      setOpacity((o) => o - 0.04);
      if (opacity <= 0) {
        const newLogo = getRandomLogo(sharedUsed);
        updateUsed(logo, newLogo);
        setLogo(newLogo);
        setYOffset(-0.5);
        setOpacity(0);
        setPhase('fadingIn');
      }
    } else if (phase === 'fadingIn') {
      setYOffset((y) => Math.min(y + 0.02, 0));
      setOpacity((o) => Math.min(o + 0.04, 1));
      if (opacity >= 1 && yOffset >= 0) {
        setPhase('showing');
      }
    }
  });

  return (
    <group ref={groupRef} position={position} frustumCulled={false}>

      {texture && (
        <mesh
          position={[0, 1.0 + yOffset, 0]}
          scale={[0.4, 0.4, 0.4]}
          frustumCulled={false}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={opacity}
            color="#00ffff"
            blending={AdditiveBlending}
            depthWrite={true}
            toneMapped={false}
            side={DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
};

const Techballs = () => {
  const [usedLogos, setUsedLogos] = useState(() => {
    const shuffled = [...allLogos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  });

  const updateUsed = (oldLogo, newLogo) => {
    setUsedLogos((prev) => {
      const newSet = prev.map((logo) => (logo === oldLogo ? newLogo : logo));
      return newSet;
    });
  };

  return (
    <>
      {fixedPositions.map((pos, i) => (
        <HologramDisplay
          key={i}
          position={pos}
          initialTexture={usedLogos[i]}
          sharedUsed={usedLogos}
          updateUsed={updateUsed}
        />
      ))}
    </>
  );
};

export default Techballs;
