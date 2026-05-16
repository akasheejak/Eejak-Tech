import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const ContactRedirect = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-blue-600 via-indigo-600 to-blue-700 p-8 md:p-16 text-white shadow-2xl"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium"
            >
              <FiMessageSquare className="text-blue-200" />
              <span>Ready to take the next step?</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            >
              Made up your mind? <br />
              <span className="text-blue-200">Let's build together.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-xl"
            >
              Our team of experts is ready to transform your ideas into powerful digital solutions. 
              Let's discuss your project today.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/contact">
              <button className="group relative flex items-center space-x-3 px-8 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 active:scale-95">
                <span>Talk to an Expert</span>
                <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactRedirect;