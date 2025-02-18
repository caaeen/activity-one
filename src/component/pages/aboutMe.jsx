import brain from '../../assets/images/brain.png';
import darkbrain from '../../assets/images/darkbrain.png';
import Buttons from "../design-component/button.jsx";

function AboutMe({ isDarkMode }) {
    return (
        <>
            <div className={`about-parent-container ${isDarkMode ? 'darkmode' : 'bluemode'}`}>
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
                                and artistic skills enable me to 
                                deliver unique and impactful solutions.
                            </p>
                            <Buttons btnName="Open CV" />
                        </div>
                    </div>
                    <div className="a-right-container">
                        <img src={isDarkMode ? darkbrain : brain} alt="Brain Illustration" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
