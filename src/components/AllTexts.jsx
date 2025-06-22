// src/components/AllTexts.jsx
import { Text } from "@react-three/drei";

const AllTexts = () => {
  return (
    <>
      <Text
        position={[-6, 6.87, 1]}
        rotation={[0, Math.PI / 8, 0]}
        fontSize={0.3}
        color="black"
        anchorX="left"
        anchorY="middle"
      >
       Pulindu Thenura    
      </Text>

      {/* Future: Add more text elements for other positions in the room */}
    </>
  );
};

export default AllTexts;
