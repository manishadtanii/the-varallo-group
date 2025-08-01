import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stats = [
  {
    title: "50+",
    description: "Decades of expertise led by Nancy  trusted by firms nationwide.",
  },
  {
    title: "99%",
    description: "Trusted accuracy in transcripts and deliverables, every time.",
  },
 {
    title: "50+",
    description: "Decades of expertise led by Nancy  trusted by firms nationwide.",
  },
  {
    title: "99%",
    description: "Trusted accuracy in transcripts and deliverables, every time.",
  },
   {
    title: "50+",
    description: "Decades of expertise led by Nancy  trusted by firms nationwide.",
  },
  {
    title: "99%",
    description: "Trusted accuracy in transcripts and deliverables, every time.",
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  return (
    <section className="why-choose">
      <div className="container-fluid">
        {/* Left Content */}
        <div className="flex justify-between items-end gap-20">
          <h1 className="text-h2 font-parkinsans font-medium ">
            Experience You Trust. <br /> Support You Deserve.
          </h1>
          <p className="text-gray-600 mt-6 max-w-[40%] font-manrope text-base">
            Every brand starts with a vision — and we’re here to bring yours to
            life. We listen, collaborate, and transform your ideas into bold,
            intentional design.
          </p>
        </div>

        {/* Image & Mid Content */}
        <div className="flex  gap-20 items-end mt-10">
          <div className="relative w-[60%]">
            <img src="./why-choose.png" alt="hero" className="w-full" data-aos="fade-right"/>
          </div>
          <div className="w-[40%] flex flex-col justify-end ">
            {/* Buttons */}
            <div className="flex gap-4">
              <div className="rounded-xl p-4 text-white text-sm font-medium bg-btn  flex flex-col justify-between">
                <p className="font-manrope text-xl leading-8">Decades of expertise led by Nancy  trusted by firms nationwide.</p>
                <span className="text-base mt-5 font-manrope leading-8">Learn More</span>
              </div>
              <div className="rounded-xl p-4 text-white text-sm font-medium bg-btn  flex flex-col justify-between">
                <p className="font-manrope text-xl leading-8">Precision in every word. Because in law, details matter.</p>
                <span className="text-base mt-5 font-manrope leading-8">Learn More</span>
              </div>
            </div>
            {/* Vertical Slider */}
            <div className="vertical-slider mt-10">
              <Slider {...settings}>
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className=""
                  >
                    <div className="flex justify-between p-4 ps-0 ">
                    <h3 className="text-h3 font-medium font-parkinsans">{stat.title}</h3>
                    <p className="text-black font-manrope text-base max-w-[300px]">{stat.description}</p>
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
};

export default HeroSection;
