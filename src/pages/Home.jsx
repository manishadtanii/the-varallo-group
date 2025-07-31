import React from 'react'
import Hero from '../sections/home/Hero'
import AboutSection from '../sections/home/AboutSection'
import FeaturedHighlights from '../sections/home/FeaturedHighlights'
import Testimonials from '../sections/home/Testimonials'
import BlogSection from '../sections/home/BlogSection'

function Home() {
  return (
    <div className='home-page'>
      <Hero />
      <AboutSection />
      <FeaturedHighlights />
      <Testimonials />
      <BlogSection />
    </div>
  )
}

export default Home