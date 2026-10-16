import { useState } from 'react'
import penguinPic from './assets/penguin.jpeg'

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <img src={penguinPic} alt="Penguin" style={{ maxWidth: '30%', height: '100px', display: 'block', margin: '0 auto', border: '2px solid #080808' }} />

      <h1>Kassandra Isabela C. Pasia</h1>
      <p>Web Developer</p>
      <medium>Description</medium>
    
      <h2> Our goal as a web developer is to create reliable, functional, and user-friendly websites and web applications that meet specific business or user needs. We translate ideas and designs into clean, executable code.</h2>
      <h3>Responsibilities:</h3>
      <h4>-Write clean, testable code for web pages and programs.</h4>
    </div>
  )
}
