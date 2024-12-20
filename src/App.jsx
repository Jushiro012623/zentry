import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/NavBar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lenis from 'lenis'

const App = () => {
    React.useEffect( ()=>{
        const lenis = new Lenis({
            smooth: 0.2,
            multiplier: 5, 
        });
        function raf(time){
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    },[])
  return (
    <main className='ralative min-h-screen w-screen overflow-hidden'>
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />

    </main>
  )
}

export default App