// src/components/Globe.js
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

const Globe = () => {
  const globeRef = useRef(null); // Ensure ref is initialized to null

  useEffect(() => {
    let frameId;
    const animate = () => {
      if (globeRef.current) { // Check if the ref is assigned
        globeRef.current.rotation.y += 0.001;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <Canvas>
        <ambientLight /> 
        <pointLight position={[10, 10, 10]} />
      <mesh ref={globeRef}>
        <sphereGeometry args={[3.9, 32, 32]} />
        <meshBasicMaterial color="" wireframe/>
      </mesh>
    </Canvas>
  );
};

export default Globe;
