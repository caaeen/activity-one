import { useState } from 'react'
import { useRef } from "react";
import './assets/styles/App.css'
import Upper from './component/design-component/header.jsx'
import Hero from './component/pages/hero.jsx'
import AboutMe from './component/pages/aboutMe.jsx'
function App() {
  const aboutRef = useRef(null);

  return (
    <>
      <div className="parent-class">
        <Upper aboutRef={aboutRef}/>
        <Hero aboutRef={aboutRef}/>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
      </div>
    </>
  )
}

export default App
