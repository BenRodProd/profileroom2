import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const Certificates = () => {
  const texture = useMemo(() => new TextureLoader().load('./zertifikate.jpg'), []) // Load texture once and memoize
  const texture2 = useMemo(() => new TextureLoader().load('./greenline.png'), [])
  return (
    <>
    <Plane args={[5, 5]} scale={7} rotation-x={Math.PI/2} position={[0, 57.5, -3]}>
      <meshBasicMaterial attach='material' map={texture} />
    </Plane>
       <Plane args={[5, 5]} scale={23} rotation-x={Math.PI/2} position={[0, 57.5, -3]}>
       <meshBasicMaterial attach='material' map={texture2} transparent />
     </Plane>
     </>
  )
}

export default Certificates
