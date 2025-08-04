import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "TVG Management",
    content:
      "It starts from a very simple goal in mind and that's to serve your clients really well and grow at the same time. Running a court reporting firm involves more than just capturing the record, it demands consistent administrative precision, strong client communication and an eye on the bigger business picture. That’s where we come in. TVG Management service becomes your backbone, which helps you manage your day to day so you can actually focus on what really matters the most, which is your clients and your growth. ",
    link: "/services/tvg-management",
    img: "./service-1.png",
  },
  {
    title: "TVG Reporting",
    content:
      "In the current legal world, capturing the legal record with precision and professionalism is the cornerstone of any successful court case. At TVG Reporting, we provide firms with dependable court reporters who uphold the highest standards of accuracy, neutrality and timeliness. Whether in-person or remote, our experienced reporters deliver transcripts you can trust, allowing attorneys and legal professionals to focus on advocacy without worrying about the details of documentation.",
    link: "/services/tvg-management",
    img: "./service-2.png",
  },
  {
    title: "TVG Stream",
    content:
      "Remote proceedings have quickly moved from an option to a necessity in today’s evolving legal landscape. But with high stakes and tight schedules, no firm can afford technical hiccups or disjointed setups. TVG Stream ensures your virtual depositions are handled with the same precision and professionalism as in-person proceedings. From multi-party sessions to quick one-on-ones, we bring you secure platforms, real-time support and seamless experiences, so your team can stay focused on what truly matters: making your case heard.  ",
    link: "/services/tvg-management",
    img: "./service-3.png",
  },
  {
    title: "TVG Books",
    content:
      "Your business runs on more than just great service, it runs on healthy numbers. Without clear financial visibility, even the most successful agencies can struggle with cash flow, tax prep and long-term planning. That’s why smart bookkeeping and accurate accounting aren’t just nice to have, they’re essential. At TVG Books, we get the behind-the-scenes pressures that you face. Whether you're chasing down client payments, trying to stay compliant or just need a better handle on your books, our team is here to simplify your financial life.",
    link: "/services/tvg-management",
    img: "./service-1.png",
  },
  {
    title: "TVG Creative",
    content:
      "Whether you’re launching a new venture or refreshing your digital presence, how you show up matters. In today’s fast-moving world, first impressions aren’t just visual, they're strategic. That’s where TVG Creative steps in. We provide full-spectrum digital marketing, branding and design services customized for the legal and B2B industries. From law firm websites to startup identity kits, we help you cut through the noise, attract the right audience and communicate your value with clarity and style.",
    link: "/services/tvg-management",
    img: "./service-2.png",
  },
  {
    title: "TVG Connect",
    content:
      "Trade groups and professional associations thrive on connection, coordination and clear leadership but managing all the moving parts can be overwhelming. From day-to-day operations to annual conferences, it takes more than passion to keep members engaged and everything running smoothly. That’s where TVG Connect steps in. We specialize in association management for professional, legal and compliance-driven industries, offering customized solutions that keep your organization efficient, professional and people-focused.",
    link: "/services/tvg-management",
    img: "./service-3.png",
  },
  {
    title: "TVG Command",
    content:
      "As the legal industry evolves, so should your technology. From court reporting to case production, efficiency and accuracy are everything. That’s why more reporting firms are turning to AI-powered platforms that don’t just keep up, they lead. TVG Command helps you modernize your transcription workflow with cutting-edge platform solutions. As a U.S. sales partner for Claudio AI and other legal-first platforms, we connect you with tools designed to scale your reporting business, reduce manual work and improve turnaround times without sacrificing accuracy.",
    link: "/services/tvg-management",
    img: "./service-2.png",
  },
  {
    title: "TVG Verify",
    content:
      "Great hires start with great data. Whether you're an employer, association or staffing agency, the cost of a bad hire can be high not just financially, but reputationally. That’s why trusted, legally compliant screening is essential. TVG Verify partners with USAFact to deliver reliable, scalable background check solutions that meet today’s fast-paced hiring demands. From identity verification to global criminal checks, we make it easy to hire with confidence without slowing down your process.",
    link: "/services/tvg-management",
    img: "./service-3.png",
  },
];

const ServicesGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-10">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {services.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="relative group rounded-xl overflow-hidden block min-h-[400px]"
          >
            {/* Image */}
            <div className="absolute w-full h-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-[25px]"
              />

              {/* Title & arrow at bottom (always visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xl z-10 flex items-center justify-between w-full">
                <h3 className="font-normal font-parkinsans text-p sm:text-[40px]">
                  {item.title}
                </h3>
                <img src="l-arrow.png" className="max-w-[100px]" alt="" />
              </div>
            </div>

            {/* Hover content overlay */}
            <div className="absolute inset-0 p-4 rounded-[25px] bg-black/80 backdrop-blur-sm opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 z-20 flex flex-col justify-between">
              <div>
                <h3 className="font-normal font-parkinsans text-p sm:text-[40px] text-white mb-2">
                  {item.title}
                </h3>
                <p className="md:text-xl mb-4 font-manrope text-white">
                  {item.content}
                </p>
              </div>
              <img src="l-arrow.png" className="max-w-[100px] ml-auto" alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
