import React ,{useState} from 'react'

function HookNumber() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment </button>
        <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement </button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
    </div>
  )
}

export default HookNumber