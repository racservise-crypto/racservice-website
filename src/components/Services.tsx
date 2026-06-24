'use client'

import { motion } from 'framer-motion'
import { Wind, Droplets, Wrench, RotateCw, Zap, Hammer } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: 'Cuci AC',
      description: 'Pembersihan menyeluruh filter, evaporator, dan fan coil untuk performa optimal',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wind,
      title: 'Pengisian Freon',
      description: 'Pengisian freon berkualitas dengan pengecekan tekanan sistem yang tepat',
      color: 'from-cyan-500 to-primary-600',
    },
    {
      icon: Wrench,
      title: 'Perbaikan AC',
      description: 'Diagnosis dan perbaikan masalah AC dari ringan hingga kompleks',
      color: 'from-primary-600 to-blue-600',
    },
    {
      icon: RotateCw,
      title: 'Maintenance Berkala',
      description: 'Perawatan rutin untuk menjaga AC tetap awet dan efisien sepanjang tahun',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Zap,
      title: 'Bongkar Pasang AC',
      description: 'Instalasi dan perpindahan AC dengan profesional dan aman',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      icon: Hammer,
      title: 'Pemeriksaan Gratis',
      description: 'Konsultasi dan pemeriksaan awal AC Anda tanpa biaya tambahan',
      color: 'from-purple-600 to-pink-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gradient mb-4">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan AC Anda dengan teknisi profesional dan berpengalaman
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 mt-4 text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Pelajari lebih</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
