'use client'

import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <p className="font-bold text-primary-400">R-AC Service</p>
                  <p className="text-xs text-gray-400">Dinginnya Pasti</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Layanan AC profesional dengan teknisi berpengalaman dan harga terjangkau di Gresik, Surabaya, dan Sidoarjo.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-6">Layanan</h3>
              <ul className="space-y-3">
                {['Cuci AC', 'Pengisian Freon', 'Perbaikan AC', 'Maintenance', 'Bongkar Pasang'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-6">Perusahaan</h3>
              <ul className="space-y-3">
                {['Tentang Kami', 'Kontak', 'Kebijakan Privasi', 'Syarat & Ketentuan'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-6">Kontak</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MessageCircle size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <a href="https://wa.me/6287757689172" className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">
                      087757689172
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Area Layanan</p>
                    <p className="text-primary-400 font-semibold">Gresik • Surabaya • Sidoarjo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Jam Operasional</p>
                    <p className="text-primary-400 font-semibold">07:00 - 20:00 WIB</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
          >
            <p>© {currentYear} R-AC Service. Semua hak dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                TikTok
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
