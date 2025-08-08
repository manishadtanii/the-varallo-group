// components/Testimonials.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../components/Arrow";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "James T",
    role: "Music Enthusiast",
    text: "These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!",
    image: "https://i.pravatar.cc/60?img=1",
  },
  {
    name: "James T",
    role: "Music Enthusiast",
    text: "These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!",
    image: "https://i.pravatar.cc/60?img=2",
  },
  {
    name: "James T",
    role: "Music Enthusiast",
    text: "These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!",
    image: "https://i.pravatar.cc/60?img=3",
  },
  {
    name: "James T",
    role: "Music Enthusiast",
    text: "These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!",
    image: "https://i.pravatar.cc/60?img=1",
  },
  {
    name: "James T",
    role: "Music Enthusiast",
    text: "These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!",
    image: "https://i.pravatar.cc/60?img=2",
  },
  {
    name: "James T",
    role: "Music Enthusiast",
    text: "These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!",
    image: "https://i.pravatar.cc/60?img=3",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute -bottom-14  left-1/2 transform translate-x-6 bg-btn hover:bg-blue-600 text-black  rounded-full"
      onClick={onClick}
    >
      <Arrow customClass="" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute -bottom-14 left-1/2 transform -translate-x-12 bg-btn hover:bg-gray-300 text-black  rounded-full"
      onClick={onClick}
    >
      <Arrow customClass="rotate-180" />
    </button>
  );
}

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
     responsive: [
    {
      breakpoint: 768, // tablet & below
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576, // mobile
      settings: {
        slidesToShow: 1
      }
    }
  ]
  };

  return (
    <div className="testimonials bg-white pb-10 relative text-center">
      <div className="container-fluid">
        <motion.h2
          className="text-h2 font-medium font-parkinsans text-gray-900 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Real Stories, Real <br />
          Success with Fintech.
        </motion.h2>

        <motion.div
          className="slider-container relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-blue-300 rounded-lg p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="text-left">
                      <p className="text-xl text-tertiary">{item.name}</p>
                      <p className="text-base font-light text-tertiary">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-tertiary text-left font-medium mb-6 font-manrope text-p leading-8">
                    {item.text}
                  </p>
                  <div>
                    <img
                      src="./format_quote.png"
                      className="w-12 ms-auto"
                      alt=""
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
