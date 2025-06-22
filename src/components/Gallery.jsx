import React, { useState } from 'react'
import { X } from 'lucide-react'
import AnimatedSection from './ui/animated-section'
import WaveDivider from './ui/wave-divider'
import { Button } from './ui/button'
import { galleryImages } from '../data/menuData'

const Gallery = ({ content }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  // Get unique categories
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))]

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <WaveDivider />
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {content.gallery.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {content.gallery.subtitle}
              </p>
            </div>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg transform scale-105'
                      : 'hover:scale-105 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>

          {/* Gallery Grid */}
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <AnimatedSection>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No images found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try selecting a different category.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery