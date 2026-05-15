import React from 'react';
import { 
  FaHeadset, 
  FaLightbulb, 
  FaCode, 
  FaMobileAlt, 
  FaSync, 
  FaShieldAlt 
} from 'react-icons/fa';

const Service = () => {
  const services = [
    {
      title: "IT Support Services",
      desc: "Reliable IT support ensuring seamless and secure tech operations, empowering your focus on core priorities in a dynamic business landscape.",
      icon: <FaHeadset size={30} />,
      color: "blue"
    },
    {
      title: "Tech Solutioning",
      desc: "Integrating expertise, streamlined processes, and cutting-edge technology to collaboratively innovate and deliver standout solutions that elevate and propel your business forward.",
      icon: <FaLightbulb size={30} />,
      color: "indigo"
    },
    {
      title: "Web Development",
      desc: "Tailored web solutions, crafting responsive sites and dynamic applications, meeting diverse business needs through innovative tech and industry best practices for a compelling online presence.",
      icon: <FaCode size={30} />,
      color: "blue"
    },
    {
      title: "Mobile Development",
      desc: "Delivering innovative and customized mobile application development solutions, harnessing the latest technologies to transform ideas into impactful mobile experiences.",
      icon: <FaMobileAlt size={30} />,
      color: "indigo"
    },
    {
      title: "DevOps setup & Management",
      desc: "Optimizing workflows, enhancing collaboration, and automating processes for seamless software development and delivery.",
      icon: <FaSync size={30} />,
      color: "blue"
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive Quality Assurance services ensuring seamless functionality, reliability, and performance of products through meticulous testing and validation methodologies",
      icon: <FaShieldAlt size={30} />,
      color: "indigo"
    },
  ];

  return (
    <div className="py-12 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">What We Do</h2>
        <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Solutions <span className="text-gradient">We Offer</span>
        </h3>
        <p className="text-gray-600 text-lg">
          We provide a comprehensive suite of IT services designed to help your business thrive in the digital age.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group glass-card p-10 rounded-[32px] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-600/30"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
              service.color === "blue" ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
            }`}>
              {service.icon}
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h4>
            
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;