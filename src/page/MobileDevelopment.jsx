import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiCheckCircle, FiZap, FiLayers } from 'react-icons/fi';
import ContactRedirect from '../components/ContactRedirect';

const MobileDevelopment = () => {
  const features = [
    { title: "Native iOS & Android", desc: "High-performance applications built specifically for Apple and Google ecosystems." },
    { title: "Cross-Platform Apps", desc: "Efficient solutions using React Native and Flutter for multi-platform reach." },
    { title: "Mobile UI/UX Design", desc: "Intuitive interfaces designed for touch and small-screen interactions." },
    { title: "App Store Optimization", desc: "Ensuring your app ranks high and reaches the right audience on stores." }
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
              className="w-20 h-20 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
            >
              <FiSmartphone size={40} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-gray-900"
            >
              Mobile App <span className="text-gradient">Development</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Eejak is one of the leading Mobile application development services company located in Noida, India.
              We craft high-performance apps for Android, iOS.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-100/30 -skew-x-12 translate-x-1/2" />
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="bg-indigo-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <h3 className="text-3xl font-bold">Expert App Solutions</h3>
                <p className="text-indigo-50 leading-relaxed text-lg">
                  We have a strong focus and expertise in mobile apps development and have successfully
                  developed apps for iOS, Android.
                </p>
                <p className="text-indigo-50 leading-relaxed">
                  Being an innovative mobile app development services agency, we are expert in
                  development of enterprise, e-commerce, healthcare, educational and several
                  other utility mobile apps at very competitive rates.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center space-x-3">
                    <FiZap className="text-yellow-400" />
                    <span>Direct Communication Channel</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FiLayers className="text-yellow-400" />
                    <span>Enhanced Customer Loyalty</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FiZap className="text-yellow-400" />
                    <span>Offline Capabilities</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">Crafting Native & <br /> Hybrid Experiences</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mobile developers are experts in building applications that
              leverage the full potential of hardware capabilities while
              maintaining smooth, buttery performance. We ensure your app
              stands out in the crowded marketplace.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{f.title}</h4>
                    <p className="text-sm text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ContactRedirect />
    </div>
  );
};

export default MobileDevelopment;
