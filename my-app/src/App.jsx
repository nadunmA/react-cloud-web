import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import NavBar from "./components/NavBar"
import Hero from './components/Hero';
import Analytics from './components/Analytics'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <NavBar />
        <Hero />
        <Analytics /> 
        
      </div>
    </>
  )
}

export default App
