import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4">
            DIVANCO
          </h1>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 leading-tight">
            Estamos construyendo algo
            <span className="block font-medium text-gray-900">extraordinario</span>
          </h2>
          
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Nuestra nueva plataforma está en desarrollo. Prepárate para descubrir 
            una experiencia renovada en arquitectura y construcción.
          </p>
        </motion.div>

        {/* Features Preview - Cambiado a grid de 2 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto"
        >
          <FeatureCard 
            icon="🏗️"
            title="Nuevos Proyectos"
            description="Portafolio completo con nuestros últimos trabajos"
          />
          <FeatureCard 
            icon="⚙️"
            title="Mejor Experiencia"
            description="Interfaz renovada y más intuitiva"
          />
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <div className="text-sm font-medium text-gray-700 mb-3">Progreso del desarrollo</div>
          <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gray-900 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, delay: 1 }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2">75% completado</div>
        </motion.div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm font-light">
      {description}
    </p>
  </div>
)

export default Hero