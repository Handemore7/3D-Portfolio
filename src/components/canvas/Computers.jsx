import React, { Suspense, useEffect, useState, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

/**
 * 3D Computer model component
 * @param {boolean} isMobile - Whether the device is mobile for responsive scaling
 */
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./newModel/scene.gltf')

  return (
    <mesh>
      {/* Ambient lighting setup */}
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        shadow-mapSize={1024}
      />
      
      {/* 3D Computer model with responsive positioning */}
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.7 : 0.75} 
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} 
        rotation={[-0.01, -0.02, -0.1]}
      />
    </mesh>
  )
}

/**
 * Main Canvas component for the 3D computer
 * Handles responsive behavior and loading states
 */
const ComputersCanvas = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false)

  /**
   * Handle media query changes for responsive design
   */
  const handleMediaQueryChange = useCallback((event) => {
    setIsMobile(event.matches)
  }, [])

  useEffect(() => {
    // Check if device is mobile (max-width: 500px)
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)
    
    // Listen for changes in screen size
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [handleMediaQueryChange])

  return (
    <Canvas 
      frameloop='demand' 
      shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}
      aria-label="3D Computer Model"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
          enablePan={false} // Disable panning for better UX
          enableDamping={true} // Smooth camera movements
          dampingFactor={0.05}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
});

export default ComputersCanvas