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
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase"
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            Delivering tailored, innovative solutions across diverse sectors to drive growth and efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group border border-gray-100 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                {industry.icon}
              </div>
              <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
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