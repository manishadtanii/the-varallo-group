import React from 'react';
import { motion } from 'framer-motion';

const WhatWeProvide = ({ data }) => {
  const { pera, tagsLeft, tagsRight } = data;

  const gradientTextStyle = {
    background: 'linear-gradient(101.12deg, #48CAE4 0%, #0070FF 176.3%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="bg-grad py-[100px] overflow-hidden text-white">
      <div className="text-center mb-10 px-5">
        <motion.h2
          className="text-h2 font-parkinsans"
          // style={gradientTextStyle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          What We Provide
        </motion.h2>

        <motion.p
          className="mt-4 text-base font-manrope md:text-xl max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={1}
        >
          {pera}
        </motion.p>
      </div>

      {/* First Marquee Line */}
      <motion.div
        className="overflow-hidden whitespace-nowrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        custom={2}
      >
        <div className="flex w-max animate-marquee space-x-10">
          {[...tagsLeft, ...tagsRight].map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-white bg-opacity-10 px-10 py-5 rounded-2xl text-white whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img src={service.icon} className="w-5" alt="" />
              <span>{service.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Second Marquee Line (Reverse) */}
      <motion.div
        className="overflow-hidden whitespace-nowrap mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        custom={3}
      >
        <div className="flex w-max animate-marquee-reverse space-x-10">
          {[...tagsRight, ...tagsLeft].map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-white bg-opacity-10 px-10 py-5 rounded-2xl text-white whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img src={service.icon} className="w-5" alt="" />
              <span>{service.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeProvide;
