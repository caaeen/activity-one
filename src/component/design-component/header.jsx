import logo from '../../assets/images/pic-logo.png'
import { useRef } from "react";
function Upper({ aboutRef }){
    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    return(
        <>
            <div className="header-container">
                <div className="pic-logo">
                    <img src={logo} alt="" />
                    <h3>Portfolio</h3>
                </div>
                <div className="nav-link">
                    <a style={{cursor:"pointer"}} onClick={scrollToAbout}>About Me</a>
                    <a href="">Projects</a>
                    <a href="">CV</a>
                    
                </div>
                <div className="contact-box">
                    <a href="">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Upper