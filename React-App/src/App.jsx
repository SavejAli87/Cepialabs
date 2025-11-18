import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Operator from './components/Operator'
import MapFilter from './components/MapFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Operator />
      <MapFilter />
       
    </>
  )
}

export default App
