import { Suspense, useEffect, useState } from "react";
import ComputerModel from "./canvas/ComputerModel";
import CanvasLoader from "./Loader";
import { Edges } from "@react-three/drei";
import Chair from "./canvas/Chair";
import Palm from "./canvas/PalmPlant";

const Room = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 25]} />
        <meshStandardMaterial color="#dfdfdf" />
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

      {/* Corner Shadow (fake beam for 90° corner) */}
      <mesh position={[0.5, 0, -4.6]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.1, 20, 0.1]} />
        <meshStandardMaterial color="grey" opacity={0.17} transparent />
      </mesh>

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
