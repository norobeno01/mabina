import React, { useState } from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle.jsx'
import FloatingActionButton from '@/components/ui/floating-action-button.jsx'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'
import WeekFeatured from './components/Offers'
import Gallery from './components/Gallery'
import Map from './components/Map'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { content } from './data/content'

function App() {
  const [language, setLanguage] = useState('en')
  const currentContent = content[language]

  const toggleLanguage = (targetLanguage) => {
    if (targetLanguage) {
      // Direct language selection
      setLanguage(targetLanguage)
    } else {
      // Cycle through languages (for backward compatibility)
      const languages = ['en', 'ar', 'fr']
      const currentIndex = languages.indexOf(language)
      const nextIndex = (currentIndex + 1) % languages.length
      setLanguage(languages[nextIndex])
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Header Section */}
      <Header 
        content={currentContent} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      
      {/* About Section */}
      <About content={currentContent} />
      
      {/* Menu Section */}
      <Menu 
        content={currentContent} 
        language={language} 
      />
      
      {/* Week Featured Section */}
      <WeekFeatured 
        content={currentContent} 
        language={language} 
      />
      
      {/* Gallery Section */}
      <Gallery content={currentContent} />
      
      {/* Map Section */}
      <Map content={currentContent} />
      
      {/* Contact Section */}
      <Contact content={currentContent} />
      
      {/* Footer */}
      <Footer content={currentContent} />
      
      {/* Floating Action Button */}
      <FloatingActionButton content={currentContent} />
    </div>
  )
}

export default App