import React from "react";
import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiCheckCircle,
  FiSearch,
  FiBarChart,
  FiGlobe,
  FiTarget,
} from "react-icons/fi";
import ContactRedirect from "../components/ContactRedirect";

const SEOServices = () => {
  const features = [
    {
      title: "Technical SEO",
      desc: "Optimizing site structure and speed for better search engine crawling.",
    },
    {
      title: "Content Strategy",
      desc: "High-quality, keyword-rich content that engages users and ranks well.",
    },
    {
      title: "On-Page Optimization",
      desc: "Strategic use of tags, headers, and metadata to boost visibility.",
    },
    {
      title: "Link Building",
      desc: "Building authority through high-quality backlink strategies.",
    },
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
              <FiTrendingUp size={40} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-gray-900"
            >
              SEO & <span className="text-gradient">Marketing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Eejak is now one of the most preferred SEO Company in India, so if
              you own a business and looking to boost it, then call us right
              away to know more about promotion of your website over internet
              through our SEO Services.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 -skew-x-12 translate-x-1/2" />
      </section>

      {/* Content Section 1: SEO Focus */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Ethical SEO for <br /> Sustainable Growth
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
              <p>
                The SEO team at Eejak has highly experienced and professional
                search marketing experts who understand the generic process of
                optimizing and promoting a website. They work very closely with
                the guidelines provided by Search Engines to follow the most
                ethical process to optimize and promote the websites.
              </p>
              <p>
                They take proper care of links that are being created to avoid
                any potential threat to the website in terms of rankings. By
                staying in step with the latest algorithm updates, we ensure
                your business remains visible and competitive.
              </p>
            </div>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl space-y-4">
              <FiSearch className="text-blue-600 text-3xl" />
              <h4 className="font-bold text-xl">Keyword Strategy</h4>
              <p className="text-sm text-gray-500">
                Finding the exact terms your customers are searching for.
              </p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl space-y-4">
              <FiBarChart className="text-blue-600 text-3xl" />
              <h4 className="font-bold text-xl">Data Analytics</h4>
              <p className="text-sm text-gray-500">
                Continuous monitoring and optimization based on real data.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section 2: Digital Marketing Focus */}
      <section className="bg-slate-50 py-24 rounded-[3rem] mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                  <h3 className="text-3xl font-bold">DIGITAL MARKETING</h3>
                  <p className="text-blue-50 leading-relaxed text-lg">
                    Strengthen your brand positioning, awareness, revenue
                    objectives and market share with our custom-built digital
                    marketing services to suit your business needs. Get easily
                    accessible to your target audience on mobiles and social
                    networking sites across different platforms.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div className="flex items-center space-x-3">
                      <FiGlobe className="text-blue-200" />
                      <span className="text-sm">Global Reach</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FiTarget className="text-blue-200" />
                      <span className="text-sm">Targeted Ads</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                What We Do Best
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                End-to-End Digital <br /> Solutions
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our cross-functional digital marketing experts offer end-to-end
                  digital marketing solutions that are in step with your
                  business’s goals and policies.
                </p>
                <p>
                  Our targeted digital marketing campaigns are custom-structured
                  for helping you in strengthening your brand positioning,
                  awareness, revenue objectives and market share.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactRedirect />
    </div>
  );
};

export default SEOServices;
