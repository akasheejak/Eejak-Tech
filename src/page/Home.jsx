import heroImage from "../assets/image/heroBanner.png";
import { FaRocket } from "react-icons/fa";
import ServiceComponents from "../components/ServiceComponents";
import ServiceExpert from "../components/ServiceExpert";
import { motion } from "framer-motion";
import ServiceCardInfo from "../components/ServiceCardInfo";
import Strategie from "../components/strategie";
import ContactRedirect from "../components/ContactRedirect";
import AboutInfo from "../components/AboutInfo";

const Home = () => {
  return (
    <div className="">
      {/* ── Hero Section ── */}
      <section className="relative py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]"
            >
              Future-Ready <span className="text-gradient">IT Solutions</span> for Growing Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Innovative Technology That Accelerates Performance and Success. We empower your business with state-of-the-art digital transformations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="tel:+918070004400"
                className="btn-primary flex items-center space-x-2 group"
              >
                <span>Get a Free Consultation</span>
                <FaRocket className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 flex justify-center w-full lg:w-auto">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src={heroImage}
                alt="Hero Illustration"
                className="w-[90%] md:w-[80%] h-auto mx-auto lg:mx-0 "
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50/50 rounded-full blur-[100px] -z-10 " />
          </motion.div>
        </div>
      </section>

      {/* about section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <AboutInfo />
      </motion.div>

      {/* Service Sections with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ServiceComponents />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ServiceExpert />
      </motion.div>

      {/*  */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ServiceCardInfo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Strategie />
      </motion.div>
      {/* let talk section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ContactRedirect />
      </motion.div>
    </div>
  );
};

export default Home;
