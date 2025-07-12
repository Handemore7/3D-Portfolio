import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'

/**
 * Hero section component - Main landing section with 3D computer model
 * Features animated elements and responsive design
 */
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto' role="banner">
      {/* Hero content container */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        {/* Decorative line and dot */}
        <div className='flex flex-col justify-center items-center mt-5' aria-hidden="true">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        {/* Main hero text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Carlos</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, 
            <br className='sm:block hidden'/>
            UI/UX design, and interactive experiences
          </p>
        </div>
      </div>
      
      {/* 3D Computer Canvas - Main visual element */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a 
          href="#about"
          aria-label="Scroll to about section"
          className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full"
        >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-white transition-colors duration-300'>
            {/* Animated scroll indicator dot */}
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              aria-hidden="true"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero