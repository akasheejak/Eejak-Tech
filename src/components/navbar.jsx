import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/image/logo.png";
import { BsTwitterX } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceLinks = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "Mobile App Development", path: "/services/mobile-development" },
    { name: "SEO Services", path: "/services/seo-services" },
    { name: "DevOps Services", path: "/services/devops" },
    { name: "AI & ML Solutions", path: "/services/ai-ml" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ── Fixed Header (Topbar + Navbar) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          isScrolled ? "md:-translate-y-[53px]" : "translate-y-0"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-white text-gray-700 py-3 hidden md:block border-b border-gray-100 shadow-sm">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[14px] font-semibold">
            {/* Left: Contact Info */}
            <div className="flex items-center space-x-10">
              <a
                href="tel:+918070004400"
                className="flex items-center space-x-2.5 hover:text-blue-600 transition-colors group"
              >
                <FaPhoneAlt className="text-blue-600 text-[14px] group-hover:rotate-12 transition-transform" />
                <span className="tracking-wide">+91 807000 4400</span>
              </a>
              <a
                href="mailto:info@eejak.com"
                className="flex items-center space-x-2.5 hover:text-blue-600 transition-colors group"
              >
                <FaEnvelope className="text-blue-600 text-[14px] group-hover:-translate-y-0.5 transition-transform" />
                <span className="tracking-wide">info@eejak.com</span>
              </a>
            </div>

            {/* Right: Social Media */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="https://in.linkedin.com/company/eejak-technologies"
                target="_blank"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
              >
                <BsTwitterX size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="glass-nav">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <img src={logo} alt="Logo" className="h-12 w-auto" />
                </NavLink>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  About
                </NavLink>
                <div 
                  className="relative group"
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

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 pt-4"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2">
                          {serviceLinks.map((service) => (
                            <NavLink
                              key={service.path}
                              to={service.path}
                              className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {service.name}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
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

      {/* ── Backdrop Overlay ── */}
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
          bg-white shadow-2xl
          flex flex-col
          transition-transform duration-300 ease-in-out
          md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
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

        {/* Drawer Links */}
        <nav className="flex flex-col px-4 pt-6 space-y-1 flex-1">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-base font-medium transition-colors
              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-base font-medium transition-colors
              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>
          {/* Services with Sub-menu */}
          <div className="space-y-1">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors
                ${isServicesOpen ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}
              `}
            >
              <span>Services</span>
              <HiChevronDown className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-4"
                >
                  {serviceLinks.map((service) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                    >
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

        {/* Drawer Footer CTA & Info */}
        <div className="px-5 py-6 border-t border-gray-100 space-y-6">
          <button className="w-full btn-primary">Get Started</button>

          <div className="space-y-4 pt-2">
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="tel:+918070004400"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaPhoneAlt size={14} />
              </a>
              <a
                href="mailto:info@eejak.com"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaEnvelope size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <BsTwitterX size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
