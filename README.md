# Mabina Seafood Restaurant Website

## Project Overview

Mabina Seafood is a modern, responsive restaurant website built with React and Vite, featuring a beautiful seafood restaurant located in Al Hoceima, Morocco. The website showcases the restaurant's menu, services, and atmosphere with multilingual support (English, Arabic, French).

## 🏢 Restaurant Information

**Name:** Mabina Seafood  
**Location:** 1 Ave Abdelkrim El Khattabi, Al Hoceima 32000, Morocco  
**Phone:** +212 80-8529225  
**Email:** Alhoceima_express@hotmail.nl  
**Operating Hours:** Monday - Sunday: 8:00 AM - 11:00 PM  

**Social Media:**
- Facebook: https://www.facebook.com/mabina.alhoceima/
- Instagram: https://www.instagram.com/mabina.alhoceima/

**Services:**
- Dine-in
- Outdoor Seating
- In-store Pickup
- Takeaway

## 🛠️ Technical Stack

### Frontend Framework
- **React 19.1.0** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling & UI
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Radix UI Components** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful icon library
- **Custom CSS animations** - Smooth transitions and effects

### Key Dependencies
- **@radix-ui/react-*** - Complete set of UI components (accordion, dialog, dropdown, etc.)
- **class-variance-authority** - For component variants
- **clsx** - Conditional className utility
- **framer-motion** - Animation library
- **embla-carousel-react** - Carousel component
- **date-fns** - Date utility library

## 🌟 Features

### 1. Multilingual Support
- **English (EN)** - Default language
- **Arabic (العربية)** - RTL support with proper text direction
- **French (FR)** - Complete French translation
- Dynamic language switching with preserved state
- RTL/LTR text direction handling

### 2. Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Responsive image galleries

### 3. Interactive Navigation
- Fixed header with smooth scrolling
- Active section highlighting
- Mobile hamburger menu
- Language selector
- Phone number display

### 4. Hero Section
- Auto-rotating image carousel (5 images)
- 5-second interval transitions
- Overlay text with call-to-action buttons
- Smooth fade transitions

### 5. Menu System
- **Search functionality** - Real-time menu item filtering
- **Category filtering** - Filter by food categories
- **Multilingual descriptions** - Menu items in all supported languages
- **Price display** - In Moroccan Dirham (DH)

### 6. Image Gallery
- Grid layout with hover effects
- Modal popup for enlarged images
- Image descriptions
- Responsive grid (1-4 columns based on screen size)

### 7. Customer Testimonials
- Star rating display
- Customer names and meal types
- Responsive card layout
- Quote styling

### 8. Interactive Map
- Embedded Google Maps
- Restaurant location pinpoint
- Responsive iframe

### 9. Contact Information
- Complete address details
- Clickable phone and email links
- Operating hours
- Service types
- Social media links

## 📁 Project Structure

```
mabina-seafood/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                    # Images and media files
│   │   ├── logo.png              # Restaurant logo
│   │   ├── hero_carousel_1-5.jpg # Hero section carousel images
│   │   ├── 4dkKLdFGjBNp.jpg      # Menu item images
│   │   ├── hmWlzb0rxVRi.webp     # Menu item images
│   │   ├── wXd5E0Q85Xu7.jpg      # Menu item images
│   │   ├── 8TbvLly8rT1K.jpg      # Menu item images
│   │   └── [additional images]    # More food and restaurant images
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── button.jsx        # Button component with variants
│   │   │   ├── card.jsx          # Card component and sub-components
│   │   │   ├── badge.jsx         # Badge component for prices
│   │   │   ├── accordion.jsx     # Accordion component
│   │   │   ├── dialog.jsx        # Modal dialog component
│   │   │   └── [other UI components]
│   │   ├── About/                # About section components
│   │   ├── Hero/                 # Hero section components
│   │   └── Navigation/           # Navigation components
│   ├── contexts/
│   │   └── LanguageContext.jsx   # Language context provider
│   ├── hooks/
│   │   ├── useScrollToSection.js # Smooth scrolling hook
│   │   └── use-mobile.js         # Mobile detection hook
│   ├── lib/
│   │   └── utils.js              # Utility functions (cn, etc.)
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Custom styles and Tailwind config
│   ├── index.css                 # Global styles
│   ├── main.jsx                  # Application entry point
│   └── [other components]        # Additional app components
├── components.json               # Shadcn/ui configuration
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── jsconfig.json                # JavaScript configuration
```

## 🍽️ Menu Categories & Items

### Seafood Specialties
1. **Grilled Sea Bream** - 120 DH
2. **Seafood Paella** - 150 DH
3. **Fried Calamari** - 80 DH
4. **Shrimp Scampi** - 130 DH
5. **Fish Tagine** - 110 DH

### Fast Food & Light Meals
6. **Seafood Pizza** - 95 DH
7. **Fish Burger** - 70 DH
8. **Chicken Sandwich** - 60 DH
9. **Vegetable Salad** - 50 DH

### Breakfast & Brunch
10. **Moroccan Breakfast** - 45 DH
11. **Continental Breakfast** - 40 DH
12. **Omelette with Cheese** - 35 DH

### Beverages
13. **Fresh Orange Juice** - 25 DH
14. **Moroccan Mint Tea** - 20 DH
15. **Espresso** - 15 DH

## 🎯 Special Offers

1. **Family Seafood Platter Discount** - 15% off every Tuesday
2. **Lunch Special** - 10% off from 12 PM to 3 PM on weekdays
3. **Weekend Brunch Deal** - Complimentary Moroccan Mint Tea with breakfast orders on weekends

## 🖼️ Image Assets

### Hero Carousel Images (5 images)
- `hero_carousel_1.jpg` - Elegant seafood restaurant interior
- `hero_carousel_2.jpg` - Bustling seafood restaurant with happy diners
- `hero_carousel_3.jpg` - Seafood restaurant exterior with ocean view at sunset
- `hero_carousel_4.jpg` - Beautifully plated gourmet seafood dish
- `hero_carousel_5.jpg` - Vibrant fresh seafood market display

### Menu Item Images
- `4dkKLdFGjBNp.jpg` - Grilled sea bream and other dishes
- `hmWlzb0rxVRi.webp` - Seafood paella and specialties
- `wXd5E0Q85Xu7.jpg` - Fried calamari and appetizers
- `8TbvLly8rT1K.jpg` - Shrimp scampi and pasta dishes

### Additional Assets
- `logo.png` - Restaurant logo
- Multiple food photography images for gallery

## 🎨 Design Features

### Color Scheme
- **Primary:** Ocean blue gradient
- **Secondary:** Gray tones for text and backgrounds
- **Accent:** Blue (#2563eb) for interactive elements
- **Background:** White and light gray alternating sections

### Typography
- **Headings:** Bold, large fonts for section titles
- **Body:** Clean, readable fonts for descriptions
- **Multilingual:** Proper font rendering for Arabic text

### Animations
- **Fade-in effects** for sections
- **Hover animations** for cards and buttons
- **Smooth scrolling** between sections
- **Carousel transitions** in hero section
- **Float animations** for icons

## 🌐 Internationalization

### Language Content Structure
```javascript
const content = {
  en: { /* English content */ },
  ar: { /* Arabic content with RTL support */ },
  fr: { /* French content */ }
}
```

### Supported Sections
- Navigation menu
- Hero section
- About section
- Menu items and categories
- Special offers
- Testimonials
- Contact information
- Footer

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (1 column layouts)
- **Tablet:** 768px - 1024px (2 column layouts)
- **Desktop:** > 1024px (3-4 column layouts)

## 🚀 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Configuration Files

- **vite.config.js** - Vite configuration with React and Tailwind plugins
- **components.json** - Shadcn/ui component configuration
- **eslint.config.js** - ESLint rules and settings
- **jsconfig.json** - JavaScript project configuration

## 📍 Google Maps Integration

Embedded Google Maps iframe showing the exact restaurant location:
- **Coordinates:** 35.24611050000001, -3.9305943999999995
- **Place ID:** ChIJL6J2FcEdR0cRtka4zFMwvIs
- **Business Name:** MABINA restaurant and cafe

## 🎭 Customer Testimonials

1. **Ahmon Watkins** - 5 stars - "Great time at Mabina restaurant, excellent seafood menu"
2. **Abdellah Naji** - 5 stars - "Best resto in Al Hoceima! Great quality-price ratio"
3. **Redouan Rifi** - 5 stars - "Wonderful restaurant with excellent seafood and friendly staff"

## 🔄 State Management

### React State Variables
- `isMenuOpen` - Mobile menu visibility
- `activeSection` - Current active navigation section
- `currentLanguage` - Selected language (en/ar/fr)
- `currentSlide` - Hero carousel current slide
- `searchTerm` - Menu search filter
- `selectedCategory` - Menu category filter
- `modalOpen` - Gallery image modal state
- `selectedImage` - Currently selected gallery image

## 🎯 Key Functionalities

1. **Smooth Scrolling Navigation** - Animated scrolling to sections
2. **Language Switching** - Real-time language change with RTL support
3. **Menu Filtering** - Search and category-based filtering
4. **Image Gallery Modal** - Popup view for enlarged images
5. **Auto-rotating Carousel** - Hero section image slideshow
6. **Responsive Mobile Menu** - Collapsible navigation for mobile
7. **Contact Integration** - Direct phone and email links
8. **Social Media Links** - Facebook and Instagram integration

## 📋 Content Management

All content is stored in a structured JavaScript object with multilingual support, making it easy to:
- Update menu items and prices
- Modify restaurant information
- Add new languages
- Update special offers
- Change testimonials

## 🎨 Custom CSS Classes

- `.text-ocean-gradient` - Ocean blue gradient text
- `.btn-ocean` - Ocean-themed button styling
- `.nav-link` / `.nav-active` - Navigation link states
- `.hero-title` / `.hero-subtitle` - Hero section typography
- `.card-hover` - Card hover effects
- `.menu-item` - Menu item card styling
- `.gallery-image` - Gallery image hover effects
- `.animate-fade-in` - Fade-in animation
- `.animate-float` - Floating animation for icons

This comprehensive documentation covers all aspects of the Mabina Seafood restaurant website, from technical implementation to content structure and design features.