import heroImage from "../assets/image/heroBanner.png";
import { FaRocket, FaCloud, FaShieldAlt, FaCode, FaChartLine, FaHeadset } from "react-icons/fa";

const Home = () => {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Expert Developers", value: "50+" },
    { label: "Success Rate", value: "99%" },
  ];

  const features = [
    {
      icon: <FaRocket className="text-blue-600" size={24} />,
      title: "Digital Transformation",
      desc: "Accelerate your business growth with our cutting-edge digital strategies."
    },
    {
      icon: <FaCode className="text-blue-600" size={24} />,
      title: "Custom Development",
      desc: "Tailor-made software solutions designed to meet your unique business needs."
    },
    {
      icon: <FaCloud className="text-blue-600" size={24} />,
      title: "Cloud Solutions",
      desc: "Scale your infrastructure with our secure and reliable cloud services."
    },
    {
      icon: <FaShieldAlt className="text-blue-600" size={24} />,
      title: "Cyber Security",
      desc: "Protect your digital assets with our advanced security protocols."
    },
  ];

  return (
    <div className="">
      {/* ── Hero Section ── */}
      <section className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-1 ">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
              Future-Ready <span className="text-gradient">IT Solutions</span> for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Innovative Technology That Accelerates Performance and Success. We empower your business with state-of-the-art digital transformations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary flex items-center space-x-2 group">
                <span>Get a Free Consultation</span>
                <FaRocket className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Hero Illustration" 
                className="w-[80%] h-auto "
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]  -z-10 animate-pulse-slow" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

