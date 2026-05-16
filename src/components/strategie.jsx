import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlinePaintBrush,
  HiOutlineCodeBracket,
  HiOutlineBeaker,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const Strategie = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: "01",
      title: "Strategic Planning",
      description:
        "We understand your needs and create a clear plan for your website.",
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
    },
    {
      id: "02",
      title: "UI/UX Design",
      description:
        "We design a clean, user-friendly layout that looks great & works smoothly.",
      icon: <HiOutlinePaintBrush className="w-8 h-8" />,
    },
    {
      id: "03",
      title: "Development",
      description:
        "Our team use the right framework, features, tools, and technology based on your needs.",
      icon: <HiOutlineCodeBracket className="w-8 h-8" />,
    },
    {
      id: "04",
      title: "Testing & QA",
      description:
        "We check everything carefully to make sure your website works perfectly.",
      icon: <HiOutlineBeaker className="w-8 h-8" />,
    },
    {
      id: "05",
      title: "Launch & Support",
      description:
        "We launch your site and stay available to support and update it as needed.",
      icon: <HiOutlineRocketLaunch className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
          >
            Our Step-by-Step <span className="text-gradient">Process</span>
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Explore our expert-driven development journey.
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block relative py-20 px-10">
          {/* Main Connector Line */}
          <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-gray-100 -translate-y-1/2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-linear-to-r from-blue-600 to-indigo-600"
            />
          </div>

          <div className="flex justify-between items-center relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Title (Always Visible) */}
                <div className={`
                  absolute w-40 text-center transition-all duration-300
                  ${index % 2 === 0 ? "bottom-20" : "top-20"}
                  ${hoveredStep === index ? "text-blue-600 scale-110 font-bold" : "text-gray-900 font-semibold"}
                `}>
                  {step.title}
                </div>

                {/* Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-10
                    ${hoveredStep === index
                      ? "bg-blue-600 text-white shadow-xl shadow-blue-200 ring-8 ring-blue-50"
                      : "bg-white text-gray-900 border-2 border-gray-100 hover:border-blue-400"
                    }
                  `}
                >
                  <span className="text-xl font-black">{step.id}</span>
                </motion.div>

                {/* Floating Description Card (On Hover) */}
                <AnimatePresence>
                  {hoveredStep === index && (
                    <motion.div
                      initial={{ opacity: 0, y: index % 2 === 0 ? 10 : -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: index % 2 === 0 ? -120 : 120, scale: 1 }}
                      exit={{ opacity: 0, y: index % 2 === 0 ? 10 : -10, scale: 0.9 }}
                      className={`
                        absolute ${index % 2 === 0 ? "bottom-3" : "top-3"} 
                        w-64 glass-card p-5 rounded-2xl z-20 pointer-events-none text-center
                      `}
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                        {step.icon}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>

                      {/* Arrow */}
                      <div className={`
                        absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-gray-100
                        ${index % 2 === 0 ? "-bottom-1.5 border-b border-r" : "-top-1.5 border-t border-l"}
                      `} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (Simplified List) */}
        <div className="lg:hidden space-y-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-200">
                {step.id}
              </div>
              <div className="glass-card p-6 rounded-2xl flex-1">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategie;