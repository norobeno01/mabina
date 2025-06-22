import React, { useState, useEffect } from 'react'
import { Sun, Moon, Globe, ChevronDown, Home, Info, UtensilsCrossed, Star, Phone } from 'lucide-react'
import { Button } from './ui/button'

import { ThemeToggle } from './ui/theme-toggle'
import AnimatedSection from './ui/animated-section'
import logo from '../assets/logo.png'
import heroImage1 from '../assets/hero_carousel_1.jpg'
import heroImage2 from '../assets/hero_carousel_2.jpg'
import heroImage3 from '../assets/hero_carousel_3.jpg'

const Header = ({ content, language, toggleLanguage }) => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroCarouselImages = [heroImage1, heroImage2, heroImage3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroCarouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [heroCarouselImages.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }



  return (
    <>
      {/* Minimal Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img 
                src={logo} 
                alt="Mabina Seafood Logo" 
                className="h-10 w-auto mr-3"
              />
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Mabina Seafood
              </h1>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {content.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {content.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {content.nav.menu}
              </button>
              <button
                onClick={() => scrollToSection('week-featured')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {content.nav.weekFeatured}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {content.nav.gallery}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {content.nav.contact}
              </button>
            </nav>

            {/* Language Switcher & Theme Toggle */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-1"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'EN' : language === 'fr' ? 'FR' : 'AR'}
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <button
                      onClick={() => {
                        toggleLanguage('en')
                        setIsLanguageDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        toggleLanguage('fr')
                        setIsLanguageDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Français
                    </button>
                    <button
                      onClick={() => {
                        toggleLanguage('ar')
                        setIsLanguageDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md"
                    >
                      العربية
                    </button>
                  </div>
                )}
              </div>
              
              <ThemeToggle />
            </div>
          </div>
        </div>

      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroCarouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            {content.hero.subtitle}
          </p>
          <div className="space-x-4 animate-fade-in-delay-2">
            <Button
              size="lg"
              onClick={() => scrollToSection('menu')}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 text-lg"
            >
              {content.hero.cta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('map')}
              className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900 px-8 py-3 text-lg"
            >
              {content.hero.cta2}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom Navigation Bar - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="flex justify-around items-center py-3 px-2">
          <button
            onClick={() => scrollToSection('home')}
            className="flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Home className="h-6 w-6 mb-1" />
            <span className="text-sm font-medium">{content.nav.home}</span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Info className="h-6 w-6 mb-1" />
            <span className="text-sm font-medium">{content.nav.about}</span>
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <UtensilsCrossed className="h-6 w-6 mb-1" />
            <span className="text-sm font-medium">{content.nav.menu}</span>
          </button>
          <button
            onClick={() => scrollToSection('week-featured')}
            className="flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Star className="h-6 w-6 mb-1" />
            <span className="text-sm font-medium">{content.nav.weekFeatured}</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Phone className="h-6 w-6 mb-1" />
            <span className="text-sm font-medium">{content.nav.contact}</span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header