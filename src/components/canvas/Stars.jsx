import React, { useState, useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

/**
 * Animated stars component with rotation
 * Creates a sphere of randomly positioned stars that slowly rotate
 */
const Stars = (props) => {
  const ref = useRef()

  // Memoize the star positions for better performance
  const sphere = useMemo(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
    []
  )

  // Animate the stars rotation on each frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={sphere} 
        stride={3} 
        frustumCulled 
        {...props}
      >
        <PointMaterial 
          transparent 
          color='#f272c8' 
          size={0.002} 
          sizeAttenuation={true} 
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

/**
 * Canvas wrapper for the Stars component
 * Provides a starfield background effect
 */
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0) // Transparent background
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas