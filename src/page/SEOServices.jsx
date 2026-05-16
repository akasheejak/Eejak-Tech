import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle, FiSearch, FiBarChart } from 'react-icons/fi';
import ContactRedirect from '../components/ContactRedirect';

const SEOServices = () => {
  const features = [
    { title: "Technical SEO", desc: "Optimizing site structure and speed for better search engine crawling." },
    { title: "Content Strategy", desc: "High-quality, keyword-rich content that engages users and ranks well." },
    { title: "On-Page Optimization", desc: "Strategic use of tags, headers, and metadata to boost visibility." },
    { title: "Link Building", desc: "Building authority through high-quality backlink strategies." }
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 rounded-[3rem] mb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
            >
              <FiTrendingUp size={40} />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-gray-900"
            >
              SEO <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Boost your visibility, drive organic traffic, and outrank your competition in the digital search landscape.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 -skew-x-12 translate-x-1/2" />
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">Rank Higher, <br/> Grow Faster</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Search Engine Optimization is the engine of sustainable digital growth. 
              We use data-driven strategies to ensure your business is seen by 
              the right people at the right time. Our holistic approach covers 
              everything from technical performance to content authority.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{f.title}</h4>
                    <p className="text-sm text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl space-y-4">
              <FiSearch className="text-blue-600 text-3xl" />
              <h4 className="font-bold text-xl">Keyword Research</h4>
              <p className="text-sm text-gray-500">Finding the exact terms your customers are searching for.</p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl space-y-4">
              <FiBarChart className="text-blue-600 text-3xl" />
              <h4 className="font-bold text-xl">Data Analytics</h4>
              <p className="text-sm text-gray-500">Continuous monitoring and optimization based on real data.</p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl space-y-4 md:col-span-2">
              <h4 className="font-bold text-xl">Measurable Results</h4>
              <p className="text-gray-500">We provide transparent reporting that shows the real impact on your traffic and conversions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactRedirect />
    </div>
  );
};

export default SEOServices;
