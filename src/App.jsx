import { useState } from 'react'
import Contador from './componentes/Contador' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador/>
    </>
  )
}

export default App
