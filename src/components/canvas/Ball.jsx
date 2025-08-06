import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

/**
 * 3D Ball component with floating animation and texture decal
 * @param {Object} props - Component props
 * @param {string} props.imgUrl - URL/path to the texture image
 */
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float 
      speed={1.75} 
      rotationIntensity={1} 
      floatIntensity={2}
    >
      {/* Ambient lighting for soft illumination */}
      <ambientLight intensity={0.25} />
      
      {/* Directional light for depth */}
      <directionalLight position={[0, 0, 0.05]} />
      
      {/* Main sphere mesh with technology icon */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color='#fff8eb' 
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading 
        />
        
        {/* Technology icon decal on the sphere */}
        <Decal 
          map={decal} 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          flatShading 
        />
      </mesh>
    </Float>
  )
}

/**
 * Canvas wrapper for the 3D Ball component
 * @param {Object} props - Component props
 * @param {string} props.icon - Icon/texture path for the ball
 */
const BallCanvas = React.memo(({ icon }) => {
  return (
    <Canvas 
      frameloop='demand' 
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
});

export default BallCanvas