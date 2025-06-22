import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'
import AnimatedSection from './ui/animated-section'
import WaveDivider from './ui/wave-divider'
import { Card } from './ui/card'
import { Button } from './ui/button'

const Map = ({ content }) => {
  return (
    <>
      <WaveDivider />
      
      {/* Map Section */}
      <section id="map" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {content.map.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {content.map.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.407748557469!2d-3.9305943999999995!3d35.24611050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7431dc15b76a2f%3A0x8bcc3053cc8e46b6!2sMABINA%20restaurant%20and%20cafe!5e0!3m2!1sen!2sma!4v1750376179890!5m2!1sen!2sma"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 rounded-2xl"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl"></div>
              </div>
            </AnimatedSection>

            {/* Location Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {content.map.address}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {content.address.street}<br />
                        {content.address.city}, {content.address.country}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {content.map.hours}
                      </h3>
                      <div className="space-y-1 text-gray-600 dark:text-gray-300">
                        <p>{content.map.weekdays}</p>
                        <p>{content.map.weekend}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {content.map.contact}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {content.address.phone}
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="pt-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open('https://maps.google.com/?q=Mabina+Seafood+Restaurant', '_blank')}
                  >
                    {content.map.directions}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

export default Map