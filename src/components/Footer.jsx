import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/image/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img src={logo} alt="Eejak Tech Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Transforming businesses with innovative IT solutions and custom software 
              development since 2013. We build the future of digital excellence.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm">
                <FaFacebookF size={16} />
              </a>
              <a href="https://in.linkedin.com/company/eejak-technologies" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm">
                <BsTwitterX size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-black text-lg mb-6 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-black text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/services/web-development" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block">Web Development</Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services/seo-services" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block">SEO Services</Link>
              </li>
              <li>
                <Link to="/services/devops" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block">DevOps Services</Link>
              </li>
              <li>
                <Link to="/services/ai-ml" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block">AI & ML Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-gray-900 font-black text-lg mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-blue-600 group-hover:text-white transition-colors" size={14} />
                </div>
                <span className="text-sm text-gray-600 leading-tight">H-134, Basement, Sector 63, Noida - 201301 (INDIA)</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <FaPhoneAlt className="text-blue-600 group-hover:text-white transition-colors" size={14} />
                </div>
                <a href="tel:+918070004400" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-semibold">+91 807000 4400</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <FaEnvelope className="text-blue-600 group-hover:text-white transition-colors" size={14} />
                </div>
                <a href="mailto:info@eejak.com" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-semibold">info@eejak.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-[0.2em] uppercase font-black text-gray-400">
          <p>&copy; 2013 - {currentYear} Eejak Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-8">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;