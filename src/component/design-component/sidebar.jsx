import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = ({ aboutRef, isDarkMode, darkmode, isOpen, toggleSidebar }) => {
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleSidebar(); // Close sidebar after clicking a link
  };

  return (
    <div className={`side-parent-container ${isDarkMode ? "blackmode" : "lightmode"} ${isOpen ? "open" : "closed"}`}>
      <div className="side-link-container">
        <div className="close-tab" onClick={toggleSidebar}>
          <i style={{cursor: "pointer"}} className="fa-solid fa-xmark"></i>
        </div>
        <div className="side-link">
          <p style={{ cursor: "pointer" }} onClick={scrollToAbout}>
            About Me
          </p>
          <p style={{ cursor: "pointer" }}>Projects</p>
          <p style={{ cursor: "pointer" }}>Contact</p>
          <span style={{ cursor: "pointer" }} onClick={darkmode} className="toggle-dark-mode">
            <p>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
