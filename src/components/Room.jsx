// src/components/Room.jsx
import { Suspense, useEffect, useState } from "react";
import ComputerModel from "./canvas/ComputerModel"; // ✅ NEW
import CanvasLoader from "./Loader";

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
      {/* Floor - base of the room */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 25]} />
        <meshStandardMaterial color="#dfdfdf" />
      </mesh>

      {/* Left Wall */}
      <mesh rotation={[0, Math.PI / 4, 0]} position={[-2, 3, -3]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#000000"/>
      </mesh>

      {/* Right Wall */}
      <mesh rotation={[0, -Math.PI / 4, 0]} position={[4, 2.5, -2]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#eeeeee" />
      </mesh>

      {/* Computer Model Inside Room */}
      <Suspense fallback={<CanvasLoader />}>
        <ComputerModel isMobile={isMobile} />
      </Suspense>
    </>
  );
};

export default Room;
