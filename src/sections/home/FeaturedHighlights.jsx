import React from "react";
import Button from "../../components/Button";

const data = [
  {
    title: "Nationwide Reach. Local Expertise.",
    text: "With trusted professionals across all 50 states, we offer personalized court reporting and legal services backed by decades of regional expertise.",
    img: "./featured-1.jpg",
    link: "https://example.com/learn-more",
    btnText: "Learn More",
  },
  {
    title: "One Team. Multiple Solutions.",
    text: "From certified reporting to administrative and business support, our integrated team delivers a full spectrum of services customized to your firm’s needs.",
    img: "./featured-2.jpg",
    link: "https://example.com/learn-more",
    btnText: "Learn More",
  },
  {
    title: "Tech-Driven. People-Focused.",
    text: "We create purposeful, on-brand content that connects with your audience at every touchpoint. From creative direction and storyboarding.",
    img: "./featured-3.jpg",
    link: "https://example.com/learn-more",
    btnText: "Learn More",
  },
];

export default function FeaturedHighlights() {
  return (
    <section className="bg-grad  text-white">
      <div className="container-fluid space-y-16">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
            data-aos="fade-up"
            data-aos-delay={`${100 + idx * 100}`}
          >
            <div className="md:w-1/2">
              <h2 className="text-h2 font-medium font-parkinsans mb-4">
                {item.title}
              </h2>
              <p className="text-[#FFFFFFA1] mb-6 font-manrope">{item.text}</p>
              <Button link={item.link} text={item.btnText} key={idx} />
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
