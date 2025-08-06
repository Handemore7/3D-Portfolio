import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { useTranslation } from 'react-i18next';
import { textVariant } from '../utils/motion'

/**
 * Individual experience card component for the timeline
 * @param {Object} experience - Experience data object
 * @param {string} experience.title - Job title
 * @param {string} experience.company_name - Company name
 * @param {string} experience.date - Employment period
 * @param {string} experience.iconBg - Background color for the icon
 * @param {string} experience.icon - Company/role icon
 * @param {Array} experience.points - Array of achievement/responsibility points
 */
const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid #232631'
      }}
      contentArrowStyle={{
        borderRight: '7px solid #232631'
      }}
      date={t(experience.date) || experience.date}
      iconStyle={{
        background: experience.iconBg,
        color: '#fff'
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={`${experience.company_name} logo`}
            className='w-[60%] h-[60%] object-contain'
            loading="lazy"
          />
        </div>
      }
    >
      {/* Job title and company */}
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {t(experience.title) || experience.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {t(experience.company_name) || experience.company_name}
        </p>
      </div>
      <p>
        {t(experience.intro) || experience.intro || ''}
      </p>
      {/* Achievement/responsibility points */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
          >
            {t(point) || point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

/**
 * Experience section component
 * Displays work experience in a vertical timeline format
 */
const Experience = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Section header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('experience.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('experience.title')}</h2>
      </motion.div>

      {/* Timeline container */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#232631">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')