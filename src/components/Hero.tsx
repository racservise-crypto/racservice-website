'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full w-fit">
            <Zap size={16} />
            <span className="text-sm font-semibold">Respons Cepat • Profesional</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="heading-xl">
            <span className="text-gradient">Dinginnya Pasti,</span>
            <br />
            Kerjanya Rapi
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
            Layanan AC profesional dengan teknisi berpengalaman. Kami melayani bongkar pasang, cuci, freon, dan maintenance AC di Gresik, Surabaya, dan Sidoarjo.
          </motion.p>

          {/* Stats Quick */}
          <motion.div variants={itemVariants} className="flex gap-6 pt-4">
            <div>
              <p className="text-3xl font-bold text-primary-700">1000+</p>
              <p className="text-sm text-gray-600">Pelanggan Puas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-700">5+</p>
              <p className="text-sm text-gray-600">Tahun Pengalaman</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="https://wa.me/6287757689172?text=Halo%20R-AC%20Service,%20saya%20ingin%20bertanya%20tentang%20layanan%20AC"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all transform hover:scale-105"
            >
              Hubungi WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all">
              Lihat Promo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Glass card background */}
            <div className="glass rounded-3xl p-8 backdrop-blur-xl">
              <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-4">❄️</div>
                  <p className="text-primary-700 font-bold text-xl">Ilustrasi AC</p>
                  <p className="text-gray-600 text-sm mt-2">Upload gambar hero di sini</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass px-6 py-3 rounded-lg font-semibold text-primary-700 shadow-lg"
            >
              ⭐ Terpercaya
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
    </section>
  )
}
