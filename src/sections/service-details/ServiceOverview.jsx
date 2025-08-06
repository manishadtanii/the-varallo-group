import React from "react";
import OverviewCard from "../../components/OverviewCard";

const ServiceOverview = ({ data }) => {
  return (
    <section className="bg-gradient-to-br from-[#1e90ff] to-[#1ca9c9] text-white py-20 px-4 md:px-16">
      <div className="container-fluid">
        <h2 className="text-center font-parkinsans text-h2 mb-10">
          Service Overview
        </h2>
        <div className="max-w-7xl m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {data.map((service, index) => (
              <OverviewCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
