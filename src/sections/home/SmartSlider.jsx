import React from "react";
import Slider from "react-slick";

import Arrow from "../../components/Arrow";
import Button from "../../components/Button";

const smartData = [
  {
    title: "TVG Management",
    desc: "Agency management support to streamline operations and boost profitability.",
    image: "smart-1.jpg",
  },
  {
    title: "TVG Reporting",
    desc: "Court reporting and legal videography across the Northeast and beyond.",
    image: "smart-2.jpg",
  },
  {
    title: "TVG Streaming",
    desc: "We believe in delivering results — it’s a strategic approach.",
    image: "smart-3.jpg",
  },
  {
    title: "TVG Management",
    desc: "Agency management support to streamline operations and boost profitability.",
    image: "smart-1.jpg",
  },
  {
    title: "TVG Reporting",
    desc: "Court reporting and legal videography across the Northeast and beyond.",
    image: "smart-2.jpg",
  },
  {
    title: "TVG Streaming",
    desc: "We believe in delivering results — it’s a strategic approach.",
    image: "smart-3.jpg",
  },
  {
    title: "TVG Management",
    desc: "Agency management support to streamline operations and boost profitability.",
    image: "smart-1.jpg",
  },
  {
    title: "TVG Reporting",
    desc: "Court reporting and legal videography across the Northeast and beyond.",
    image: "smart-2.jpg",
  },
  {
    title: "TVG Streaming",
    desc: "We believe in delivering results — it’s a strategic approach.",
    image: "smart-3.jpg",
  },
  {
    title: "TVG Management",
    desc: "Agency management support to streamline operations and boost profitability.",
    image: "smart-1.jpg",
  },
  {
    title: "TVG Reporting",
    desc: "Court reporting and legal videography across the Northeast and beyond.",
    image: "smart-2.jpg",
  },
  {
    title: "TVG Streaming",
    desc: "We believe in delivering results — it’s a strategic approach.",
    image: "smart-3.jpg",
  },
  {
    title: "TVG Management",
    desc: "Agency management support to streamline operations and boost profitability.",
    image: "smart-1.jpg",
  },
  {
    title: "TVG Reporting",
    desc: "Court reporting and legal videography across the Northeast and beyond.",
    image: "smart-2.jpg",
  },
  {
    title: "TVG Streaming",
    desc: "We believe in delivering results — it’s a strategic approach.",
    image: "smart-3.jpg",
  },
  {
    title: "TVG Management",
    desc: "Agency management support to streamline operations and boost profitability.",
    image: "smart-1.jpg",
  },
  {
    title: "TVG Reporting",
    desc: "Court reporting and legal videography across the Northeast and beyond.",
    image: "smart-2.jpg",
  },
  {
    title: "TVG Streaming",
    desc: "We believe in delivering results — it’s a strategic approach.",
    image: "smart-3.jpg",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" cursor-pointer absolute -bottom-12 right-[calc(50%-3rem)] z-10"
      onClick={onClick}
    >
      <Arrow customClass={"bg-secondary "} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute -bottom-12 left-[calc(50%-3rem)] z-10"
      onClick={onClick}
    >
      <Arrow customClass={"bg-secondary rotate-180"} />
    </div>
  );
}

export default function SmartSlider() {
const settings = {
  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000, // 3 seconds
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
  ],
};




  return (
    <section className="bg-gradient-to-br from-[#0052B9] to-[#38ABD0] text-white py-20 relative">
        <img src="" alt="" />
      <div className="container- ps-[100px]">
        <div className="flex items-stretch">
          <div className="md:w-[40%]  flex flex-col justify-between  px-6" >
            <div className="" data-aos="fade-up">
                <h2 className="text-h2 font-medium leading-tight mb-4">
              Smart Support.
              <br />
              Seamless Solutions.
            </h2>

            <div className="flex items-center gap-2 mb-8">
              <Button
                text="Schedule a Consultation"
                color={"text-white"}
                arrowClass={"sd"}
                link={"/contact"}
              />
            </div>
            </div>

            <p className="text-white font-manrope text-xl md:max-w-[500px]" data-aos="fade-up" data-aos-delay="1000">
              At The Varallo Group, our services are built to simplify,
              strengthen and scale your operations. Whether you’re a court
              reporting firm, law practice or professional organization, our
              expertise meets your needs right where you are and right when you
              need it.
            </p>
          </div>

          <div className="md:w-[60%]">
            <div className="relative">
              <Slider {...settings}>
                {smartData.map((item, i) => (
                  <div key={i} className="px-4">
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-[30px]"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex items-end justify-start p-4">
                        <div className="p-4 bg-black/50 backdrop-blur-md text-white rounded-xl w-2/4">
                          <h4 className="font-medium text-p font-manrope mb-1">
                            {item.title}
                          </h4>
                          <p className="font-medium text-base leading-6 text-[#FFFFFFA1]">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
