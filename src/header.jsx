import logo from './assets/pic-logo.png'

function Upper(){
    return(
        <>
            <div className="header-container">
                <div className="pic-logo">
                    <img src={logo} alt="" />
                    <h3>Portfolio</h3>
                </div>
                <div className="nav-link">
                    <a href="">About Me</a>
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