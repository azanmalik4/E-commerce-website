import React from 'react'
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
// import men from '../../assets/men.webp'
import p8 from '../../assets/p8.webp'
const Hero = () => {
  return (
    <div className='hero' >
        <div className="hero-left">
            <h2>Best Deals  !     Best Prices  !</h2>
       
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand-icon" height="60px" />
        </div>
        <p>Collections</p>
        <p>for everyone</p>
         <div className="hero-latest-btn">
                Latest Collection 
                <img src={arrow_icon} alt="arrow-icon" height="30px" />
         </div>
         </div>
        <div className="hero-right">
            <img src={p8} alt="men-icon" height="500px"/>
        </div>
    </div>
  )
}

export default Hero