import React from "react";
import Button from "./Button"; // Assuming Button is a custom component in your project
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[url('https://the-varallo-group.vercel.app/footer-bg.jpg')] bg-cover bg-center text-white relative  overflow-hidden ">
      <div className="container-fluid ">
        <div className="max-w-6xl mx-auto sm:px-6 text-center">
          {/* Heading */}
          <motion.h2
            className="text-h1 font-medium font-parkinsans mb-5 text-black"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join hands with experience that delivers.
          </motion.h2>

          {/* Button */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button arrowClass="m" text="Get Started For Free" />
          </motion.div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mt-20">
            {/* Address Section */}
            <motion.div
              className="flex flex-col items-center md:items-start gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img src="/logo-black.png" alt="Logo" className="w-40 mb-4" />
              <p className="text-tertiary font-manrope text-xl md:mb-4 text-center md:text-left">
                <a href="">
                  34 Grafton Street, Suite 2 <br />
                  Millbury, MA 01527
                </a>
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col items-center text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl md:text-[28px] font-semibold md:font-medium mb-4 md:mb-8 font-manrope text-black">
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-200">
                {[
                  { label: "Home", path: "/" },
                  { label: "About Us", path: "/about" },
                  { label: "Services", path: "/services" },
                  { label: "Blogs", path: "/blogs" },
                  { label: "Contact Us", path: "/contact" },
                  // { label: "Legal Policies", path: "/legal" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      className="font-manrope text-base md:text-xl font-medium text-black"
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="">
                <h4 className="text-center md:text-left text-2xl md:text-[28px] font-semibold md:font-medium mb-4 md:mb-8 font-manrope text-black">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {["pinterest-p", "instagram", "twitter", "facebook-f"].map(
                    (icon, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="bg-black text-white rounded-full w-10 h-10 text-center text-xl leading-10"
                      >
                        <i className={`fab fa-${icon}`}></i>
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Giant Watermark Text */}
      <div className="foot-text font-manrope font-medium  opacity-5 mt-[150px] lg:mt-[250px] lg:leading-[250px]">
        ©TVG - {new Date().getFullYear()}
      </div>
    </footer>
  );
}
