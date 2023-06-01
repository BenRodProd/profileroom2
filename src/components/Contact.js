import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const Contact = () => {
  const texture = useMemo(() => new TextureLoader().load('./contact.jpg'), []) // Load texture once and memoize
  const texture2 = useMemo(() => new TextureLoader().load('./greenline.png'), [])
  return (
    <>
    <Plane args={[5, 5]} scale={7} rotation-x={-Math.PI/2} position={[0, -37.5, -3]}>
      <meshBasicMaterial attach='material' map={texture} />
    </Plane>
    <Plane args={[5, 5]} scale={14.1} rotation-x={-Math.PI/2} position={[0, -35, -1.8]}>
      <meshBasicMaterial attach='material' map={texture2} transparent/>
    </Plane>
    </>
  )
}

export default Contact
