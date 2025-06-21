import { useEffect, useState } from "react";
import { Text } from "@react-three/drei";

const DigitalClock = ({
  position = [0, 5, 0],
  rotation = [0, 0, 0],
  color = "black",
}) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <group position={position} rotation={rotation}>
      {/* 3D Frame (centered) */}
      <mesh position={[0, 0, -0.075]}>
        <boxGeometry args={[0.7, 0.25, 0.15]} />
        <meshStandardMaterial
          color="white"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Glass Front aligned with frame */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[0.68, 0.23]} />
        <meshStandardMaterial
          color="#ffffff"
          opacity={0.08}
          transparent
          metalness={0.5}
          roughness={0.1}
        />
      </mesh>

      {/* Clock Text (centered inside) */}
      <Text
        fontSize={0.14}
        color={color}
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0.02]}
        outlineWidth={0.004}
        outlineColor="black"
      >
        {time}
      </Text>
    </group>
  );
};

export default DigitalClock;
