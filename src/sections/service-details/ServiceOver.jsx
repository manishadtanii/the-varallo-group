import React from "react";

const ServiceOver = ({data}) => {
  const { title, pera } = data
  return (
    <section className=" bg-white">
      <div className="container-fluid">
        <div className="md:flex  items-center gap-10">
          {/* Image Section */}
          <div className="text-end md:order-2 md:w-[30%]">
            <img
              src="/service-over.png" // image in public folder
              alt="Service Overview"
              className="w-full max-w-xl mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="md:order-1 md:w-[60%]">
            <div className="md:flex justify-between items-end gap-10">
              <h2 className="text-h2 font-parkinsans">
                Service <br className="hidden md:block" /> Overview
              </h2>
              <p className="md:text-end text-base md:text-[32px] text-tertiary md:mt-6 font-medium font-manrope leading-10">
                {title}
              </p>
            </div>
            {pera.map((text, index) => (
              <p className="md:mt-6 text-gray-700 text-base leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOver;
