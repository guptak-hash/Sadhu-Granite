import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Project/>}/>
     </Routes>
    </>
  )
}
import Home from './components/Home'
import Services from './components/Services'
import Project from './components/Project'

export default App
