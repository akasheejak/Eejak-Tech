import React from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaBuilding, FaUserTie } from 'react-icons/fa';

const Contact = () => {
  const inquiries = [
    {
      title: "Vendor Enquiries",
      email: "manikandan.t@codingmart.com",
      icon: <FaBuilding className="text-blue-600" size={20} />,
      desc: "For all vendor-related partnerships and procurement."
    },
    {
      title: "HR Enquiries",
      email: "hr@codingmart.com",
      icon: <FaUserTie className="text-blue-600" size={20} />,
      desc: "Careers, internships, and people-related queries."
    },
    {
      title: "Business Enquiries",
      email: "sales@codingmart.com",
      icon: <FaEnvelope className="text-blue-600" size={20} />,
      desc: "Collaborate with us for your next big project."
    }
  ];

  return (
    <div className="py-20 space-y-20">
      {/* ── Header Section ── */}
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Contact Us</h2>
        <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
          Let's Start a <span className="text-gradient">Conversation</span>
        </h3>
        <p className="text-gray-600 text-lg">
          Can't find what you're looking for? Reach out to the right team and we'll get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* ── Left: Enquiry Categories ── */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-gray-900">Reach the Right Department</h4>
            <div className="space-y-4">
              {inquiries.map((item, i) => (
                <div key={i} className="group glass-card p-6 rounded-2xl border border-gray-100 hover:border-blue-600/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-bold text-gray-900">{item.title}</h5>
                      <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                      <a href={`mailto:${item.email}`} className="text-blue-600 font-semibold hover:underline flex items-center space-x-2">
                        <span>{item.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Contact Form ── */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-blue-500/5">
            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-3xl font-black text-gray-900">Send us a Message</h4>
                <p className="text-gray-500">Fill out the form below and our team will reach out to you.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="John Doe" 
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
                        placeholder="john@example.com" 
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="How can we help you?" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center space-x-3 text-lg">
                  <span>Send Message</span>
                  <FaPaperPlane size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;