import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Calendar from './CalendarUI';

const Calendar3D = () => {
  return (
    <group position={[-51.5, 16, -40]} rotation={[0, -Math.PI / 0.55, 0.005]} scale={[1, 1, 1]}>
      <mesh>
        <planeGeometry args={[2.2, 2.6]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <Html transform>
       <div style={{ width: '510px', height: '600px' }}>
        <Calendar />
       </div>
      </Html>

    </group>
  );
};

export default Calendar3D;