import React from 'react'
import Hero from '../sections/home/Hero'
import AboutSection from '../sections/home/AboutSection'
import FeaturedHighlights from '../sections/home/FeaturedHighlights'

function Home() {
  return (
    <div className='home-page'>
      <Hero />
      <AboutSection />
      <FeaturedHighlights />
    </div>
  )
}

export default Home