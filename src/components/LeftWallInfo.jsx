import React, { useRef, useState } from "react";
import { Text, Html } from "@react-three/drei";

const fontURL = "/fonts/Quicksand.ttf"; // ✅ Make sure this path is correct

const LeftWallInfo = () => {
  const groupRef = useRef();
  const [showTechOverlay, setShowTechOverlay] = useState(false);

  return (
    <group
      ref={groupRef}
      position={[-1.8, 2.2, 3]}
      rotation={[0, 0.38, 0.11]}
      scale={1}
    >
      {/* 3D Text with line breaks using "\n" */}
      <Text
        fontSize={0.17}
        font={fontURL}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.5}
        lineHeight={1.4}
        outlineWidth={0.008}
        outlineColor="black"
        castShadow
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
        onClick={() => setShowTechOverlay(true)}
      >
        You are in my room (my 3D portfolio website),{"\n"}
        designed and constructed (developed) by me{"\n"}
        brick by brick.{"\n\n"}
        Click to see the technologies I used.
      </Text>

      {/* Technologies popup */}
      {showTechOverlay && (
        <Html
          position={[0, -1.5, 0]}
          transform
          occlude
          distanceFactor={1.2}
          style={{
            width: '300px',
            background: 'white',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
            color: '#222',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: 'center',
            userSelect: 'none',
            cursor: 'default',
          }}
        >
          <div>
            <h3 style={{ marginBottom: '0.6rem' }}>Technologies Used</h3>
            <ul style={{ textAlign: 'left', paddingLeft: '1.2rem' }}>
              <li>React</li>
              <li>Three.js</li>
              <li>React Three Fiber</li>
              <li>Framer Motion</li>
              <li>JavaScript / TypeScript</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>CSS / Sass</li>
            </ul>
            <button
              onClick={() => setShowTechOverlay(false)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#3f51b5',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Close
            </button>
            <div style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.1rem', color: '#3f51b5' }}>
              Hire me
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

export default LeftWallInfo;
