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
        minHeight: '180px',
        background: 'rgba(20,20,30,0.85)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        padding: '32px',
      }}
    >
      {/* SVG animated loader */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: 24}}>
        <circle cx="24" cy="24" r="20" stroke="#915eff" strokeWidth="4" opacity="0.2" />
        <circle cx="24" cy="24" r="20" stroke="#915eff" strokeWidth="4" strokeDasharray="100" strokeDashoffset={100 - progress} style={{transition: 'stroke-dashoffset 0.3s'}} />
        <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="1s" repeatCount="indefinite" />
      </svg>
      <p 
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 4,
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