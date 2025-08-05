import React from "react";
import { useParams } from "react-router-dom";

function ServiceDetails() {
  const data = {
    "TVG Management": {
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
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
        ],
        tagsRight: [
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
          {
            icon: "./fruit-citrus.png",
            text: "Billing, collections & payroll",
          },
        ],
      },
      "tvg-effect": {
        title: "",
        pera: "",
        impactStats: [
          { number: ">1M", label: "Pages transcribed" },
          { number: "60%", label: "Faster payroll cycles" },
          { number: "77%", label: "Fewer missed deadlines" },
        ],
      },
    },
  };
  const param = useParams()
    const { "service-name": serviceName } = useParams();
  return <div className="">{console.log(serviceName)}</div>;
}

export default ServiceDetails;
