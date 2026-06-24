'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 md:p-16 border border-white/30"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg mb-6"
          >
            Siap untuk AC yang <span className="text-gradient">Dingin Maksimal?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            Hubungi kami sekarang dan dapatkan konsultasi gratis untuk kebutuhan AC Anda. Teknisi profesional kami siap membantu!
          </motion.p>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <div className="bg-primary-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">📱 WhatsApp</p>
              <p className="text-2xl font-bold text-primary-700">087757689172</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">⏰ Jam Operasional</p>
              <p className="text-xl font-bold text-primary-700">07:00 - 20:00 WIB</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6287757689172?text=Halo%20R-AC%20Service,%20saya%20ingin%20konsultasi%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all"
          >
            Hubungi Sekarang
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
