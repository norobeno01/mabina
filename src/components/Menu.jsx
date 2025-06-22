import React, { useState } from 'react'
import { Search, Clock } from 'lucide-react'
import AnimatedSection from './ui/animated-section'
import WaveDivider from './ui/wave-divider'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { menuData } from '../data/menuData'

const Menu = ({ content, language }) => {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast')
  const [searchTerm, setSearchTerm] = useState('')

  // Category tabs with icons and gradients - removed All Categories and Week Featured
  const categoryTabs = [
    { name: 'A La Carte', icon: '🍞', gradient: 'from-green-500 to-teal-500' },
    { name: 'Hot Drinks', icon: '☕', gradient: 'from-amber-500 to-yellow-500' },
    { name: 'Extra Accompaniments', icon: '🧈', gradient: 'from-pink-500 to-rose-500' },
    { name: 'Breakfast', icon: '🍳', gradient: 'from-yellow-500 to-amber-500' },
    { name: 'Omelettes', icon: '🥚', gradient: 'from-yellow-400 to-orange-400' },
    { name: 'Juices', icon: '🧃', gradient: 'from-orange-500 to-red-500' },
    { name: 'Salads', icon: '🥗', gradient: 'from-green-400 to-emerald-500' },
    { name: 'Fish', icon: '🐟', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Grills', icon: '🔥', gradient: 'from-red-500 to-orange-500' },
    { name: 'Dishes', icon: '🍛', gradient: 'from-purple-500 to-indigo-500' },
    { name: 'Pasta', icon: '🍝', gradient: 'from-yellow-500 to-orange-400' },
    { name: 'Tacos', icon: '🌮', gradient: 'from-orange-500 to-red-400' },
    { name: 'Wraps', icon: '🌯', gradient: 'from-green-500 to-blue-400' },
    { name: 'Shawarma', icon: '🥙', gradient: 'from-amber-500 to-red-500' },
    { name: 'Pizzas', icon: '🍕', gradient: 'from-red-500 to-yellow-500' },
    { name: 'Burgers', icon: '🍔', gradient: 'from-orange-500 to-amber-500' },
    { name: 'Paninis', icon: '🥪', gradient: 'from-amber-600 to-orange-500' },
    { name: 'Croquettes', icon: '🍤', gradient: 'from-yellow-600 to-amber-700' },
    { name: 'Sides', icon: '🥔', gradient: 'from-amber-700 to-yellow-600' },
    { name: 'Sauces', icon: '🍯', gradient: 'from-red-500 to-orange-500' },
    { name: 'Drinks', icon: '🥤', gradient: 'from-blue-500 to-cyan-500' }
  ]

  // Category definitions with icons and gradients - reordered for better flow
  const categories = [
    { name: 'Breakfast', icon: '🍳', gradient: 'from-yellow-500 to-amber-500' },
    { name: 'Omelettes', icon: '🥚', gradient: 'from-yellow-400 to-orange-400' },
    { name: 'Salads', icon: '🥗', gradient: 'from-green-400 to-emerald-500' },
    { name: 'Fish', icon: '🐟', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Grills', icon: '🔥', gradient: 'from-red-500 to-orange-500' },
    { name: 'Dishes', icon: '🍛', gradient: 'from-purple-500 to-indigo-500' },
    { name: 'Pasta', icon: '🍝', gradient: 'from-yellow-500 to-orange-400' },
    { name: 'Pizzas', icon: '🍕', gradient: 'from-red-500 to-yellow-500' },
    { name: 'Burgers', icon: '🍔', gradient: 'from-orange-500 to-amber-500' },
    { name: 'Paninis', icon: '🥪', gradient: 'from-amber-600 to-orange-500' },
    { name: 'Shawarma', icon: '🥙', gradient: 'from-amber-500 to-red-500' },
    { name: 'Tacos', icon: '🌮', gradient: 'from-orange-500 to-red-400' },
    { name: 'Wraps', icon: '🌯', gradient: 'from-green-500 to-blue-400' },
    { name: 'Croquettes', icon: '🍤', gradient: 'from-yellow-600 to-amber-700' },
    { name: 'A La Carte', icon: '🍞', gradient: 'from-green-500 to-teal-500' },
    { name: 'Extra Accompaniments', icon: '🧈', gradient: 'from-pink-500 to-rose-500' },
    { name: 'Sauces', icon: '🍯', gradient: 'from-red-500 to-orange-500' },
    { name: 'Hot Drinks', icon: '☕', gradient: 'from-amber-500 to-yellow-500' },
    { name: 'Juices', icon: '🧃', gradient: 'from-orange-500 to-red-500' },
    { name: 'Drinks', icon: '🥤', gradient: 'from-blue-500 to-cyan-500' }
  ]

  // Filter menu items based on selected category and search term
  const filteredItems = menuData.categories.filter(category => {
    // First filter by category
    const matchesCategory = category.name.en === selectedCategory
    
    // Only apply search within the selected category
    if (!matchesCategory) return false
    
    // Then apply search if there's a search term
    if (searchTerm === '') return true
    
    const matchesSearch = category.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.items.some(item => item.name.en.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesSearch
  })

  // Get item description based on language
  const getDescription = (item) => {
    switch (language) {
      case 'ar':
        return item.description_ar || item.description
      case 'fr':
        return item.description_fr || item.description
      default:
        return item.description
    }
  }

  // Get category translation
  const getCategoryTranslation = (categoryName) => {
    const translations = {
      'A La Carte': {
        ar: 'قائمة الطعام',
        fr: 'À la carte',
        en: 'A La Carte'
      },
      'Hot Drinks': {
        ar: 'المشروبات الساخنة',
        fr: 'Boissons chaudes',
        en: 'Hot Drinks'
      },
      'Extra Accompaniments': {
        ar: 'مرافقات إضافية',
        fr: 'Accompagnements supplémentaires',
        en: 'Extra Accompaniments'
      },
      'Breakfast': {
        ar: 'الإفطار',
        fr: 'Petit-déjeuner',
        en: 'Breakfast'
      },
      'Omelettes': {
        ar: 'العجة',
        fr: 'Omelettes',
        en: 'Omelettes'
      },
      'Juices': {
        ar: 'العصائر',
        fr: 'Jus',
        en: 'Juices'
      },
      'Salads': {
        ar: 'السلطات',
        fr: 'Salades',
        en: 'Salads'
      },
      'Fish': {
        ar: 'الأسماك',
        fr: 'Poissons',
        en: 'Fish'
      },
      'Grills': {
        ar: 'المشاوي',
        fr: 'Grillades',
        en: 'Grills'
      },
      'Dishes': {
        ar: 'الأطباق',
        fr: 'Plats',
        en: 'Dishes'
      },
      'Pasta': {
        ar: 'المعكرونة',
        fr: 'Pâtes',
        en: 'Pasta'
      },
      'Tacos': {
        ar: 'التاكو',
        fr: 'Tacos',
        en: 'Tacos'
      },
      'Wraps': {
        ar: 'الراب',
        fr: 'Wraps',
        en: 'Wraps'
      },
      'Shawarma': {
        ar: 'الشاورما',
        fr: 'Shawarma',
        en: 'Shawarma'
      },
      'Pizzas': {
        ar: 'البيتزا',
        fr: 'Pizzas',
        en: 'Pizzas'
      },
      'Burgers': {
        ar: 'البرغر',
        fr: 'Burgers',
        en: 'Burgers'
      },
      'Paninis': {
        ar: 'البانيني',
        fr: 'Paninis',
        en: 'Paninis'
      },
      'Croquettes': {
        ar: 'الكروكيت',
        fr: 'Croquettes',
        en: 'Croquettes'
      },
      'Sides': {
        ar: 'الأطباق الجانبية',
        fr: 'Accompagnements',
        en: 'Sides'
      },
      'Sauces': {
        ar: 'الصلصات',
        fr: 'Sauces',
        en: 'Sauces'
      },
      'Drinks': {
        ar: 'المشروبات',
        fr: 'Boissons',
        en: 'Drinks'
      }
    }
    return translations[categoryName]?.[language] || categoryName
  }

  return (
    <>
      <WaveDivider />
      
      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {content.menu.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {content.menu.subtitle}
              </p>
            </div>
          </AnimatedSection>

          {/* Search Bar */}
          <AnimatedSection>
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder={content.menu.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Category Tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categoryTabs.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.name
                      ? `bg-gradient-to-r ${category.gradient} text-white border-0 shadow-lg transform scale-105`
                      : 'hover:scale-105 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{getCategoryTranslation(category.name)}</span>
                </Button>
              ))}
            </div>
          </AnimatedSection>

          {/* Menu Items Grid */}
          <AnimatedSection>
            <div className="space-y-12">
              {filteredItems.map((category) => (
                <div key={category.id}>
                  {/* Category Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {category.name[language] || category.name.en}
                    </h2>
                    {category.description && (
                      <p className="text-gray-600 dark:text-gray-300">
                        {category.description[language] || category.description.en}
                      </p>
                    )}
                    {(category.availableFrom || category.availableTo) && (
                      <div className="mt-2">
                        <Badge className="bg-green-500 text-white border-0 shadow-lg flex items-center space-x-1 w-fit">
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">
                            {category.availableFrom && category.availableTo 
                              ? `${category.availableFrom} - ${category.availableTo}`
                              : category.availableFrom || category.availableTo
                            }
                          </span>
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  {/* Category Items Grid - Modern Creative Design */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item, index) => (
                      <Card key={item.id} className="group relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 rounded-2xl">
                        {/* Decorative Background Pattern */}
                        <div className="absolute inset-0 opacity-5 dark:opacity-10">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform translate-x-16 -translate-y-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400 to-yellow-500 rounded-full transform -translate-x-12 translate-y-12"></div>
                        </div>

                        {/* Image Section with Advanced Overlay */}
                        <div className="relative overflow-hidden rounded-t-2xl h-56">
                          <img
                            src={item.image}
                            alt={item.name[language] || item.name.en}
                            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                          />
                          
                          {/* Multi-layer Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Floating Category Badge */}
                          <div className="absolute top-4 left-4 z-10">
                            {categoryTabs.map((cat) => {
                              if (cat.name === (category.name[language] || category.name.en)) {
                                return (
                                  <Badge
                                    key={cat.name}
                                    className={`bg-gradient-to-r ${cat.gradient} text-white border-0 shadow-2xl backdrop-blur-sm bg-opacity-90 flex items-center space-x-2 px-3 py-2 rounded-full transform group-hover:scale-110 transition-transform duration-300`}
                                  >
                                    <span className="text-sm">{cat.icon}</span>
                                    <span className="text-xs font-semibold tracking-wide">{cat.name}</span>
                                  </Badge>
                                )
                              }
                              return null
                            })}
                          </div>

                          {/* Price Tag - Floating */}
                          <div className="absolute top-4 right-4 z-10">
                            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/20">
                              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {item.price} DH
                              </span>
                            </div>
                          </div>


                        </div>
                        
                        {/* Content Section with Enhanced Layout */}
                        <div className="relative p-6 space-y-4">
                          {/* Title with Decorative Line */}
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                              {item.name[language] || item.name.en}
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
                          </div>

                          {/* Description with Better Typography */}
                          {item.description && (
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                              {item.description[language] || item.description.en}
                            </p>
                          )}

                          {/* Action Section with Modern Button */}
                          <div className="flex items-center justify-between pt-2">
                            {/* Rating Stars (Decorative) */}
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-yellow-400' : 'bg-gray-300 dark:bg-gray-600'} transition-colors duration-300`}></div>
                              ))}
                              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">4.8</span>
                            </div>
                            
                            <Button 
                              size="sm" 
                              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-full px-6 py-2 font-semibold text-xs tracking-wide uppercase backdrop-blur-sm"
                            >
                              <span className="flex items-center space-x-2">
                                <span>{content.menu.available}</span>
                                <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                                  <span className="text-xs">✓</span>
                                </div>
                              </span>
                            </Button>
                          </div>

                          {/* Decorative Elements */}
                          <div className="absolute bottom-2 left-6 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300 pointer-events-none"></div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <AnimatedSection>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {content.menu.noResults}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {content.menu.tryDifferentSearch}
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}

export default Menu