// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Socials from './components/Socials'
import ProjectCards from './Components/ProjectCards'
import StackAndTools from './Components/StackAndTools'

function App() {

  return (
    <>
      <Socials />
      <Hero />
      <h1>hello world! I'm Liz McCready</h1>
      <StackAndTools />
      <ProjectCards />
      <Footer />
    </>
  )
}

export default App
