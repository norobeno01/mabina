import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FloatingActionButton = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: Phone,
      label: content.floatingActions.callNow,
      action: () => window.open('tel:0808529225'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Mail,
      label: content.floatingActions.sendEmail,
      action: () => window.open('mailto:Alhoceima_express@hotmail.nl'),
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 md:bottom-6 md:right-6 bottom-20 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="flex flex-col gap-3 mb-3"
          >
            {actions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, y: 20, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 20, 
                    scale: 0,
                    transition: { delay: (actions.length - index - 1) * 0.1 }
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                    {action.label}
                  </span>
                  <Button
                    size="icon"
                    onClick={action.action}
                    className={`h-12 w-12 rounded-full shadow-lg ${action.color} text-white`}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
          </motion.div>
        </Button>
      </motion.div>
    </div>
  )
}

export default FloatingActionButton