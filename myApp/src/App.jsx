import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './component/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'

 



function App() {

 useEffect(() => {
    AOS.init({
      duration: 3000, 
      easing: 'ease-out-cubic',
      once: true,
      offset: 120, 
    })
  }, [])
  return (
    <>
      <Header/>
    </>
  )
}

export default App
