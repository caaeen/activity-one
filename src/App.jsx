import { useState } from 'react'
import { useRef } from "react";
import './assets/styles/App.css'
import Upper from './component/design-component/header.jsx'
import Hero from './component/pages/hero.jsx'
import AboutMe from './component/pages/aboutMe.jsx'
import defaultImage from "./assets/images/me.png";
import darkModeImage from "./assets/images/darkme.png";
function App() {
  const aboutRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(defaultImage);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkmode = () => {
        setCurrentImage(prevImage => prevImage === defaultImage ? darkModeImage : defaultImage);

        setIsDarkMode(prevMode => !prevMode);
    };
  return (
    <>
      <div className="parent-class" id={isDarkMode ? "darkmode" : "lightmode"}>
        <Upper aboutRef={aboutRef} darkmode={darkmode} isDarkMode={isDarkMode}/>
        <Hero aboutRef={aboutRef} currentImage={currentImage}/>
        <div ref={aboutRef}>
          <AboutMe isDarkMode={isDarkMode}/>
        </div>
      </div>
    </>
  )
}

export default App
