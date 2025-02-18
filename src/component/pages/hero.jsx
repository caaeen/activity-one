import logo from '../../assets/images/pic-logo.png'
import me from '../../assets/images/me.png'
import Buttons from '../design-component/button.jsx'
function Hero(){
    return(
        <>
            <div className="hero-container">
                <div className="left-container">
                    <img src={me} alt="" />
                </div>
                <div className="right-container">
                    <h1>Christopher Canada</h1>
                    <h2>Graphic Designer & fullstack developer</h2><br />
                    <p>By blending creativity with clear coding, I craft simple, user-friendly solutions that help brands make a strong impression.</p>
                    <div className="button-box">
                        <Buttons btnName="About Me" />
                        <Buttons btnName="Open Cv"/>
                    </div>
                </div>

            </div>
        
        </>
    )
}

export default Hero