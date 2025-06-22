import React from 'react'

const WaveDivider = ({ 
  variant = 'default', 
  color = 'blue', 
  height = 'h-16', 
  className = '',
  animated = true 
}) => {
  const waveVariants = {
    default: {
      d: "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,96L1392,96C1344,96,1248,96,1152,96C1056,96,960,96,864,96C768,96,672,96,576,96C480,96,384,96,288,96C192,96,96,96,48,96L0,96Z"
    },
    gentle: {
      d: "M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,128L1392,128C1344,128,1248,128,1152,128C1056,128,960,128,864,128C768,128,672,128,576,128C480,128,384,128,288,128C192,128,96,128,48,128L0,128Z"
    },
    dramatic: {
      d: "M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,58.7C672,75,768,85,864,85.3C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,128L1392,128C1344,128,1248,128,1152,128C1056,128,960,128,864,128C768,128,672,128,576,128C480,128,384,128,288,128C192,128,96,128,48,128L0,128Z"
    }
  }

  const colorClasses = {
    blue: 'fill-blue-600 dark:fill-blue-500',
    gray: 'fill-gray-200 dark:fill-gray-700',
    white: 'fill-white dark:fill-gray-900',
    transparent: 'fill-gray-50 dark:fill-gray-800'
  }

  const animationVariants = {
    initial: { 
      pathLength: 0,
      opacity: 0,
      scale: 0.8
    },
    animate: { 
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 1.5, ease: "easeOut" },
        scale: { duration: 1.5, ease: "easeOut" }
      }
    }
  }

  const floatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

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

// Preset wave configurations for different section transitions
export const WavePresets = {
  // Between hero and about
  heroToAbout: {
    variant: 'gentle',
    color: 'white',
    height: 'h-20',
    animated: true
  },
  
  // Between about and menu
  aboutToMenu: {
    variant: 'default',
    color: 'gray',
    height: 'h-16',
    animated: true
  },
  
  // Between menu and offers
  menuToOffers: {
    variant: 'dramatic',
    color: 'blue',
    height: 'h-24',
    animated: true
  },
  
  // Between offers and gallery
  offersToGallery: {
    variant: 'gentle',
    color: 'transparent',
    height: 'h-16',
    animated: true
  },
  
  // Between gallery and contact
  galleryToContact: {
    variant: 'default',
    color: 'blue',
    height: 'h-20',
    animated: true
  }
}

export default WaveDivider