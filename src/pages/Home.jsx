import React from "react";
import Hero from "../sections/home/Hero";
import AboutSection from "../sections/home/AboutSection";
import FeaturedHighlights from "../sections/home/FeaturedHighlights";
import Testimonials from "../sections/home/Testimonials";
import BlogSection from "../sections/home/BlogSection";
import SmartSlider from "../sections/home/SmartSlider";
import WhyChoose from "../sections/home/WhyChoose";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <SmartSlider />
      <WhyChoose />
      <FeaturedHighlights />
      <Testimonials />
      <BlogSection />
    </div>
  );
}

export default Home;
