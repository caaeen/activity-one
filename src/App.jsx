import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Upper from './header.jsx'
import Hero from './hero.jsx'
function App() {


  return (
    <>
      <div className="parent-class">
        <Upper />
        <Hero />
      </div>
    </>
  )
}

export default App
