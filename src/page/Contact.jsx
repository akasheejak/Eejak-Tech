import React, { useState } from 'react';
import {
    FaEnvelope,
    FaUser,
    FaPaperPlane,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaFacebookF,
    FaLinkedinIn
} from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Payload:", formData);
        setFormData({ name: '', email: '', message: '' });
        setShowSuccess(true);
        // Auto-hide after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
    };

    const contactInfo = [
        {
            title: "Phone Number",
            value: "+91 807000 4400",
            link: "tel:+918070004400",
            icon: <FaPhoneAlt className="text-blue-600" size={20} />,
            desc: "Call us for immediate assistance."
        },
        {
            title: "Email Address",
            value: "info@eejak.com",
            link: "mailto:info@eejak.com",
            icon: <FaEnvelope className="text-blue-600" size={20} />,
            desc: "We usually respond within 24 hours."
        },
        {
            title: "Our Address",
            value: "H-134, Basement, Sector 63, Noida - 201301 (INDIA)",
            link: "https://maps.google.com/?q=Sector+63,+Noida",
            icon: <FaMapMarkerAlt className="text-blue-600" size={20} />,
            desc: "Visit our office for a face-to-face meeting."
        }
    ];

    const socials = [
        { icon: <FaFacebookF />, link: "#", name: "Facebook" },
        { icon: <FaLinkedinIn />, link: "https://in.linkedin.com/company/eejak-technologies", name: "LinkedIn" },
        { icon: <BsTwitterX />, link: "#", name: "Twitter" }
    ];

    return (
        <div className="py-12 space-y-12 overflow-hidden">
            {/* ── Success Modal ── */}
            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSuccess(false)}
                            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-[32px] p-8 md:p-12 shadow-2xl max-w-sm w-full text-center space-y-6"
                        >
                            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl">
                                <FaPaperPlane />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-black text-gray-900">Message Sent!</h4>
                                <p className="text-gray-600">
                                    Thank you for reaching out. Our team will get back to you shortly.
                                </p>
                            </div>
                            <button 
                                onClick={() => setShowSuccess(false)}
                                className="w-full btn-primary py-4 rounded-2xl"
                            >
                                Great!
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── Header Section ── */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-4 max-w-3xl mx-auto px-4"
            >
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Contact Us</h2>
                <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                    Let's Start a <span className="text-gradient">Conversation</span>
                </h3>
                <p className="text-gray-600 text-lg">
                    Can't find what you're looking for? Reach out to the right team and we'll get back to you shortly.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* ── Left: Contact Info ── */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="space-y-6">
                        <motion.h4
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl font-bold text-gray-900"
                        >
                            Contact Information
                        </motion.h4>
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    className="group glass-card p-6 rounded-2xl border border-gray-100 hover:border-blue-600/30 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h5 className="font-bold text-gray-900">{item.title}</h5>
                                            <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                                            <a href={item.link} target={item.title === "Our Address" ? "_blank" : "_self"} rel="noreferrer" className="text-blue-600 font-semibold hover:underline flex items-center space-x-2">
                                                <span>{item.value}</span>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className="space-y-6">
                        <motion.h4
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-2xl font-bold text-gray-900"
                        >
                            Follow Us
                        </motion.h4>
                        <div className="flex items-center gap-4">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-110 shadow-sm"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Right: Contact Form ── */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-7"
                >
                    <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-blue-500/5">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h4 className="text-3xl font-black text-gray-900">Send us a Message</h4>
                                <p className="text-gray-500">Fill out the form below and our team will reach out to you.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                        <div className="relative">
                                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Aakash "
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600/20 transition-all outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="aakash@example.com"
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600/20 transition-all outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600/20 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center space-x-3 text-lg"
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane size={18} />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

