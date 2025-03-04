import { useState, useRef } from "react";
import "./assets/styles/App.css";
import Upper from "./component/design-component/header.jsx";
import Navbar from "./component/design-component/sidebar.jsx";
import Hero from "./component/pages/hero.jsx";
import AboutMe from "./component/pages/aboutMe.jsx";
import defaultImage from "./assets/images/me.png";
import darkModeImage from "./assets/images/darkme.png";

function App() {
  const aboutRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(defaultImage);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Sidebar state

  const darkmode = () => {
    setCurrentImage((prevImage) =>
      prevImage === defaultImage ? darkModeImage : defaultImage
    );
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="parent-class" id={isDarkMode ? "darkmode" : "lightmode"}>
        <Navbar
          aboutRef={aboutRef}
          darkmode={darkmode}
          isDarkMode={isDarkMode}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
        <Upper
          aboutRef={aboutRef}
          darkmode={darkmode}
          isDarkMode={isDarkMode}
          toggleSidebar={toggleSidebar} // Pass toggle function
        />
        <Hero aboutRef={aboutRef} currentImage={currentImage} />
        <div ref={aboutRef}>
          <AboutMe isDarkMode={isDarkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
