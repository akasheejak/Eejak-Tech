import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiCode, FiSmartphone, FiTrendingUp, FiCloud, FiCpu, FiArrowRight } from "react-icons/fi";
import logo from "../assets/image/logo.png";
import { BsTwitterX } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const serviceLinks = [
    {
      name: "Web Development",
      path: "/services/web-development",
      desc: "Custom-built, fast, and secure web applications.",
      icon: <FiCode size={20} />,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop",
      tagline: "Build Scalable Web Apps"
    },
    {
      name: "Mobile App Development",
      path: "/services/mobile-development",
      desc: "Cross-platform mobile apps with native feels.",
      icon: <FiSmartphone size={20} />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
      tagline: "Innovative Mobile Solutions"
    },
    {
      name: "SEO Services",
      path: "/services/seo-services",
      desc: "Rank higher and drive quality organic traffic.",
      icon: <FiTrendingUp size={20} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      tagline: "Maximize Search Visibility"
    },
    {
      name: "DevOps Services",
      path: "/services/devops",
      desc: "Automate delivery and orchestrate cloud grids.",
      icon: <FiCloud size={20} />,
      image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=600&auto=format&fit=crop",
      tagline: "Streamline Cloud Infrastructure"
    },
    {
      name: "AI & ML Solutions",
      path: "/services/ai-ml",
      desc: "Harness cognitive intelligence & pattern models.",
      icon: <FiCpu size={20} />,
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop",
      tagline: "Pioneering Cognitive Data"
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(serviceLinks[0]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Height of topbar (53px) + navbar (96px) = 149px; scrolled hides topbar so 96px
  const headerHeight = isScrolled ? 96 : 149;

  return (
    <>
      {/* ── Fixed Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${isScrolled ? "md:-translate-y-[53px]" : "translate-y-0"
          }`}
      >
        {/* Top Bar */}
        <div className="bg-white text-gray-700 py-3 hidden md:block border-b border-gray-100 shadow-sm">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[14px] font-semibold">
            <div className="flex items-center space-x-10">
              <a href="tel:+918070004400" className="flex items-center space-x-2.5 hover:text-blue-600 transition-colors group">
                <FaPhoneAlt className="text-blue-600 text-[14px] group-hover:rotate-12 transition-transform" />
                <span className="tracking-wide">+91 807000 4400</span>
              </a>
              <a href="mailto:info@eejak.com" className="flex items-center space-x-2.5 hover:text-blue-600 transition-colors group">
                <FaEnvelope className="text-blue-600 text-[14px] group-hover:-translate-y-0.5 transition-transform" />
                <span className="tracking-wide">info@eejak.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm">
                <FaFacebookF size={15} />
              </a>
              <a href="https://in.linkedin.com/company/eejak-technologies" target="_blank" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm">
                <FaLinkedinIn size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm">
                <BsTwitterX size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="glass-nav">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex justify-between items-center h-24">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <img src={logo} alt="Logo" className="h-12 w-auto" />
                </NavLink>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-2">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  About
                </NavLink>

                {/* Services Dropdown */}
                <div
                  className="group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `nav-link flex items-center space-x-1 ${isActive ? "active" : ""}`
                    }
                  >
                    <span>Services</span>
                    <HiChevronDown className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                  </NavLink>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        // z-50 keeps the dropdown ABOVE the blur overlay (z-40)
                        className="absolute top-full left-0 right-0 w-full pt-4 z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100/80 overflow-hidden grid grid-cols-12 gap-0 p-6">
                          <div className="col-span-8 pr-8 border-r border-gray-50 text-left">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600/60 block px-4 mb-4">
                              Our Core Expertise
                            </span>
                            <div className="grid grid-cols-2 gap-4">
                              {serviceLinks.map((service) => (
                                <NavLink
                                  key={service.path}
                                  to={service.path}
                                  onMouseEnter={() => setHoveredService(service)}
                                  onClick={() => setIsServicesOpen(false)}
                                  className={({ isActive }) =>
                                    `flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 ${isActive
                                      ? "bg-blue-50/80 text-blue-600"
                                      : "hover:bg-blue-50/40 text-gray-700 hover:text-blue-600"
                                    }`
                                  }
                                >
                                  <div className="p-3 rounded-xl bg-blue-50/60 text-blue-600 transition-colors flex-shrink-0">
                                    {service.icon}
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-bold leading-none mb-1.5">{service.name}</h5>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{service.desc}</p>
                                  </div>
                                </NavLink>
                              ))}
                            </div>
                          </div>

                          <div className="col-span-4 pl-8 flex flex-col justify-between relative">
                            <div className="absolute inset-y-0 left-8 right-0 rounded-[1.5rem] overflow-hidden bg-slate-900 text-white group p-6 flex flex-col justify-between">
                              <div className="absolute inset-0 z-0">
                                <img
                                  src={hoveredService?.image || serviceLinks[0].image}
                                  alt={hoveredService?.name}
                                  className="w-full h-full object-cover opacity-35 transition-transform duration-700 scale-105 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                              </div>
                              <div className="relative z-10 text-left">
                                <span className="text-[9px] font-bold tracking-widest uppercase bg-blue-600/80 px-2.5 py-1 rounded-full inline-block">
                                  Industry Solutions
                                </span>
                              </div>
                              <div className="relative z-10 space-y-3 mt-auto text-left">
                                <h4 className="text-lg font-black tracking-tight">{hoveredService?.tagline || serviceLinks[0].tagline}</h4>
                                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                                  {hoveredService?.desc || serviceLinks[0].desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  Contact
                </NavLink>
              </div>

              {/* Mobile Hamburger */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(true)}
                  aria-label="Open menu"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  <HiMenu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/*
        ── Desktop dropdown page-content blur overlay ──
        Lives OUTSIDE <header> so it only covers content BELOW the navbar.
        z-40 = below the dropdown panel (z-50) but above page content.
        pointer-events-none so it doesn't block mouse events on the dropdown.
      */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 bottom-0 bg-slate-950/20 backdrop-blur-md z-40 pointer-events-none hidden md:block"
            style={{ top: `${headerHeight}px` }}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile Backdrop Overlay ── */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      {/* ── Right-to-Left Slide Drawer ── */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 z-[70]
          bg-white shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out
          md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Logo" className="h-9 w-auto" />
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-4 pt-6 space-y-1 flex-1 overflow-y-auto">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-base font-medium transition-colors
              ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-base font-medium transition-colors
              ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}`
            }
          >
            About
          </NavLink>

          {/* Mobile Services Accordion — uses its own separate state */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors
                ${mobileServicesOpen ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}`}
            >
              <span>Services</span>
              <HiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden pl-4"
                >
                  {serviceLinks.map((service) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                        ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`
                      }
                    >
                      <span className="text-blue-500">{service.icon}</span>
                      {service.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Contact
          </NavLink>
        </nav>

        <div className="px-5 py-6 border-t border-gray-100 space-y-4">
          <button className="w-full btn-primary">Get Started</button>
          <div className="flex items-center space-x-3">
            <a href="tel:+918070004400" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaPhoneAlt size={14} />
            </a>
            <a href="mailto:info@eejak.com" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaEnvelope size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaLinkedinIn size={14} />
            </a>

            <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <BsTwitterX size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;