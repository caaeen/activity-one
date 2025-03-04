import logo from "../../assets/images/pic-logo.png";

function Upper({ aboutRef, darkmode, isDarkMode, toggleSidebar }) {
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed-header">
        <div className={`header-container ${isDarkMode ? "blackmode" : "lightmode"}`}>
          <div className="pic-logo">
            <img src={logo} alt="" />
            <h3>Portfolio</h3>
          </div>
          <div className="nav-link">
            <a style={{ cursor: "pointer" }} onClick={scrollToAbout}>
              About Me
            </a>
            <p style={{ cursor: "pointer" }}>Projects</p>
            <p style={{ cursor: "pointer" }}>Contact</p>
          </div>
          <div className="contact-box">
            <span style={{ cursor: "pointer" }} onClick={darkmode} className="toggle-dark-mode">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
          <div className="menu-bar" onClick={toggleSidebar}>
            <i style={{cursor: "pointer"}} className="fa-solid fa-bars menubar"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upper;
