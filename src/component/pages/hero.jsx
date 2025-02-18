import logo from '../../assets/images/pic-logo.png'
import me from '../../assets/images/me.png'
import darkme from '../../assets/images/darkme.png'
import Buttons from '../design-component/button.jsx'
import { useRef, useState } from "react";

function Hero({ aboutRef, currentImage }){
    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      };
      
    return(
        <>
            <div className="hero-container" >
                <div className="left-container">
                    <img src={currentImage} alt="" />
                </div>
                <div className="right-container">
                    <h1>Christopher Canada</h1>
                    <h2>Graphic Designer & Fullstack Developer</h2><br />
                    <p>By blending creativity with clear coding, I craft simple, user-friendly solutions that help brands make a strong impression.</p>
                    <div className="button-box">
                        <Buttons btnName="About Me" onClick={scrollToAbout} />
                        <Buttons btnName="Open Cv" />
                    </div>
                </div>

            </div>
        
        </>
    )
}

export default Hero