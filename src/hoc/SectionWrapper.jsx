import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { staggerContainer } from '../utils/motion'

/**
 * Higher-Order Component that wraps sections with animation and styling
 * Provides consistent spacing, animations, and navigation anchors for sections
 * 
 * @param {React.Component} Component - The component to wrap
 * @param {string} idName - ID for navigation anchor (used for scroll-to links)
 * @returns {React.Component} - Wrapped component with animation and styling
 */
const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ 
          once: true, // Animate only once when entering viewport
          amount: 0.25 // Trigger when 25% of element is visible
        }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Navigation anchor point for smooth scrolling */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        
        {/* Render the wrapped component */}
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper