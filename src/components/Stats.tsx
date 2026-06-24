'use client'

import { motion } from 'framer-motion'
import { Users, Zap, MapPin, Shield } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '1000+',
      label: 'Pelanggan Puas',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      value: 'Express',
      label: 'Respons Kilat',
      color: 'from-cyan-500 to-primary-600',
    },
    {
      icon: MapPin,
      value: '3 Kota',
      label: 'Gresik • Surabaya • Sidoarjo',
      color: 'from-primary-600 to-blue-600',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Garansi Kerja',
      color: 'from-emerald-500 to-teal-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gradient mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami adalah pilihan utama untuk layanan AC profesional di kawasan Gresik, Surabaya, dan Sidoarjo
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-8 text-center group hover:shadow-xl transition-all"
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Value */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>

                {/* Label */}
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
      </div>
    </section>
  )
}
