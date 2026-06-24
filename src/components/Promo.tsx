'use client'

import { motion } from 'framer-motion'
import { Zap, Gift } from 'lucide-react'

export default function Promo() {
  return (
    <section id="promo" className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Gift size={18} />
            <span className="text-sm font-semibold">Penawaran Terbatas</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Cuci AC Hanya
            <br />
            <span className="text-yellow-300">Rp 150.000</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Pembersihan menyeluruh dengan garansi kepuasan 100%
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              '✓ Cuci Filter & Evaporator',
              '✓ Pembersihan Fan Coil',
              '✓ Garansi 30 Hari',
            ].map((feature, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white font-semibold">
                {feature}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/6287757689172?text=Saya%20tertarik%20dengan%20promo%20cuci%20AC%20Rp150.000"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
            >
              <Zap size={20} />
              Ambil Promo Sekarang
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
              Syarat & Ketentuan
            </button>
          </motion.div>

          {/* Countdown */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/70 mt-8 text-sm"
          >
            Promo berlaku hingga akhir bulan ini • Tidak berlaku untuk unit outdoor yang rusak
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
