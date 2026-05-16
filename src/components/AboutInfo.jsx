import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import about from "../assets/image/about.jpg";

const AboutInfo = () => {
  const features = [
    "Skilled Software Developers",
    "Tailored IT Solutions",
    "Digital Transformation Experts",
    "Proven Track Record since 2013",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Section Tag */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-[2px] bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                About Eejak Tech
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              We are a <span className="text-gradient">Professional</span> Software Development Company
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Eejak is a one-stop IT solution and software development company 
                with skilled developers providing business-critical solutions 
                worldwide since Jan 2013.
              </p>
              <p>
                We focus on moving your business ahead by driving digital 
                transformation across verticals. Our technical and business 
                analysts will take your dream to the next level.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3 group"
                >
                  <FiCheckCircle className="text-blue-600 text-xl flex-shrink-0" />
                  <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link to="/about">
                <button className="btn-primary flex items-center space-x-2 group">
                  <span>Know More About Us</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image with Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={about}
                alt="About Eejak Team"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="text-center">
                <span className="block text-5xl font-black text-blue-600">10+</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  Years of <br /> Excellence
                </span>
              </div>
            </motion.div>

            {/* Decorative Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-[100px]" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;