import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

/**
 * 3D Earth model component
 * Loads and displays the Earth GLTF model
 */
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive 
      object={earth.scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0}
    />
  )
}

/**
 * Canvas wrapper for the 3D Earth component
 * Features auto-rotation and optimized camera settings
 */
const EarthCanvas = React.memo(() => {
  return (
    <Canvas 
      shadows 
      frameloop='demand' 
      gl={{ preserveDrawingBuffer: true }} 
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5}
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Earth />
        
        {/* Ambient lighting for the Earth */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
        />
      </Suspense>
      <Preload all />
    </Canvas>
  )
});

export default EarthCanvas