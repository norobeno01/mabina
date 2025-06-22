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
    color: 'blue',
    height: 'h-16',
    animated: true
  },
  
  // Between menu and gallery
  menuToGallery: {
    variant: 'dramatic',
    color: 'gray',
    height: 'h-24',
    animated: true
  },
  
  // Between gallery and contact
  galleryToContact: {
    variant: 'gentle',
    color: 'transparent',
    height: 'h-20',
    animated: true
  },
  
  // Footer wave
  footer: {
    variant: 'dramatic',
    color: 'white',
    height: 'h-32',
    animated: false
  }
}

// Wave variant configurations
export const waveVariants = {
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

// Color class configurations
export const colorClasses = {
  blue: 'fill-blue-600 dark:fill-blue-500',
  gray: 'fill-gray-200 dark:fill-gray-700',
  white: 'fill-white dark:fill-gray-900',
  transparent: 'fill-gray-50 dark:fill-gray-800'
}

// Animation configurations
export const animationVariants = {
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

export const floatingAnimation = {
  y: [0, -5, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
}