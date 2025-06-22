import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { waveVariants, colorClasses, animationVariants, floatingAnimation } from './wave-presets'

const WaveDivider = ({ 
  variant = 'default', 
  color = 'blue', 
  height = 'h-16', 
  className = '',
  animated = true 
}) => {

  return (
    <div className={`relative w-full ${height} overflow-hidden ${className}`}>
      <motion.svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        initial={animated ? "initial" : "animate"}
        whileInView={animated ? "animate" : undefined}
        viewport={{ once: true, margin: "-50px" }}
        animate={animated ? floatingAnimation : undefined}
      >
        <motion.path
          d={waveVariants[variant].d}
          className={`${colorClasses[color]} transition-colors duration-300`}
          variants={animated ? animationVariants : undefined}
        />
      </motion.svg>
      
      {/* Gradient overlay for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-gray-900/10 pointer-events-none" />
    </div>
  )
}

export default WaveDivider