import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

/**
 * Individual service card component with 3D tilt effect
 * @param {number} index - Card index for animation delay
 * @param {string} title - Service title
 * @param {string} icon - Service icon path
 * @param {string} reference - External link reference
 */
const ServiceCard = ({ index, title, icon, reference }) => {
  /**
   * Handle card click to open external link
   */
  const handleCardClick = () => {
    if (reference) {
      window.open(reference, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Tilt 
      className='xs:w-[250px] w-full'
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
    >
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card group'
      >
        <div 
          onClick={handleCardClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleCardClick()
            }
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer transition-transform duration-300 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
          role="button"
          tabIndex={reference ? 0 : -1}
          aria-label={`Learn more about ${title}`}
        >
          <img 
            src={icon} 
            alt={`${title} icon`} 
            className='w-16 h-16 object-contain'
            loading="lazy"
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

/**
 * About section component
 * Displays personal introduction and service offerings
 */
const About = () => {
  return (
    <>
      {/* Section header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Personal description */}
      <motion.p 
        variants={fadeIn('', '', 0.1, 1)} 
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an interactive multimedia designer with a primary focus on web development, 
        though I excel in UI/UX projects as well. Currently, I'm passionate about 
        AI and data science, constantly learning new technologies and methodologies. 
        I'm multilingual, speaking Spanish and English fluently, and I'm currently 
        learning Japanese to expand my global perspective.
      </motion.p>

      {/* Services grid */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')