import React from 'react'
import Strategie from '../components/strategie'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="pb-20">
      {/* Hero Section for About */}
      <section className="py-16 md:py-24 bg-slate-50/50 rounded-3xl mb-12 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              About <span className="text-gradient">Eejak Tech</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating 
              innovative digital solutions that drive growth and success for businesses worldwide.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 -z-0" />
      </section>

      {/* Strategy Section */}
      <Strategie />
      
      {/* Mission Section (Placeholder for future expansion) */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our mission is to empower businesses by delivering cutting-edge technology solutions 
            that are not only powerful and scalable but also user-centric and beautifully designed.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Done</div>
            </div>
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
              <div className="text-2xl font-bold text-indigo-600 mb-1">50+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
             <span className="text-white font-black text-2xl">Innovating the Future</span>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About