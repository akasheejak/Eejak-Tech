import React, { useState } from 'react';
import { FaArrowRight, FaUsers, FaChartBar, FaCogs, FaGraduationCap, FaShoppingCart, FaFileAlt } from 'react-icons/fa';

const ServiceExpert = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const solutions = [
    {
      title: "LMS Solution",
      desc: "Plan courses and deliver captivating training content with our powerful learning platforms.",
      icon: <FaGraduationCap size={32} />,
      size: "col-span-1 md:col-span-3",
      bg: "bg-blue-600",
      textColor: "text-white"
    },
    {
      title: "HRM Solution",
      desc: "Streamline HR processes by automating hiring, payroll, and performance tracking.",
      icon: <FaUsers size={32} />,
      size: "col-span-1 md:col-span-3",
      bg: "bg-slate-900",
      textColor: "text-white"
    },
    {
      title: "CRM Solution",
      desc: "Track leads and manage customer relationships to boost sales and engagement.",
      icon: <FaChartBar size={32} />,
      size: "col-span-1 md:col-span-3",
      bg: "bg-blue-50",
      textColor: "text-gray-900"
    },
    {
      title: "ERP Solution",
      desc: "Optimize global operations with real-time data and automated tasks.",
      icon: <FaCogs size={32} />,
      size: "col-span-1 md:col-span-3",
      bg: "bg-indigo-600",
      textColor: "text-white"
    },
    {
      title: "POS Solution",
      desc: "Integrate sales, inventory, and billing seamlessly for retail success.",
      icon: <FaShoppingCart size={28} />,
      size: "col-span-1 md:col-span-2",
      bg: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "CMS Solution",
      desc: "Manage and publish content easily without coding requirements.",
      icon: <FaFileAlt size={40} />,
      size: "col-span-1 md:col-span-4",
      bg: "bg-white",
      textColor: "text-gray-900",
      isWide: true
    }
  ];

  return (
    <div className="py-0 space-y-12">
      {/* ── Header Section ── */}
      <div className="max-w-3xl space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wider uppercase">
          Service Expert
        </div>
        <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
          Smarter Systems for <span className="text-gradient">Scalable Businesses</span>
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
          Innovative platforms that simplify operations, automate workflows, and drive productivity. Trusted by global clients for digital excellence.
        </p>
      </div>

      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {solutions.map((item, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              ${item.size} rounded-[40px] p-8 md:p-12 relative overflow-hidden transition-all duration-700 cursor-pointer
              ${item.bg} ${item.textColor}
              ${item.bg === 'bg-white' ? 'border border-gray-100 shadow-sm' : ''}
              ${hoveredIndex === i ? 'shadow-2xl shadow-blue-500/20 -translate-y-1' : ''}
            `}
          >
            {/* Background Accent for white cards */}
            {item.bg === 'bg-white' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
            )}

            <div className={`relative z-10 h-full flex flex-col ${item.isWide ? 'md:flex-row md:items-center md:justify-between gap-8' : 'justify-between'}`}>
              <div className="space-y-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  item.bg === 'bg-white' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white'
                }`}>
                  {item.icon}
                </div>
                
                <div className="space-y-3">
                  <h4 className={`text-3xl font-black ${item.isWide ? 'md:text-5xl' : ''}`}>{item.title}</h4>
                  <p className={`text-lg opacity-80 leading-relaxed max-w-md ${item.isWide ? 'md:text-xl' : ''}`}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className={`pt-8 ${item.isWide ? 'md:pt-0' : ''}`}>
                <div className={`
                  w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500
                  ${item.bg === 'bg-white' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
                  ${hoveredIndex === i ? 'scale-110 rotate-[-45deg]' : ''}
                `}>
                  <FaArrowRight size={20} />
                </div>
              </div>
            </div>

            {/* Decorative pattern for dark cards */}
            {item.bg !== 'bg-white' && (
              <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4 scale-150 font-black text-9xl">
                {item.title.split(' ')[0]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceExpert;
