import brain from '../../assets/images/brain.png'
import Buttons from "../design-component/button.jsx"

function AboutMe(){
    return(
        <>
            <div className="about-parent-container" >
                <div className="middle-container">
                    <div className="a-left-container">
                        <h1>About Me</h1>
                        <div className="a-info-box">
                            <p>
                                I am a dedicated programmer with a 
                                passion for developing projects and 
                                engaging in creative endeavors. I am 
                                currently an undergraduate of Information 
                                Technology and my technical expertise 
                                and artistic skills enables me to 
                                deliver unique and impactful solutions.
                            </p>
                            <Buttons btnName="Open CV"/>
                        </div>
                    </div>
                    <div className="a-right-container">
                        <img src={brain} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}


export default AboutMe