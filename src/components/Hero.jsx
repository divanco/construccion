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
          {/* Botón de WhatsApp */}
          <div className="mt-8">
            <a
              href="https://wa.me/573105706816"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition-colors duration-200 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 13.487a4.548 4.548 0 0 1-2.01-.547c-.31-.16-.654-.32-1.01-.32-.356 0-.7.16-1.01.32a4.548 4.548 0 0 1-2.01.547c-.62 0-1.12-.5-1.12-1.12V8.62c0-.62.5-1.12 1.12-1.12h6.02c.62 0 1.12.5 1.12 1.12v3.747c0 .62-.5 1.12-1.12 1.12z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z" />
              </svg>
              Contáctanos por WhatsApp
            </a>
          </div>
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