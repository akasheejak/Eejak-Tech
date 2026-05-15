import React from 'react';
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaBrain, FaShoppingCart, FaCogs, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const ServiceCardInfo = () => {
  const services = [
    {
      title: "Web & Software Development",
      desc: "We create custom software and web applications built for performance, security, and growth.",
      points: ["Enterprise Software Development", "CRM Consulting", "Website Design (Frontend/Backend)", "API Development & Integration", "Agile Methodologies"],
      icon: <FaCode />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Mobile App Development",
      desc: "From concept to deployment, we build high-performing mobile applications that function smoothly across platforms.",
      points: ["Android & iOS App Development", "Cross-Platform Development", "UI/UX Design for Mobile", "App Store Deployment", "API Integration & Backend Systems"],
      icon: <FaMobileAlt />,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "AI & ML Development",
      desc: "Utilize advanced AI and powerful machine learning solutions to transform operations and deliver real-time insights.",
      points: ["Custom AI Development and Consulting", "Large Language Models", "AI Chatbot Development", "Generative AI & RPA Solutions", "Predictive Modeling"],
      icon: <FaBrain />,
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "E-commerce Solutions",
      desc: "Build engaging, secure, and scalable online stores with the best website design company in India that drives conversions.",
      points: ["eCommerce Consulting", "Custom Store Development", "Responsive eCommerce UI/UX", "Secure Payment Gateway", "Maintenance & Support"],
      icon: <FaShoppingCart />,
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Software Product Engineering",
      desc: "We offer end-to-end web app & software services to guide your project from prototypes to live launch.",
      points: ["MVP Development", "Web & Progressive Web Apps (PWAs)", "UI/UX Design", "Application Maintenance", "Application Modernization"],
      icon: <FaCogs />,
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Quality Assurance & Testing",
      desc: "As the best website design company, we ensure reliability, performance, and security across all deliverables.",
      points: ["QA Strategy & Consulting", "Application Testing", "Mobile App Testing", "Performance & Security Audits", "Automation Testing"],
      icon: <FaShieldAlt />,
      color: "from-rose-600 to-red-600"
    }
  ];

  return (
    <div className="relative py-24 px-4 md:px-0 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16 items-start relative">
        {/* ── Left Side: Sticky Content ── */}
        <div className="lg:sticky lg:top-40 w-full lg:w-2/5 self-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wider uppercase">
              What We Deliver
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Advanced Digital Solutions for <span className="text-gradient">Business Success</span>
            </h2>
            <p className="text-xl font-bold text-gray-800 leading-snug">
              End-to-End Digital Services to Design, Build, & Support Your Business Journey.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer custom and full-cycle web design services that include intuitive interface design, feature-rich development, and ongoing support.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-3 group"
            >
              <span>Start Your Journey</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* ── Right Side: Stacked Cards ── */}
        <div className="w-full lg:w-3/5 space-y-12 pb-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ 
                top: '160px',
                zIndex: i + 1 
              }}
              className="lg:sticky bg-white rounded-[40px] p-8 md:p-12 border border-gray-200 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] min-h-[450px] flex flex-col justify-center"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl shadow-lg shrink-0`}>
                  {service.icon}
                </div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="text-sm font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ServiceCardInfo;