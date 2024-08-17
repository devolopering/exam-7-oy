import React from 'react'
import heroImg from '/HeroImg.png'

function Hero() {
  return (
    <div>
    <div 
      style={{
        backgroundImage: `url(${heroImg})`
      }}
      className="text-white pb-52 pt-20 mb-9 max-w-[1440px] mx-auto  bg-center bg-cover"
    >
      <div className='max-w-[1298px] mx-auto px-5 py-16'>
        <p className='font-hammersmith mb-8 '>/ Start / Categories <br/> / Headphones and Audio for gaming</p>
        <h1 className='font-hammersmith text-5xl  mb-4'>HEADPHONES AND AUDIO <br /> FOR GAMING</h1>
      </div>
    </div>
    </div>
  )
}

export default Hero;
