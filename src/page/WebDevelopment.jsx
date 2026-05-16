import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCheckCircle, FiCpu, FiLayout } from 'react-icons/fi';
import ContactRedirect from '../components/ContactRedirect';

const WebDevelopment = () => {
  const features = [
    { title: "Custom Web Applications", desc: "Tailored software solutions built with modern frameworks like React and Next.js." },
    { title: "E-commerce Solutions", desc: "Robust online stores with secure payment integrations and inventory management." },
    { title: "Responsive Design", desc: "Websites that look and perform beautifully on every device, from mobile to desktop." },
    { title: "API Development", desc: "Scalable backend systems and integrations to power your business ecosystems." }
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
              <FiCode size={40} />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-gray-900"
            >
              Web <span className="text-gradient">Development</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We build scalable, high-performance web applications that drive 
              business growth and deliver exceptional user experiences.
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
            <h2 className="text-4xl font-bold text-gray-900">Expert Solutions for <br/> Complex Challenges</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              At Eejak Tech, we don't just write code; we solve business problems. 
              Our team of expert developers uses the latest technologies to create 
              robust web solutions that are secure, fast, and easy to maintain. 
              From simple corporate sites to complex enterprise platforms, 
              we deliver excellence at every scale.
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
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl transform hover:-translate-y-2 transition-transform">
                  <FiCpu size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">Scalable Architecture</h3>
                </div>
                <div className="bg-gray-900 p-8 rounded-3xl text-white shadow-xl transform hover:-translate-y-2 transition-transform">
                  <FiLayout size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">Modern UI/UX</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl transform hover:-translate-y-2 transition-transform">
                  <FiCode size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">Clean Code</h3>
                </div>
                <div className="bg-blue-500 p-8 rounded-3xl text-white shadow-xl transform hover:-translate-y-2 transition-transform">
                  <FiCheckCircle size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">Quality QA</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactRedirect />
    </div>
  );
};

export default WebDevelopment;
