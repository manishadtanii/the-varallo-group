import React from 'react'
import Button from '../../components/Button'

function ServiceHero() {
  return (
    <div className='service-hero '>
        <div className="container-c">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 h-screen">
              <div className="hero-content max-w-md flex flex-col items-center gap-6 order-2 self-center">
                <h1 className='text-h2 font-parkinsans text-center text-white font-normal capitalize'>Support That Understands You</h1>
                <img src="./s-hero.gif" className=' m-auto' alt="" />
                <p className='text-xl text-center text-white font-manrope'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
                <Button arrowClass={'sdf'} text={'Schedule a Consultation'} color={'text-white'} link={"Schedule a Consultation"}/>
              </div>
              <div className="hero-left order-1 self-start">
                <img src="s-hero-left.gif" className='w-full' alt="" />
                {/* <video src="First.mp4" controls muted autoPlay></video> */}

              </div>
              <div className="hero-left order-3 self-end">
                <img src="s-hero-right.gif" className='w-full' alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceHero