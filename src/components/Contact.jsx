import React from 'react';
import { Phone, Mail, MapPin, Star, Quote, Clock } from 'lucide-react'
import AnimatedSection from './ui/animated-section'
import WaveDivider from './ui/wave-divider'
import { Card } from './ui/card'
import { Button } from './ui/button'

const Contact = ({ content }) => {
  const testimonials = content.testimonials.reviews

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <>
      <WaveDivider />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {content.contact.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {content.contact.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {content.contact.info}
                </h3>
                
                <div className="space-y-6">
                  <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{content.contact.phone}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{content.address.phone}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{content.contact.email}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{content.address.email}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{content.contact.address}</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {content.address.street}<br />
                          {content.address.city}, {content.address.country}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{content.contact.hours}</h4>
                        <div className="text-gray-600 dark:text-gray-300">
                          <p>{content.map.weekdays}</p>
                          <p>{content.map.weekend}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Social Media */}
                <div className="pt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {content.contact.social}
                  </h4>
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-blue-500 dark:hover:text-white dark:hover:border-blue-500 transition-colors"
                      onClick={() => window.open('https://facebook.com/mabinaSeafood', '_blank')}
                    >
                      Facebook
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 text-gray-700 hover:bg-pink-500 hover:text-white hover:border-pink-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-pink-500 dark:hover:text-white dark:hover:border-pink-500 transition-colors"
                      onClick={() => window.open('https://instagram.com/mabinaSeafood', '_blank')}
                    >
                      Instagram
                    </Button>

                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Customer Testimonials */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {content.testimonials.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {content.testimonials.subtitle}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-6 bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Quote className="h-8 w-8 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center space-x-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                            {testimonial.review}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {testimonial.date}
                            </span>
                            <div className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400">
                              <span>Google</span>
                              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button 
                    onClick={() => window.open('https://www.google.com/maps/place/Mabina+Seafood', '_blank')}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-3"
                  >
                    {content.testimonials.viewAllReviews}
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

export default Contact