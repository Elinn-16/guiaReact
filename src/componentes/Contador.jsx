import { useState } from 'react'


function Contador() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contador</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Mas
        </button>
        <h2> Numero: {count}</h2>
        <button onClick={() => setCount((count) => count - 1)}>
          Menos
        </button>
        
      </div>
      
    </>
  )
}

export default Contador

