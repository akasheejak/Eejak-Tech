import React from "react";
import { motion } from "framer-motion";
import { FiEye, FiTarget, FiAward } from "react-icons/fi";
import mission from "../assets/image/mission.jpg";

const AboutMission = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Company Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] mb-20 relative overflow-hidden group"
        >
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full -z-10 group-hover:scale-110 transition-transform duration-700" />
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-bold tracking-widest uppercase text-sm">
              <FiAward className="text-xl" />
              <span>Excellence in Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              A Global Hub for <span className="text-gradient">Innovative IT Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify md:text-center">
              Eejak Technologies Pvt. Ltd. is a one-stop IT solution and consulting 
              powerhouse. We specialize in Overseas Consultancy, offering premium IT services 
              including Software Solutions, Web Design, Application Development, and 
              Digital Marketing. We believe client satisfaction is the destination, 
              and continuous support is the journey.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Vision & Mission Cards Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-center"
          >
            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FiEye size={28} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide flexible, informative solutions that create lasting impressions. 
                    We promise to deliver excellence by following efficient business practices 
                    and leveraging open-source power to help global enterprises succeed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <FiTarget size={28} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses by delivering cutting-edge technology solutions 
                    that are powerful, scalable, user-centric, and beautifully designed, 
                    ensuring our clients stay ahead in the digital landscape.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px]"
          >
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={mission}
                alt="Our Vision and Mission"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-900/20 to-transparent" />
            </div>
            
            {/* Floating accent element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl -z-10 rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600 rounded-3xl -z-10 -rotate-12" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;