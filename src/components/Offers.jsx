import React from 'react'
import { Clock, Star } from 'lucide-react'
import AnimatedSection from './ui/animated-section'
import WaveDivider from './ui/wave-divider'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { menuData } from '../data/menuData'

const WeekFeatured = ({ content, language }) => {
  // Get fish category from menuData
  const fishCategory = menuData.categories.find(cat => cat.name.en === 'Fish')
  
  // Function to get random fish items
  const getRandomFishItems = (count = 3) => {
    if (!fishCategory || !fishCategory.items) return []
    const fishItems = fishCategory.items.filter(item => item.available)
    const shuffled = [...fishItems].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }
  
  const featuredItems = getRandomFishItems(3)

  // Get item name based on language
  const getItemName = (item) => {
    switch (language) {
      case 'ar':
        return item.name.ar || item.name.en
      case 'fr':
        return item.name.fr || item.name.en
      default:
        return item.name.en
    }
  }

  // Get item description based on language
  const getItemDescription = (item) => {
    if (!item.description) return ''
    switch (language) {
      case 'ar':
        return item.description.ar || item.description.en || ''
      case 'fr':
        return item.description.fr || item.description.en || ''
      default:
        return item.description.en || ''
    }
  }

  return (
    <>
      <WaveDivider />
      
      {/* Week Featured Section */}
      <section id="week-featured" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {content.featured?.title || 'Week Featured'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {content.featured?.subtitle || 'Discover our chef\'s special fish selections of the week'}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={getItemName(item)}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white border-0">
                        <Star className="w-4 h-4 mr-1" />
                        {content.featured?.featuredBadge || 'Featured'}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {getItemName(item)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {getItemDescription(item) || content.featured?.defaultDescription || 'Fresh seafood prepared with our chef\'s special recipe'}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {content.featured?.thisWeekOnly || 'This Week Only'}
                      </div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ${item.price}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      {content.featured?.stillAvailable || 'Still Available'}
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WeekFeatured