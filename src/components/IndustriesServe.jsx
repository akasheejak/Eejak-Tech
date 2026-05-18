import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShoppingCart, 
  FaBuilding, 
  FaGraduationCap, 
  FaUtensils, 
  FaHeartbeat, 
  FaLandmark, 
  FaLaptopCode, 
  FaShoppingBag, 
  FaRocket, 
  FaPlane 
} from 'react-icons/fa';

const industries = [
  { id: 1, name: 'E-commerce', icon: <FaShoppingCart size={32} /> },
  { id: 2, name: 'Real Estate', icon: <FaBuilding size={32} /> },
  { id: 3, name: 'Education', icon: <FaGraduationCap size={32} /> },
  { id: 4, name: 'Restaurants', icon: <FaUtensils size={32} /> },
  { id: 5, name: 'HealthCare', icon: <FaHeartbeat size={32} /> },
  { id: 6, name: 'Finance & Banking', icon: <FaLandmark size={32} /> },
  { id: 7, name: 'Technology', icon: <FaLaptopCode size={32} /> },
  { id: 8, name: 'Retailers', icon: <FaShoppingBag size={32} /> },
  { id: 9, name: 'StartUps', icon: <FaRocket size={32} /> },
  { id: 10, name: 'Travel & Hospitality', icon: <FaPlane size={32} /> },
];

const IndustriesServe = () => {
  return (
    <section className="py-24 relative z-30 bg-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Sectors We Empower
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Industries We <span className="text-gradient">Serve</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Delivering tailored, innovative solutions across diverse sectors to drive growth and efficiency.
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group border border-gray-100/50 cursor-pointer relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-600 mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                {industry.icon}
              </div>
              <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServe;