import React from "react";
import { motion } from "framer-motion";
import { 
  FiHeart, 
  FiUsers, 
  FiUserPlus, 
  FiShield, 
  FiCheckCircle, 
  FiSmile 
} from "react-icons/fi";

const AboutValues = () => {
  const values = [
    {
      title: "Commitment To Work",
      icon: <FiHeart className="text-3xl" />,
      description: "Dedicated to delivering exceptional results through unwavering focus and effort.",
      color: "blue"
    },
    {
      title: "Customer First",
      icon: <FiUsers className="text-3xl" />,
      description: "Prioritizing our clients' needs and success in everything we do.",
      color: "indigo"
    },
    {
      title: "Team Work",
      icon: <FiUserPlus className="text-3xl" />,
      description: "Collaborating seamlessly to achieve shared goals and innovative solutions.",
      color: "blue"
    },
    {
      title: "Confidentiality",
      icon: <FiShield className="text-3xl" />,
      description: "Maintaining the highest standards of security and privacy for all client data.",
      color: "indigo"
    },
    {
      title: "Quality Work",
      icon: <FiCheckCircle className="text-3xl" />,
      description: "Ensuring excellence and precision in every project we undertake.",
      color: "blue"
    },
    {
      title: "Happy Employees",
      icon: <FiSmile className="text-3xl" />,
      description: "Fostering a positive, supportive environment where our team can thrive.",
      color: "indigo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Core Principles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
          >
            Values That <span className="text-gradient">Drive Us</span>
          </motion.h2>
          <p className="text-gray-600 text-lg">
            At Eejak, our values are the foundation of our culture and the key to our clients' success.
          </p>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-100"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                value.color === "blue" ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
              }`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;
