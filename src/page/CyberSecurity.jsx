import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle, FiLock, FiAlertTriangle, FiKey, FiEye } from 'react-icons/fi';
import ContactRedirect from '../components/ContactRedirect';

const CyberSecurity = () => {

  const features = [
    { title: "Vulnerability Assessments (VAPT)", desc: "Identify security gaps, assess system weaknesses, and perform advanced penetration testing." },
    { title: "Network & Cloud Security", desc: "Secure multi-cloud configurations and network boundaries with robust architecture design." },
    { title: "Compliance & Auditing", desc: "Ensure your operations comply with standards like ISO 27001, GDPR, and local security laws." },
    { title: "Managed Threat Detection (SOC)", desc: "Establish continuous monitoring and automated incident response channels for security events." }
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
              <FiShield size={40} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-gray-900"
            >
              Cyber <span className="text-gradient">Security</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Eejak Solutions delivers robust enterprise-level security implementations.
              We protect your digital landscape, defend your assets against evolving threats,
              and build zero-trust security postures.
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
            <h2 className="text-4xl font-bold text-gray-900">Defend Your Infrastructure <br /> Against Digital Threats</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              In a digital-first era, safeguarding data and resources is a critical business imperative.
              Our certified cyber security experts construct intelligent, comprehensive defensive matrices
              tailored to your system's individual threat profile.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              From localized network security controls to full cloud container environment compliance,
              we adapt cutting-edge cryptographic protocols and access mechanisms to shield your data
              against unauthorized entry, vulnerability exploitation, and leaks.
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
                  <FiLock size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">Data Encryption</h3>
                </div>
                <div className="bg-gray-900 p-8 rounded-3xl text-white shadow-xl transform hover:-translate-y-2 transition-transform">
                  <FiKey size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">IAM Solutions</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl transform hover:-translate-y-2 transition-transform">
                  <FiEye size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">SOC Monitoring</h3>
                </div>
                <div className="bg-blue-500 p-8 rounded-3xl text-white shadow-xl transform hover:-translate-y-2 transition-transform">
                  <FiAlertTriangle size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">Threat Audits</h3>
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

export default CyberSecurity;
