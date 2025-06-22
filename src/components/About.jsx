import React from 'react'
import AnimatedSection from './ui/animated-section'
import WaveDivider from './ui/wave-divider'
import aboutImage from '../assets/hmWlzb0rxVRi.webp'

const About = ({ content }) => {
  return (
    <>
      <WaveDivider />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {content.about.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {content.about.description}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {content.about.commitment}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {content.about.atmosphere}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">{content.about.features.fresh}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{content.about.features.freshDesc}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">{content.about.features.local}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{content.about.features.localDesc}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">{content.about.features.expert}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{content.about.features.expertDesc}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">{content.about.features.quality}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{content.about.features.qualityDesc}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="About Mabina Seafood"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default About