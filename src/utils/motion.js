/**
 * Animation Variants for Framer Motion
 * 
 * This file contains reusable animation variants used throughout the portfolio
 * for consistent and smooth animations across all components.
 */

/**
 * Text reveal animation with upward motion
 * @param {number} delay - Animation delay in seconds
 * @returns {Object} Framer Motion variants object
 */
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

/**
 * Fade in animation with directional movement
 * @param {string} direction - Direction of movement (left, right, up, down)
 * @param {string} type - Animation type (spring, tween, etc.)
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @returns {Object} Framer Motion variants object
 */
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

/**
 * Zoom in animation with scale effect
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @returns {Object} Framer Motion variants object
 */
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

/**
 * Slide in animation from specified direction
 * @param {string} direction - Direction of slide (left, right, up, down)
 * @param {string} type - Animation type (spring, tween, etc.)
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @returns {Object} Framer Motion variants object
 */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

/**
 * Stagger animation for container elements
 * @param {number} staggerChildren - Delay between child animations
 * @param {number} delayChildren - Initial delay before children start animating
 * @returns {Object} Framer Motion variants object
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}