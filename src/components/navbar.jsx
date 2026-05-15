import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ── Fixed Top Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
              <NavLink to="#" className="nav-link">
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

      {/* ── Backdrop Overlay ── */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
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
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
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
              ${isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
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
              ${isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="#"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Contact
          </NavLink>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="px-5 py-6 border-t border-gray-100">
          <button className="w-full btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;