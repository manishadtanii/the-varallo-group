import React from "react";
import Button from "./Button"; // Assuming Button is a custom component in your project
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[url('https://the-varallo-group.vercel.app/footer-bg.jpg')] bg-cover bg-center text-white relative pb-[250px] overflow-hidden">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto px-6  text-center">
          <h2 className="text-h1 font-medium font-parkinsans mb-5 text-black" data-aos="fade-up">
            Join hands with experience that delivers.
          </h2>

          <div className="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="">
            <Button arrowClass="m" text="Get Started For Free" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left  mt-20">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <img src="./logo-black.png" alt="Logo" className="w-40 mb-4" />
              <p className="text-tertiary font-manrope text-xl mb-4">
               <a href="">
                 34 Grafton Street, Suite 2 <br />
                Millbury, MA 01527
               </a>
              </p>
              {/* <div className="rounded-full font-manrope  px-4 py-2 text-white bg-black inline-block">
                <a href="mailto:info@thevarallogroup.com" className="text-base">
                  info@thevarallogroup.com
                </a>
              </div> */}
              {/* <select className="bg-black border border-white rounded px-3 py-1">
              <option>English</option>
              <option>Spanish</option>
            </select> */}
            </div>

            {/* Middle Links */}
            <div className="flex flex-col items-center">
              <div className="">
                <h4 className="text-p lg:text-[28px] font-medium mb-8 font-manrope text-black">
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-200">
                <li>
                  <Link
                    className="font-manrope text-xl font-medium text-black"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-manrope text-xl font-medium text-black"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-manrope text-xl font-medium text-black"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-manrope text-xl font-medium text-black"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-manrope text-xl font-medium text-black"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-manrope text-xl font-medium text-black"
                    to="/legal"
                  >
                    Legal Policies
                  </Link>
                </li>
              </ul>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center">
              <div className="">
                <h4 className="text-p lg:text-[28px] font-medium mb-8 font-manrope text-black">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-black rounded-full w-10 h-10 text-center text-xl leading-10"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a
                  href="#"
                  className="bg-black rounded-full w-10 h-10 text-center text-xl leading-10"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="bg-black rounded-full w-10 h-10 text-center text-xl leading-10"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-black rounded-full w-10 h-10 text-center text-xl leading-10"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Watermark Text */}
      <div className="text-[320px] font-manrope font-medium absolute bottom-[-100px] right-0 opacity-10">©TVG - 2025</div>
    </footer>
  );
}
