import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

const Footer = ({ content }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {content.footer.brand}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {content.footer.description}
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 text-gray-300 hover:text-white hover:bg-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={() => window.open('https://facebook.com/mabinaSeafood', '_blank')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 text-gray-300 hover:text-white hover:bg-pink-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={() => window.open('https://instagram.com/mabinaSeafood', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 text-gray-300 hover:text-white hover:bg-green-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={() => window.open('https://wa.me/212123456789', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{content.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {content.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {content.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {content.nav.menu}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('week-featured')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {content.nav.weekFeatured}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {content.nav.gallery}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {content.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{content.footer.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">{content.address.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">{content.address.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>{content.address.street}</p>
                  <p>{content.address.city}, {content.address.country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{content.footer.hours}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <div className="text-gray-300">
                  <p className="font-medium">{content.footer.weekdays}</p>
                  <p className="text-sm">{content.map.weekdays}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <div className="text-gray-300">
                  <p className="font-medium">{content.footer.weekend}</p>
                  <p className="text-sm">{content.map.weekend}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {content.footer.copyright}
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                {content.footer.privacy}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                {content.footer.terms}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer