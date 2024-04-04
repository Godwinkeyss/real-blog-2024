import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-wrapper'>
            <img src="./images/hero.jpg" alt="" />
            <div className='hero-info'>
                <span>Gadget</span>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>Sora Blogging Tips February 25, 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
