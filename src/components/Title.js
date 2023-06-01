import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useMemo, useEffect, useRef } from 'react'
import { Group, DirectionalLight, AmbientLight } from 'three'
import * as THREE from 'three'

const Title = ({setIsLoading}) => {
  const groupRef = useRef()

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('/assets/profileroom.glb', (gltf) => {
      gltf.scene.scale.set(14, 14, 14) // Set the desired scale
      gltf.scene.rotation.x = 0 // Set the desired rotation
      gltf.scene.position.set(80, -150, 0) // Set the desired position

      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          //child.material.side = THREE.DoubleSide // Optional: Set the material side if needed
          // child.material.emissive = new THREE.Color(0x000000) // Set the emissive color to black for a darker appearance
          child.material.precision = 'highp'; 
        }
      })

      groupRef.current.add(gltf.scene)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    if (groupRef.current) {
    

     

      const ambientLight = new THREE.AmbientLight(0x999999, 0.4) 
      groupRef.current.add(ambientLight)
    }
  }, [groupRef.current])

  return <group ref={groupRef} />
}

export default Title
