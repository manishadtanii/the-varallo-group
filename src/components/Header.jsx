import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

// import logo from "../assets/logo.png"; // Adjust as needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src='/logo.png' alt="Logo" className="h-14" />
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between flex-1 gap-8 mx-auto">
          <nav className="flex gap-6 text-sm font-medium mx-auto">
            <Link className="font-manrope" to="/">Home</Link>
            <Link className="font-manrope" to="/about">About Us</Link>
            <Link className="font-manrope" to="/services">Services</Link>
            <Link className="font-manrope" to="/blog">Blog</Link>
            <Link className="font-manrope" to="/contact">Contact Us</Link>
            <Link className="font-manrope" to="/legal">Legal Policies</Link>
          </nav>

          <div className="flex gap-3">
            <Link
              to="/resources"
              className="border border-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition tran"
            >
              Resource Portal
            </Link>
            <Link
              to="/pay"
              className="border border-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              Pay Invoice
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link to="/legal" onClick={() => setIsOpen(false)}>Legal Policies</Link>
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/resources"
              className="border border-white rounded-full px-5 py-2 text-sm text-center hover:bg-white hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              Resource Portal
            </Link>
            <Link
              to="/pay"
              className="border border-white rounded-full px-5 py-2 text-sm text-center hover:bg-white hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              Pay Invoice
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
