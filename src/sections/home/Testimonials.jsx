// components/Testimonials.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../components/Arrow";

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
      className="absolute -bottom-14  left-1/2 transform translate-x-6 bg-blue-500 hover:bg-blue-600 text-white  rounded-full"
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
      className="absolute -bottom-14 left-1/2 transform -translate-x-12 bg-gray-200 hover:bg-gray-300 text-black  rounded-full"
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
  };

  return (
    <div className="testimonials bg-white py-20  relative text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Real Stories, Real <br />
        Success with Fintech.
      </h2>

      <div className="slider-container relative  ">
        <Slider {...settings}>
          {testimonials.map((item, i) => (
            <div key={i} className="">
              <div className="bg-white border border-blue-300 rounded-lg p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <p className="text-xl  text-tertiary">{item.name}</p>
                    <p className="text-base font-light text-tertiary">{item.role}</p>
                  </div>
                </div>
                <p className=" text-tertiary text-left  font-medium mb-6 font-manrope text-p leading-8">{item.text}</p>
                <div className=""><img src="./format_quote.png" className="w-12 ms-auto" alt="" /></div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="bg-white border border-blue-300 rounded-lg p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src='https://i.pravatar.cc/60?img=0'
                    alt="James T"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">
                      James T
                    </p>
                    <p className="text-xs text-gray-400">
                     Music Enthusiast
                    </p>
                  </div>
                </div>
                <p className="text-lg text-left text-gray-700 font-medium mb-6">
                 These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!
                </p>
                <div className="text-3xl font-bold text-left text-gray-900">
                  “
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-blue-300 rounded-lg p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src='https://i.pravatar.cc/60?img=1'
                    alt="John D"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">
                      John D
                    </p>
                    <p className="text-xs text-gray-400">
                      Music Enthusiast
                    </p>
                  </div>
                </div>
                <p className="text-lg text-left text-gray-700 font-medium mb-6">
                  These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!
                </p>
                <div className="text-3xl font-bold text-left text-gray-900">
                  “
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-blue-300 rounded-lg p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src='https://i.pravatar.cc/60?img=2'
                    alt="Jane S"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">
                      Jane S
                    </p>
                    <p className="text-xs text-gray-400">
                     Music Enthusiast
                    </p>
                  </div>
                </div>
                <p className="text-lg text-left text-gray-700 font-medium mb-6">
                 These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!
                </p>
                <div className="text-3xl font-bold text-left text-gray-900">
                  “
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-blue-300 rounded-lg p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src='https://i.pravatar.cc/60?img=0'
                    alt="James T"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">
                      James T
                    </p>
                    <p className="text-xs text-gray-400">
                     Music Enthusiast
                    </p>
                  </div>
                </div>
                <p className="text-lg text-left text-gray-700 font-medium mb-6">
                 These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!
                </p>
                <div className="text-3xl font-bold text-left text-gray-900">
                  “
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-blue-300 rounded-lg p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src='https://i.pravatar.cc/60?img=1'
                    alt="John D"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">
                      John D
                    </p>
                    <p className="text-xs text-gray-400">
                      Music Enthusiast
                    </p>
                  </div>
                </div>
                <p className="text-lg text-left text-gray-700 font-medium mb-6">
                  These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!
                </p>
                <div className="text-3xl font-bold text-left text-gray-900">
                  “
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-blue-300 rounded-lg p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src='https://i.pravatar.cc/60?img=2'
                    alt="Jane S"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">
                      Jane S
                    </p>
                    <p className="text-xs text-gray-400">
                     Music Enthusiast
                    </p>
                  </div>
                </div>
                <p className="text-lg text-left text-gray-700 font-medium mb-6">
                 These earphones make my workouts so much better! They stay in place and deliver amazing sound quality. Totally worth it!
                </p>
                <div className="text-3xl font-bold text-left text-gray-900">
                  “
                </div>
              </div>
            </div>
           
          </Slider>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
