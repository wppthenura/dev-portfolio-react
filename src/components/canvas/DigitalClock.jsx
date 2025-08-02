import { useEffect, useState } from "react";
import { Text, RoundedBox } from "@react-three/drei";

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
      <RoundedBox
        args={[0.4, 0.13, 0.05]}
        radius={0.03}
        smoothness={4}
        position={[0.66, 0.217, -0.025]}
        rotation={[0, 0, 0.009]}
      >
        <meshStandardMaterial color="white" metalness={0.3} roughness={0.4} />
      </RoundedBox>

      {/* Glass Front */}
      <mesh position={[0.66, 0.217, -0.025]}>
        <planeGeometry args={[0.68, 0.23]} />
        <meshStandardMaterial
          color="#ffffff"
          opacity={0.08}
          transparent
          metalness={0.5}
          roughness={0.1}
        />
      </mesh>

      {/* Time Text */}
      <Text
        fontSize={0.08}
        color={color}
        anchorX="center"
        anchorY="middle"
        position={[0.66, 0.22, 0.02]}
        outlineWidth={0.001}
        outlineColor="black"
      >
        {time}
      </Text>
    </group>
  );
};

export default DigitalClock;
