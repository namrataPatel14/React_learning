import React,{useState} from 'react'

function HookObject() {
    const [name, setName] = useState({firstname:'' , lastname:''})
  return (
    <div>
        <input value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}/>
        <input value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
        <h2>{JSON.stringify(name)} Hello</h2>
    </div>
  )
}

export default HookObject