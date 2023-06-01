import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const Projects = () => {
  const texture = useMemo(() => new TextureLoader().load('./projects.jpg'), []) // Load texture once and memoize

  return (
    <Plane args={[5, 5]} scale={7} rotation-y={Math.PI / 2} position={[-47, 0, -3]}>
      <meshBasicMaterial attach='material' map={texture} />
    </Plane>
  )
}

export default Projects
