import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiTrendingUp, FiArrowRight, FiCloud, FiCpu, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";


const ServiceComponents = () => {
  const services = [
    {
      tag: "What We Do Best",
      title: "Web Development",
      desc: "We have excellent team of website development professionals who are experienced enough to develop websites of any complexity.",
      icon: <FiCode size={30} />,
      color: "blue",
      link: "/services/web-development"
    },
    {
      tag: "What We Do Best",
      title: "Mobile App Development",
      desc: "We optimize your online presence with the latest and most effective search engine & social media optimization techniques.",
      icon: <FiSmartphone size={30} />,
      color: "indigo",
      link: "/services/mobile-development"
    },
    {
      tag: "What We Do Best",
      title: "SEO Services",
      desc: "Lead your industry online, rank higher on business searches and increase targeted traffic to your site.",
      icon: <FiTrendingUp size={30} />,
      color: "blue",
      link: "/services/seo-services"
    },
    {
      tag: "What We Do Best",
      title: "DevOps Services",
      desc: "Streamline development pipelines, automate environments, and build high availability systems on multi-cloud.",
      icon: <FiCloud size={30} />,
      color: "indigo",
      link: "/services/devops"
    },
    {
      tag: "What We Do Best",
      title: "AI & ML Solutions",
      desc: "Drive automation and data intelligence. We build custom computer vision, NLP, and predictive AI models.",
      icon: <FiCpu size={30} />,
      color: "blue",
      link: "/services/ai-ml"
    },
    {
      tag: "What We Do Best",
      title: "Cyber Security",
      desc: "Protect your business from cyber threats. We offer comprehensive assessment, real-time monitoring, and mitigation strategies.",
      icon: <FiShield size={30} />,
      color: "indigo",
      link: "/services/cyber-security"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm"
          >
            Our Core Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
          >
            What We Do <span className="text-gradient">Best</span>
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Delivering cutting-edge digital solutions tailored to elevate your business performance and global presence.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group glass-card p-10 rounded-[2.5rem] border border-gray-100 hover:border-blue-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 ${service.color === "blue"
                ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                }`}>
                {service.icon}
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600/60 block">
                  {service.tag}
                </span>
                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>

                <div className="pt-6">
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-[11px] group/btn"
                  >
                    <span>Learn More</span>
                    <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceComponents;