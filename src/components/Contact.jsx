import React, { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

/**
 * Contact form component with email integration
 * Features form validation and loading states
 */
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(prevForm => ({ ...prevForm, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
    }
  }, [errors])

  /**
   * Validate form inputs
   * @returns {boolean} - Whether form is valid
   */
  const validateForm = () => {
    const newErrors = {}
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Google Analytics event tracking (if available)
      if (window.dataLayer) {
        window.dataLayer.push({
          'event': 'contact_form_submit'
        })
      }

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_smj5mqj',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_n6rxz3f',
        {
          from_name: form.name,
          to_name: 'Carlos',
          from_email: form.email,
          to_email: 'handemore7@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'GwKQ4J_Z60ANesU9O'
      )

      // Success handling
      alert('Thank you! I will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      alert('Something went wrong. Please try again or contact me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* Contact Form */}
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)} 
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className='mt-12 flex flex-col gap-8'
          noValidate
        >
          {/* Name Input */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name <span className="text-red-500">*</span>
            </span>
            <input 
              type="text" 
              name='name' 
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your name?" 
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.name ? 'ring-2 ring-red-500' : ''
              }`}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && (
              <span id="name-error" className="text-red-500 text-sm mt-1">
                {errors.name}
              </span>
            )}
          </label>

          {/* Email Input */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email <span className="text-red-500">*</span>
            </span>
            <input 
              type="email" 
              name='email' 
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email?" 
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.email ? 'ring-2 ring-red-500' : ''
              }`}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && (
              <span id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </span>
            )}
          </label>

          {/* Message Input */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message <span className="text-red-500">*</span>
            </span>
            <textarea 
              rows={7}
              name='message' 
              value={form.message} 
              onChange={handleChange} 
              placeholder="What would you like to say?" 
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none ${
                errors.message ? 'ring-2 ring-red-500' : ''
              }`}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && (
              <span id="message-error" className="text-red-500 text-sm mt-1">
                {errors.message}
              </span>
            )}
          </label>

          {/* Submit Button */}
          <button 
            type='submit' 
            disabled={loading}
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      {/* 3D Earth Canvas */}
      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)} 
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')