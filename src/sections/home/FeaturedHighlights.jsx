import React from "react";

const data = [
  {
    title: "Nationwide Reach. Local Expertise.",
    text: "With trusted professionals across all 50 states, we offer personalized court reporting and legal services backed by decades of regional expertise.",
    img: "./featured-1.jpg",
  },
  {
    title: "One Team. Multiple Solutions.",
    text: "From certified reporting to administrative and business support, our integrated team delivers a full spectrum of services customized to your firm’s needs.",
    img: "./featured-2.jpg",
  },
  {
    title: "Tech-Driven. People-Focused.",
    text: "We create purposeful, on-brand content that connects with your audience at every touchpoint. From creative direction and storyboarding.",
    img: "./featured-3.jpg",
  },
];

export default function FeaturedHighlights() {
  return (
    <section className="bg-gradient-to-br from-[#0052B9] to-[#38ABD0] py-20 text-white">
      <div className="container-fluid space-y-16">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                {item.title}
              </h2>
              <p className="text-white/90 mb-6">{item.text}</p>
              <button className="bg-gradient-to-r from-[#48CAE4] to-[#0070FF] px-6 py-2 rounded-full text-white font-medium">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
