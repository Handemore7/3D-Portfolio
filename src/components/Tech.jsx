import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

/**
 * Technology skills section component
 * Displays technology icons in 3D floating balls
 */
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div 
          key={technology.name} 
          className='w-28 h-28 group'
          title={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          {/* Technology name tooltip */}
          <div className='text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <span className='text-secondary text-sm font-medium'>
              {technology.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')