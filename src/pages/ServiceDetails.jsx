import React from "react";
import { useParams } from "react-router-dom";
import ServiceOver from "../sections/service-details/ServiceOver";
import WhatWeProvide from "../sections/service-details/WhatWeProvide";
import TVGEffect from "../sections/service-details/TVGEffect";
import ServiceOverview from "../sections/service-details/ServiceOverview";
import ServiceDetailsHero from "../sections/service-details/serviceDetailsHero";
import Testimonials from "../sections/home/Testimonials";

function ServiceDetails() {
  const { serviceId } = useParams();

  const data = {
    "tvg-management": {
      hero: {
        name:"TVG  Management",
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
    "tvg-reporting": {
      hero: {
        name:"TVG Reporting",
        title: "Court Reporting and Legal Videography Services",
        pera: [
          "In the current legal world, capturing the legal record with precision and professionalism is the cornerstone of any successful court case. At TVG Reporting, we provide firms with dependable court reporters who uphold the highest standards of accuracy, neutrality and timeliness. Whether in-person or remote, our experienced reporters deliver transcripts you can trust, allowing attorneys and legal professionals to focus on advocacy without worrying about the details of documentation.",
        ],
        link: "link",
        images: ["image-1.jpg", "image-1.jpg", "image-1.jpg", "image-1.jpg"],
      },
      Overview: {
        title: " Precision That Speaks for Itself",
        pera: [
          "At the heart of every legal proceeding lies an accurate, impartial and timely record. TVG Reporting is dedicated to delivering just that. We partner with law firms and court reporting agencies to provide reliable court reporting and legal videography services across Massachusetts, Rhode Island, Connecticut and through our trusted network nationwide.",
          "Whether you need coverage for a deposition, hearing, arbitration or trial, our experienced reporters and videographers are prepared to capture the record with unmatched professionalism. With TVG Reporting, you get more than a transcript, you get peace of mind.",
        ],
      },
      Provide: {
        pera: "We take over your back office so you can focus on delivering top-tier client service. From scheduling to payroll, we streamline the chaos behind the scenes. ",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Job assignment & coordination" },
          { icon: "/fruit-citrus.png", text: "Real-time and rough draft delivery" },
          { icon: "/fruit-citrus.png", text: "Stenographer support & management" },
          { icon: "/fruit-citrus.png", text: "Exhibit processing & digital backups" }, 
        ],
        tagsRight: [
          { icon: "/fruit-citrus.png", text: "File organization and case tracking" },
          { icon: "/fruit-citrus.png", text: "Deadline reminders & follow-ups" },
          { icon: "/fruit-citrus.png", text: "Proofing and transcript finalization" },
          { icon: "/fruit-citrus.png", text: "Court reporter performance monitoring" },
        ],
      },
      TvgEffect: {
        title:"Service Metrics",
        pera:"Every record matters and we make sure not a single word is missed. From deposition to delivery, we ensure accuracy, speed and professionalism.",
        impactStats: [
          { number: ">1M", label: "Pages transcribed" },
          { number: "60%", label: "Faster payroll cycles" },
          { number: "77%", label: "Fewer missed deadlines" },
        ],
      },
      Overview2: [
        {
          icon: "/calendar-icon.png",
          title: "Comprehensive Deposition Coverage",
          description:
            "On-site or remote, we provide flexible scheduling and full support for every deposition format.",
          classBorder: "md:border-e md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Real-time Access & Drafts",
          description:
            "Get immediate rough drafts and live feeds, enabling attorneys to respond and strategize in the moment.",
          classBorder: "md:border-s md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Professional Transcript Production",
          description:
            "Receive accurate, court-compliant transcripts promptly, in the format you need.",
          classBorder: "md:border-e md:border-t",
        },
        {
          icon: "/calendar-icon.png",
          title: "Stenographers, Interpreters & Videographers",
          description:
            "Certified reporters, interpreters and videographers all coordinated seamlessly to support every case detail.",
          classBorder: "md:border-s md:border-t",
        },
      ],
    },
    "tvg-stream": {
      hero: {
        name:"TVG Stream",
        title: "Legal Video, Trial Presentation and Conference A/V",
        pera: [
          "Remote proceedings have quickly moved from an option to a necessity in today’s evolving legal landscape. But with high stakes and tight schedules, no firm can afford technical hiccups or disjointed setups. TVG Stream ensures your virtual depositions are handled with the same precision and professionalism as in-person proceedings. From multi-party sessions to quick one-on-ones, we bring you secure platforms, real-time support and seamless experiences, so your team can stay focused on what truly matters: making your case heard.",
        ],
        link: "link",
        images: ["image-1.jpg", "image-1.jpg", "image-1.jpg", "image-1.jpg"],
      },
      Overview: {
        title: "Streamlined Tech for High-Stakes Testimony.",
        pera: [
          "In today’s fast-evolving legal environment, remote proceedings aren’t just convenient, they're essential. TVG Stream empowers law firms and court reporting agencies with reliable virtual deposition solutions that prioritize clarity, security and simplicity. From initial setup to post-deposition archiving, we handle the technical side so attorneys can stay fully present and focused on their case.",
          "Whether it’s a high-stakes multi-party deposition or a straightforward one-on-one, our platforms and support are designed for efficiency, professionalism and control at every stage",
        ],
      },
      Provide: {
        pera: "We are your remote deposition experts. We manage the tech so your virtual proceedings run smoothly, securely and professionally. ",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Full remote deposition setup" },
          { icon: "/fruit-citrus.png", text: "Live tech monitoring & troubleshooting" },
          { icon: "/fruit-citrus.png", text: "Platform flexibility (Zoom, WebEx, etc.) " },
          { icon: "/fruit-citrus.png", text: "End-to-end exhibit handling " }, 
        ],
        tagsRight: [
          { icon: "/fruit-citrus.png", text: "Participant coordination & scheduling" },
          { icon: "/fruit-citrus.png", text: "Secure breakout room facilitation" },
          { icon: "/fruit-citrus.png", text: "Screen-sharing & audio testing " },
          { icon: "/fruit-citrus.png", text: "Session recording & storage" },
        ],
      },
      TvgEffect: {
        title:"Service Metrics",
        pera:"Every moment counts and we help you capture it live. From remote depositions to secure streaming, we make virtual proceedings seamless.",
        impactStats: [
          { number: ">1M", label: "Pages transcribed" },
          { number: "60%", label: "Faster payroll cycles" },
          { number: "77%", label: "Fewer missed deadlines" },
        ],
      },
      Overview2: [
        {
          icon: "/calendar-icon.png",
          title: "End-to-End Virtual Deposition Management",
          description:
            "From platform setup to scheduling and permissions, we handle the full environment so you don't have to.",
          classBorder: "md:border-e md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Comprehensive Onboarding & Training",
          description:
            "Step-by-step training for attorneys, clients and witnesses to ensure confidence and tech-readiness.",
          classBorder: "md:border-s md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Real-Time Tech Support",
          description:
            "Live troubleshooting during sessions to resolve connectivity issues or unexpected technical hiccups instantly.",
          classBorder: "md:border-e md:border-t",
        },
        {
          icon: "/calendar-icon.png",
          title: "Secure Exhibit Sharing & Session Archiving",
          description:
            "Confidential, real-time document sharing with complete session recordings and optional transcripts stored securely.",
          classBorder: "md:border-s md:border-t",
        },
      ],
    },
    "tvg-books": {
      hero: {
        name:"TVG Books",
        title: "Bookkeeping and Accounting Services for Legal Professionals",
        pera: [
          "Your business runs on more than just great service, it runs on healthy numbers. Without clear financial visibility, even the most successful agencies can struggle with cash flow, tax prep and long-term planning. That’s why smart bookkeeping and accurate accounting aren’t just nice to have, they’re essential.",
          "At TVG Books, we get the behind-the-scenes pressures that you face. Whether you're chasing down client payments, trying to stay compliant or just need a better handle on your books, our team is here to simplify your financial life."
        ],
        link: "link",
        images: ["image-1.jpg", "image-1.jpg", "image-1.jpg", "image-1.jpg"],
      },
      Overview: {
        title: "Finances You Can Count On.",
        pera: [
          "Running a court reporting or legal support agency means wearing many hats and finances shouldn’t be the one that keeps you up at night. At TVG Books, we specialize in taking the weight of bookkeeping and accounting off your shoulders with services built specifically for your industry. Whether you're managing monthly invoices or prepping for year-end filings, we ensure your numbers stay clean, compliant and in control.",
        ],
      },
      Provide: {
        pera: "We make your finances effortless. With organized bookkeeping, timely reporting and tax-ready numbers, you're always audit-ready.",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Bookkeeping & reconciliation" },
          { icon: "/fruit-citrus.png", text: "Payroll & contractor payments" },
          { icon: "/fruit-citrus.png", text: "Financial reporting & insights" },
          { icon: "/fruit-citrus.png", text: "Invoicing & collections" }, 
        ],
        tagsRight: [
          { icon: "/fruit-citrus.png", text: "Budget tracking & cost analysis" },
          { icon: "/fruit-citrus.png", text: "Expense categorization & management" },
          { icon: "/fruit-citrus.png", text: "Vendor payments & account updates" },
          { icon: "/fruit-citrus.png", text: "Tax document preparation support " },
        ],
      },
      TvgEffect: {
        title:"Service Metrics",
        pera:"Every dollar tells a story and we make sure yours is clean and clear. We manage your books so you can manage your business better. ",
        impactStats: [
          { number: ">1M", label: "Pages transcribed" },
          { number: "60%", label: "Faster payroll cycles" },
          { number: "77%", label: "Fewer missed deadlines" },
        ],
      },
      Overview2: [
        {
          icon: "/calendar-icon.png",
          title: "Bookkeeping (QuickBooks Specialists)",
          description:
            "We handle daily entries, reconcile accounts and track finances using Quick Books, so your books stay accurate, organized and real-time ready.",
          classBorder: "md:border-e md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Client Billing and Invoicing",
          description:
            "We generate accurate invoices, track payments and simplify billing helping you get paid faster and manage cash flow with ease.",
          classBorder: "md:border-s md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Annual Filings and Basic Compliance Support",
          description:
            "From 1099s to annual filings, we prep, manage and ensure compliance making tax season smooth and stress-free.",
          classBorder: "md:border-e md:border-t",
        },
        {
          icon: "/calendar-icon.png",
          title: "Financial Reporting",
          description:
            "Understand your numbers with clear, actionable reports from P&Ls to forecasts, we turn data into decision-making power.",
          classBorder: "md:border-s md:border-t",
        },
      ],
    },
    "tvg-creative": {
      hero: {
        name:"TVG Creative",
        title: "Digital Branding & Marketing for Legal and B2B Professionals",
        pera: [
          "Whether you’re launching a new venture or refreshing your digital presence, how you show up matters. In today’s fast-moving world, first impressions aren’t just visual, they're strategic. That’s where TVG Creative steps in. We provide full-spectrum digital marketing, branding and design services customized for the legal and B2B industries. From law firm websites to startup identity kits, we help you cut through the noise, attract the right audience and communicate your value with clarity and style."
        ],
        link: "link",
        images: ["image-1.jpg", "image-1.jpg", "image-1.jpg", "image-1.jpg"],
      },
      Overview: {
        title: "Built to Stand Out. Designed to Perform.",
        pera: [
          "In a market where attention is currency, your brand’s presence needs to do more than just look good, it needs to resonate, build trust and drive action. At TVG Creative, we blend strategy, design and technology to bring that vision to life. Whether you’re a law firm, reporting agency or professional service business, we help you build a brand that reflects your expertise and moves your business forward.", "From stunning websites to memorable branding and launch-ready identity kits, our creative solutions are built with purpose, customized to your niche, audience and goals.",
        ],
      },
      Provide: {
        pera: "To ensure you stand out in a crowded market. We craft branding and content that reflects your values and gets you noticed.",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Website design & SEO" },
          { icon: "/fruit-citrus.png", text: "Logo & brand identity kits" },
          { icon: "/fruit-citrus.png", text: "Social media content & planning" },
          { icon: "/fruit-citrus.png", text: "Brochures, emailers & digital assets" }, 
        ],
        tagsRight: [
          { icon: "/fruit-citrus.png", text: "Video editing & animation support" },
          { icon: "/fruit-citrus.png", text: "Ad creatives for digital campaigns" },
          { icon: "/fruit-citrus.png", text: "Style guide development" },
          { icon: "/fruit-citrus.png", text: "Event branding and signage design" },
        ],
      },
      TvgEffect: {
        title:"Service Metrics",
        pera:"Every brand deserves to stand out, we help you do it with purpose. We turn your values into visuals and ideas into impact.",
        impactStats: [
          { number: ">1M", label: "Pages transcribed" },
          { number: "60%", label: "Faster payroll cycles" },
          { number: "77%", label: "Fewer missed deadlines" },
        ],
      },
      Overview2: [
        {
          icon: "/calendar-icon.png",
          title: "Website Design & SEO",
          description:
            "We create responsive, fast and conversion-optimized websites that reflect your brand and drive results with SEO built in from the start.",
          classBorder: "md:border-e md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Client Billing and Invoicing",
          description:
            "We generate accurate invoices, track payments and simplify billing helping you get paid faster and manage cash flow with ease.",
          classBorder: "md:border-s md:border-b",
        },
        {
          icon: "/calendar-icon.png",
          title: "Content Marketing Strategy",
          description:
            "Engage your audience with content that educates, inspires and positions you as an industry leader across platforms.",
          classBorder: "md:border-e md:border-t",
        },
        {
          icon: "/calendar-icon.png",
          title: "Startup Identity Kits",
          description:
            "Launch with confidence using complete kits, logos, business cards, email signatures, brochures and more designed for instant credibility.",
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
      <ServiceDetailsHero data={content.hero} />
      <ServiceOver data={content.Overview} />
      <WhatWeProvide data={content.Provide} />
      <TVGEffect data={content.TvgEffect} />
      <ServiceOverview data={content.Overview2} />
      <Testimonials />
    </div>
  );
}

export default ServiceDetails;
