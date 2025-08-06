import React from 'react';
import { PhoneCall } from 'lucide-react';

const services = [
  { icon: "/fruit-citrus.png", title: 'Branding & marketing help' },
  { icon: "/fruit-citrus.png", title: 'Vendor coordination' },
  { icon: "/fruit-citrus.png", title: 'Transcript & exhibit handling' },
  { icon: "/fruit-citrus.png", title: 'Billing, collections & payroll' },
  { icon: "/fruit-citrus.png", title: 'Client onboarding assistance' },
  { icon: "/fruit-citrus.png", title: 'Scheduling and Calendar Support' },
  { icon: "/fruit-citrus.png", title: 'Operations reporting & performance' },
];

const WhatWeProvide = ({data}) => {
  const {pera, tagsLeft, tagsRight} =data
  const gradientTextStyle = {
    background: 'linear-gradient(101.12deg, #48CAE4 0%, #0070FF 176.3%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className="bg-grad py-[100px] overflow-hidden text-white">
      <div className="text-center mb-10 px-5">
        <h2 className="text-h2 font-parkinsans">
          What We Provide
        </h2>
        <p className="mt-4 text-base font-manrope md:text-xl max-w-3xl mx-auto">
          {pera}
        </p>
      </div>

      {/* First Marquee Line */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex w-max animate-marquee space-x-10">
          {[...tagsLeft, ...tagsRight].map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white bg-opacity-10 px-10 py-5 rounded-2xl text-white whitespace-nowrap"
            >
              <img src={service.icon} className='w-5' alt="" />
              <span>{service.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Marquee Line (Reverse) */}
      <div className="overflow-hidden whitespace-nowrap mt-10">
        <div className="flex w-max animate-marquee-reverse space-x-10">
          {[...tagsRight, ...tagsLeft].map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white bg-opacity-10 px-10 py-5 rounded-2xl text-white whitespace-nowrap"
            >
             <img src={service.icon} className='w-5' alt="" />
              <span>{service.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
