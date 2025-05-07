import React, { useRef, useEffect, useState } from 'react'
import { Canvas,useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'


import * as THREE from 'three'






export function CarModel_three(props) {
  const { nodes, materials } = useGLTF('/assets/3D_models/Car_3/car_reduced_started_blue_paint.gltf')
  const groupRef = useRef()

 

  // Fix material encoding and shadow settings
  useEffect(() => {
    groupRef.current?.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = false
        child.material.side = THREE.DoubleSide
        
        // Fix texture encoding
        if (child.material.map) {
          child.material.map.encoding = THREE.sRGBEncoding
          child.material.needsUpdate = true
        }
      }
    })
  }, [])

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01} position={[-5, -3.6, 0]}>
        <mesh geometry={nodes.frc12_4900_000_cfd_1.geometry} material={materials.Carbon} />
        <mesh geometry={nodes.frc12_4900_000_cfd_2.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.frc12_4900_000_cfd_3.geometry} material={materials.Blue_paint} />
        <mesh geometry={nodes.frc12_4900_000_cfd_4.geometry} material={materials.Full_black} />
        <mesh geometry={nodes.frc12_4900_000_cfd_5.geometry} material={materials.Bright_metal} />
        <mesh geometry={nodes.frc12_4900_000_cfd_6.geometry} material={materials.White_paint} />
        <mesh geometry={nodes.frc12_4900_000_cfd_7.geometry} material={materials.Black_paint} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3D_models/Car_3/car_reduced_started_blue_paint.gltf')



export function Podium(props) {
  const { nodes, materials } = useGLTF('/assets/3D_models/podium/Podium.gltf')
  return (
    <group {...props} dispose={null} scale={2} position={[0,-4,0]}>
      <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Podium_asphalt} receiveShadow />
      <mesh geometry={nodes.Cylinder_2.geometry} material={materials.podium_side} receiveShadow />
    </group>
  )
}

useGLTF.preload('/assets/3D_models/podium/Podium.gltf')



export function Floor(props) {
  const { nodes, materials } = useGLTF('/assets/3D_models/floor_asphalt/Asphalt_floor.gltf')
  return (
    <group {...props} dispose={null} rotation={[ 0, Math.PI / 2, 0]} position={[0,-5,0]}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Asphalt}  scale={[50, 1, 70]} receiveShadow/>
    </group>
  )
}

useGLTF.preload('/assets/3D_models/floor_asphalt/Asphalt_floor.gltf')




function RotatingGroup() {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      <CarModel_three />
      <Podium />
    </group>
  )
}



function KeyboardOrbitCamera() {
  const { camera } = useThree()
  const angleRef = useRef(0)
  const [pressedKeys, setPressedKeys] = useState({ a: false, d: false })

  // Handle keyboard input
  useEffect(() => {
    const downHandler = (e) => {
      if (e.key === 'a' || e.key === 'A') setPressedKeys((k) => ({ ...k, a: true }))
      if (e.key === 'd' || e.key === 'D') setPressedKeys((k) => ({ ...k, d: true }))
    }

    const upHandler = (e) => {
      if (e.key === 'a' || e.key === 'A') setPressedKeys((k) => ({ ...k, a: false }))
      if (e.key === 'd' || e.key === 'D') setPressedKeys((k) => ({ ...k, d: false }))
    }

    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  useFrame(() => {
    const speed = 0.01
    if (pressedKeys.a) angleRef.current += speed
    if (pressedKeys.d) angleRef.current -= speed

    const radius = 38
    const x = Math.sin(angleRef.current) * radius
    const z = Math.cos(angleRef.current) * radius
    camera.position.set(x, 7, z)
    camera.lookAt(0, 0, 0)
  })

  return null
}







  



const CarScene = () => (
  <Canvas
  shadows
  camera={{ position: [0, 7, 38], fov: 50 }}
  style={{ background: '#000000' }}
  gl={{ preserveDrawingBuffer: true }}
  onCreated={({ gl }) => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputEncoding = THREE.sRGBEncoding;
  }}
  
>

    {/* Lighting */}
    <ambientLight intensity={0.1} color="#121212" />
    <directionalLight
      castShadow
      position={[-5, 20, -30]}
      intensity={0.1}
      shadow-mapSize-width={4096}
      shadow-mapSize-height={4096}
      shadow-camera-left={-50}
      shadow-camera-right={50}
      shadow-camera-top={50}
      shadow-camera-bottom={-50}
      shadow-camera-near={1}
      shadow-camera-far={100}
    />
    <pointLight position={[-10, 0, 20]} intensity={3.5} distance={15} color="#00aba2" />
    <pointLight position={[10, 0, 20]} intensity={3.5} distance={15} color="#00aba2" />
    <pointLight position={[5, 10, 5]} intensity={3.5} distance={15} color="#00aba2" />
    
    <fog attach="fog" args={['#00524e', 30, 80]} />

    {/* Models */}
    <RotatingGroup />
    <Floor/>

    {/* Static black wall behind the car */}
    <mesh position={[0, 2, -37]} rotation={[0, 0, 0]} receiveShadow>
      <boxGeometry args={[150, 50, 0.5]} />
      <meshStandardMaterial  color="black" roughness={1}/>
    </mesh>
    
    {/* Others */}
    <KeyboardOrbitCamera />
    
  </Canvas>
)

export default CarScene
