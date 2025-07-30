import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
// import heroImage from "../assets/hero-image.jpg"; // Replace with your actual image

const Hero = () => {
  return (
    <section className="hero bg-black text-white relative overflow-hidden">
    

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 items-center relative z-10">
        {/* Text Content */}
        <div className="container-fixed">
          <h1 className="text-4xl sm:text-5xl  font-parkinsans leading-tight font">
            Your Legal Support Partner.
            <br />
            With You At Every Step.
          </h1>
          <p className="text-gray-300  font-monospace text-xl mt-4">
            From expert court reporting to operations, we’re the steady hand
            behind your firm’s everyday success.
          </p>

          {/* CTA */}
          <div className="mt-4">
            
          <Button text="Schedule a Consultation" link="/pay" />
          </div>
          {/* Lower Card on Background */}
          <div className="relative z-10 mt-16">
            <div className="font-manrope  bg-[#FFFFFF0A] rounded-xl px-6 py-4 text-white text-sm shadow-lg flex flex-col justify-between gap-2">
              <span className="text-xl"> 
                Specialized Expertise in Legal, Non-profit and Professional
                Services
              </span>
              <a href="#" className=" text-[16px] whitespace-nowrap text-end">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Image and Info Cards */}
        <div className="mt-12 lg:mt-0 relative flex justify-center">
          <div className="relative">
            {/* Main Image */}
            <img
              src="./hero.png" // Replace with your actual image path
              alt="Professional"
              className="w-full  "
            />

            {/* Top Floating Card
            <div className="absolute top-4 left-[-80px] w-44 bg-gradient-to-b from-[#1a1a1a] to-[#333] rounded-xl px-4 py-3 text-sm text-white shadow-md hidden md:block">
              <div className="font-bold text-lg">200+<br />Law Firms</div>
              <p className="text-gray-400 text-xs mt-1">And Legal Clients Served</p>
            </div>

            Bottom Floating Card
            <div className="absolute bottom-[-40px] right-[-60px] w-40 bg-gradient-to-b from-[#1a1a1a] to-[#333] rounded-xl px-4 py-3 text-sm text-white shadow-md hidden md:block">
              <div className="font-bold text-lg">50+ Years</div>
              <p className="text-gray-400 text-xs mt-1">Supporting the Legal Industry</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
