import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Camera = () => {
  const { camera } = useThree();
  const controlsRef = useRef(null);

  useEffect(() => {
    camera.position.set(110, 250, -100); // Set the initial position of the camera
    controlsRef.current.target.set(0, 0, 0); // Set the target for the camera controls

    // Restrict the vertical rotation of the camera
    controlsRef.current.minPolarAngle = Math.PI * 0.45; // Minimum angle (45 degrees)
    controlsRef.current.maxPolarAngle = Math.PI * 0.65; // Maximum angle (135 degrees)

    // Set the minimum and maximum distance for zooming
    controlsRef.current.minDistance = 100; // Minimum distance (zoom in)
    controlsRef.current.maxDistance = 300; // Maximum distance (zoom back to origin)

    // Make sure to call updateProjectionMatrix() if any properties of the camera are changed
    camera.updateProjectionMatrix();
  }, [camera]);

  return <OrbitControls ref={controlsRef} enableZoom={true} enablePan={false} enableRotate={true} />;
};

export default Camera;
