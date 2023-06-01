import { useEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Camera = () => {
  const { camera } = useThree();
  const controlsRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(0);

  useEffect(() => {
    const handleDoubleClick = () => {
      if (zoomLevel === 0) {
        controlsRef.current.target.set(0, 0, 0);
        camera.zoom = 2;
        camera.updateProjectionMatrix();
        setZoomLevel(2);
      } else {
        controlsRef.current.target.set(0, 0, 0);
        camera.zoom = 1;
        camera.updateProjectionMatrix();
        setZoomLevel(0);
      }
    };

    window.addEventListener('dblclick', handleDoubleClick);
    return () => window.removeEventListener('dblclick', handleDoubleClick);
  }, [zoomLevel, camera]);

  return <OrbitControls ref={controlsRef} enableZoom={false} enablePan={false} enableRotate={true} />;
};

export default Camera;