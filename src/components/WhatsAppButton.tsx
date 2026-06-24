'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="https://wa.me/6287757689172?text=Halo%20R-AC%20Service,%20saya%20ingin%20bertanya%20tentang%20layanan%20AC"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-40 group"
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-30 group-hover:opacity-50"></div>

      {/* Main button */}
      <div className="relative bg-gradient-to-br from-green-400 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all transform hover:scale-110">
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      </div>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg"
        >
          087757689172
          <div className="absolute bottom-0 right-4 translate-y-full w-2 h-2 bg-gray-900 transform -rotate-45"></div>
        </motion.div>
      )}
    </motion.a>
  )
}
