import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Calendar from './CalendarUI';

const Calendar3D = () => {
  return (
    <group position={[-50, 13, -40]} rotation={[-0.005, -Math.PI / 0.55, 0.005]}>
      <mesh>
        <planeGeometry args={[2.2, 2.6]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <Html transform occlude>
        <div style={{ width: '512px', height: '600px' }}>
          <Calendar />
        </div>
      </Html>
    </group>
  );
};

export default Calendar3D;