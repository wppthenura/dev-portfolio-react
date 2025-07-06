import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Palm = ({ isMobile }) => {
  const palm = useGLTF("./3D_palm/scene.gltf");

  const groupRef = useRef();
  const modelRef = useRef(); 

  const [hovered, setHovered] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const prevMouseX = useRef(null);

  const scale = useRef(isMobile ? 0.7 : 4);
  const targetPosition = useRef(new THREE.Vector3(0.5, 0, -3.7));
  const currentPosition = useRef(new THREE.Vector3(0.5, 0, -3.7));
  const rotationY = useRef(0);

  const defaultPos = new THREE.Vector3(0.5, 0, -3.7);
  const zoomedPos = new THREE.Vector3(0, 1, 3);

  useEffect(() => {
    const onWheel = (e) => {
      if (!hovered) return;

      if (e.deltaY > 0) {
        setZoomed(true);
        targetPosition.current.copy(zoomedPos);
      } else if (e.deltaY < 0) {
        setZoomed(false);
        targetPosition.current.copy(defaultPos);
      }
    };

    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, [hovered]);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (zoomed) {
        setIsDragging(true);
        prevMouseX.current = e.clientX;
      }
    };

    const onPointerMove = (e) => {
      if (isDragging && zoomed) {
        const deltaX = e.clientX - prevMouseX.current;
        rotationY.current += deltaX * 0.005;
        prevMouseX.current = e.clientX;
      }
    };

    const onPointerUp = () => setIsDragging(false);

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [zoomed]);

  useFrame(() => {
    if (!groupRef.current || !modelRef.current) return;

    const desiredScale = zoomed ? 10 : isMobile ? 0.7 : 4;
    scale.current += (desiredScale - scale.current) * 0.08;

    currentPosition.current.lerp(targetPosition.current, 0.08);
    groupRef.current.position.copy(currentPosition.current);
    groupRef.current.scale.setScalar(scale.current);


    if (zoomed) {
      modelRef.current.rotation.y = rotationY.current;
    } else {
      rotationY.current = 0;
      modelRef.current.rotation.y = 0;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <group
  ref={modelRef}
  onPointerOver={() => {
    setHovered(true);
    document.body.style.cursor = 'pointer';
  }}
  onPointerOut={() => {
    setHovered(false);
    document.body.style.cursor = 'default';
  }}
>
  <primitive object={palm.scene} />
</group>
    </group>
  );
};

export default Palm;
