import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 

function App() {
  const allFruits = ["Apple", "Banana", "Mango", "Avocado", "Orange"]

  const [fruits, setFruits] = useState(allFruits);

  const filterA = () =>{
    const filtered = allFruits.filter((fruits) => 
    fruits.toLowerCase().startsWith("a")
    );
    setFruits(filtered);
  };

  const restFilter = () => {
    setFruits(allFruits);
  };


  return (
    <>
     <h1>My Favorite Fruits</h1>

     <button onClick={restFilter}>show All</button>
    <div>
      {
        fruits.length === 0 ? (
          <h3>No fruits found</h3>
        ) : (
          fruits.map((fruit, index) => (
            <p key={index}>{fruit}</p>
          ))
        )
      }
    </div>
    </>
  )
}

export default App
