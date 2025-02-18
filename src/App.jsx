import { useState } from 'react'
import './assets/styles/App.css'
import Upper from './component/design-component/header.jsx'
import Hero from './component/pages/hero.jsx'
import AboutMe from './component/pages/aboutMe.jsx'
function App() {


  return (
    <>
      <div className="parent-class">
        <Upper />
        <Hero />
        <AboutMe />
      </div>
    </>
  )
}

export default App
