import React from "react";
import { useParams } from "react-router-dom";
import ServiceOver from "../sections/service-details/ServiceOver";
import WhatWeProvide from "../sections/service-details/WhatWeProvide";
import TVGEffect from "../sections/service-details/TVGEffect";
import ServiceOverview from "../sections/service-details/ServiceOverview";

function ServiceDetails() {
  const { serviceId } = useParams();

  const data = {
    "tvg-management": {
      hero: {
        title: "Agency Management Services for Court Reporting Firms",
        pera: [
          "It starts from a very simple goal in mind and that's to serve your clients really well and grow at the same time. Running a court reporting firm involves more than just capturing the record, it demands consistent administrative precision, strong client communication and an eye on the bigger business picture. That’s where we come in.",
        ],
        link: "link",
        images: ["image-1.jpg", "image-1.jpg", "image-1.jpg", "image-1.jpg"],
      },
      Overview: {
        title: "Efficiency You Can Count On",
        pera: [
          "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm’s reputation. That’s where TVG Management comes in. We help you as your supportive operational partner, providing customized administrative support that is specifically designed for court reporting firms.",
          "If you’re looking to expand your business, facing staffing shortages, or simply wanting to free up time for strategic growth, our experienced team steps in smoothly for your needs. We take care of all the behind the scenes mess so you can stay focused on delivering exceptional service to your clients.",
        ],
      },
      Provide: {
        pera: "We take over your back office so you can focus on delivering top-tier client service. From scheduling to payroll, we streamline the chaos behind the scenes.",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Branding & marketing help" },
          { icon: "/fruit-citrus.png", text: "Vendor coordination" },
          { icon: "/fruit-citrus.png", text: "Transcript & exhibit handling" },
          { icon: "/fruit-citrus.png", text: "Billing, collections & payroll" },
          { icon: "/fruit-citrus.png", text: "Client onboarding assistance" },
        ],
        tagsRight: [
          { icon: "/fruit-citrus.png", text: "Scheduling and Calendar Support" },
          { icon: "/fruit-citrus.png", text: "Operations reporting & performance" },
          { icon: "/fruit-citrus.png", text: "Vendor coordination" },
          { icon: "/fruit-citrus.png", text: "Branding & marketing help" },
          { icon: "/fruit-citrus.png", text: "Client onboarding assistance" },
        ],
      },
      TvgEffect: {
        title:"The TVG effect",
        pera:"Every brand starts with a vision — and we’re here to bring yours to life. We listen, collaborate, and transform your ideas into bold, intentional design. Whether you're launching a product",
        impactStats: [
          { number: ">1M", label: "Pages transcribed" },
          { number: "60%", label: "Faster payroll cycles" },
          { number: "77%", label: "Fewer missed deadlines" },
        ],
      },
      Overview2: [
        {
          icon: "/calendar-icon.png",
          title: "End to End Scheduling & Communication Management",
          description:
            "Varallo handles appointment scheduling, calendar coordination, email monitoring and phone answering, which ensures your agency runs smoothly and stays responsive.",
          classBorder: "md:border-e md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Seamless Transcript & Exhibit Processing",
          description:
            "From accurate transcript formatting to exhibit marking, printing, binding and final delivery, we manage it all with precision and speed.",
          classBorder: "md:border-s md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Streamlined Invoicing & Collections",
          description:
            "Get paid on time with professional invoice generation, client billing follow-ups and streamlined collections support.",
          classBorder: "md:border-e md:border-t",
        },
        {
          icon: "/calendar-icon.png",
          title: "Accurate Payroll & Bookkeeping",
          description:
            "We process reporter payments and manage day-to-day bookkeeping, helping you maintain financial clarity and control.",
          classBorder: "md:border-s md:border-t",
        },
      ],
    },
  };

  const content = data[serviceId];

  if (!content) {
    return <div className="text-center py-10 text-red-500 text-lg">Service not found</div>;
  }

  return (
    <div id="service-details" className="space-y-16">
      <ServiceOver data={content.Overview} />
      <WhatWeProvide data={content.Provide} />
      <TVGEffect data={content.TvgEffect} />
      <ServiceOverview data={content.Overview2} />
    </div>
  );
}

export default ServiceDetails;
