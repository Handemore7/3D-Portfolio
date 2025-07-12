import React from 'react'
import { Html, useProgress } from '@react-three/drei'

/**
 * Loading component for 3D models and canvases
 * Displays a spinning loader with progress percentage
 */
const Loader = () => {
  const { progress } = useProgress()
  
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Spinning loader animation */}
      <span className='canvas-load' aria-hidden="true"></span>
      
      {/* Progress percentage */}
      <p 
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
          letterSpacing: '0.1em'
        }}
        aria-live="polite"
        aria-label={`Loading progress: ${progress.toFixed(2)} percent`}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader