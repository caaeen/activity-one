import logo from './assets/pic-logo.png'
import me from './assets/me.png'
import Buttons from './button.jsx'
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
                        <button>About Me</button>
                        <button>Open Cv</button>
                    </div>
                </div>

            </div>
        
        </>
    )
}

export default Hero