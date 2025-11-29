import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement, reset, addByAmount } from './redux/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);


  return (
    <>
     <div style={{padding: 40}}>
        <h1>Redux Counter App</h1>
        <h2>Count: {count}</h2>

        <button onClick={() => dispatch(increment())} style={{marginRight: 10}}>Increment</button>

        <button onClick={() => dispatch(decrement())} style={{ marginRight: 10 }}>
        Decrement
      </button>

        <button onClick={() => dispatch(reset())}>Reset</button>

        <br />

        <input type="number"
         value={amount}
         onChange={(e) => setAmount(Number(e.target.value))}
         style={{ marginRight: 10}}
        /> 

        <button onClick={() => dispatch(addByAmount(amount))}>Add by Amount</button>
     </div>
    </>
  )
}

export default App
