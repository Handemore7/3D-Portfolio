import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github, git } from '../assets' 
import { SectionWrapper } from '../hoc'
import { useTranslation } from 'react-i18next';
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

/**
 * Individual project card component with 3D tilt effect
 * @param {number} index - Card index for animation delay
 * @param {string} name - Project name
 * @param {string} description - Project description
 * @param {Array} tags - Array of technology tags
 * @param {string} image - Project image path
 * @param {string} source_code_link - GitHub repository link
 * @param {string} project_link - Live project link
 */
const ProjectCard = ({ 
  index, 
  name, 
  description, 
  tags, 
  image, 
  source_code_link, 
  project_link 
}) => {
  /**
   * Handle project link clicks with error handling
   * @param {string} url - URL to open
   * @param {string} type - Type of link (project or source)
   */
  const handleLinkClick = (url, type) => {
    if (url) {
      try {
        window.open(url, '_blank', 'noopener,noreferrer')
      } catch (error) {
        console.error(`Failed to open ${type} link:`, error)
      }
    }
  }

  const { t } = useTranslation();
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }} 
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card hover:shadow-2xl transition-shadow duration-300'
      >
        {/* Project image and action buttons */}
        <div className='relative w-full h-[230px] group'>
          <img 
            src={image} 
            alt={`${t(name) || name} project screenshot`} 
            className='w-full h-full object-cover rounded-2xl'
            loading="lazy"
          />
          
          {/* Action buttons overlay */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {/* Live project link */}
            {project_link && (
              <button
                onClick={() => handleLinkClick(project_link, 'project')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
                aria-label={`Visit ${t(name) || name} live project`}
                title={t('works.viewLiveProject') || "View Live Project"}
              >
                <img 
                  src={git} 
                  alt={t('works.liveProjectAlt') || "Live project"} 
                  className='w-1/2 h-1/2 object-contain'
                />
              </button>
            )}
            
            {/* Source code link */}
            {source_code_link && (
              <button
                onClick={() => handleLinkClick(source_code_link, 'source code')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
                aria-label={`View ${t(name) || name} source code on GitHub`}
                title={t('works.viewSourceCode') || "View Source Code"}
              >
                <img 
                  src={github} 
                  alt={t('works.githubAlt') || "GitHub repository"} 
                  className='w-1/2 h-1/2 object-contain'
                />
              </button>
            )}
          </div>
        </div>

        {/* Project details */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{t(name) || name}</h3>
          <p className='mt-2 text-secondary text-[14px] leading-relaxed'>
            {t(description) || description}
          </p>
        </div>

        {/* Technology tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[14px] ${tag.color} bg-opacity-20 bg-gray-800 px-2 py-1 rounded-md`}
            >
              #{t(tag.name) || tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

/**
 * Works/Projects section component
 * Displays portfolio projects in a responsive grid
 */
const Works = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Section header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t('works.subtitle')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('works.title')}</h2>
      </motion.div>

      {/* Section description */}
      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn('', '', 0.1, 1)} 
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t('works.description')}
        </motion.p>
      </div>

      {/* Projects grid */}
      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")